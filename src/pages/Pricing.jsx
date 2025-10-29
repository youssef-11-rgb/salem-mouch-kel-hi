import React, { useState } from 'react';
import { Check, X, Shield, Zap, TrendingUp, Award, Star, ArrowRight, Clock, Users, Sparkles, Info, Mail } from 'lucide-react';

const Maple = ({ size = 24, className = "" }) => (
  <i className={`fab fa-canadian-maple-leaf ${className}`} style={{fontSize: size}}></i>
);

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');
  const [hoveredEmail, setHoveredEmail] = useState(null);

  const plans = [
    {
      id: 'starter',
      name: 'Starter',
      priceMonthly: 79,
      priceYearly: 804,
      regularMonthly: 99,
      regularYearly: 1020,
      setupFee: 0,
      description: 'Perfect for small businesses and startups',
      emailAccounts: 3,
      features: [
        { name: 'Up to 5 pages', included: true },
        { name: '3 Business email accounts', included: true, hasInfo: true },
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
      savings: 20,
      bestFor: 'Local shops & service providers'
    },
    {
      id: 'professional',
      name: 'Professional',
      priceMonthly: 149,
      priceYearly: 1524,
      regularMonthly: 199,
      regularYearly: 2040,
      setupFee: 0,
      description: 'Ideal for growing businesses with more needs',
      emailAccounts: 10,
      features: [
        { name: 'Up to 10 pages', included: true },
        { name: '10 Business email accounts', included: true, hasInfo: true },
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
      savings: 50,
      bestFor: 'Restaurants, salons & retail stores'
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      priceMonthly: 189,
      priceYearly: 1930,
      regularMonthly: 249,
      regularYearly: 2580,
      setupFee: 0,
      description: 'For established businesses requiring advanced solutions',
      emailAccounts: 'Unlimited',
      features: [
        { name: 'Unlimited pages', included: true },
        { name: 'Unlimited Business email accounts', included: true, hasInfo: true },
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
      savings: 60,
      bestFor: 'E-commerce & professional services'
    }
  ];

  const getPrice = (plan) => {
    return billingCycle === 'monthly' ? plan.priceMonthly : plan.priceYearly;
  };

  const getSavings = (plan) => {
    return (plan.priceMonthly * 12) - plan.priceYearly;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden">
        <div className="absolute top-10 right-10 opacity-5">
          <Maple size={200} className="text-blue-600" />
        </div>
        <div className="absolute bottom-10 left-10 opacity-5">
          <Maple size={150} className="text-purple-500" />
        </div>

        <div className="max-w-7xl mx-auto text-center relative">
          <div className="inline-flex items-center bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Sparkles size={16} className="mr-2" />
            Limited Time: Save up to $60/month + No Setup Fees
          </div>

          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6">
            Simple Pricing.<br />
            <span className="text-blue-600">Powerful Results.</span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
            <span className="font-bold text-gray-900">Everything in one place:</span> We build your website, host it on premium Canadian servers, set up your professional business email, and provide ongoing support. No juggling multiple providers or hidden fees.
          </p>
          
          <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-purple-100 border-2 border-blue-300 px-6 py-3 rounded-xl mb-8">
            <Shield className="text-blue-600 mr-2" size={20} />
            <span className="font-bold text-gray-900">Website + Hosting + Business Email =</span>
            <span className="ml-2 text-blue-600 font-bold">One Simple Price</span>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-6 mb-12">
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm">
              <Shield className="text-green-600" size={20} />
              <span className="text-sm font-semibold text-gray-700">SSL Secured</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm">
              <Clock className="text-blue-600" size={20} />
              <span className="text-sm font-semibold text-gray-700">7-Day Launch</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm">
              <Users className="text-purple-600" size={20} />
              <span className="text-sm font-semibold text-gray-700">200+ Happy Clients</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm">
              <Maple size={20} className="text-red-600" />
              <span className="text-sm font-semibold text-gray-700">100% Canadian</span>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center mb-12">
            <div className="relative bg-white rounded-full p-1 flex shadow-lg border-2 border-gray-200">
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`${
                  billingCycle === 'monthly'
                    ? 'bg-blue-600 text-white'
                    : 'bg-transparent text-gray-700'
                } relative w-32 rounded-full py-3 text-sm font-bold transition-all duration-300`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle('yearly')}
                className={`${
                  billingCycle === 'yearly'
                    ? 'bg-blue-600 text-white'
                    : 'bg-transparent text-gray-700'
                } relative w-32 rounded-full py-3 text-sm font-bold transition-all duration-300`}
              >
                Yearly
                <span className="absolute -top-3 -right-3 bg-green-500 text-white text-xs px-2 py-1 rounded-full font-bold shadow-lg">
                  Save 15%
                </span>
              </button>
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-3 mb-16">
            {plans.map((plan) => (
              <div 
                key={plan.id}
                className={`relative overflow-hidden bg-white rounded-2xl shadow-xl border-2 transition-all duration-300 hover:scale-105 ${
                  plan.popular ? 'border-purple-500 shadow-2xl' : 'border-gray-200'
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-purple-600 to-purple-700 text-white text-xs font-bold uppercase px-4 py-2 rounded-bl-xl shadow-lg">
                    ⭐ Most Popular
                  </div>
                )}
                
                <div className="p-8">
                  <div className="mb-6">
                    <h3 className={`text-3xl font-bold mb-2 ${plan.popular ? 'text-purple-600' : 'text-gray-900'}`}>
                      {plan.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-2">{plan.description}</p>
                    <p className="text-xs text-blue-600 font-semibold">✓ Best for: {plan.bestFor}</p>
                    
                    <div className="mt-3 flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-lg px-3 py-2 relative">
                      <Zap className="text-blue-600 flex-shrink-0" size={16} />
                      <span className="text-sm font-bold text-gray-900">
                        {typeof plan.emailAccounts === 'number' ? plan.emailAccounts : plan.emailAccounts} Business Email{typeof plan.emailAccounts === 'number' && plan.emailAccounts > 1 ? 's' : ''}
                      </span>
                      <div 
                        className="relative"
                        onMouseEnter={() => setHoveredEmail(plan.id)}
                        onMouseLeave={() => setHoveredEmail(null)}
                      >
                        <Info className="text-blue-600 cursor-help" size={16} />
                        {hoveredEmail === plan.id && (
                          <div className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 w-64 bg-gray-900 text-white text-xs rounded-lg px-3 py-2 shadow-xl z-10">
                            <div className="font-semibold mb-1">Email Storage: 1GB per account</div>
                            <div className="text-gray-300">Need more storage? Contact us for custom solutions.</div>
                            <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-1">
                              <div className="border-4 border-transparent border-t-gray-900"></div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <div className="flex items-baseline justify-center mb-2">
                      <span className="text-2xl text-gray-400 line-through mr-2">
                        ${billingCycle === 'monthly' ? plan.regularMonthly : plan.regularYearly}
                      </span>
                      <span className="text-sm text-green-600 font-bold bg-green-50 px-2 py-1 rounded">
                        Save ${plan.savings}/mo
                      </span>
                    </div>
                    <div className="text-center">
                      <span className="text-5xl font-extrabold text-gray-900">
                        ${getPrice(plan)}
                      </span>
                      <span className="text-gray-600 text-lg ml-2">
                        /{billingCycle === 'monthly' ? 'month' : 'year'}
                      </span>
                    </div>
                    {billingCycle === 'monthly' && (
                      <div className="text-center text-sm text-gray-600 mt-2">
                        Just ${(getPrice(plan) / 30).toFixed(2)}/day ☕
                      </div>
                    )}
                    {billingCycle === 'yearly' && (
                      <div className="text-center text-sm text-green-600 font-bold mt-2">
                        💰 Save ${getSavings(plan)} per year!
                      </div>
                    )}
                  </div>
                  
                  <div className="mb-6 bg-gradient-to-r from-green-50 to-blue-50 border-2 border-green-200 rounded-xl px-4 py-3">
                    <p className="text-xs text-center font-bold text-gray-800">
                      ✓ $0 Setup Fee • 30-Day Money-Back • Cancel Anytime
                    </p>
                  </div>

                  <button 
                    onClick={() => {
                      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
                    }}
                    className={`w-full py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center group ${
                      plan.popular
                        ? 'bg-gradient-to-r from-purple-600 to-purple-700 text-white hover:from-purple-700 hover:to-purple-800'
                        : 'bg-gradient-to-r from-gray-800 to-gray-900 text-white hover:from-gray-900 hover:to-black'
                    }`}
                  >
                    Get Started Now
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                  </button>

                  <div className="mt-8">
                    <h4 className="font-bold text-gray-900 mb-4 text-lg">Everything Included:</h4>
                    <ul className="space-y-3">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          {feature.included ? (
                            <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                          ) : (
                            <X className="h-5 w-5 text-gray-300 mr-3 flex-shrink-0 mt-0.5" />
                          )}
                          <span className={`text-sm ${feature.included ? 'text-gray-700 font-medium' : 'text-gray-400'}`}>
                            {feature.name}
                          </span>
                          {feature.hasInfo && (
                            <div 
                              className="relative ml-1 group"
                              onMouseEnter={() => setHoveredEmail(`${plan.id}-${idx}`)}
                              onMouseLeave={() => setHoveredEmail(null)}
                            >
                              <Info className="text-blue-600 cursor-help flex-shrink-0" size={14} />
                              {hoveredEmail === `${plan.id}-${idx}` && (
                                <div className="fixed ml-4 w-64 bg-gray-900 text-white text-xs rounded-lg px-4 py-3 shadow-2xl z-50 border border-gray-700">
                                  <div className="font-semibold mb-1">📧 Email Storage: 1GB per account</div>
                                  <div className="text-gray-300">Need more storage? Contact us for custom pricing.</div>
                                  <div className="absolute -left-2 top-3">
                                    <div className="border-8 border-transparent border-r-gray-900"></div>
                                  </div>
                                </div>
                              )}
                            </div>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Value Props */}
          <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8 mb-8 border-2 border-green-200">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">🎉 Included FREE in Every Plan (Value: $300+/year)</h3>
              <p className="text-gray-600">Stop paying multiple companies. We bundle everything you need.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-md border-2 border-blue-200">
                <div className="flex items-center justify-between mb-3">
                  <Shield className="text-blue-600" size={32} />
                  <span className="text-xs font-bold text-green-600 bg-green-100 px-2 py-1 rounded">$120/yr value</span>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Premium Hosting</h4>
                <p className="text-sm text-gray-600">Fast Canadian servers, SSL certificate, 99.9% uptime, daily backups</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md border-2 border-purple-200">
                <div className="flex items-center justify-between mb-3">
                  <Zap className="text-purple-600" size={32} />
                  <span className="text-xs font-bold text-green-600 bg-green-100 px-2 py-1 rounded">$100/yr value</span>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Business Email</h4>
                <p className="text-sm text-gray-600">Professional @yourcompany.ca addresses, spam protection, mobile access</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md border-2 border-green-200">
                <div className="flex items-center justify-between mb-3">
                  <Award className="text-green-600" size={32} />
                  <span className="text-xs font-bold text-green-600 bg-green-100 px-2 py-1 rounded">$60/yr value</span>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Domain Management</h4>
                <p className="text-sm text-gray-600">We handle renewals, DNS setup, and all technical configuration</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md border-2 border-orange-200">
                <div className="flex items-center justify-between mb-3">
                  <TrendingUp className="text-orange-600" size={32} />
                  <span className="text-xs font-bold text-green-600 bg-green-100 px-2 py-1 rounded">$240/yr value</span>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">24/7 Support</h4>
                <p className="text-sm text-gray-600">Canadian team, unlimited updates, security patches, maintenance</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 md:p-12 text-white mb-16">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold mb-3">Compare: What Others Charge Separately</h3>
              <p className="text-blue-100">Most web services make you buy hosting and email separately. We include everything.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white bg-opacity-10 p-6 rounded-xl border-2 border-white border-opacity-20">
                <h4 className="font-bold text-lg mb-4 text-center">❌ Traditional Way (Per Month)</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center pb-2 border-b border-white border-opacity-20">
                    <span>Website Builder</span>
                    <span className="font-bold">$29</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-white border-opacity-20">
                    <span>Web Hosting</span>
                    <span className="font-bold">$15</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-white border-opacity-20">
                    <span>Business Email</span>
                    <span className="font-bold">$12</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-white border-opacity-20">
                    <span>SSL Certificate</span>
                    <span className="font-bold">$8</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-white border-opacity-20">
                    <span>Support & Updates</span>
                    <span className="font-bold">$50+</span>
                  </div>
                  <div className="flex justify-between items-center pt-2 text-lg">
                    <span className="font-bold">Total Cost:</span>
                    <span className="font-bold text-red-300">$114+/mo</span>
                  </div>
                </div>
              </div>

              <div className="bg-white text-gray-900 p-6 rounded-xl border-4 border-yellow-400 relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-gray-900 px-4 py-1 rounded-full text-xs font-bold">
                  BEST VALUE
                </div>
                <h4 className="font-bold text-lg mb-4 text-center text-green-600">✓ NorthSites Way (Per Month)</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                    <span>Professional Website</span>
                    <span className="font-bold text-green-600">✓</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                    <span>Premium Hosting</span>
                    <span className="font-bold text-green-600">✓</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                    <span>Business Email</span>
                    <span className="font-bold text-green-600">✓</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                    <span>SSL Certificate</span>
                    <span className="font-bold text-green-600">✓</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                    <span>24/7 Support & Updates</span>
                    <span className="font-bold text-green-600">✓</span>
                  </div>
                  <div className="flex justify-between items-center pt-2 text-lg">
                    <span className="font-bold">Total Cost:</span>
                    <span className="font-bold text-green-600">$79-$189/mo</span>
                  </div>
                </div>
                <div className="mt-4 bg-green-50 border-2 border-green-400 rounded-lg px-3 py-2">
                  <p className="text-xs font-bold text-green-700 text-center">
                    💰 Save $35-$900 per year vs buying separately!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Join 200+ Happy Canadian Businesses</h2>
            <div className="flex items-center justify-center gap-2">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={24} fill="currentColor" />
                ))}
              </div>
              <span className="text-xl font-bold text-gray-900">4.9/5</span>
              <span className="text-gray-600">from 200+ reviews</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Chen',
                business: "Sam's Coffee",
                result: '+300% online bookings',
                quote: "Best investment we made. The monthly cost is less than what we used to spend on coffee for meetings!"
              },
              {
                name: 'Mike Pilon',
                business: 'Pilon Homes',
                result: 'Launched in 6 days',
                quote: "Incredibly fast and professional. Their team handled everything while I focused on my business."
              },
              {
                name: 'Lisa Martinez',
                business: 'Maple Salon',
                result: '5x more customers',
                quote: "The Professional plan paid for itself in the first month with new bookings. Absolutely worth it!"
              }
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex text-yellow-400 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.quote}"</p>
                <div className="bg-green-50 border border-green-200 rounded-lg px-3 py-2 mb-4">
                  <p className="text-sm font-bold text-green-700 text-center">
                    📈 {testimonial.result}
                  </p>
                </div>
                <div>
                  <div className="font-bold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.business}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              {
                q: "Can I cancel anytime?",
                a: "Yes! There are no contracts or cancellation fees. You can cancel your subscription anytime with 30 days notice."
              },
              {
                q: "What if I'm not satisfied?",
                a: "We offer a 30-day money-back guarantee. If you're not completely satisfied, we'll refund your first month - no questions asked."
              },
              {
                q: "Do I need technical knowledge?",
                a: "Not at all! We build and manage everything for you. You just provide your business info and branding, and we handle the rest."
              },
              {
                q: "Can I upgrade or downgrade my plan?",
                a: "Absolutely! You can change your plan anytime. We'll prorate the charges so you only pay for what you use."
              },
              {
                q: "Is hosting and email really included?",
                a: "Yes! All plans include premium Canadian hosting, SSL security, and business email addresses. No hidden fees."
              },
              {
                q: "How long does it take to launch?",
                a: "Most websites launch within 7 days. We work quickly while maintaining high quality standards."
              }
            ].map((faq, idx) => (
              <div key={idx} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-700">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Grow Your Business Online?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join 200+ Canadian businesses that chose NorthSites. Start with zero risk and our 30-day money-back guarantee.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all shadow-xl transform hover:scale-105"
            >
              View Plans & Pricing
            </button>
            <a 
              href="mailto:info@northsites.ca"
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-blue-600 transition-all"
            >
              Contact Sales Team
            </a>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-6 text-sm">
            <div className="flex items-center">
              <Check className="mr-2" size={18} />
              No setup fees
            </div>
            <div className="flex items-center">
              <Check className="mr-2" size={18} />
              7-day launch
            </div>
            <div className="flex items-center">
              <Check className="mr-2" size={18} />
              30-day guarantee
            </div>
            <div className="flex items-center">
              <Maple size={18} className="mr-2" />
              Proudly Canadian
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;