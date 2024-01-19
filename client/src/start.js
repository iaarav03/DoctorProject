import React from 'react';
import { useNavigate } from 'react-router-dom';
import myimage from './assets/right.jpg'
import leftimg from './assets/left.jpg'

function Body() {
  const navigate=useNavigate();
  const handleSubmit = () => {
    navigate('/'); // Redirect the user to the '/login' route for clinical users
  };




  return (
    <main>
      <div className="container px-10 py-10">
        <div className="flex flex-col items-center md:flex-row text-center">
          {/* Left Image (Hidden on Small Screens) */}
          <div className="md:w-1/2 md:pr-10 md:block hidden">
            <img src={leftimg} alt="" className="mt-0 md:mt-8 md:w-auto" />
          </div>
          
          {/* Text */}
          <div className="md:w-1/2">
            <h1 className="mainline text-3xl md:text-4xl font-bold leading-snug py-10">
              Identify Your Skin Condition using Artificial Intelligence.
            </h1>
            <p className="leading-relaxed mb-10 font-family: 'Merriweather', serif;">
              Snap a photo to instantly learn what your condition is and how to treat it.
            </p>
            <button
             onClick={handleSubmit}
              id="getStartedButton"
              className="bg-gradient-to-r from-blue-400 to-purple-500 hover:from-purple-500 hover:to-blue-400 px-5 py-4 rounded-md capitalize font-bold hover:opacity-90 ease-in duration-500"
            >
              Get Started
            </button>
          </div>
          
          {/* Right Image (Hidden on Small Screens) */}
          <div className="md:w-1/2 md:pl-10 md:block hidden">
            <img src={myimage} alt="" className="mt-0 md:mt-8 w-full md:w-auto float-right" />
          </div>
        </div>
        
        {/* Left Image (Visible on Small Screens) */}
        <div className="text-center md:hidden">
          <img
            src="Download thank you doctors and nurses, female physician and nurse with medical mask staff hospital for free.jpeg"
            alt=""
            className="mt-8 md:w-auto"
          />
        </div>
      </div>
    </main>
  );
}

export default Body;
