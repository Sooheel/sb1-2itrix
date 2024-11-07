import React from 'react';
import { Shield, Users, Building2, ShieldCheck } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: '24/7 Security Monitoring',
      description: 'Round-the-clock surveillance and monitoring services to ensure your safety at all times.'
    },
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: 'Professional Security Guards',
      description: 'Highly trained and certified security personnel for physical protection and surveillance.'
    },
    {
      icon: <Building2 className="h-8 w-8 text-blue-600" />,
      title: 'Commercial Security',
      description: 'Comprehensive security solutions for businesses, offices, and commercial properties.'
    },
    {
      icon: <ShieldCheck className="h-8 w-8 text-blue-600" />,
      title: 'Risk Assessment',
      description: 'Detailed security audits and risk assessments to identify and address vulnerabilities.'
    }
  ];

  return (
    <div id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Security Services
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Comprehensive security solutions tailored to your needs
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
            >
              <div className="inline-block p-3 bg-blue-50 rounded-lg">
                {service.icon}
              </div>
              <h3 className="mt-4 text-xl font-semibold text-gray-900">
                {service.title}
              </h3>
              <p className="mt-2 text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}