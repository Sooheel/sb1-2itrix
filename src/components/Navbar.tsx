import React, { useState } from 'react';
import { Shield, Menu, X } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
    setIsOpen(false);
    navigate('/');
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const handleGetQuote = () => {
    scrollToSection('contact');
  };

  return (
    <nav className="bg-gray-900 shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Shield className="h-8 w-8 text-yellow-500" />
            <span className="ml-2 text-xl font-bold text-white">Soho Security Service</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-300 hover:text-yellow-500 transition">Home</button>
            <button onClick={() => scrollToSection('services')} className="text-gray-300 hover:text-yellow-500 transition">Services</button>
            <button onClick={() => scrollToSection('layers')} className="text-gray-300 hover:text-yellow-500 transition">Security Layers</button>
            <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-yellow-500 transition">About</button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-yellow-500 transition">Contact</button>
            <button 
              onClick={handleGetQuote}
              className="bg-yellow-500 text-gray-900 px-4 py-2 rounded-md hover:bg-yellow-600 transition"
            >
              Get Quote
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <button onClick={() => scrollToSection('home')} className="block w-full text-left px-3 py-2 text-gray-300 hover:text-yellow-500">Home</button>
            <button onClick={() => scrollToSection('services')} className="block w-full text-left px-3 py-2 text-gray-300 hover:text-yellow-500">Services</button>
            <button onClick={() => scrollToSection('layers')} className="block w-full text-left px-3 py-2 text-gray-300 hover:text-yellow-500">Security Layers</button>
            <button onClick={() => scrollToSection('about')} className="block w-full text-left px-3 py-2 text-gray-300 hover:text-yellow-500">About</button>
            <button onClick={() => scrollToSection('contact')} className="block w-full text-left px-3 py-2 text-gray-300 hover:text-yellow-500">Contact</button>
            <button 
              onClick={handleGetQuote}
              className="w-full text-left px-3 py-2 bg-yellow-500 text-gray-900 rounded-md hover:bg-yellow-600"
            >
              Get Quote
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}