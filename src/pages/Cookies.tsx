import React from 'react';

export default function Cookies() {
  return (
    <div className="pt-20 pb-12 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Cookie Policy</h1>
        
        <div className="prose prose-blue max-w-none">
          <h2>1. What Are Cookies</h2>
          <p>Cookies are small text files stored on your device when you visit our website.</p>

          <h2>2. How We Use Cookies</h2>
          <p>We use cookies to:</p>
          <ul>
            <li>Understand how you use our website</li>
            <li>Remember your preferences</li>
            <li>Improve your experience</li>
            <li>Provide secure services</li>
          </ul>

          <h2>3. Types of Cookies We Use</h2>
          <ul>
            <li>Essential cookies for website functionality</li>
            <li>Analytics cookies to understand usage</li>
            <li>Preference cookies to remember your settings</li>
            <li>Security cookies for protection</li>
          </ul>

          <h2>4. Managing Cookies</h2>
          <p>You can control and/or delete cookies through your browser settings.</p>

          <h2>5. Updates to This Policy</h2>
          <p>We may update this cookie policy to reflect changes in our practices.</p>
        </div>
      </div>
    </div>
  );
}