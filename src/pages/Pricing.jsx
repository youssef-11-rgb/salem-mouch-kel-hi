import React, { useState } from 'react';
import { Check, X } from 'lucide-react';

const plans = [
  {
    id: 'starter',
    name: 'Starter',
    description: 'Perfect for small businesses and startups',
    monthlyPrice: 79,
    yearlyPrice: 804,
    setupFee: 0,
    features: [
      { name: 'Up to 5 pages', included: true },
      { name: 'Basic SEO optimization', included: true },
      { name: 'Mobile responsive design', included: true },
      { name: 'Contact form', included: true },
      { name: 'Social media integration', included: true },
      { name: 'Google Analytics', included: true },
      { name: 'Content management system', included: false },
      { name: 'E-commerce functionality', included: false },
      { name: 'Custom domain name', included: false },
    ],
    popular: false,
    color: 'blue',
  },
  {
    id: 'professional',
    name: 'Professional',
    description: 'Ideal for growing businesses with more needs',
    monthlyPrice: 149,
    yearlyPrice: 1524,
    setupFee: 299,
    features: [
      { name: 'Up to 10 pages', included: true },
      { name: 'Advanced SEO optimization', included: true },
      { name: 'Mobile responsive design', included: true },
      { name: 'Contact form with file uploads', included: true },
      { name: 'Social media integration', included: true },
      { name: 'Google Analytics & Tag Manager', included: true },
      { name: 'Content management system', included: true },
      { name: 'Basic e-commerce (up to 20 products)', included: true },
      { name: 'Custom domain name', included: true },
      { name: 'Email marketing integration', included: false },
      { name: 'Customer login portal', included: false },
    ],
    popular: true,
    color: 'purple',
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    description: 'For established businesses requiring advanced solutions',
    monthlyPrice: 189,
    yearlyPrice: 1930,
    setupFee: 499,
    features: [
      { name: 'Unlimited pages', included: true },
      { name: 'Premium SEO optimization', included: true },
      { name: 'Mobile responsive design', included: true },
      { name: 'Advanced forms with logic', included: true },
      { name: 'Social media integration', included: true },
      { name: 'Complete analytics suite', included: true },
      { name: 'Advanced content management', included: true },
      { name: 'Full e-commerce functionality', included: true },
      { name: 'Custom domain name', included: true },
      { name: 'Email marketing integration', included: true },
      { name: 'Customer login portal', included: true },
      { name: 'Custom functionality', included: true },
    ],
    popular: false,
    color: 'green',
  },
];

const PricingCard = ({ plan, isYearly }) => {
  const price = isYearly ? plan.yearlyPrice : plan.monthlyPrice;
  const period = isYearly ? '/year' : '/month';

  return (
    <div 
      className={`relative overflow-hidden bg-white rounded-xl shadow-lg border ${
        plan.popular ? 'border-2 border-purple-500' : 'border-gray-200'
      }`}
    >
      {plan.popular && (
        <div className="popular-badge bg-purple-600 text-white text-xs font-bold uppercase px-3 py-1 rounded-full shadow-lg">
          Most Popular
        </div>
      )}
      
      <div className="p-6">
        <h3 className={`text-2xl font-bold ${plan.popular ? 'text-purple-600' : 'text-gray-900'}`}>{plan.name}</h3>
        <p className="text-gray-500 mt-2 h-12">{plan.description}</p>
        
        <div className="mt-4">
          <span className="text-4xl font-bold text-gray-900">${price}</span>
          <span className="text-gray-500 ml-1">{period}</span>
          {isYearly && <span className="ml-2 text-sm text-green-600">(Save ${(plan.monthlyPrice * 12) - plan.yearlyPrice})</span>}
        </div>
        
        {plan.setupFee > 0 && (
          <p className="mt-1 text-sm text-gray-500">
            + ${plan.setupFee} one-time setup fee
          </p>
        )}

        <button 
          className={`mt-6 w-full py-2 px-4 rounded-lg font-medium transition-colors ${
            plan.popular
              ? 'bg-purple-600 text-white hover:bg-purple-700'
              : 'bg-gray-800 text-white hover:bg-gray-700'
          }`}
        >
          Get Started
        </button>

        <div className="mt-6">
          <h4 className="font-medium text-gray-900 mb-3">Features</h4>
          <ul className="space-y-2">
            {plan.features.map((feature, idx) => (
              <li key={idx} className="flex items-start">
                {feature.included ? (
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                ) : (
                  <X className="h-5 w-5 text-red-400 mr-2 flex-shrink-0" />
                )}
                <span className={`text-sm ${feature.included ? 'text-gray-700' : 'text-gray-400'}`}>
                  {feature.name}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <div className="pricing-container">
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl mb-4">
              Find the Perfect Plan for Your Business
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
              Simple, transparent pricing. All plans include enterprise-grade hosting, standard SSL security, and our dedicated support.
            </p>
          </div>
            
          <div className="flex items-center justify-center mt-8 gap-4">
            <span className={`text-lg ${isYearly ? 'text-gray-600' : 'font-bold text-blue-600'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className="relative w-16 h-8 bg-blue-600 rounded-full transition"
            >
              <div className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full transition-transform ${
                isYearly ? 'transform translate-x-8' : ''
              }`}></div>
            </button>
            <span className={`text-lg ${isYearly ? 'font-bold text-blue-600' : 'text-gray-600'}`}>
              Yearly
            </span>
            {isYearly && <span className="text-sm text-green-600 font-medium ml-2">(Save 15%)</span>}
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <PricingCard key={plan.id} plan={plan} isYearly={isYearly} />
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .popular-badge {
          position: absolute;
          top: -14px;
          right: 20px;
          transform: rotate(10deg);
        }
      `}</style>
    </div>
  );
};

export default Pricing;