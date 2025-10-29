import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { Menu, X } from 'lucide-react';

const Maple = ({ size = 24, className = "" }) => (
  <i className={`fab fa-canadian-maple-leaf ${className}`} style={{ fontSize: size }}></i>
);

// Define items as plain data only
const navItems = [
  { name: 'Home', to: '/' },
  { name: 'Services', to: '/#services', hash: true },
  { name: 'Pricing', to: '/pricing' },
  { name: 'Compare', to: '/#comparison', hash: true },
  { name: 'About', to: '/about' },
  { name: 'Contact', to: '/#contact', hash: true },
  { name: 'Support', to: '/support' },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Compute active state for simple highlight
  const isActive = (item) => {
    if (item.hash) {
      const targetHash = item.to.split('#')[1];
      return location.pathname === '/' && location.hash === '#' + targetHash;
    }
    return location.pathname === item.to; // exact path match for normal routes
  };

  // Render a single item with the right component
  const renderItem = (item, extraClass = "", onClick) =>
    item.hash ? (
      <HashLink
        key={item.name}
        smooth
        to={item.to}
        className={`transition ${isActive(item) ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'} ${extraClass}`}
        onClick={onClick}
      >
        {item.name}
      </HashLink>
    ) : (
      <Link
        key={item.name}
        to={item.to}
        className={`transition ${isActive(item) ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'} ${extraClass}`}
        onClick={onClick}
      >
        {item.name}
      </Link>
    );

  return (
    <nav className="fixed top-0 w-full bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center">
            <Maple size={28} className="text-red-600 mr-2" />
            <span className="text-2xl font-bold text-blue-600">NorthSites</span>
            <span className="text-gray-600 ml-1">.ca</span>
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => renderItem(item))}
          </div>

          {/* Mobile toggle */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item) =>
              renderItem(item, "block", () => setIsOpen(false))
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;