import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaPhoneAlt } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'Chi Siamo', path: '/chi-siamo' },
    { name: 'Prenotazione', path: '/prenotazione' },
  ];

  const isActivePath = (path) => location.pathname === path;

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#1E3A8A] shadow-lg transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
        {/* Logo */}
        <Link 
          to="/" 
          className="font-['Dancing_Script'] text-4xl font-bold text-white relative group"
        >
          <span className="text-yellow-400">Bella</span> Napoli
          <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`relative group text-lg font-['Lora'] ${
                isActivePath(link.path)
                  ? 'text-yellow-400 font-semibold'
                  : 'text-gray-200'
              } hover:text-yellow-400 transition-colors duration-300`}
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </Link>
          ))}
          <a
            href="tel:+390212345678"
            className="flex items-center bg-blue-700 text-white px-6 py-2 rounded-full hover:bg-blue-800 transition-all duration-300 transform hover:scale-105 font-['Lora'] text-lg"
          >
            <FaPhoneAlt className="mr-2" /> Chiama Ora
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white focus:outline-none"
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#1E3A8A]">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-3 border-b border-blue-800 font-['Lora'] text-lg ${
                isActivePath(link.path)
                  ? 'text-yellow-400 font-semibold'
                  : 'text-gray-200 hover:text-yellow-400'
              } transition-colors duration-300`}
            >
              {link.name}
            </Link>
          ))}
          <a
            href="tel:+390212345678"
            className="block text-center py-3 bg-blue-700 text-white hover:bg-blue-800 transition-colors duration-300"
            onClick={() => setIsOpen(false)}
          >
            <FaPhoneAlt className="mr-2 inline" /> Chiama Ora
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
