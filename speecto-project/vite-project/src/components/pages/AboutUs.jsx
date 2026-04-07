import React from "react";
import { NavLink } from "react-router-dom";
import aboutusPicture from "../../assets/asset/aboutus.webp";

const AboutUs = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col lg:flex-row bg-[#081533] min-h-[400px] py-12 lg:py-0 items-center justify-between">
        {/* Left */}
        <div className="flex px-4 w-full lg:w-[55%] p-2 flex-col justify-center mx-auto lg:ml-8 mb-8 lg:mb-0">
          <div>
            <h1 className="text-white text-4xl ">
              About{" "}
              <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent text-4xl ">
                {" "}
                Us
              </span>
            </h1>
          </div>
          <div>
            <p className="text-gray-200 mt-4 text-[1.12rem] pr-7 leading">
              We are keen to deliver highly innovative & technological solutions
              through utilizing a rigorous development process. Our journey has
              taken us from the development of dynamic websites and mobile
              applications to the development of key enterprise solutions
              including.
            </p>
          </div>
          <div className="relative w-36 mt-8 p-[1.5px] rounded-md bg-gradient-to-r from-blue-500 to-blue-300 group overflow-hidden">
            <button
              className="relative px-4 py-2 rounded-md bg-[#081533] text-blue-500 
                            transition-transform duration-300 hover:translate-x-1 w-full"
            >
              {/* Sliding background */}
              <span
                className="absolute left-0 top-0 h-full w-0 bg-gradient-to-r from-blue-500 to-blue-400 
                           ransition-all 
                            duration-300 group-hover:w-full z-0"
              ></span>

              {/* Button text */}
              <span className="relative font-bold z-10 group-hover:text-white">
                {/* <Link to>Our Team</Link> */}
                <NavLink to="/team">Our Team</NavLink>
              </span>
            </button>
          </div>
        </div>

        {/* Right */}
        <div className="w-full lg:w-[45%] flex justify-center mt-6 lg:mt-0">
          <div className="w-[80%] md:w-[60%] lg:w-[66%] lg:ml-16">
            <img src={aboutusPicture} alt="About us" className="w-full h-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
