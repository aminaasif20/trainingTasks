import React from "react";
import "./Sections.css";

// Import your provided image assets

import { MdOutlineGroups2 } from "react-icons/md";
import { MdOutlineContentPasteSearch } from "react-icons/md";
import { IoDocumentTextOutline } from "react-icons/io5";
import { VscVerified } from "react-icons/vsc";
import v1 from "../../assets/asset/rs.mp4";
import RequirmentAnimation from "./RequirmentAnimation";

const Requirments = () => {
  return (
    <div className="requirements-section w-full ">
      {/* Top header */}
      <div className="section-header">
        <div className="step-badge">1</div>
        <h2 className=" lg:text-[28px] sm:text-2xl font-bold 2xl:text-[32px] font-nunito tracking-[5px] uppercase bg-gradient-to-r from-[#0065fd] to-[#7ac8f5] bg-clip-text text-transparent">
          REQUIREMENTS ENGINEERING
        </h2>
      </div>
      <div className="flex flex-col lg:flex-row items-center lg:items-start mt-28 lg:mt-2 px-4 w-full max-w-[1200px] mx-auto lg:px-3 sm:px-2 lg:px-3 lg:mr-3">
        <RequirmentAnimation />

        <div className="hidden ml-4 lg:flex relative h-[700px] w-6 justify-center">
          <div className="timeline-line-r"></div>

          {/* dot */}
          <div className="absolute top-34 w-5 h-5 bg-[#2563eb] rounded-full"></div>
          <div className="absolute mt-[320px] w-5 h-5 bg-[#2563eb] rounded-full"></div>
          {/* <div className="absolute mt-[300px]  w-5 h-5 bg-[#2563eb] rounded-full"></div> */}
          <div className="absolute top-[500px] w-5 h-5 bg-[#2563eb] rounded-full"></div>
          <div className="absolute top-[690px] w-5 h-5 bg-[#2563eb] rounded-full"></div>
        </div>

        {/* Right Section  */}
        <div className=" lg:w-[50%] flex flex-col lg:ml-4 items-center lg:items-start text-center lg:items-start lg:text-left ">
          <div className="hidden lg:block bg-white w-auto h-28"></div>

          {[
            {
              title: "Elicitation",
              text: "This step involves identifying stakeholders and understanding their needs.",
              img: <MdOutlineGroups2 />,
            },
            {
              title: "Analysis & Suggestions",
              text: "We analyze requirements and suggest trending ideas and features that can add value to products",
              img: <MdOutlineContentPasteSearch />,
            },
            {
              title: "Document requirements",
              text: "Document requirements in a clear and concise manner",
              img: <IoDocumentTextOutline />,
            },
            {
              title: "Verification and validation",
              text: "Requirement verification checks that the requirements are correct, while requirement validation checks that the requirements are suitable for the intended purpose.",
              img: <VscVerified />,
            },
          ].map((item, index) => (
            <div
              key={index}
              className="relative my-5 lg:ml-6 w-[400px] lg:w-full flex flex-col items-center lg:items-start"
            >
              {/* Image */}
              <div className="w-10 h-10 bg-gray-200 rounded-xl flex items-center justify-center mb-3 shadow-sm mx-auto lg:ml-0 lg:mr-auto">
                <span className="w-6 h-6 object-contain text-2xl text-gray-500">
                  {item.img}
                </span>
              </div>

              {/* Title */}
              <h3 className=" font-Nunito 2xl:text-2xl lg:text-xl  text-lg font-medium  2xl:!text-2xl !text-xl justify-start text-black  mt-[10px] !font-bold text-opacity-100 undefined">
                {item.title}
              </h3>

              {/* Text */}
              <p className="  font-Nunito 2xl:text-xl xl:text-lg text-base font-medium text-center md:text-left  !font-bold mt-[10px] text-gray-500 undefined">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Requirments;
