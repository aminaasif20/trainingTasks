import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/asset/speectoLogo.png";
import "../App.css";


const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="bg-[#081533] text-white  py-5 flex items-center justify-between sticky top-0 z-50 shadow-lg">
        <div className="w-40 ml-6">
          <img src={logo} alt="logoImage" />
        </div>

        <nav className="hidden md:flex gap-8 lg:ml-8 text-md font-medium mr-8">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "relative text-white font-bold after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-1 after:w-4 after:h-[5px] after:bg-white"
                : "text-[#6A6A6A] cursor-pointer"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="services"
            className={({ isActive }) =>
              isActive
                ? "relative text-white font-bold after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-1 after:w-4 after:h-[5px] after:bg-white"
                : "text-[#6A6A6A]  cursor-pointer"
            }
          >
            Services
          </NavLink>

          <NavLink
            to="contact"
            className={({ isActive }) =>
              isActive
                ? "relative text-white font-bold after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-1 after:w-4 after:h-[5px] after:bg-white"
                : "text-[#6A6A6A] cursor-pointer"
            }
          >
            Contact Us
          </NavLink>

          <NavLink
            to="team"
            className={({ isActive }) =>
              isActive
                ? "relative text-white font-bold after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-1 after:w-4 after:h-[5px] after:bg-white"
                : "text-[#6A6A6A] cursor-pointer"
            }
          >
            Our Team
          </NavLink>
          <NavLink
            to="about us"
            className={({ isActive }) =>
              isActive
                ? "relative text-white font-bold after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-1 after:w-4 after:h-[5px] after:bg-white"
                : "text-[#6A6A6A] cursor-pointer"
            }
          >
            About Us
          </NavLink>
        </nav>

        <div className="flex items-center justify-start gap-4 mr-6">
          <button className="hidden md:block bg-white text-black mx-2 px-5 py-3 rounded-lg font-semibold text-[16px]">
            Get Started
          </button>

          <div
            onClick={() => setToggle(!toggle)}
            className="w-16 h-8 bg-[#A7C7E7] rounded-full relative overflow-hidden cursor-pointer shadow-inner"
          >
            {/* The Static Sun: Vertically Centered */}
            <div className="absolute left-2 top-1/2 -translate-y-1/2 w-5 h-5 bg-[#FFD700] rounded-full z-0 shadow-[0_0_8px_#FFD700]"></div>

            {/* Top Cloud: Positioned with mt-2 (approx 8px) */}
            <div className="cloud-top absolute z-20 top-2">
              <div className="w-6 h-3 bg-white rounded-full relative">
                <div className="absolute -top-1.5 left-1 w-3 h-3 bg-white rounded-full"></div>
                <div className="absolute -top-1 left-3 w-2 h-2 bg-white rounded-full"></div>
              </div>
            </div>

            {/* Bottom Cloud: Touches the bottom boundary */}
            <div className="cloud-bottom absolute z-20 bottom-0">
              <div className="w-6 h-3 bg-white rounded-full relative">
                <div className="absolute -top-1.5 left-1 w-3 h-3 bg-white rounded-full"></div>
                <div className="absolute -top-1 left-3 w-2 h-2 bg-white rounded-full"></div>
              </div>
            </div>
          </div>




          <button
            className="md:hidden text-2xl"
            onClick={() => setMenuOpen(true)}
          >
            ☰
          </button>
        </div>
      </nav>

      <div
        className={`fixed top-0 left-0 h-full w-72 bg-gradient-to-b from-blue-600 to-cyan-500 text-white p-8 transform ${menuOpen ? "translate-x-0" : "-translate-x-full"
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
