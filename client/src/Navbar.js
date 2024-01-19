import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <nav className="container flex justify-between items-center bg-gradient-to-r from-green-400 to-green-300">
      <div className="w-20 py-5 font-bold text-3xl px-10">
       <Link to="/body">
          <span className="text-blue-600">Derm</span>
          <span className="text-black">Care</span>
        </Link>
      </div>
      <div>
        <ul className="hidden lg:flex items-center space-x-16 px-64">
          <li><a className="hover:text-color-green ease-in duration-200 text-xl font-semibold">About</a></li>
          <li> <Link to="/about" className="hover:text-color-green ease-in duration-200 text-xl font-semibold">Skin Health A-Z</Link></li>
          <li><a href="#Clinical Solutions" className="hover:text-color-green ease-in duration-200 text-xl font-semibold">Clinical Solutions</a></li>
          <li><button className="bg-gradient-to-r from-blue-400 to-purple-500 hover:from-purple-500 hover:to-blue-400 px-5 py-4 rounded-md capitalize font-bold hover:opacity-90 ease-in duration-200 font-l">Sign In</button></li>
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
  );
}

export default Navbar;
