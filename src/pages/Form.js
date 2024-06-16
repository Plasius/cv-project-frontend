import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import CityInput from '../components/CityInput';
import BankInput from '../components/BankInput';
import axios from 'axios';

function Form() {
  const [formData, setFormData] = useState({
    City: '',
    State: '',
    Bank: '',
    BankState: '',
    NAICS: '',
    Term: '',
    NoEmp: 0,
    UrbanRural: '',
    RevLineCr: '',
    GrAppv: '',
    RealEstate: '',
    Recession: 0,
    Default: 0,
  });


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };


  const navigate = useNavigate();

  const apiURL = process.env.REACT_APP_BACKEND_API_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      console.log(formData);
      
      const response = await axios.post(apiURL+'/api/v1/form', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.status === 200) {
        const data = response.data;
        const hasHighDefaultRisk = data.high_default_risk == "1";

        navigate('/result', { state: { hasHighDefaultRisk } });
      } else {
        throw new Error('Network response was not ok');
      }

    } catch (error) {
      console.error('Error:', error);
      console.log(error.status)
    }
    
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-white mt-20 mb-20 rounded-lg">
      <div className="bg-white text-center p-8 rounded-lg shadow-lg">
        <p className="text-6xl mb-4">Loan Assessment Form</p>
        <form onSubmit={handleSubmit}>

          <CityInput formData={formData} setFormData={setFormData} />

          <div className="mb-4">
            <label htmlFor="companyLocationState" className="block text-lg text-left">Which state is your company registered in?</label>
            <select required id="companyLocationState" name="State" value={formData.companyLocationState} onChange={handleChange} className="px-4 py-2 bg-gray-100 rounded-lg w-full">
              <option value="">Select a state</option>
              <option value="AL">Alabama</option>
              <option value="AK">Alaska</option>
              <option value="AZ">Arizona</option>
              <option value="AR">Arkansas</option>
              <option value="CA">California</option>
              <option value="CO">Colorado</option>
              <option value="CT">Connecticut</option>
              <option value="DE">Delaware</option>
              <option value="FL">Florida</option>
              <option value="GA">Georgia</option>
              <option value="HI">Hawaii</option>
              <option value="ID">Idaho</option>
              <option value="IL">Illinois</option>
              <option value="IN">Indiana</option>
              <option value="IA">Iowa</option>
              <option value="KS">Kansas</option>
              <option value="KY">Kentucky</option>
              <option value="LA">Louisiana</option>
              <option value="ME">Maine</option>
              <option value="MD">Maryland</option>
              <option value="MA">Massachusetts</option>
              <option value="MI">Michigan</option>
              <option value="MN">Minnesota</option>
              <option value="MS">Mississippi</option>
              <option value="MO">Missouri</option>
              <option value="MT">Montana</option>
              <option value="NE">Nebraska</option>
              <option value="NV">Nevada</option>
              <option value="NH">New Hampshire</option>
              <option value="NJ">New Jersey</option>
              <option value="NM">New Mexico</option>
              <option value="NY">New York</option>
              <option value="NC">North Carolina</option>
              <option value="ND">North Dakota</option>
              <option value="OH">Ohio</option>
              <option value="OK">Oklahoma</option>
              <option value="OR">Oregon</option>
              <option value="PA">Pennsylvania</option>
              <option value="RI">Rhode Island</option>
              <option value="SC">South Carolina</option>
              <option value="SD">South Dakota</option>
              <option value="TN">Tennessee</option>
              <option value="TX">Texas</option>
              <option value="UT">Utah</option>
              <option value="VT">Vermont</option>
              <option value="VA">Virginia</option>
              <option value="WA">Washington</option>
              <option value="WV">West Virginia</option>
              <option value="WI">Wisconsin</option>
              <option value="WY">Wyoming</option>
            </select>
          </div>

          <BankInput formData={formData} setFormData={setFormData} />

          <div className="mb-4">
            <label htmlFor="bankLocationState" className="block text-lg text-left">In which state is the bank located?</label>
            <select required id="bankLocationState" name="BankState" value={formData.bankLocationState} onChange={handleChange} className="px-4 py-2 bg-gray-100 rounded-lg w-full">
              <option value="">Select a state</option>
              <option value="AL">Alabama</option>
              <option value="AK">Alaska</option>
              <option value="AZ">Arizona</option>
              <option value="AR">Arkansas</option>
              <option value="CA">California</option>
              <option value="CO">Colorado</option>
              <option value="CT">Connecticut</option>
              <option value="DE">Delaware</option>
              <option value="FL">Florida</option>
              <option value="GA">Georgia</option>
              <option value="HI">Hawaii</option>
              <option value="ID">Idaho</option>
              <option value="IL">Illinois</option>
              <option value="IN">Indiana</option>
              <option value="IA">Iowa</option>
              <option value="KS">Kansas</option>
              <option value="KY">Kentucky</option>
              <option value="LA">Louisiana</option>
              <option value="ME">Maine</option>
              <option value="MD">Maryland</option>
              <option value="MA">Massachusetts</option>
              <option value="MI">Michigan</option>
              <option value="MN">Minnesota</option>
              <option value="MS">Mississippi</option>
              <option value="MO">Missouri</option>
              <option value="MT">Montana</option>
              <option value="NE">Nebraska</option>
              <option value="NV">Nevada</option>
              <option value="NH">New Hampshire</option>
              <option value="NJ">New Jersey</option>
              <option value="NM">New Mexico</option>
              <option value="NY">New York</option>
              <option value="NC">North Carolina</option>
              <option value="ND">North Dakota</option>
              <option value="OH">Ohio</option>
              <option value="OK">Oklahoma</option>
              <option value="OR">Oregon</option>
              <option value="PA">Pennsylvania</option>
              <option value="RI">Rhode Island</option>
              <option value="SC">South Carolina</option>
              <option value="SD">South Dakota</option>
              <option value="TN">Tennessee</option>
              <option value="TX">Texas</option>
              <option value="UT">Utah</option>
              <option value="VT">Vermont</option>
              <option value="VA">Virginia</option>
              <option value="WA">Washington</option>
              <option value="WV">West Virginia</option>
              <option value="WI">Wisconsin</option>
              <option value="WY">Wyoming</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="companyNAICSCode" className="block text-lg text-left">What is the NAICS code for your company's industry? (You can find this on your business registration documents.)</label>
            <select required id="companyNAICSCode" name="NAICS" value={formData.companyNAICSCode} onChange={handleChange} className="px-4 py-2 bg-gray-100 rounded-lg w-full">
              <option value="">Select a NAICS code</option>
              <option value="11">11 - Agriculture, Forestry, Fishing and Hunting</option>
              <option value="21">21 - Mining, Quarrying, and Oil and Gas Extraction</option>
              <option value="22">22 - Utilities</option>
              <option value="23">23 - Construction</option>
              <option value="31">31-33 - Manufacturing</option>
              <option value="42">42 - Wholesale Trade</option>
              <option value="44">44-45 - Retail Trade</option>
              <option value="48">48-49 - Transportation and Warehousing</option>
              <option value="51">51 - Information</option>
              <option value="52">52 - Finance and Insurance</option>
              <option value="53">53 - Real Estate and Rental and Leasing</option>
              <option value="54">54 - Professional, Scientific, and Technical Services</option>
              <option value="55">55 - Management of Companies and Enterprises</option>
              <option value="56">56 - Administrative and Support and Waste Management and Remediation Services</option>
              <option value="61">61 - Educational Services</option>
              <option value="62">62 - Health Care and Social Assistance</option>
              <option value="71">71 - Arts, Entertainment, and Recreation</option>
              <option value="72">72 - Accommodation and Food Services</option>
              <option value="81">81 - Other Services (except Public Administration)</option>
              <option value="92">92 - Public Administration</option>
            </select>
          </div>

          <div className="mb-4">
            <label htmlFor="noEmp" className="block text-lg text-left">What is the current number of employees in the company?</label>
            <input 
              required
              type="number" 
              id="noEmp" 
              name="NoEmp"
              placeholder='e.g. 5'
              value={formData.noEmp} 
              onChange={handleChange} 
              className="px-4 py-2 bg-gray-100 rounded-lg w-full" 
              min="0" 
              step="1" 
            />
          </div>

          <div className="mb-4">
            <label htmlFor="loanTerm" className="block text-lg text-left">What loan term is your company applying for? (in months)</label>
            <input 
              required
              type="number" 
              id="loanTerm" 
              name="Term"
              placeholder='e.g. 12'
              value={formData.Term} 
              onChange={handleChange} 
              className="px-4 py-2 bg-gray-100 rounded-lg w-full" 
              min="0" 
              step="1" 
            />
          </div>
          <div className="mb-4">
            <label htmlFor="grossApprovalAmount" className="block text-lg text-left">What is the gross amount your company is applying for? (in USD)</label>
            <input 
              required
              type="number" 
              id="grossApprovalAmount" 
              name="GrAppv" 
              placeholder='e.g. 120000'
              value={formData.GrAppv} 
              onChange={handleChange} 
              className="px-4 py-2 bg-gray-100 rounded-lg w-full" 
              min="0" 
              step="0.01" 
            />
          </div>

          <div className="mb-4">
            <label htmlFor="realEstateLoan" className="block text-lg text-left">Is your company planning to use this loan for real estate purposes?</label>
            <select required id="realEstateLoan" name="RealEstate" value={formData.realEstateLoan} onChange={handleChange} className="px-4 py-2 bg-gray-100 rounded-lg w-full">
              <option value="">Select an option</option>
              <option value="1">Yes</option>
              <option value="0">No</option>
            </select>
          </div>

          <div className="mb-4">
            <label htmlFor="urbanRural" className="block text-lg text-left">Is your company's primary location in an urban or rural area?</label>
            <select required id="urbanRural" name="UrbanRural" value={formData.primaryLocation} onChange={handleChange} className="px-4 py-2 bg-gray-100 rounded-lg w-full">
              <option value="">Select an option</option>
              <option value="1">Urban</option>
              <option value="2">Rural</option>
            </select>
          </div>

          <div className="mb-4">
            <label htmlFor="revolvingLineOfCredit" className="block text-lg text-left">Does your company have a revolving line of credit with the bank?</label>
            <select required id="revolvingLineOfCredit" name="RevLineCr" value={formData.revolvingLineOfCredit} onChange={handleChange} className="px-4 py-2 bg-gray-100 rounded-lg w-full">
              <option value="">Select an option</option>
              <option value="Y">Yes</option>
              <option value="N">No</option>
            </select>
          </div>

          <div className="flex mt-8 justify-center">
            <Link className="w-25" to="/">
              <p className="mr-2 px-4 py-2 text-green-600 text-lg hover:text-green-700 hover:font-semibold">
                Go back
              </p>
            </Link>
              <button type="submit" className="w-25 px-4 py-2 bg-green-600 text-white text-lg rounded-lg shadow-md hover:bg-green-700">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
