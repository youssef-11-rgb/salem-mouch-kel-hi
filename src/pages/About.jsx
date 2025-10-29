import React from 'react';
import { Check, Globe, Shield, Award, Users, Clock, Mail } from 'lucide-react';

const Maple = ({ size = 24, className = "" }) => (
  <i className={`fab fa-canadian-maple-leaf ${className}`} style={{fontSize: size}}></i>
);

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-red-50 to-white relative overflow-hidden">
        <div className="absolute top-0 right-0 opacity-5">
          <Maple size={400} className="text-red-600" />
        </div>
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center">
            <div className="inline-flex items-center bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Maple size={16} className="mr-2" />
              Proudly Canadian - Supporting Local Businesses
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              The NorthSites Story: <span className="text-blue-600">Websites Without the Headache</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto">
              NorthSites was born out of frustration. Our founders — small business owners — got tired of seeing friends pay thousands for sites that were slow and impossible to update.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                We believe getting online should be simple, secure, and transparently priced. We handle hosting, security, emails, updates — 100% of the technical nonsense.
              </p>
              <div className="bg-blue-50 p-6 rounded-2xl border-l-4 border-blue-600 italic text-gray-700">
                "We handle the website. You handle your business."
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Why We Started</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <Check className="text-blue-600 mr-3 flex-shrink-0 mt-1" size={18} />
                  <span>Small businesses were paying $3,000+ for basic websites</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-blue-600 mr-3 flex-shrink-0 mt-1" size={18} />
                  <span>Websites were slow, outdated, and hard to manage</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-blue-600 mr-3 flex-shrink-0 mt-1" size={18} />
                  <span>No ongoing support or maintenance included</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-blue-600 mr-3 flex-shrink-0 mt-1" size={18} />
                  <span>Canadian businesses needed local, reliable support</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-6">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Honesty</h3>
              <p className="text-gray-600">No hidden fees or confusing jargon. What you see is what you pay.</p>
            </div>

            <div className="text-center p-6">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-green-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Support</h3>
              <p className="text-gray-600">Friendly local help—no outsourced call centres. Real Canadians helping Canadians via email.</p>
            </div>

            <div className="text-center p-6">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-purple-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Security</h3>
              <p className="text-gray-600">Proactive monitoring and free SSL on every site. Your business is protected.</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 md:p-12 text-white text-center">
            <h3 className="text-3xl font-bold mb-4">The NorthSites Difference</h3>
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
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Team</h2>
            <p className="text-xl text-gray-600">Meet the Canadians behind NorthSites</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Sarah Chen</h3>
              <p className="text-blue-600 font-semibold mb-2">Lead Developer</p>
              <p className="text-gray-600 text-sm">5+ years building websites for Canadian businesses. Specializes in WordPress and custom web solutions.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="text-green-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Mike Richardson</h3>
              <p className="text-green-600 font-semibold mb-2">Customer Success</p>
              <p className="text-gray-600 text-sm">Ensures every client gets the support they need. Responds to all emails within 24 hours.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-purple-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Alex Thompson</h3>
              <p className="text-purple-600 font-semibold mb-2">Technical Operations</p>
              <p className="text-gray-600 text-sm">Manages hosting, security, and technical infrastructure. Keeps your website fast and secure.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
