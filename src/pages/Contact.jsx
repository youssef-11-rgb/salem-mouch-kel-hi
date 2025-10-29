import React, { useState } from 'react';
import { Upload, Mail, Globe, MapPin } from 'lucide-react';

const Maple = ({ size = 24, className = "" }) => (
  <i className={`fab fa-canadian-maple-leaf ${className}`} style={{fontSize: size}}></i>
);

const Contact = () => {
  const [formData, setFormData] = useState({
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

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file && file.size <= 5 * 1024 * 1024) {
      setFormData(prev => ({
        ...prev,
        logoFile: file
      }));
    } else {
      alert('File size must be under 5MB');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.businessName || !formData.businessType || !formData.email || !formData.address || formData.hasDomain === null) {
      alert('Please fill in all required fields');
      return;
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
  };

  return (
    <div className="min-h-screen bg-white">
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-blue-800 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 opacity-10">
          <Maple size={300} className="text-white" />
        </div>
        <div className="absolute bottom-0 right-0 opacity-10">
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

          <div className="bg-white rounded-2xl p-8 md:p-12 text-gray-900 shadow-2xl">
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

              {formData.hasDomain === false && (
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
                  />
                  <p className="text-sm text-gray-500 mt-2">Don't worry if it's taken - we'll help you find alternatives</p>
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
