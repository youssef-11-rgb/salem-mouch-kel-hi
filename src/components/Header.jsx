import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Maple = ({ size = 24, className = "" }) => (
  <i className={`fab fa-canadian-maple-leaf ${className}`} style={{fontSize: size}}></i>
);

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Services', href: '#services' },
  { name: 'Pricing', path: '/pricing' },
  { name: 'Add-ons', href: '#addons' },
  { name: 'Compare', href: '#comparison' },
  { name: 'About', path: '/about' },
  { name: 'Contact', href: '#contact' },
  { name: 'Support', path: '/support' },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 w-full bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center">
            <Maple size={28} className="text-red-600 mr-2" />
            <span className="text-2xl font-bold text-blue-600">NorthSites</span>
            <span className="text-gray-600 ml-1">.ca</span>
          </Link>
          
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              item.href ? (
                <a 
                  key={item.name}
                  href={item.href} 
                  className="text-gray-700 hover:text-blue-600 transition"
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`transition ${location.pathname === item.path ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}
                >
                  {item.name}
                </Link>
              )
            ))}
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              item.href ? (
                <a 
                  key={item.name}
                  href={item.href} 
                  className="block text-gray-700 hover:text-blue-600"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  key={item.name}
                  to={item.path}
                  className="block text-gray-700 hover:text-blue-600"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              )
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
