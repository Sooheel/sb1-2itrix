import React from 'react';
import { Shield, Award, Users } from 'lucide-react';

export default function About() {
  return (
    <div id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              About Soho Security Service
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              With over a decade of experience in the security industry, Soho Security Service has established itself as a trusted leader in providing comprehensive security solutions. Our commitment to excellence and innovative approach sets us apart.
            </p>
            
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
              <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
                <Shield className="h-8 w-8 text-blue-600" />
                <div className="mt-2 text-2xl font-bold text-gray-900">500+</div>
                <div className="text-sm text-gray-600">Clients Protected</div>
              </div>
              <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
                <Users className="h-8 w-8 text-blue-600" />
                <div className="mt-2 text-2xl font-bold text-gray-900">100+</div>
                <div className="text-sm text-gray-600">Security Experts</div>
              </div>
              <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
                <Award className="h-8 w-8 text-blue-600" />
                <div className="mt-2 text-2xl font-bold text-gray-900">10+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 lg:mt-0">
            <img
              className="rounded-lg shadow-xl"
              src="https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&q=80"
              alt="Security team"
            />
          </div>
        </div>
      </div>
    </div>
  );
}