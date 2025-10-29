import React from 'react';

// Placeholder icons - you can replace these with actual logos
const TrustLogo = ({ children }) => (
  <div className="flex items-center justify-center h-12 text-gray-400 font-semibold text-lg grayscale o-60">
    {children}
  </div>
);

const HomeTrustBar = () => {
  return (
    <section className="bg-cream-white py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-4">
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
            Secured & Powered By The Best
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <TrustLogo>
            WordPress
          </TrustLogo>
          <TrustLogo>
            Stripe
          </TrustLogo>
          <TrustLogo>
            Cloudflare
          </TrustLogo>
          <TrustLogo>
            SSL Secure
          </TrustLogo>
        </div>
      </div>
    </section>
  );
};

// This is the line that was likely missing
export default HomeTrustBar;

