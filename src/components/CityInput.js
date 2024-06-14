import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

const CityInput = ({ formData, setFormData }) => {
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [activeSuggestion, setActiveSuggestion] = useState(-1);

  useEffect(() => {
    if (formData.City.trim() !== '') {
      setLoading(true);
      // Replace with your API endpoint for city suggestions
      axios.get(`http://localhost:8080/api/v1/cities?q=${formData.City}`)
        .then(response => {
          const data = response.data;
          // Check for exact match
          if (data.includes(formData.City)) {
            setSuggestions([]);
          } else {
            setSuggestions(data);
          }
          setLoading(false);
        })
        .catch(error => {
          console.error('Error fetching city suggestions:', error);
          setLoading(false);
        });
    } else {
      setSuggestions([]);
    }
  }, [formData.City]);

  const handleInputChange = (event) => {
    setFormData({ ...formData, City: event.target.value });
    setActiveSuggestion(-1);
  };

  const handleSuggestionClick = (suggestion) => {
    setFormData({ ...formData, City: suggestion });
    setSuggestions([]);
  };

  const handleKeyDown = useCallback((event) => {
    if (event.key === 'ArrowDown') {
      setActiveSuggestion((prev) => (prev < suggestions.length - 1 ? prev + 1 : prev));
    } else if (event.key === 'ArrowUp') {
      setActiveSuggestion((prev) => (prev > 0 ? prev - 1 : prev));
    } else if (event.key === 'Enter') {
      if (activeSuggestion >= 0 && activeSuggestion < suggestions.length) {
        setFormData({ ...formData, City: suggestions[activeSuggestion] });
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
      <label htmlFor="cityInput" className="block text-lg text-left">
        In which city is your company registered in?
      </label>
      <input
        type="text"
        id="cityInput"
        name="City"
        value={formData.City}
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

export default CityInput;
