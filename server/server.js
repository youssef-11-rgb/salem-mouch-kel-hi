import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
app.use(cors());

// ==== EDIT THESE TO YOUR EXACT PRICES (CAD) =========================
// You can mirror your real retail for 1-year terms here.
const TLD_PRICING = {
  com: { register: 12.99, renew: 18.49, transfer: 12.49, currency: "CAD" },
  ca:  { register: 9.99,  renew: 15.49, transfer: 9.49,  currency: "CAD" },
  net: { register: 13.49, renew: 19.49, transfer: 12.99, currency: "CAD" },
  org: { register: 12.49, renew: 18.29, transfer: 11.99, currency: "CAD" },

  // add more:
  // io:  { register: 69.99, renew: 79.99, transfer: 69.99, currency: "CAD" },
  // dev: { register: 24.99, renew: 29.99, transfer: 24.99, currency: "CAD" },
};
// ====================================================================

function tldOf(domain) {
  return (domain.split(".").pop() || "").toLowerCase();
}

function buildPrice(domain) {
  const tld = tldOf(domain);
  const base = TLD_PRICING[tld];
  if (!base) {
    // Default/fallback if you didn’t list the TLD above
    return { register: 19.99, renew: 24.99, transfer: 17.99, currency: "CAD", source: "static_fallback" };
  }
  return { ...base, source: "static_table" };
}

/**
 * SUPER rough premium detector (so you don’t show a bad price for likely-premium names).
 * This is optional. If you don’t want it, return pricing directly.
 */
function maybePremium(domain) {
  const name = domain.replace(/\.[^.]+$/, ""); // left of last dot
  const clean = name.replace(/[^a-z0-9]/gi, "");
  const shortBrand = clean.length <= 3; // 1-3 chars often premium
  const hasHyphen = name.includes("-");
  return shortBrand && !hasHyphen;
}

app.get("/api/domain/check", async (req, res) => {
  const domain = String(req.query.domain || "").toLowerCase().trim();
  if (!domain) return res.status(400).json({ error: "domain required" });

  const rdapUrl = `https://rdap.org/domain/${encodeURIComponent(domain)}`;

  try {
    const r = await fetch(rdapUrl, { method: "GET" });

    // Registered (taken)
    if (r.status === 200) {
      return res.json({
        available: false,
        price: null,
        suggestions: suggestAlternatives(domain),
        source: "rdap.org",
      });
    }

    // Likely available
    if (r.status === 404) {
      // If you want to always show a price, comment out this premium block
      if (maybePremium(domain)) {
        return res.json({
          available: true,
          price: null, // don’t show a wrong price for possible premium
          message: "This might be a premium domain. Contact us for exact pricing.",
          suggestions: [],
          source: "rdap.org",
        });
      }

      return res.json({
        available: true,
        price: formatForFrontend(buildPrice(domain)), // <- shows register price by default
        // If you want the frontend to display renew/transfer too,
        // you can also return the full breakdown:
        breakdown: buildPrice(domain),
        suggestions: [],
        source: "rdap.org",
      });
    }

    // Special handling for .ca via CIRA RDAP
    if (domain.endsWith(".ca")) {
      const ciraUrl = `https://rdap.ca/domain/${encodeURIComponent(domain)}`;
      const r2 = await fetch(ciraUrl, { method: "GET" });
      if (r2.status === 200) {
        return res.json({
          available: false,
          price: null,
          suggestions: suggestAlternatives(domain),
          source: "rdap.ca",
        });
      } else if (r2.status === 404) {
        if (maybePremium(domain)) {
          return res.json({
            available: true,
            price: null,
            message: "This might be a premium .CA domain. Contact us for exact pricing.",
            suggestions: [],
            source: "rdap.ca",
          });
        }
        return res.json({
          available: true,
          price: formatForFrontend(buildPrice(domain)),
          breakdown: buildPrice(domain),
          suggestions: [],
          source: "rdap.ca",
        });
      }
      const txt = await r2.text().catch(() => "");
      return res.status(502).json({ error: "rdap_ca_unexpected_status", status: r2.status, details: txt });
    }

    // Unknown status
    const text = await r.text().catch(() => "");
    return res.status(502).json({ error: "rdap_unexpected_status", status: r.status, details: text });
  } catch (e) {
    console.error("RDAP lookup error:", e);
    return res.status(500).json({ error: "lookup_failed", message: String(e) });
  }
});

// What your current frontend expects: { amount, currency }
function formatForFrontend(breakdown) {
  return {
    amount: breakdown.register,
    currency: breakdown.currency || "CAD",
  };
}

function suggestAlternatives(domain) {
  const base = domain.replace(/\.[^.]+$/, "");
  const ext  = domain.slice(base.length); // ".ca", ".com", ...
  const swap = ext === ".ca" ? ".com" : ".ca";
  return [
    `${base}-canada${ext}`,
    `${base}-online.com`,
    `${base}${swap}`,
  ];
}

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`API listening on http://localhost:${PORT}`);
});
