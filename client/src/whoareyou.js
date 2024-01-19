import React from 'react';
import { useNavigate } from 'react-router-dom';
import myimage from './assets/patient-doctor.avif'

const QuestionComponent = () => {
  const navigate = useNavigate();

  const handleClinicalClick = () => {
    navigate('/register'); // Redirect the user to the '/login' route for clinical users
  };

  const handlePatientClick = () => {
    navigate('/about'); // Redirect the user to the '/' route for patient users
  };

  return (
    <div className='bg-blue-900 h-screen flex flex-col items-center'>
      <div className='text-center'>
        <div className='mt-36 text-4xl text-white font-bold font-libreBaskerville'>Join DermCare today.</div>
         
        <div className='mt-20'>
          <div>
            <h1 className='mb-2 text-white font-bold text-xl pr-80'>Account type:</h1>
            {/* <img src={myimage} alt="My Image" /> */}
          </div>
          <button
            className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
            onClick={handlePatientClick} // Call handlePatientClick on click
          >
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Patient
            </span>
          </button>
          <button
            className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
            onClick={handleClinicalClick} // Call handleClinicalClick on click
          >
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Doctor
            </span>
          </button>
        </div>
        {/* <img src={myimage} className='' alt="My Image" /> */}
      </div>
    </div>
  );
};

export default QuestionComponent;
