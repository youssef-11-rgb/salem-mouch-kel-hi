import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Upload, Mail, MapPin, Loader2, CheckCircle2, XCircle } from 'lucide-react';

const Maple = ({ size = 24, className = "" }) => (
  <i className={`fab fa-canadian-maple-leaf ${className}`} style={{ fontSize: size }}></i>
);

// --- Small helper: debounce a value ---
function useDebouncedValue(value, delay = 600) {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const t = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(t);
  }, [value, delay]);
  return debounced;
}

// --- Basic domain syntax check (kept minimal; not opinionated) ---
const isLikelyDomain = (s) => {
  if (!s) return false;
  const v = s.trim().toLowerCase()
    .replace(/^https?:\/\//, '')
    .replace(/^www\./, '');
  // Allow punycode/idn labels; basic ASCII check for UX
  const re = /^(?!-)([a-z0-9-]{1,63}\.)+[a-z]{2,}$/;
  return re.test(v);
};

const normalizeDomain = (s) => s.trim().toLowerCase().replace(/^https?:\/\//, '').replace(/^www\./, '');

const Contact = () => {
  const [formData, setFormData] = useState({
    businessName: '',
    businessType: '',
    email: '',
    phone: '',
    address: '',
    hasDomain: false,
    domainName: '',
    needsLogoDesign: false,
    logoFile: null
  });

  // --- Domain check UI state ---
  const [domainState, setDomainState] = useState({
    status: 'idle', // idle | checking | available | unavailable | error
    price: null, // e.g., { amount: 12.99, currency: 'CAD' }
    message: '',
    suggestions: []
  });

  const debouncedDomain = useDebouncedValue(formData.domainName);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    if (name === 'domainName') {
      setDomainState((s) => ({ ...s, status: value ? 'checking' : 'idle', message: '', price: null }));
    }
  };

  const handleDomainChoice = (choice) => {
    setFormData((prev) => ({ ...prev, hasDomain: choice, domainName: choice === true ? '' : prev.domainName }));
    // If they say they already have a domain, clear any check state
    if (choice === true) {
      setDomainState({ status: 'idle', price: null, message: '', suggestions: [] });
    }
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file && file.size <= 5 * 1024 * 1024) {
      setFormData((prev) => ({ ...prev, logoFile: file }));
    } else {
      alert('File size must be under 5MB');
    }
  };

  // --- Auto-check WHOIS/availability when user types ---
  useEffect(() => {
    const run = async () => {
      const raw = debouncedDomain?.trim();
      if (!raw || formData.hasDomain === true) return;

      const domain = normalizeDomain(raw);
      if (!isLikelyDomain(domain)) {
        setDomainState({ status: 'idle', price: null, message: '', suggestions: [] });
        return;
      }

      setDomainState((s) => ({ ...s, status: 'checking', message: '', price: null }));
      try {
        // Backend endpoint you implement (examples below)
        const res = await fetch(`/api/domain/check?domain=${encodeURIComponent(domain)}`);
        if (!res.ok) throw new Error('Network error');
        const data = await res.json();
        // Expected shape: { available: boolean, price: { amount: number, currency: string } | null, suggestions?: string[], message?: string }
        if (data.available) {
          setDomainState({ status: 'available', price: data.price || null, message: data.message || '', suggestions: data.suggestions || [] });
        } else {
          setDomainState({ status: 'unavailable', price: null, message: data.message || '', suggestions: data.suggestions || [] });
        }
      } catch (err) {
        setDomainState({ status: 'error', price: null, message: 'Could not check domain right now. Please try again.', suggestions: [] });
      }
    };
    run();
  }, [debouncedDomain, formData.hasDomain]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.businessName || !formData.businessType || !formData.email || !formData.address ) {
      alert('Please fill in all required fields');
      return;
    }

    if (formData.hasDomain !== true) {
      const d = normalizeDomain(formData.domainName);
      if (!isLikelyDomain(d)) {
        alert('Please enter a valid domain (e.g., yourbusiness.com)');
        return;
      }
      if (domainState.status === 'checking') {
        alert('Please wait for the domain check to complete.');
        return;
      }
      if (domainState.status === 'unavailable') {
        alert('That domain is already taken. Please try another option.');
        return;
      }
    }

    console.log('Form submitted:', formData);
    alert('Thanks for your interest! We will contact you within 24 hours.');
    setFormData({
      businessName: '',
      businessType: '',
      email: '',
      phone: '',
      address: '',
      hasDomain: null,
      domainName: '',
      needsLogoDesign: false,
      logoFile: null
    });
    setDomainState({ status: 'idle', price: null, message: '', suggestions: [] });
  };

  // --- Small UI pills/messages keeping the same layout look & feel ---
  const DomainStatus = () => {
    if (formData.hasDomain === true || !formData.domainName) return null;

    const base = 'mt-2 inline-flex items-center text-sm font-medium rounded-md px-3 py-2 border';

    if (domainState.status === 'checking') {
      return (
        <div className={`${base} border-blue-200 bg-blue-50 text-blue-700`}> 
          <Loader2 className="w-4 h-4 mr-2 animate-spin" /> Checking availability…
        </div>
      );
    }

    if (domainState.status === 'available') {
      return (
        <div className={`${base} border-green-200 bg-green-50 text-green-700`}> 
          <CheckCircle2 className="w-4 h-4 mr-2" />
          Available{domainState.price ? ` — $${domainState.price.amount}/${domainState.price.currency?.toUpperCase?.() || 'CAD'} first year` : ''}
        </div>
      );
    }

    if (domainState.status === 'unavailable') {
      return (
        <div className="space-y-2">
          <div className={`${base} border-rose-200 bg-rose-50 text-rose-700`}> 
            <XCircle className="w-4 h-4 mr-2" /> Not available — already taken
          </div>
          {domainState.suggestions?.length ? (
            <div className="text-sm text-gray-600">
              Try: {domainState.suggestions.slice(0, 3).map((sug, i) => (
                <button
                  key={sug}
                  type="button"
                  onClick={() => setFormData((p) => ({ ...p, domainName: sug }))}
                  className="ml-1 underline hover:no-underline hover:text-blue-700"
                >
                  {i ? `, ${sug}` : sug}
                </button>
              ))}
            </div>
          ) : null}
        </div>
      );
    }

    if (domainState.status === 'error') {
      return (
        <div className={`${base} border-amber-200 bg-amber-50 text-amber-700`}> 
          Could not check right now.
        </div>
      );
    }

    return (
      <p className="text-sm text-gray-500 mt-2">Don't worry if it's taken — we'll help you find alternatives</p>
    );
  };

  return (
    <div className="min-h-screen bg-white">
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-blue-800 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 opacity-10 pointer-events-none">
          <Maple size={300} className="text-white" />
        </div>
        <div className="absolute bottom-0 right-0 opacity-10 pointer-events-none">
          <Maple size={300} className="text-white" />
        </div>
        <div className="max-w-4xl mx-auto relative">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Maple size={32} className="text-red-500 mr-2" />
              <span className="text-3xl font-bold text-blue-400">NorthSites</span>
              <span className="text-gray-300 ml-1">.ca</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Tell Us About Your Business</h1>
            <p className="text-xl text-blue-100">Provide your business details and logo. We'll use this to customize your website.</p>
          </div>

          <div className="bg-white rounded-2xl p-8 md:p-12 text-gray-900 shadow-2xl relative z-10">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-700">
                  Business Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleInputChange}
                  placeholder="e.g., Richardson Solutions"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-700">
                  What type of business are you? <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="businessType"
                  value={formData.businessType}
                  onChange={handleInputChange}
                  placeholder="Describe your business and what type of website you need. For example: We're a plumbing company serving residential customers, and we need a website to showcase our services and get more leads."
                  rows={5}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition resize-none"
                  required
                />
                <p className="text-sm text-gray-500 mt-2">At least 10 characters</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-700">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="info@yourbusiness.com"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-700">
                    Phone Number (Optional)
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="(555) 123-4567"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-700">
                  Business Address <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  placeholder="123 Main St, City, State 12345"
                  rows={3}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition resize-none"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-4 text-gray-700">
                  Do you already own a domain for your business? <span className="text-red-500">*</span>
                </label>
                <div className="grid md:grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={() => handleDomainChoice(false)}
                    className={`p-6 rounded-lg border-2 transition-all ${
                      formData.hasDomain === false
                        ? 'border-blue-600 bg-blue-50'
                        : 'border-gray-300 bg-white hover:border-blue-400'
                    }`}
                  >
                    <div className="font-semibold text-lg mb-1 text-gray-900">No, I need one</div>
                    <div className="text-sm text-gray-600">We'll register it for you</div>
                  </button>
                  <button
                    type="button"
                    onClick={() => handleDomainChoice(true)}
                    className={`p-6 rounded-lg border-2 transition-all ${
                      formData.hasDomain === true
                        ? 'border-blue-600 bg-blue-50'
                        : 'border-gray-300 bg-white hover:border-blue-400'
                    }`}
                  >
                    <div className="font-semibold text-lg mb-1 text-gray-900">Yes, I have one</div>
                    <div className="text-sm text-gray-600">I already own my domain</div>
                  </button>
                </div>
              </div>

              {formData.hasDomain !== true && (
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-700">
                    Preferred Domain Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="domainName"
                    value={formData.domainName}
                    onChange={handleInputChange}
                    placeholder="yourbusiness.com"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition"
                    autoComplete="off"
                  />
                  {/* Status pill / helper (keeps same visual language) */}
                  <div className="pt-1">
                    <DomainStatus />
                  </div>
                </div>
              )}

              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-700">
                  Company Logo (Optional)
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center bg-gray-50 hover:border-blue-400 hover:bg-blue-50 transition-colors">
                  <input
                    type="file"
                    id="logo-upload"
                    accept=".png,.jpg,.jpeg,.svg"
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                  <label htmlFor="logo-upload" className="cursor-pointer block">
                    <Upload className="w-12 h-12 mx-auto mb-4 text-gray-500" />
                    <div className="text-lg font-semibold mb-1 text-gray-900">
                      {formData.logoFile ? formData.logoFile.name : 'Click to upload your logo'}
                    </div>
                    <div className="text-sm text-gray-500">PNG, JPG or SVG (max 5MB)</div>
                  </label>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <label className="flex items-start cursor-pointer">
                  <input
                    type="checkbox"
                    name="needsLogoDesign"
                    checked={formData.needsLogoDesign}
                    onChange={handleInputChange}
                    className="mt-1 w-5 h-5 bg-white border-gray-300 rounded focus:ring-blue-600 focus:ring-2"
                  />
                  <div className="ml-3">
                    <div className="font-semibold text-lg text-gray-900">Need a professional logo design?</div>
                    <div className="text-sm text-gray-600 mt-1">
                      Add custom logo design for a one-time fee of $299
                    </div>
                  </div>
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-700 hover:scale-105 transition-all shadow-lg"
              >
                Continue to Pricing
              </button>

              <p className="text-sm text-gray-600 text-center">
                No credit card required • 100% Canadian • Response within 24 hours
              </p>
            </form>
          </div>

          <div className="mt-12 text-center text-blue-100">
            <p className="text-lg mb-4">Have questions? Email us directly:</p>
            <a href="mailto:info@northsites.ca" className="text-2xl font-bold text-white hover:underline">
              info@northsites.ca
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
            <p className="text-xl text-gray-600">Multiple ways to reach our Canadian team</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Email Us</h3>
              <p className="text-gray-600 mb-4">Get a response within 24 hours</p>
              <a href="mailto:info@northsites.ca" className="text-blue-600 font-semibold hover:underline">
                info@northsites.ca
              </a>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="text-purple-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Our Location</h3>
              <p className="text-gray-600 mb-4">Serving all of Canada</p>
              <div className="flex items-center justify-center">
                <Maple size={20} className="text-red-500 mr-2" />
                <span className="text-purple-600 font-semibold">Coast to Coast</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

/* ------------------------------------------------------------------
  Example backend endpoint (/api/domain/check)
  - If you use Next.js App Router, place this in app/api/domain/check/route.ts
  - If using Pages Router, create pages/api/domain/check.ts
  - Replace the pseudo-code that calls your registrar (WHC, OpenSRS, etc.)
-------------------------------------------------------------------*/

// -------- Next.js App Router (TypeScript) example --------
// export async function GET(req: Request) {
//   const { searchParams } = new URL(req.url);
//   const domain = (searchParams.get('domain') || '').toLowerCase();
//   if (!domain) return new Response(JSON.stringify({ error: 'domain required' }), { status: 400 });
//
//   // TODO: Call your registrar API here. Example shapes only:
//   // const rsp = await fetch('https://api.your-registrar.tld/check', { /* auth headers */ });
//   // const json = await rsp.json();
//   // return new Response(JSON.stringify({ available: json.available, price: json.price, suggestions: json.suggestions }), { status: 200 });
//
//   // Temporary mock for local testing
//   const taken = ['northsites.ca', 'example.com'];
//   const available = !taken.includes(domain);
//   const price = available ? { amount: 12.99, currency: 'CAD' } : null;
//   const suggestions = available ? [] : [`${domain.split('.')[0]}-canada.com`, `${domain.split('.')[0]}-ca.ca`];
//   return new Response(JSON.stringify({ available, price, suggestions }), { status: 200, headers: { 'content-type': 'application/json' } });
// }
