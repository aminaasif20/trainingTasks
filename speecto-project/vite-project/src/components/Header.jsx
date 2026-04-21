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

      {/* Backdrop overlay — closes menu when tapped */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-[90] md:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-[280px] max-w-[85vw] bg-gradient-to-b from-blue-700 to-cyan-600 text-white flex flex-col z-[100] transform transition-transform duration-300 md:hidden ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header row: logo + close */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/20">
          <div className="w-28">
            <img src={logo} alt="logoImage" />
          </div>
          <button
            className="text-3xl leading-none"
            onClick={() => setMenuOpen(false)}
          >
            ×
          </button>
        </div>

        {/* Scrollable link list */}
        <nav className="flex-1 overflow-y-auto px-6 py-6">
          <ul className="space-y-5 text-lg font-medium">
            <li>
              <NavLink to="/" onClick={() => setMenuOpen(false)}
                className={({ isActive }) => isActive ? "text-white font-bold" : "text-white/80 hover:text-white"}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/services" onClick={() => setMenuOpen(false)}
                className={({ isActive }) => isActive ? "text-white font-bold" : "text-white/80 hover:text-white"}>
                Services
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" onClick={() => setMenuOpen(false)}
                className={({ isActive }) => isActive ? "text-white font-bold" : "text-white/80 hover:text-white"}>
                Contact Us
              </NavLink>
            </li>
            <li>
              <NavLink to="/team" onClick={() => setMenuOpen(false)}
                className={({ isActive }) => isActive ? "text-white font-bold" : "text-white/80 hover:text-white"}>
                Our Team
              </NavLink>
            </li>
            <li>
              <NavLink to="/about us" onClick={() => setMenuOpen(false)}
                className={({ isActive }) => isActive ? "text-white font-bold" : "text-white/80 hover:text-white"}>
                About Us
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* Get Started button pinned to bottom */}
        <div className="px-6 py-6 border-t border-white/20">
          <button className="w-full bg-white text-blue-700 py-3 rounded-xl font-semibold hover:bg-white/90 transition-colors">
            Get Started
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
