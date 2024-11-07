import React from 'react';
import { Shield, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

export default function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center">
              <Shield className="h-8 w-8 text-yellow-500" />
              <span className="ml-2 text-xl font-bold text-white">Soho Security Service</span>
            </div>
            <p className="mt-4 text-gray-400">
              Providing enterprise-grade security solutions with our innovative 10-layer security system since 2014.
            </p>
            <div className="mt-6 flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-yellow-500">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-500">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-500">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-500">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li><button onClick={() => scrollToSection('home')} className="text-gray-400 hover:text-yellow-500">Home</button></li>
              <li><button onClick={() => scrollToSection('services')} className="text-gray-400 hover:text-yellow-500">Services</button></li>
              <li><button onClick={() => scrollToSection('layers')} className="text-gray-400 hover:text-yellow-500">Security Layers</button></li>
              <li><button onClick={() => scrollToSection('about')} className="text-gray-400 hover:text-yellow-500">About</button></li>
              <li><button onClick={() => scrollToSection('contact')} className="text-gray-400 hover:text-yellow-500">Contact</button></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold">Legal</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/terms" className="text-gray-400 hover:text-yellow-500 cursor-pointer block">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-400 hover:text-yellow-500 cursor-pointer block">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/cookies" className="text-gray-400 hover:text-yellow-500 cursor-pointer block">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800">
          <p className="text-gray-400 text-center">
            © {new Date().getFullYear()} Soho Security Service. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}