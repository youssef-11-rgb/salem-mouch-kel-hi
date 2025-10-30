import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { Mail, Globe } from 'lucide-react';

const Maple = ({ size = 24, className = "" }) => (
  <i className={`fab fa-canadian-maple-leaf ${className}`} style={{ fontSize: size }}></i>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Smooth scroll offset to avoid header overlap
  const HEADER_OFFSET = 72;
  const scrollWithOffset = (el) => {
    const y = el.getBoundingClientRect().top + window.pageYOffset - HEADER_OFFSET;
    window.scrollTo({ top: y, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center mb-4">
              <Maple size={28} className="text-red-500 mr-2" />
              <span className="text-2xl font-bold text-blue-400">NorthSites</span>
              <span className="text-gray-400 ml-1">.ca</span>
            </div>
            <p className="text-gray-400">
              Professional website development, hosting, and email services for Canadian small businesses.
            </p>
            <div className="mt-4">
              <span className="text-red-500 text-2xl">🇨🇦</span>
              <p className="text-sm text-gray-400 mt-2">Proudly Canadian-owned and operated</p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><HashLink smooth to="/#services" scroll={scrollWithOffset} className="hover:text-white transition">Website Development</HashLink></li>
              <li><HashLink smooth to="/#services" scroll={scrollWithOffset} className="hover:text-white transition">Web Hosting</HashLink></li>
              <li><HashLink smooth to="/#services" scroll={scrollWithOffset} className="hover:text-white transition">Business Email</HashLink></li>
              <li><HashLink smooth to="/#services" scroll={scrollWithOffset} className="hover:text-white transition">Maintenance</HashLink></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/pricing" className="hover:text-white transition">Pricing</Link></li>
              <li><HashLink smooth to="/#comparison" scroll={scrollWithOffset} className="hover:text-white transition">Compare</HashLink></li>
              <li><HashLink smooth to="/#contact" scroll={scrollWithOffset} className="hover:text-white transition">Contact Us</HashLink></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Contact</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center">
                <Mail className="mr-2" size={18} />
                <a href="mailto:info@northsites.ca" className="hover:text-white transition">
                  info@northsites.ca
                </a>
              </li>
              <li className="flex items-center">
                <Globe className="mr-2" size={18} />
                <span>Serving all of Canada</span>
              </li>
              <li className="flex items-center">
                <Maple size={18} className="mr-2 text-red-500" />
                <span>Canadian Support Team</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {currentYear} NorthSites.ca. All rights reserved. Made with love in Canada
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition">Privacy Policy</a>
              <a href="#" className="hover:text-white transition">Terms of Service</a>
              <a href="#" className="hover:text-white transition">FAQ</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
