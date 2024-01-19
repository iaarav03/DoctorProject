import React, { useState } from 'react';
// import './App.css'; // Make sure to import your CSS file here

function Check() {
  const [modalOpen, setModalOpen] = useState(false);

  // Function to open the modal
  const openModal = () => {
    setModalOpen(true);
    document.body.classList.add("modal-open"); // Add blur effect
  };

  // Function to close the modal
  const closeModal = () => {
    setModalOpen(false);
    document.body.classList.remove("modal-open"); // Remove blur effect
  };

  return (
    <div className="App bg-color-primary tracking-wider">
      <header>
        <nav className="container flex justify-between items-center">
          <div className="w-20 py-5 font-bold text-3xl px-10">
            <a href="#home">
              <span className="text-color-blue">Derm</span>Care
            </a>
          </div>
          <div>
            <ul className="hidden lg:flex items-center space-x-16 px-64">
              <li><a href="#about" className="hover:text-color-green ease-in duration-200 text-xl font-semibold">About</a></li>
              <li><a href="#Skin health A-Z" className="hover:text-color-green ease-in duration-200 text-xl font-semibold">Skin Health A-Z</a></li>
              <li><a href="#Clinical Solutions" className="hover:text-color-green ease-in duration-200 text-xl font-semibold">Clinical Solutions</a></li>
              <li><button className="bg-gradient-to-r from-color-lblue to-green-300 hover:from-green-300 hover:to-color-lblue px-5 py-4 rounded-md capitalize font-bold hover:opacity-90 ease-in duration-200 font-l">Sign In</button></li>
            </ul>
          </div>
          {/* Short Screen */}
          <div id="hamburger" className="lg:hidden cursor-pointer z-50">
            <i className="fa-solid fa-bars fa-2x py-10"></i>
          </div>
          <div id="menu" className={`hidden bg-white min-h-[100vh] right-0 top-[20%] w-full flex-items-center absolute inset-0 px-10 ${modalOpen ? 'block' : 'hidden'}`}>
            <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8 py-10">
              <li><a id="hLink" href="#about" className="hover:text-color-green ease-in duration 200 text-2xl  f">About</a></li>
              <li><a id="hLink" href="#Skin health A-Z" className="hover:text-color-green ease-in duration 200 text-2xl  ">Skin Health A-Z</a></li>
              <li><a id="hLink" href="#Clinical Solutions" className="hover:text-color-green ease-in duration 200 text-2xl  ">Clinical Solutions</a></li>
              <li><button className="bg-gradient-to-r from-color-lblue to-green-300 hover:from-green-300 hover:to-color-lblue px-5 py-4 rounded-md capitalize font-bold hover:opacity-90 ease-in duration-200">Sign In</button></li>
            </ul>
          </div>
        </nav>
      </header>
      <main>
        <div className="container px-10 py-10">
          <div className="flex flex-col items-center md:flex-row text-center">
            {/* Left Image (Hidden on Small Screens) */}
            <div className="md:w-1/2 md:pr-10 md:block hidden">
              <img src="20944742.jpg" alt="" className="mt-0 md:mt-8 md:w-auto" />
            </div>
            {/* Text */}
            <div className="md:w-1/2">
              <h1 className="mainline text-3xl md:text-4xl font-bold leading-snug py-10">
                Identify Your Skin Condition using Artificial Intelligence.
              </h1>
              <p className="leading-relaxed mb-10 transition-opacity-0 font-family: 'Merriweather', serif;">
                Snap a photo to instantly learn what your condition is and how to treat it.
              </p>
              <button id="getStartedButton" onClick={openModal} className="bg-gradient-to-r from-color-lblue to-green-300 hover:from-green-300 hover:to-color-lblue px-5 py-4 rounded-md capitalize font-bold hover:opacity-90 ease-in duration-200">
                Get Started
              </button>
            </div>
            {/* Right Image (Hidden on Small Screens) */}
            <div className="md:w-1/2 md:pl-10 md:block hidden">
              <img src="2.jpeg" alt="" className="mt-0 md:mt-8 w-full md:w-auto float-right" />
            </div>
          </div>
          {/* Left Image (Visible on Small Screens) */}
          <div className="text-center md:hidden">
            <img src="Download thank you doctors and nurses, female physician and nurse with medical mask staff hospital for free.jpeg" alt="" className="mt-8 md:w-auto" />
          </div>
        </div>
      </main>
      {/* Modal container (hidden by default) */}
      <div id="photoModal" className={`fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center ${modalOpen ? 'block' : 'hidden'}`}>
        {/* Modal Content */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          {/* Modal Title */}
          <h2 className="text-3xl font-semibold mb-4">Upload or Take a Photo</h2>
          {/* Image inside the Card */}
          <img src="Premium Vector _ Online-doctor-concept-ilustration.jpeg" alt="Photo Card Image" className="mx-auto mb-6 rounded-lg h-48 w-48 object-cover" />
          {/* Instructions */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Instructions:</h3>
            <ul className="list-disc pl-6">
              <li>Find a well-lit area with good lighting.</li>
              <li>Position your camera at eye level.</li>
              <li>Hold the camera steady and take a clear photo of your skin condition.</li>
            </ul>
          </div>
          {/* Buttons for Uploading and Taking Photos */}
          <div className="flex justify-between">
            <button id="uploadButton" className="bg-gradient-to-r from-color-lblue to-green-300 hover:from-green-300 hover:to-color-lblue px-5 py-4 rounded-md capitalize font-bold hover:opacity-90 ease-in duration-200 text-black px-4 py-2 rounded-md mr-2">Upload Photo</button>
            <button id="takePhotoButton" className="bg-gradient-to-r from-color-lblue to-green-300 hover:from-green-300 hover:to-color-lblue px-5 py-4 rounded-md capitalize font-bold hover:opacity-90 ease-in duration-200 text-black px-4 py-2 rounded-md">Take Photo</button>
          </div>
          {/* Photo preview or camera stream goes here */}
        </div>
      </div>
    </div>
  );
}

export default Check;
