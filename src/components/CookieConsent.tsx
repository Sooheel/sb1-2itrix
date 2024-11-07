import React, { useState, useEffect } from 'react';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-sm">
          We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.
          <a href="/privacy" className="text-yellow-500 hover:text-yellow-400 ml-2">
            Learn more
          </a>
        </div>
        <div className="flex gap-4">
          <button
            onClick={handleAccept}
            className="bg-yellow-500 text-gray-900 px-4 py-2 rounded-md hover:bg-yellow-600 transition"
          >
            Accept
          </button>
          <button
            onClick={() => setIsVisible(false)}
            className="bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition"
          >
            Decline
          </button>
        </div>
      </div>
    </div>
  );
}