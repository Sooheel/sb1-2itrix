import React from 'react';

export default function Privacy() {
  return (
    <div className="pt-20 pb-12 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
        
        <div className="prose prose-blue max-w-none">
          <h2>1. Information Collection</h2>
          <p>We collect information necessary to provide our security services and improve our operations.</p>

          <h2>2. Use of Information</h2>
          <p>Collected information is used to provide and improve our services, communicate with clients, and ensure security compliance.</p>

          <h2>3. Data Protection</h2>
          <p>We implement robust security measures to protect all collected information.</p>

          <h2>4. Information Sharing</h2>
          <p>We do not share personal information with third parties except as required by law or with explicit consent.</p>

          <h2>5. Cookie Policy</h2>
          <p>We use cookies to enhance user experience and analyze website traffic.</p>
        </div>
      </div>
    </div>
  );
}