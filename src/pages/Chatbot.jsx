import React, { useState } from 'react';

function Chatbot() {
  const [messages, setMessages] = useState([
    { text: 'Hello! I\'m your health assistant. How can I help you today?', isBot: true }
  ]);
  const [input, setInput] = useState('');

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    const userMessage = { text: input, isBot: false };
    setMessages(prev => [...prev, userMessage]);

    // Simulate bot response
    setTimeout(() => {
      const botResponse = getBotResponse(input);
      setMessages(prev => [...prev, { text: botResponse, isBot: true }]);
    }, 1000);

    setInput('');
  };

  const getBotResponse = (userInput) => {
    const input = userInput.toLowerCase();
    if (input.includes('headache')) {
      return 'For headaches, try resting in a quiet, dark room and stay hydrated. If persistent, consult a healthcare provider.';
    } else if (input.includes('fever')) {
      return 'If you have a fever, rest and drink plenty of fluids. If it\'s high or persists, seek medical attention.';
    } else if (input.includes('hello') || input.includes('hi')) {
      return 'Hello! How can I assist you with your health concerns today?';
    } else {
      return 'I understand you have a health concern. Could you provide more specific symptoms?';
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Health Chatbot</h1>

      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="h-96 p-4 overflow-y-auto">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`mb-4 ${message.isBot ? 'text-left' : 'text-right'}`}
            >
              <div
                className={`inline-block p-3 rounded-lg ${
                  message.isBot
                    ? 'bg-gray-100 text-gray-800'
                    : 'bg-blue-500 text-white'
                }`}
              >
                {message.text}
              </div>
            </div>
          ))}
        </div>

        <form onSubmit={handleSend} className="p-4 border-t">
          <div className="flex space-x-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your health question..."
              className="flex-1 p-2 border rounded-md focus:outline-none focus:border-blue-500"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Chatbot;
