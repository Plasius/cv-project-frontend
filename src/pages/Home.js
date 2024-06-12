import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="relative w-3/5 p-14 bg-white rounded-lg shadow-lg">
        <div className="relative z-10">
        <h1 className="text-6xl mb-4">Welcome to LoanIQ</h1>
        <p className="mb-4 text-lg tracking-wide text-gray-400">
        Your intelligent companion for SBA loan assessment. Powered by a machine learning algorithm, LoanIQ analyzes vast data from past SBA loans to offer risk assessment for yours.
        </p>
          <Link to="/form">
            <p className="py-2 justify-center font-semibold font-sans text-2xl text-green-500 rounded-lg">
                Evaluate >>
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
