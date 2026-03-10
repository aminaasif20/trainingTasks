import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/asset/speectoLogo.png"
import "../App.css";


const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <nav className="bg-[#081533] text-white px-6 py-5 flex items-center justify-between">

        {/* Logo */}
        <div className="w-40">
          <img src={logo} alt="logoImage" />
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-9 text-md font-medium">
          <Link to="/" className="border-b-2 border-white">Home</Link>
          <Link to="services" className="text-gray-300 hover:text-white cursor-pointer">Services</Link>
          <Link to="Contact us" className="text-gray-300 hover:text-white cursor-pointer">Contact Us</Link>
          <Link to="our team" className="text-gray-300 hover:text-white cursor-pointer">Our Team</Link>
          <Link to="about us" className="text-gray-300 hover:text-white cursor-pointer">About Us</Link>
        </nav>

        {/* Right Section */}
        <div className="flex items-center gap-3">

          <button className="hidden md:block bg-white text-black mx-2 px-5 py-3 rounded-md font-medium">
            Get Started
          </button>

          {/* Toggle */}
          <div 
          onClick={()=>setToggle(!toggle)}
          className="w-16 h-7  bg-blue-200 rounded-full relative">
            <div className="absolute left-1 top-1 w-4 h-4 bg-yellow-400 rounded-full">
              <div className="cloud">☁️</div>
              
            </div>
            

          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setMenuOpen(true)}
          >
            ☰
          </button>

        </div>
      </nav>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-72 bg-gradient-to-b from-blue-600 to-cyan-500 text-white p-8 transform ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 md:hidden`}
      >

        {/* Close Button */}
        <button
          className="absolute top-5 right-6 text-2xl"
          onClick={() => setMenuOpen(false)}
        >
          ×
        </button>

        {/* Logo */}
        <div className="w-30">
          <img src={logo} alt="logoImage" />
        </div>

        {/* Menu Links */}
        <ul className="space-y-6 text-lg">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">Services</li>
          <li className="cursor-pointer">Contact Us</li>
          <li className="cursor-pointer">Our Team</li>
          <li className="cursor-pointer">About Us</li>
        </ul>

        {/* Button */}
        <button className="mt-10 w-full bg-white text-black py-3 rounded-xl font-medium">
          Get Started
        </button>

      </div>
    </>
  );
};

export default Navbar;