import  { useState } from 'react';
import myimage from './assets/dp.jpg'
import AddPatient from './Doctor';// Import the AddPatient component

const Getp = () => {
  const [isAddPatientModalOpen, setAddPatientModalOpen] = useState(false);

  // Function to toggle the modal's visibility
  const toggleAddPatientModal = () => {
    setAddPatientModalOpen(!isAddPatientModalOpen);
  };

  return (
    <div className="flex flex-row mt-10">
      <div className="min-h-screen h- w-1/2">
        <img src={myimage} alt="My Image" />
      </div>
      <div className="min-h-screen w-1/2 bg-gray-200 ">
        <div className="mt-32 px-28">
          <h1 className="text-4xl font-serif ">Patients</h1>
          
          {/* Add Patient button */}
          <button
            className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white font-bold py-2 px-4 rounded-full mt-4"
            onClick={toggleAddPatientModal}
          >
            Add Patient
          </button>

          {/* Render the AddPatient component as a modal */}
          {isAddPatientModalOpen && (
            <div className="fixed inset-0 flex items-center justify-center z-50">
              <div className="absolute inset-0 bg-black opacity-50"></div>
              <div className="bg-white shadow-md rounded-lg p-8 w-96 z-10">
                <AddPatient onClose={toggleAddPatientModal} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Getp;
