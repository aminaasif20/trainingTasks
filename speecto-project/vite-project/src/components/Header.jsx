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
              `font-Nunito 2xl:text-xl xl:text-lg text-base font-medium relative flex justify-center ${
                isActive
                  ? "text-white1 !font-bold before:w-[30%] before:h-[5px] before:bg-white before:content-[''] before:absolute before:-bottom-[5px]"
                  : "text-[#6A6A6A] cursor-pointer"
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              `font-Nunito 2xl:text-xl xl:text-lg text-base font-medium relative flex justify-center ${
                isActive
                  ? "text-white1 !font-bold before:w-[30%] before:h-[5px] before:bg-white before:content-[''] before:absolute before:-bottom-[5px]"
                  : "text-[#6A6A6A] cursor-pointer"
              }`
            }
          >
            Services
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `font-Nunito 2xl:text-xl xl:text-lg text-base font-medium relative flex justify-center ${
                isActive
                  ? "text-white1 !font-bold before:w-[30%] before:h-[5px] before:bg-white before:content-[''] before:absolute before:-bottom-[5px]"
                  : "text-[#6A6A6A] cursor-pointer"
              }`
            }
          >
            Contact Us
          </NavLink>

          <NavLink
            to="/team"
            className={({ isActive }) =>
              `font-Nunito 2xl:text-xl xl:text-lg text-base font-medium relative flex justify-center ${
                isActive
                  ? "text-white1 !font-bold before:w-[30%] before:h-[5px] before:bg-white before:content-[''] before:absolute before:-bottom-[5px]"
                  : "text-[#6A6A6A] cursor-pointer"
              }`
            }
          >
            Our Team
          </NavLink>
          <NavLink
            to="/about us"
            className={({ isActive }) =>
              `font-Nunito 2xl:text-xl xl:text-lg text-base font-medium relative flex justify-center ${
                isActive
                  ? "text-white1 !font-bold before:w-[30%] before:h-[5px] before:bg-white before:content-[''] before:absolute before:-bottom-[5px]"
                  : "text-[#6A6A6A] cursor-pointer"
              }`
            }
          >
            About Us
          </NavLink>
        </nav>

        <div className="flex items-center justify-start gap-4 mr-6">
          <button className=" cursor-pointer min-w-max py-[14px] px-5 lg:text-lg md:text-base text-sm 2xl:text-xl font-bold text-white rounded-[10px] bg-blue-300 !py-[9px] lg:block hidden !rounded-lg !bg-white !text-black cursor-pointer">
            Get Started
          </button>

          <div
            onClick={() => setToggle(!toggle)}
            className="w-16 h-7 bg-[#A7C7E7] rounded-full relative overflow-hidden cursor-pointer shadow-inner"
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
        className={`fixed top-0 left-0 h-full w-72 bg-gradient-to-b from-blue-600 to-cyan-500 text-white p-8 transform ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 md:hidden z-[100]`}
      >
        <button
          className="absolute top-5 right-6 text-2xl"
          onClick={() => setMenuOpen(false)}
        >
          ×
        </button>

        <div className="w-30 mb-8">
          <img src={logo} alt="logoImage" />
        </div>

        <ul className="space-y-6 text-lg">
          <li>
            <NavLink
              to="/"
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                isActive ? "text-white font-bold" : "text-blue-100"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/services"
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                isActive ? "text-white font-bold" : "text-blue-100"
              }
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                isActive ? "text-white font-bold" : "text-blue-100"
              }
            >
              Contact Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/team"
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                isActive ? "text-white font-bold" : "text-blue-100"
              }
            >
              Our Team
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about us"
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                isActive ? "text-white font-bold" : "text-blue-100"
              }
            >
              About Us
            </NavLink>
          </li>
        </ul>

        {/* Button */}
        {/* <button className="mt-10 w-full bg-white text-black py-3 rounded-xl font-medium">
          Get Started
        </button> */}
      </div>
    </>
  );
};

export default Navbar;
