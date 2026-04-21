import React from "react";
import { NavLink } from "react-router-dom";
import aboutusPicture from "../../assets/asset/aboutus.webp";

const AboutUs = () => {
  return (
    <div className="flex flex-col">
      <div
        className="flex flex-col lg:flex-row bg-[#081533] 
min-h-[300px] sm:min-h-[150px] lg:min-h-[400px] 
py-12 sm:py-8 lg:py-0 
items-center justify-between px-2 sm:px-4 lg:px-6"
      >
        {/* Left */}
        <div className="flex w-full lg:w-[52%] flex-col justify-center items-center lg:items-start text-center lg:text-left mb-8 lg:mb-0">
          <h1 className="text-white font-Nunito font-semibold text-3xl sm:text-4xl">
            ABOUT{" "}
            <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              US
            </span>
          </h1>

          <p className="text-gray-200 mt-4 text-sm sm:text-base lg:text-[1.12rem] leading-relaxed max-w-md lg:max-w-none">
            We are keen to deliver highly innovative & technological solutions
            through utilizing a rigorous development process. Our journey has
            taken us from the development of dynamic websites and mobile
            applications to enterprise solutions.
          </p>

          {/* Button */}
          <div className="relative w-full sm:w-[160px] mt-8 p-[1.5px] rounded-md bg-gradient-to-r from-[#0049ff] to-[#00c3ff] group overflow-hidden">
            <button
              className="relative px-6 py-3 rounded-md bg-[#081533] text-[#0049ff] 
      transition-transform duration-300 hover:translate-x-1 w-full sm:min-w-[150px]"
            >
              <span
                className="absolute left-0 top-0 h-full w-0 
        bg-gradient-to-r from-[#0049ff] to-[#00c3ff] 
        transition-all duration-300 group-hover:w-full z-0"
              ></span>

              <span className="relative font-bold z-10 group-hover:text-white">
                <NavLink to="/team">Our Team</NavLink>
              </span>
            </button>
          </div>
        </div>

        {/* Right */}
        <div className="w-full lg:w-[50%] flex justify-center lg:justify-start mt-6 lg:mt-0">
          <div className="w-[45%] sm:w-[70%] md:w-[60%] lg:w-[68%] lg:ml-16">
            <img
              src={aboutusPicture}
              alt="About us"
              className="w-full object-contain h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
