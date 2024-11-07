import React from 'react';

export default function Terms() {
  return (
    <div className="pt-20 pb-12 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Terms and Conditions</h1>
        
        <div className="prose prose-blue max-w-none">
          <h2>1. Acceptance of Terms</h2>
          <p>By accessing and using Soho Security Service, you accept and agree to be bound by these Terms and Conditions.</p>

          <h2>2. Services</h2>
          <p>We provide security services including but not limited to physical security, surveillance, and consulting services.</p>

          <h2>3. Confidentiality</h2>
          <p>We maintain strict confidentiality regarding all client information and security arrangements.</p>

          <h2>4. Governing Law</h2>
          <p>These terms are governed by and construed in accordance with Kenyan law.</p>
        </div>
      </div>
    </div>
  );
}