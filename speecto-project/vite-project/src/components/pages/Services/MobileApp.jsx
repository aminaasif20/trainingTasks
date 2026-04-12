import React from "react";
// import "./index.css";
import common from "../../../assets/asset/common.png";
import { FiChevronsRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { FaCode } from "react-icons/fa6";
import { MdOutlineUpdate } from "react-icons/md";

import {
  FaUsers,
  FaRegFileAlt,
  FaPuzzlePiece,
  FaLaptopCode,
} from "react-icons/fa";

const processList = [
  {
    title: "Conceptualization",
    description:
      "Identify the app's purpose and goals. Conduct market research. Define core features.",
    icon: <FaUsers />,
  },
  {
    title: "Planning and Design",
    description:
      "Create a project plan and timeline. Develop wireframes and prototypes. Design UI/UX elements.",
    icon: <FaRegFileAlt />,
  },
  {
    title: "App Architecture",
    description:
      "Choose the technology stack and platform. Define the app's architecture and data flow. Plan third-party integrations.",
    icon: <FaPuzzlePiece />,
  },
  {
    title: "Front-End Development",
    description:
      "Implement the app's UI using a programming language. Ensure responsiveness and usability. Integrate APIs.",
    icon: <FaLaptopCode />,
  },
  {
    title: "Back-End Development",
    description:
      "Build server-side components and infrastructure. Set up databases. Integrate external services.",
    icon: <FaCode />,
  },
  {
    title: "Integration and Testing",
    description:
      "Integrate front-end and back-end components. Conduct comprehensive testing. Fix issues and bugs.",
    icon: <FaLaptopCode />,
  },
  {
    title: "Deployment to App Stores",
    description:
      "Prepare an app for submission. Follow app store guidelines. Create descriptions and promotional materials.",
    icon: <FaLaptopCode />,
  },
  {
    title: "Deployment to App Stores",
    description:
      "Prepare an app for submission. Follow app store guidelines. Create descriptions and promotional materials.",
    icon: <FaLaptopCode />,
  },
  {
    title: "Deployment to App Stores",
    description:
      "Prepare an app for submission. Follow app store guidelines. Create descriptions and promotional materials.",
    icon: <FaLaptopCode />,
  },
  {
    title: "Launch and Marketing",
    description:
      "Develop a marketing strategy. Create landing pages and screenshots. Execute the launch plan.",
    icon: <FaLaptopCode />,
  },
  {
    title: "Maintenance and Updates",
    description:
      "Monitor performance and user feedback. Provide regular updates and bug fixes. Analyze user behavior and market trends. Send silent and force updates when necessary.",

    icon: <MdOutlineUpdate />,
  },
];

const MobileApp = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="w-full flex flex-col">
        {/* Breadcrumb */}

        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row bg-[#081533] min-h-[410px] w-full items-start lg:items-start lg:py-0">
          {/* Left Section */}
          <div className="flex flex-col lg:pl-6 mt-12 lg:pr-6 max-w-full lg:w-1/2">
            <h2 className="text-3xl font-semibold md:text-4xl text-white font-poppins py-4 font-Montserrat">
              MOBILE APP
              <span className="bg-gradient-to-r text-Montserrat from-blue-600 px-4 py-8 to-blue-400 bg-clip-text text-transparent">
                DEVELOPMENT
              </span>
            </h2>
            <p className="text-gray-100 text-[1.05rem] md:text-[1.12rem] w-full font-poppins leading-7 pr-8 mb-2">
              Product design is a multidisciplinary approach that combines user
              research, Fusing creativity, user-centered thinking, and
              functional aesthetics to craft innovative and delightful products
              that solve real-world problems and enhance user experiences.
            </p>

            {/* Button */}
            <div className="relative w-36 p-[1.5px] mt-2 rounded-lg bg-gradient-to-r from-blue-500 to-blue-300 group overflow-hidden">
              <button
                className="relative  py-3 rounded-lg bg-[#081533] text-blue-500 
                              transition-transform duration-300 hover:translate-x-1 w-full flex items-center justify-center"
              >
                {/* Sliding background */}
                <span
                  className="absolute left-0 top-0 h-full w-0 bg-gradient-to-r from-blue-500 to-blue-400 
                             transition-all duration-300 group-hover:w-full z-0"
                ></span>

                {/* Button text */}
                <span className="relative font-poppins text-lg font-bold  z-10 group-hover:text-white">
                  Get Start
                </span>
              </button>
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full pt-12 lg:w-1/2 flex items-center justify-center mt-10 lg:mt-0 min-h-[200px]">
            <div className="w-[330px] h-[330px]">
              {/* <HomeAnimation /> */}
              <img
                src={common}
                className="w-full h-full object-cover"
                alt="image"
              />
            </div>
          </div>
        </div>
        <div className="w-full my-8 bg-white  lg:px-6 py-4 flex items-center gap-2 font-Montserrat text-[15px]">
          <span
            className="text-gray-500 cursor-pointer hover:text-blue-600 transition-colors font-medium cursor-pointer"
            onClick={() => navigate("/services")}
          >
            Our services
          </span>
          <FiChevronsRight className="text-gray-400 text-lg" />
          <span className="text-black font-semibold">
            Mobile App Development
          </span>
        </div>

        {/* Process List Section */}
        <div className="w-full bg-white lg:px-6 pb-20 flex flex-col gap-10">
          {processList.map((item, index) => (
            <div key={index} className="flex flex-col">
              <div className="flex items-start gap-4 lg:gap-4">
                <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl lg:rounded-2xl bg-[#0088ff] text-white flex-shrink-0 flex items-center justify-center text-xl lg:text-3xl">
                  {item.icon}
                </div>
                <div className="flex flex-col pt-1 lg:pt-1">
                  <h3 className="text-[1.1rem] lg:text-[1.2rem] font-Montserrat font-medium text-gray-900 mb-2 leading-none">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 font-poppins text-[16px] lg:text-[16px]">
                    {item.description}
                  </p>
                </div>
              </div>
              {/* horizontal separator */}
              {index !== processList.length - 1 && (
                <div className="w-full mt-6 mb-0 border-t border-gray-200"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MobileApp;
