import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Form() {
  const [formData, setFormData] = useState({
    companyLocationCity: '',
    companyLocationState: '',
    bankName: '',
    bankLocationState: '',
    naicsCode: '',
    loanTerm: '',
    grossApprovalAmount: '',
    realEstateLoan: '',
    businessLocation: '',
    revolvingCredit: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-white mt-20 mb-20 rounded-lg">
      <div className="bg-white text-center p-8 rounded-lg shadow-lg">
        <p className="text-6xl mb-4">Loan Assessment Form</p>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="companyLocationCity" className="block text-lg text-left">Which city is your company registered in?</label>
            <input type="text" id="companyLocationCity" name="companyLocationCity" value={formData.companyLocationCity} onChange={handleChange} className="px-4 py-2 bg-gray-100 rounded-lg w-full" />
          </div>
          <div className="mb-4">
            <label htmlFor="companyLocationState" className="block text-lg text-left">Which state is your company registered in?</label>
            <input type="text" id="companyLocationState" name="companyLocationState" value={formData.companyLocationState} onChange={handleChange} className="px-4 py-2 bg-gray-100 rounded-lg w-full" />
          </div>
          <div className="mb-4">
            <label htmlFor="bankName" className="block text-lg text-left">Which bank is your company applying for the loan with?</label>
            <input type="text" id="bankName" name="bankName" value={formData.bankName} onChange={handleChange} className="px-4 py-2 bg-gray-100 rounded-lg w-full" />
          </div>
          <div className="mb-4">
            <label htmlFor="bankLocationState" className="block text-lg text-left">In which state is the bank located in?</label>
            <input type="text" id="bankLocationState" name="bankLocationState" value={formData.bankLocationState} onChange={handleChange} className="px-4 py-2 bg-gray-100 rounded-lg w-full" />
          </div>
          <div className="mb-4">
            <label htmlFor="naicsCode" className="block text-lg text-left">What is the NAICS code for your company's industry? (You can find this on your business registration documents.)</label>
            <input type="text" id="naicsCode" name="naicsCode" value={formData.naicsCode} onChange={handleChange} className="px-4 py-2 bg-gray-100 rounded-lg w-full" />
          </div>
          <div className="mb-4">
            <label htmlFor="loanTerm" className="block text-lg text-left">What loan term is your company applying for? (in months)</label>
            <input type="text" id="loanTerm" name="loanTerm" value={formData.loanTerm} onChange={handleChange} className="px-4 py-2 bg-gray-100 rounded-lg w-full" />
          </div>
          <div className="mb-4">
            <label htmlFor="grossApprovalAmount" className="block text-lg text-left">What is the gross approval amount your company is applying for? (in USD)</label>
            <input type="text" id="grossApprovalAmount" name="grossApprovalAmount" value={formData.grossApprovalAmount} onChange={handleChange} className="px-4 py-2 bg-gray-100 rounded-lg w-full" />
          </div>
          <div className="mb-4">
            <label htmlFor="realEstateLoan" className="block text-lg text-left">Is your company planning to use this loan for real estate purposes?</label>
            <input type="text" id="realEstateLoan" name="realEstateLoan" value={formData.realEstateLoan} onChange={handleChange} className="px-4 py-2 bg-gray-100 rounded-lg w-full" />
          </div>
          <div className="mb-4">
            <label htmlFor="businessLocation" className="block text-lg text-left">Is your company's primary location in an urban or rural area?</label>
            <input type="text" id="businessLocation" name="businessLocation" value={formData.businessLocation} onChange={handleChange} className="px-4 py-2 bg-gray-100 rounded-lg w-full" />
          </div>
          <div className="mb-4">
            <label htmlFor="revolvingCredit" className="block text-lg text-left">Does your company have a revolving line of credit with the bank?</label>
            <input type="text" id="revolvingCredit" name="revolvingCredit" value={formData.revolvingCredit} onChange={handleChange} className="px-4 py-2 bg-gray-100 rounded-lg w-full" />
          </div>
          <div className="flex mt-8 justify-center">
            <Link className="w-25" to="/">
              <p className="mr-2 px-4 py-2 text-green-600 text-lg hover:text-green-700 hover:font-semibold">
                Go back
              </p>
            </Link>
            <Link className="w-25" to="/result">
              <button type="submit" className="px-4 py-2 bg-green-600 text-white text-lg rounded-lg shadow-md hover:bg-green-700">Submit</button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
