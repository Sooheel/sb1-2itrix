import React from 'react';
import { Shield } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Hero() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLearnMore = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="home" className="relative bg-gray-900 pt-16">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover opacity-30"
          src="https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&q=80"
          alt="Security background"
        />
      </div>
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <div className="text-center">
          <Shield className="h-16 w-16 text-blue-500 mx-auto mb-8" />
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
            Protecting What Matters Most
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-300">
            Professional security solutions tailored to your needs. 24/7 protection for businesses and individuals.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <button 
              onClick={handleGetStarted}
              className="bg-blue-600 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-blue-700 transition"
            >
              Get Started
            </button>
            <button 
              onClick={handleLearnMore}
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-white hover:text-gray-900 transition"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}