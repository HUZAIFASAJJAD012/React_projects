import React, { useState } from 'react';

function App() {
  const [businessType, setBusinessType] = useState('');
  const [keywords, setKeywords] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const generateNames = async () => {
    try {
      const response = await fetch('https://console.groq.com/keys', { // Correct Groq API endpoint
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': 'Bearer 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' // Use your Groq API key
        },
        body: JSON.stringify({ businessType, keywords }),
      });

      // Ensure the request was successful
      if (!response.ok) {
        throw new Error('API request failed');
      }

      const data = await response.json();

      // Ensure the data contains what you expect (an array of names)
      if (data && data.names) {
        setSuggestions(data.names);
      } else {
        throw new Error('Invalid response format');
      }

    } catch (error) {
      console.error('Error fetching data:', error);
      alert('Failed to generate business names. Please try again.');
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Business Name Generator</h1>
      
      <div className="mb-4">
        <input
          type="text"
          placeholder="Business Type"
          className="border p-2 mr-2"
          value={businessType}
          onChange={(e) => setBusinessType(e.target.value)}
        />
        <input
          type="text"
          placeholder="Keywords (comma separated)"
          className="border p-2"
          value={keywords}
          onChange={(e) => setKeywords(e.target.value)}
        />
      </div>

      <button
        onClick={generateNames}
        className="bg-blue-500 text-white px-4 py-2"
      >
        Generate Business Names
      </button>

      {suggestions.length > 0 && (
        <div className="mt-4">
          <h2 className="text-xl font-semibold">Suggested Names:</h2>
          <ul>
            {suggestions.map((name, index) => (
              <li key={index} className="mt-2">{name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
