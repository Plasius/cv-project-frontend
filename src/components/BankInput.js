import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

const BankInput = ({ formData, setFormData }) => {
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [activeSuggestion, setActiveSuggestion] = useState(-1);

  useEffect(() => {
    if (formData.Bank.trim() !== '') {
      setLoading(true);
      // Replace with your API endpoint for bank suggestions
      axios.get(`http://localhost:8080/api/v1/banks?q=${formData.Bank}`)
        .then(response => {
          const data = response.data;
          // Check for exact match
          if (data.includes(formData.Bank)) {
            setSuggestions([]);
          } else {
            setSuggestions(data);
          }
          setLoading(false);
        })
        .catch(error => {
          console.error('Error fetching bank suggestions:', error);
          setLoading(false);
        });
    } else {
      setSuggestions([]);
    }
  }, [formData.Bank]);

  const handleInputChange = (event) => {
    setFormData({ ...formData, Bank: event.target.value });
    setActiveSuggestion(-1);
  };

  const handleSuggestionClick = (suggestion) => {
    setFormData({ ...formData, Bank: suggestion });
    setSuggestions([]);
  };

  const handleKeyDown = useCallback((event) => {
    if (event.key === 'ArrowDown') {
      setActiveSuggestion((prev) => (prev < suggestions.length - 1 ? prev + 1 : prev));
    } else if (event.key === 'ArrowUp') {
      setActiveSuggestion((prev) => (prev > 0 ? prev - 1 : prev));
    } else if (event.key === 'Enter') {
      if (activeSuggestion >= 0 && activeSuggestion < suggestions.length) {
        setFormData({ ...formData, Bank: suggestions[activeSuggestion] });
        setSuggestions([]);
      }
    }
  }, [activeSuggestion, suggestions, formData, setFormData]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <div className="mb-4">
      <label htmlFor="bankInput" className="block text-lg text-left">
        Which bank is your company applying for the loan with?
      </label>
      <input
        type="text"
        id="bankInput"
        name="Bank"
        value={formData.Bank}
        onChange={handleInputChange}
        className="px-4 py-2 bg-gray-100 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Start typing..."
      />
      {loading && <p className="text-gray-600 mt-1">Loading suggestions...</p>}
      {suggestions.length > 0 && (
        <ul className="mt-1 bg-white rounded-lg shadow-lg">
          {suggestions.map((suggestion, index) => (
            <li
              key={index}
              onClick={() => handleSuggestionClick(suggestion)}
              className={`cursor-pointer py-1 px-3 hover:bg-gray-100 ${activeSuggestion === index ? 'bg-gray-200' : ''}`}
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BankInput;
