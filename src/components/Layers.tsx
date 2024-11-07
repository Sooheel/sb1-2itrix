import React from 'react';
import { Shield, Lock, Eye, Users, Bell, Camera, Fingerprint, Key, Radio, Cpu } from 'lucide-react';

export default function Layers() {
  const layers = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Physical Barriers',
      description: 'Advanced fencing and structural security measures'
    },
    {
      icon: <Camera className="h-8 w-8" />,
      title: 'Video Surveillance',
      description: 'AI-powered CCTV monitoring systems'
    },
    {
      icon: <Bell className="h-8 w-8" />,
      title: 'Alarm Systems',
      description: 'Multi-zone intrusion detection'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Security Personnel',
      description: 'Trained security officers and rapid response teams'
    },
    {
      icon: <Fingerprint className="h-8 w-8" />,
      title: 'Access Control',
      description: 'Biometric and smart card authentication'
    },
    {
      icon: <Eye className="h-8 w-8" />,
      title: 'Surveillance Analytics',
      description: 'Behavioral analysis and threat detection'
    },
    {
      icon: <Radio className="h-8 w-8" />,
      title: 'Communication Systems',
      description: 'Integrated emergency response protocols'
    },
    {
      icon: <Lock className="h-8 w-8" />,
      title: 'Cybersecurity',
      description: 'Digital asset protection and network security'
    },
    {
      icon: <Cpu className="h-8 w-8" />,
      title: 'Central Monitoring',
      description: '24/7 command center operations'
    },
    {
      icon: <Key className="h-8 w-8" />,
      title: 'Key Management',
      description: 'Secure key control and management systems'
    }
  ];

  return (
    <div id="layers" className="py-24 bg-gradient-to-b from-gray-900 via-purple-900 to-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            10-Layer Security System
          </h2>
          <p className="mt-4 text-xl text-gray-300">
            Comprehensive protection through multiple security layers
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {layers.map((layer, index) => (
            <div
              key={index}
              className="bg-gray-800 bg-opacity-50 p-6 rounded-lg shadow-xl hover:transform hover:-translate-y-1 transition duration-300"
            >
              <div className="inline-block p-3 bg-yellow-500 rounded-lg text-gray-900">
                {layer.icon}
              </div>
              <h3 className="mt-4 text-xl font-semibold text-white">
                {layer.title}
              </h3>
              <p className="mt-2 text-gray-300">
                {layer.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}