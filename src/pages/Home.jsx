import React, { useState } from 'react';
import { Check, ArrowRight, Star, Zap, Shield, TrendingUp, Mail, Server, Code, Globe, Award, Upload, X, Info, CheckCircle } from 'lucide-react';

const Maple = ({ size = 24, className = "" }) => (
  <i className={`fab fa-canadian-maple-leaf ${className}`} style={{fontSize: size}}></i>
);

const Home = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');
  const [hoveredEmail, setHoveredEmail] = useState(null);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    businessName: '',
    businessType: '',
    email: '',
    phone: '',
    hasDomain: null,
    needsLogoDesign: false
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleDomainChoice = (choice) => {
    setFormData(prev => ({
      ...prev,
      hasDomain: choice
    }));
  };

  const handleSubmit = () => {
    if (!formData.businessName || !formData.businessType || !formData.email || !formData.phone || formData.hasDomain === null) {
      alert('Please fill in all required fields');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      setShowSuccessPopup(true);

      setFormData({
        businessName: '',
        businessType: '',
        email: '',
        phone: '',
        hasDomain: null,
        needsLogoDesign: false
      });

      setTimeout(() => {
        setShowSuccessPopup(false);
      }, 5000);
    }, 1500);
  };

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
      bestFor: 'E-commerce & professional services',
    }
  ];

  const getPrice = (plan) => {
    return billingCycle === 'monthly' ? plan.priceMonthly : plan.priceYearly;
  };

  const getSavings = (plan) => {
    return (plan.priceMonthly * 12) - plan.priceYearly;
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-blue-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M30 30c0-16.569 13.431-30 30-30v60c-16.569 0-30-13.431-30-30z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: '60px 60px' // <-- fixed
            }}
          ></div>
        </div>

        <div className="absolute top-20 right-10 opacity-10">
          <Maple size={200} className="text-blue-600" />
        </div>
        <div className="absolute bottom-20 left-10 opacity-10">
          <Maple size={150} className="text-red-500" />
        </div>

        <div className="max-w-7xl mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div>
                <div className="inline-flex items-center bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                  <Maple size={16} className="mr-2" />
                  Proudly Canadian - Supporting Local Businesses
                </div>

                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                  Get 3X More Customers With Your New Website in Just <span className="text-blue-600">7 Days</span>
                </h1>

                <p className="text-xl text-gray-600 mb-8">
                  Complete done-for-you service starting at just <span className="font-bold text-gray-900">$2.64/day</span>.
                  We build, host, and manage everything - you focus on your business.
                </p>

                <div className="grid grid-cols-3 gap-6 mb-8">
                  <div className="text-center bg-white rounded-lg p-4 shadow-md">
                    <div className="text-3xl font-bold text-blue-600 mb-1">300%</div>
                    <div className="text-sm text-gray-600">Avg. Booking Increase</div>
                  </div>
                  <div className="text-center bg-white rounded-lg p-4 shadow-md">
                    <div className="text-3xl font-bold text-green-600 mb-1">127</div>
                    <div className="text-sm text-gray-600">Sites Launched in 2024</div>
                  </div>
                  <div className="text-center bg-white rounded-lg p-4 shadow-md">
                    <div className="text-3xl font-bold text-red-600 mb-1">4.9★</div>
                    <div className="text-sm text-gray-600">Average Rating</div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <a href="#contact" className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 flex items-center justify-center group shadow-lg">
                    Get Started Today <ArrowRight className="ml-2" size={20} />
                  </a>
                  <a href="#pricing" className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-300 text-center shadow-md">
                    View Plans
                  </a>
                </div>

                <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Check className="text-green-500 mr-2" size={18} />
                    No upfront costs
                  </div>
                  <div className="flex items-center">
                    <Check className="text-green-500 mr-2" size={18} />
                    Cancel anytime
                  </div>
                  <div className="flex items-center">
                    <Check className="text-green-500 mr-2" size={18} />
                    Canadian support
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
                <div className="bg-gray-100 px-4 py-3 flex items-center border-b border-gray-200">
                  <div className="flex space-x-2 mr-4">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                  <div className="bg-white px-3 py-1 rounded text-sm text-gray-600 flex-1">
                    yourbusiness.ca
                  </div>
                </div>

                <div className="p-8 bg-gradient-to-br from-gray-50 to-white">
                  <div className="flex items-center justify-between mb-6">
                    <div className="bg-gray-200 w-24 h-8 rounded"></div>
                    <div className="flex space-x-2">
                      <div className="bg-gray-200 w-16 h-6 rounded"></div>
                      <div className="bg-gray-200 w-16 h-6 rounded"></div>
                      <div className="bg-blue-600 w-20 h-6 rounded"></div>
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="bg-gray-200 h-4 rounded w-full"></div>
                    <div className="bg-gray-200 h-4 rounded w-3/4"></div>
                    <div className="bg-gray-200 h-4 rounded w-1/2"></div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="bg-gray-200 h-16 rounded"></div>
                    <div className="bg-gray-200 h-16 rounded"></div>
                    <div className="bg-gray-200 h-16 rounded"></div>
                  </div>

                  <div className="bg-blue-600 w-32 h-8 rounded"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <div className="inline-flex items-center bg-gradient-to-r from-green-100 to-blue-100 border border-green-200 px-6 py-3 rounded-full mb-8">
              <div className="flex items-center mr-4">
                <div className="bg-green-500 w-2 h-2 rounded-full mr-2"></div>
                <span className="text-green-700 font-semibold">Limited Time Offer</span>
              </div>
              <span className="text-gray-700">Launch Special: Save up to $50/month + 30-Day Money-Back Guarantee</span>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center items-center gap-8 mt-8">
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm">
                <Shield className="text-green-600" size={20} />
                <span className="text-sm font-semibold text-gray-700">SSL Secured</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm">
                <Check className="text-green-600" size={20} />
                <span className="text-sm font-semibold text-gray-700">BBB Accredited</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm">
                <Star className="text-yellow-500" size={20} fill="currentColor" />
                <span className="text-sm font-semibold text-gray-700">4.9/5 Rating</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm">
                <Maple size={20} className="text-red-600" />
                <span className="text-sm font-semibold text-gray-700">100% Canadian</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm">
                <Award className="text-blue-600" size={20} />
                <span className="text-sm font-semibold text-gray-700">Google Partner</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl mb-4">
              Choose Your Perfect Plan
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600 mb-4">
              <span className="font-bold text-gray-900">Everything in one place:</span> We build your website, host it on premium Canadian servers, set up your professional business email, and provide ongoing support.
            </p>
            <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-purple-100 border-2 border-blue-300 px-6 py-3 rounded-xl">
              <Shield className="text-blue-600 mr-2" size={20} />
              <span className="font-bold text-gray-900">Website + Hosting + Business Email =</span>
              <span className="ml-2 text-blue-600 font-bold">One Simple Price</span>
            </div>
          </div>

          <div className="mt-12 flex justify-center">
            <div className="relative bg-white rounded-full p-1 flex shadow-lg border-2 border-gray-200">
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`${billingCycle === 'monthly' ? 'bg-blue-600 text-white' : 'bg-transparent text-gray-700'} relative w-32 rounded-full py-3 text-sm font-bold transition-all duration-300`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle('yearly')}
                className={`${billingCycle === 'yearly' ? 'bg-blue-600 text-white' : 'bg-transparent text-gray-700'} relative w-32 rounded-full py-3 text-sm font-bold transition-all duration-300`}
              >
                Yearly
                <span className="absolute -top-3 -right-3 bg-green-500 text-white text-xs px-2 py-1 rounded-full font-bold shadow-lg">
                  Save 15%
                </span>
              </button>
            </div>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className={`relative overflow-hidden bg-white rounded-2xl shadow-xl border-2 transition-all duration-300 hover:scale-105 ${plan.popular ? 'border-purple-500 shadow-2xl' : 'border-gray-200'}`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-purple-600 to-purple-700 text-white text-xs font-bold uppercase px-4 py-2 rounded-bl-xl shadow-lg">
                    ⭐ Most Popular
                  </div>
                )}

                <div className="p-6">
                  <div className="mb-6">
                    <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? 'text-purple-600' : 'text-gray-900'}`}>
                      {plan.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-2">{plan.description}</p>
                    <p className="text-xs text-blue-600 font-semibold mb-3">✓ Best for: {plan.bestFor}</p>

                    <div className="flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-lg px-3 py-2">
                      <Mail className="text-blue-600 flex-shrink-0" size={16} />
                      <span className="text-sm font-bold text-gray-900">
                        {typeof plan.emailAccounts === 'number' ? plan.emailAccounts : plan.emailAccounts} Business Email{typeof plan.emailAccounts === 'number' && plan.emailAccounts > 1 ? 's' : ''}
                      </span>
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
                      <span className="text-4xl font-extrabold text-gray-900">
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
                      const el = document.getElementById('contact');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className={`w-full py-3 px-6 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center group mb-6 ${plan.popular
                        ? 'bg-gradient-to-r from-purple-600 to-purple-700 text-white hover:from-purple-700 hover:to-purple-800'
                        : 'bg-gradient-to-r from-gray-800 to-gray-900 text-white hover:from-gray-900 hover:to-black'
                      }`}
                  >
                    Get Started Now
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                  </button>

                  <div>
                    <h4 className="font-medium text-gray-900 mb-3">Everything Included:</h4>
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

        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Complete Web Solution - All in One Place</h2>
            <p className="text-xl text-gray-600">We handle everything so you don't have to</p>
            <div className="mt-6 inline-flex items-center bg-green-100 text-green-700 px-6 py-3 rounded-full text-sm font-semibold">
              <Check className="w-4 h-4 mr-2" />
              Free website migration from any platform
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-sm border border-blue-100 transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <div className="bg-blue-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Code className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Website Development</h3>
              <p className="text-gray-600 mb-4">Our team builds your custom website from scratch using professional templates tailored to your industry.</p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <Check className="text-blue-600 mr-2 flex-shrink-0 mt-1" size={18} />
                  <span>Custom design & branding</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-blue-600 mr-2 flex-shrink-0 mt-1" size={18} />
                  <span>Professional copywriting</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-blue-600 mr-2 flex-shrink-0 mt-1" size={18} />
                  <span>SEO optimization</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl shadow-sm border border-green-100 transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <div className="bg-green-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Server className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Premium Hosting</h3>
              <p className="text-gray-600 mb-4">Fast, secure Canadian hosting with 99.9% uptime guarantee. Your website stays online, backed up, and protected 24/7.</p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <Check className="text-green-600 mr-2 flex-shrink-0 mt-1" size={18} />
                  <span>SSL security certificate</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-green-600 mr-2 flex-shrink-0 mt-1" size={18} />
                  <span>Daily automatic backups</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-green-600 mr-2 flex-shrink-0 mt-1" size={18} />
                  <span>Lightning-fast performance</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-2xl shadow-sm border border-purple-100 transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <div className="bg-purple-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Mail className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Business Email</h3>
              <p className="text-gray-600 mb-4">Professional email addresses with your domain name. Look credible with info@yourbusiness.ca instead of Gmail.</p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <Check className="text-purple-600 mr-2 flex-shrink-0 mt-1" size={18} />
                  <span>Multiple email accounts</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-purple-600 mr-2 flex-shrink-0 mt-1" size={18} />
                  <span>Spam protection included</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-purple-600 mr-2 flex-shrink-0 mt-1" size={18} />
                  <span>Works with any device</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-white p-8 rounded-2xl shadow-sm border border-orange-100 transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <div className="bg-orange-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Globe className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Website Migration & Revival</h3>
              <p className="text-gray-600 mb-4">We'll migrate your existing website for free and breathe new life into outdated sites with modern design and functionality.</p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <Check className="text-orange-600 mr-2 flex-shrink-0 mt-1" size={18} />
                  <span>Free migration from any platform</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-orange-600 mr-2 flex-shrink-0 mt-1" size={18} />
                  <span>Modernize outdated designs</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-orange-600 mr-2 flex-shrink-0 mt-1" size={18} />
                  <span>Preserve all existing content</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 md:p-12 text-white text-center">
            <h3 className="text-3xl font-bold mb-4">Plus: Ongoing Maintenance & Support</h3>
            <p className="text-xl text-blue-100 mb-6 max-w-3xl mx-auto">
              We don't just build and leave. Your subscription includes monthly content updates, technical maintenance, security patches, and Canadian customer support.
            </p>
            <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <Globe size={32} className="mx-auto mb-2" />
                <p className="font-semibold">Domain Management</p>
              </div>
              <div className="text-center">
                <Shield size={32} className="mx-auto mb-2" />
                <p className="font-semibold">Security Updates</p>
              </div>
              <div className="text-center">
                <Zap size={32} className="mx-auto mb-2" />
                <p className="font-semibold">Performance Monitoring</p>
              </div>
              <div className="text-center">
                <Award size={32} className="mx-auto mb-2" />
                <p className="font-semibold">Expert Support</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">What Our Customers Say</h2>
            <p className="text-xl text-blue-100">Real reviews from real Canadian businesses</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Chen',
                business: "Sam's Coffee",
                location: 'Toronto, ON',
                initial: 'SC',
                color: 'blue',
                text: `NorthSites transformed our coffee shop's online presence.
We went from no online presence to a professional website in just 7 days.
Our bookings increased by 300%!`,
                metric: '+300% bookings in 30 days'
              },
              {
                name: 'Mike Pilon',
                business: 'Pilon Homes',
                location: 'Vancouver, BC',
                initial: 'MP',
                color: 'green',
                text: `Finally, a web service that understands Canadian businesses.
The Canadian hosting and support made all the difference. Our site loads fast and we get local support when we need it.`,
                metric: '2.1s load time, 99.9% uptime'
              },
              {
                name: 'Lisa Martinez',
                business: 'Maple Salon',
                location: 'Calgary, AB',
                initial: 'LM',
                color: 'purple',
                text: `The best investment we've made for our salon.
Professional design, easy to manage, and the email setup was seamless.
Our clients love booking online now.`,
                metric: '5x more online bookings'
              }
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={20} fill="currentColor" />
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-gray-600">5.0</span>
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "{testimonial.text}"
                </p>
                <div className="bg-blue-50 border border-blue-200 rounded-lg px-4 py-2 mb-6">
                  <p className="text-sm font-bold text-blue-900 text-center">
                    📈 {testimonial.metric}
                  </p>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-blue-600 font-bold text-lg">{testimonial.initial}</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">Owner, {testimonial.business}</div>
                    <div className="text-sm text-gray-500">{testimonial.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex items-center bg-white bg-opacity-20 px-6 py-3 rounded-full">
              <div className="flex text-yellow-400 mr-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} fill="currentColor" />
                ))}
              </div>
              <span className="text-white font-semibold">4.9/5 average rating from 200+ Canadian businesses</span>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section id="comparison" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">NorthSites vs Other Services</h2>
            <p className="text-xl text-gray-600">See why we are the best choice for Canadian small businesses</p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden mb-12">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Feature</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-blue-600 bg-blue-50">NorthSites</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-700">Web Agencies</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-700">DIY Builders</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-700">Freelancers</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Upfront Cost</td>
                    <td className="px-6 py-4 text-center text-sm text-green-600 font-semibold">$0</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-600">$2,000 - $10,000</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-600">$0 - $500</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-600">$500 - $3,000</td>
                  </tr>

                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Monthly Cost</td>
                    <td className="px-6 py-4 text-center text-sm text-green-600 font-semibold">$79 - $149</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-600">$200 - $500+</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-600">$20 - $50</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-600">$100 - $300</td>
                  </tr>

                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Time to Launch</td>
                    <td className="px-6 py-4 text-center text-sm text-green-600 font-semibold">7 Days</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-600">4-12 weeks</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-600">1-4 weeks</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-600">2-8 weeks</td>
                  </tr>

                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Professional Design</td>
                    <td className="px-6 py-4 text-center text-sm text-green-600 font-semibold">✓ Included</td>
                    <td className="px-6 py-4 text-center text-sm text-green-600">✓ Included</td>
                    <td className="px-6 py-4 text-center text-sm text-red-600">✗ Templates only</td>
                    <td className="px-6 py-4 text-center text-sm text-yellow-600">~ Varies</td>
                  </tr>

                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Hosting Included</td>
                    <td className="px-6 py-4 text-center text-sm text-green-600 font-semibold">✓ Premium</td>
                    <td className="px-6 py-4 text-center text-sm text-green-600">✓ Usually</td>
                    <td className="px-6 py-4 text-center text-sm text-yellow-600">~ Basic</td>
                    <td className="px-6 py-4 text-center text-sm text-red-600">✗ Extra cost</td>
                  </tr>

                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Business Email</td>
                    <td className="px-6 py-4 text-center text-sm text-green-600 font-semibold">✓ Included</td>
                    <td className="px-6 py-4 text-center text-sm text-yellow-600">~ Sometimes</td>
                    <td className="px-6 py-4 text-center text-sm text-red-600">✗ Extra cost</td>
                    <td className="px-6 py-4 text-center text-sm text-red-600">✗ Extra cost</td>
                  </tr>

                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Ongoing Support</td>
                    <td className="px-6 py-4 text-center text-sm text-green-600 font-semibold">✓ 24/7 Canadian</td>
                    <td className="px-6 py-4 text-center text-sm text-yellow-600">~ Limited</td>
                    <td className="px-6 py-4 text-center text-sm text-red-600">✗ Self-service</td>
                    <td className="px-6 py-4 text-center text-sm text-yellow-600">~ Limited</td>
                  </tr>

                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Updates & Maintenance</td>
                    <td className="px-6 py-4 text-center text-sm text-green-600 font-semibold">✓ Included</td>
                    <td className="px-6 py-4 text-center text-sm text-red-600">✗ Extra cost</td>
                    <td className="px-6 py-4 text-center text-sm text-red-600">✗ You do it</td>
                    <td className="px-6 py-4 text-center text-sm text-red-600">✗ Extra cost</td>
                  </tr>

                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">Canadian Hosting</td>
                      <td className="px-6 py-4 text-center text-sm text-green-600 font-semibold">✓ Yes</td>
                      <td className="px-6 py-4 text-center text-sm text-yellow-600">~ Sometimes</td>
                      <td className="px-6 py-4 text-center text-sm text-red-600">✗ Usually US</td>
                      <td className="px-6 py-4 text-center text-sm text-yellow-600">~ Varies</td>
                    </tr>

                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">SEO Optimization</td>
                    <td className="px-6 py-4 text-center text-sm text-green-600 font-semibold">✓ Included</td>
                    <td className="px-6 py-4 text-center text-sm text-yellow-600">~ Extra cost</td>
                    <td className="px-6 py-4 text-center text-sm text-red-600">✗ Basic only</td>
                    <td className="px-6 py-4 text-center text-sm text-yellow-600">~ Extra cost</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white text-center">
            <h3 className="text-3xl font-bold mb-4">The NorthSites Advantage</h3>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-8">
              <div className="bg-white bg-opacity-10 p-6 rounded-xl">
                <div className="text-4xl font-bold mb-2">$0</div>
                <div className="text-sm">Upfront Cost</div>
                <div className="text-xs mt-2 opacity-75">vs $500-$10,000 with agencies</div>
              </div>
              <div className="bg-white bg-opacity-10 p-6 rounded-xl">
                <div className="text-4xl font-bold mb-2">7 Days</div>
                <div className="text-sm">To Launch</div>
                <div className="text-xs mt-2 opacity-75">vs 4-12 weeks with agencies</div>
              </div>
              <div className="bg-white bg-opacity-10 p-6 rounded-xl">
                <div className="text-4xl font-bold mb-2">All-In-One</div>
                <div className="text-sm">Build + Host + Email</div>
                <div className="text-xs mt-2 opacity-75">vs paying separately elsewhere</div>
              </div>
            </div>
            <p className="text-xl text-blue-100 mt-8 max-w-3xl mx-auto">
              We combine the affordability of DIY builders with the quality of professional agencies, plus Canadian hosting and email - all in one simple monthly price.
            </p>
            <a href="#contact" className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-blue-50 transition mt-6">
              Get Started Today
            </a>
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-blue-800 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 opacity-10">
          <Maple size={300} className="text-white" />
        </div>
        <div className="absolute bottom-0 right-0 opacity-10">
          <Maple size={300} className="text-white" />
        </div>
        <div className="max-w-4xl mx-auto relative">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Ready to Go Online?</h2>
            <p className="text-xl text-blue-100">Get your free consultation. We will respond within 24 hours.</p>
          </div>

          <div className="bg-white rounded-2xl p-8 md:p-12 text-gray-900 shadow-2xl">
            <div className="space-y-8">
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
                />
              </div>

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
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-700">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="(555) 123-4567"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition"
                />
                <p className="text-xs text-gray-500 mt-1">We'll send you updates via SMS</p>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-700">
                  What type of website do you need?
                  <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="businessType"
                  value={formData.businessType}
                  onChange={handleInputChange}
                  placeholder="E.g., I run a plumbing company and need a site to showcase services and get leads"
                  rows={4}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition resize-none"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-4 text-gray-700">
                  Do you have a domain name?
                  <span className="text-red-500">*</span>
                </label>
                <div className="grid md:grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={() => handleDomainChoice(false)}
                    className={`p-6 rounded-lg border-2 transition-all ${formData.hasDomain === false ? 'border-blue-600 bg-blue-50' : 'border-gray-300 bg-white hover:border-blue-400'}`}
                  >
                    <div className="font-semibold text-lg mb-1 text-gray-900">No, help me register</div>
                    <div className="text-sm text-gray-600">We'll set it up for you</div>
                  </button>
                  <button
                    type="button"
                    onClick={() => handleDomainChoice(true)}
                    className={`p-6 rounded-lg border-2 transition-all ${formData.hasDomain === true ? 'border-blue-600 bg-blue-50' : 'border-gray-300 bg-white hover:border-blue-400'}`}
                  >
                    <div className="font-semibold text-lg mb-1 text-gray-900">Yes, I have one</div>
                    <div className="text-sm text-gray-600">I'll transfer it</div>
                  </button>
                </div>
              </div>

              {/* Social Proof */}
              <div className="bg-gradient-to-r from-green-50 to-blue-50 border-2 border-green-200 rounded-xl p-6">
                <div className="flex items-center justify-center gap-4 mb-3">
                  <div className="flex -space-x-2">
                    {[1,2,3,4].map(i => (
                      <div key={i} className="w-10 h-10 rounded-full bg-blue-500 border-2 border-white flex items-center justify-center text-white font-bold text-sm">
                        {String.fromCharCode(64 + i)}
                      </div>
                    ))}
                  </div>

                  <div className="text-left">
                    <div className="font-bold text-gray-900">127 businesses joined in 2024</div>
                    <div className="text-sm text-gray-600">3 spots left this month</div>
                  </div>
                </div>

                <div className="flex items-center justify-center gap-6 text-sm text-gray-700">
                  <div className="flex items-center gap-1">
                    <Check className="text-green-600" size={16} />
                    <span>Free consultation</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Check className="text-green-600" size={16} />
                    <span>No credit card</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Check className="text-green-600" size={16} />
                    <span>24hr response</span>
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={handleSubmit}
                disabled={isSubmitting}
                className={`w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg transform hover:scale-105 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Submitting...
                  </span>
                ) : (
                  'Get My Free Quote Now →'
                )}
              </button>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <Shield className="text-yellow-600 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <div className="font-bold text-gray-900 mb-1">30-Day Money-Back Guarantee</div>
                    <p className="text-sm text-gray-600">
                      Not satisfied? Get a full refund within 30 days, no questions asked.
                      We're that confident you'll love your new website.
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-xs text-gray-500 text-center">
                By submitting, you agree to receive emails from NorthSites.
                Unsubscribe anytime. 🇨🇦 Proudly Canadian
              </p>
            </div>
          </div>

          <div className="mt-12 text-center text-blue-100">
            <p className="text-lg mb-4">Have questions? Email us directly:</p>
            <a href="mailto:info@northsites.ca" className="text-2xl font-bold text-white hover:underline">
              info@northsites.ca
            </a>
          </div>
        </div>
      </section>

      {/* SUCCESS POPUP */}
      {showSuccessPopup && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 max-w-lg w-full text-center relative">
            <button
              onClick={() => setShowSuccessPopup(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <X size={24} />
            </button>
            <CheckCircle className="text-green-500 w-20 h-20 mx-auto mb-6" />
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Success!</h3>
            <p className="text-lg text-gray-600 mb-8">
              Your consultation request has been sent. We will get back to you within 24 hours.
            </p>
            <button
              onClick={() => setShowSuccessPopup(false)}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
