import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hello! How can I help you with your security needs today?", isBot: true }
  ]);
  const [input, setInput] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setMessages([...messages, { text: input, isBot: false }]);
    // Simulate bot response
    setTimeout(() => {
      setMessages(prev => [...prev, {
        text: "Thank you for your message. A security expert will respond shortly.",
        isBot: true
      }]);
    }, 1000);
    setInput("");
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 bg-yellow-500 text-gray-900 p-4 rounded-full shadow-lg hover:bg-yellow-600 transition z-50"
      >
        <MessageCircle className="h-6 w-6" />
      </button>

      {isOpen && (
        <div className="fixed bottom-20 right-4 w-96 bg-white rounded-lg shadow-xl z-50">
          <div className="flex justify-between items-center bg-gray-900 p-4 rounded-t-lg">
            <h3 className="text-white font-semibold">Security Assistant</h3>
            <button onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-white">
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="h-96 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`max-w-3/4 p-3 rounded-lg ${
                    msg.isBot
                      ? 'bg-gray-100 text-gray-900'
                      : 'bg-yellow-500 text-gray-900'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="p-4 border-t">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 p-2 border rounded-md focus:outline-none focus:border-yellow-500"
              />
              <button
                type="submit"
                className="bg-yellow-500 text-gray-900 px-4 py-2 rounded-md hover:bg-yellow-600 transition"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}