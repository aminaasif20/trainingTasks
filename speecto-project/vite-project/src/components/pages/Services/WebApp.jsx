import React from "react";
// import "./index.css";
import common from "../../../assets/asset/common.png";
import { FiChevronsRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { FaCode } from "react-icons/fa6";
import { MdOutlineUpdate } from "react-icons/md";
import { TbBrandNextjs } from "react-icons/tb";

import {
  FaUsers,
  FaRegFileAlt,
  FaPuzzlePiece,
  FaLaptopCode,
  FaReact,
} from "react-icons/fa";
import { SiRedux, SiTailwindcss } from "react-icons/si";

const processList = [
  {
    title: "Requirement Gathering",
    description:
      "Understand the client's needs, goals, and target audience. Define specific features and functionalities of the web app.",
    icon: <FaUsers />,
  },
  {
    title: "Planning and Architecture",
    description:
      "Create a project plan and timeline. Define the technology stack and framework. Design overall architecture and database structure.",
    icon: <FaRegFileAlt />,
  },
  {
    title: "UI/UX Design",
    description:
      "Create wireframes and mockups for UI/UX. Design visual elements and navigation. Ensure UI/UX aligns with the target audience.",
    icon: <FaPuzzlePiece />,
  },
  {
    title: "Front-End Development",
    description:
      "Develop client-side using HTML, CSS, and Next.js. Implement UI design and user interactions. Optimize front-end for responsiveness.",
    icon: <FaLaptopCode />,
  },
  {
    title: "Back-End Development",
    description:
      "Develop server-side using a server-side language. Implement business logic and data processing. Set up a database and create APIs.",
    icon: <FaCode />,
  },
  {
    title: "Integration and Testing",
    description:
      "Integrate components and third-party APIs. Test functionality, performance, and security. Debug and fix issues identified during testing.",
    icon: <FaLaptopCode />,
  },
  {
    title: "Deployment and Hosting",
    description:
      "Choose a suitable hosting environment. Configure the server environment. Deploy the web app and set up infrastructure.",
    icon: <FaLaptopCode />,
  },
  {
    title: "User Acceptance Testing (UAT)",
    description:
      "Release the web app to a limited user group for UAT. Gather feedback and address concerns. Make necessary revisions based on feedback.",
    icon: <FaLaptopCode />,
  },
  {
    title: "Launch and Maintenance",
    description:
      "Prepare the web app for the official launch. Monitor performance and address issues. Provide ongoing support and maintenance.",
    icon: <FaLaptopCode />,
  },
  {
    title: "Continuous Improvement",
    description:
      "Gather user feedback and analytics data. Continuously enhance and optimize web apps. Stay updated with security patches and technology advancements.",
    icon: <MdOutlineUpdate />,
  },
];

const WebApp = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="w-full flex flex-col">
        {/* Breadcrumb */}

        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row bg-[#081533] min-h-[410px] w-full items-start lg:items-start lg:py-0">
          {/* Left Section */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left lg:pl-6 mt-4 lg:mt-14 lg:pr-6 max-w-full lg:w-1/2">
            <h2 className="text-2xl font-bold md:text-4xl text-white font-nunito py-4 ">
              WEB APP
              <span className="bg-gradient-to-r text-nunito from-blue-600 md:px-1 px-1 lg:px-4 md:py-8 py-3 to-blue-400 bg-clip-text text-transparent">
                DEVELOPMENT
              </span>
            </h2>
            <p className="text-gray-100 text-[1rem] md:text-[1.12rem] w-full text-nunito md:leading-7 leading-6 px-4 lg:px-0 lg:pr-8  lg:mb-2">
              Product design is a multidisciplinary approach that combines user
              research, Fusing creativity, user-centered thinking, and
              functional aesthetics to craft innovative and delightful products
              that solve real-world problems and enhance user experiences.
            </p>

            {/* Button */}
            <div className="relative w-[90%] lg:w-36 p-[1.5px] mt-3 lg:mt-2 rounded-[10px] bg-gradient-to-r from-blue-500 to-blue-300 group overflow-hidden">
              <button
                className="relative  py-2 md:py-3 rounded-[10px] bg-[#081533] text-blue-500 
                              transition-transform duration-300 hover:translate-x-1 w-full flex items-center justify-center"
              >
                {/* Sliding background */}
                <span
                  className="absolute bg-gradient-to-r from-[#0065ff] to-[#00bbff] left-0 top-0 h-full w-0  
                             transition-all duration-300 group-hover:w-full z-0"
                ></span>

                {/* Button text */}
                <span className="relative bg-gradient-to-r text-nunito from-[#0065ff] to-[#00bbff] bg-clip-text text-transparent  font-nunito md:text-lg text-base font-bold  z-10 group-hover:text-white">
                  Get Started
                </span>
              </button>
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full  lg:pt-10 lg:w-1/2 flex items-center justify-center mt-6 lg:mt-0 min-h-[200px]">
            <div className="w-[200px] h-[200px] sm:w-[280px] sm:h-[280px] lg:w-[350px] lg:h-[350px]">
              {/* <HomeAnimation /> */}
              <img
                src={common}
                className="w-full h-full object-cover"
                alt="image"
              />
            </div>
          </div>
        </div>

        <div className="w-full my-8 md:mt-18 mt-4 bg-white px-4 lg:px-6 py-4 flex items-center gap-2 font-nunito text-[15px]">
          <span
            className="text-gray-500 cursor-pointer hover:text-blue-600 transition-colors font-medium cursor-pointer"
            onClick={() => navigate("/services")}
          >
            Our services
          </span>
          <FiChevronsRight className="text-gray-400 text-lg" />
          <span className="text-black font-nunito font-bold">
            Product/SAAS Development
          </span>
        </div>

        {/* Process List Section */}
        <div className="w-full bg-white mt-4 font-semibold lg:px-6 pb-20 flex flex-col gap-4 md:gap-10">
          {processList.map((item, index) => (
            <div key={index} className="flex px-4 lg:px-0 flex-col">
              <div className="flex items-start gap-4 lg:gap-4">
                <div className="w-10 h-10 lg:w-13 lg:h-13 rounded-xl lg:rounded-2xl bg-gradient-to-r from-[#0058ff] to-[#00a8ff] text-white flex-shrink-0 flex items-center justify-center text-xl lg:text-3xl">
                  {item.icon}
                </div>
                <div className="flex flex-col pt-1 lg:pt-0">
                  <h3 className="text-[1.1rem] lg:text-[1.2rem] font-nunito font-medium text-gray-900 mb-2 leading-none">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 font-nunito text-[16px] lg:text-[17px]">
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

        {/* Technologies Section */}
        <div className="w-full bg-white lg:px-6  pt-4 flex flex-col gap-8">
          <h2 className="text-[1.3rem] lg:text-[1.7rem] font-bold font-nunito text-gray-900 ml-4 lg:ml-0">
            Technologies
          </h2>
          <div className="flex flex-wrap gap-4 justify-around px-4 lg:px-0">
            {[
              { icon: <FaReact className="text-5xl sm:text-7xl" /> },
              { icon: <TbBrandNextjs className="text-5xl sm:text-7xl" /> },
              { icon: <SiRedux className="text-5xl sm:text-7xl" /> },
              { icon: <SiTailwindcss className="text-5xl sm:text-7xl" /> },
              {
                icon: (
                  <div className="w-12 h-12 sm:w-[60px] sm:h-[60px] border-[2px] border-current flex items-center justify-center text-lg sm:text-2xl font-bold">
                    JS
                  </div>
                ),
              },
            ].map((tech, index) => (
              <div
                key={index}
                className="relative group overflow-hidden w-28 h-28 sm:w-[170px] sm:h-[170px] bg-[#f2f4f8] rounded-[16px] flex items-center justify-center cursor-pointer shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="absolute top-1/2 left-1/2 w-[150%] h-[150%] bg-gradient-to-r from-[#0051ff] to-[#00beff] rounded-full transform -translate-x-1/2 -translate-y-1/2 scale-0 group-hover:scale-100 transition-transform duration-500 ease-out z-0"></div>
                <div className="relative z-10 text-gray-500 group-hover:text-white transition-colors duration-300 flex items-center justify-center">
                  {tech.icon}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default WebApp;
