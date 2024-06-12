import React from 'react';
import { Link } from 'react-router-dom';

function Result({ hasHighDefaultRisk }) {
    // Determine text color based on default rate
    const textColor = hasHighDefaultRisk ? 'text-red-600' : 'text-green-600';
  

  return (
    <div className="flex justify-center items-center min-h-screen mt-20 mb-20">
      <div className="bg-white text-center p-8 rounded-lg shadow-lg">
      <h1 className={`text-6xl mb-4`}>
        Risk of default:{' '}
        <span className={hasHighDefaultRisk ? 'text-red-600' : 'text-green-600'}>
            {hasHighDefaultRisk ? 'high' : 'low'}
        </span>
        </h1>

        <p className={`text-lg tracking-wide text-gray-400 mb-4`}>
            {hasHighDefaultRisk
            ? 'According to our machine learning model, this loan has a high probability of defaulting.'
            : 'According to our machine learning model, this loan has a high probability of being paid back in full.'}
        </p>
        <Link to="/form">
            <p className="px-4 py-2 text-green-500 text-2xl text-white font-semibold">
              &lt; &lt; Go Back
            </p>
          </Link>
      </div>
    </div>
  );
}

export default Result;