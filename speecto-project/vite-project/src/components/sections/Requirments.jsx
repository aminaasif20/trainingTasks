import React from "react";
import "./Sections.css";

// Import your provided image assets
import womanStanding from "../../assets/asset/fman2LightVector.webp";
import man1 from "../../assets/asset/man1LightVector.webp";
import plant from "../../assets/asset/plantVectorLight.webp";
import clip from "../../assets/asset/clipVector.webp";
import chatBubble from "../../assets/asset/contactUsAnimateMessage.webp";
import windowBlind from "../../assets/asset/windowVectorLight.webp";
import paperLeft from "../../assets/asset/copyVectorLight.webp";
import paperRight from "../../assets/asset/copyVectorLight1.webp";
import { MdOutlineGroups2 } from "react-icons/md";
import { MdOutlineContentPasteSearch } from "react-icons/md";
import { IoDocumentTextOutline } from "react-icons/io5";
import { VscVerified } from "react-icons/vsc";
import v1 from '../../assets/asset/rs.mp4'

const Requirments = () => {
  return (
    <div className="requirements-section w-full ">
      {/* Top header */}
      <div className="section-header">
        <div className="step-badge">1</div>
        <h2 className="text-center text-[#2563eb] tracking-[5px] text-xl font-semibold uppercase lg:step-title">
          REQUIREMENTS ENGINEERING
        </h2>
      </div>
      <div className="flex flex-col lg:flex-row items-center lg:items-start px-4 w-full max-w-[1200px] mx-auto lg:px-6 sm:px-2 lg:px-8">
        <div className="lg:w-1/2 relative lg:sticky lg:top-32 flex justify-center">
        
          <div className="flex items-start  justify-center lg:mt-32 w-full lg:w-[500px]">
            <div className="req-animation-scaler">
              <div className="scene-wrapper">
                <div className="scene-container">
                  {/* Background Elements */}
                  <img
                    src={windowBlind}
                    className="asset window-blind"
                    alt="window blinds"
                  />

                  <img
                    src={paperLeft}
                    className="asset paper-left"
                    alt="floating paper"
                  />
                  <img
                    src={paperRight}
                    className="asset paper-right"
                    alt="floating paper"
                  />

                  {/* CSS Clock (Asset not provided, drawn with CSS) */}
                  <div className="css-clock">
                    <div className="clock-hand minute"></div>
                    <div className="clock-hand hour"></div>
                  </div>

                  <img
                    src={chatBubble}
                    className="asset chat-bubble bubble-left"
                    alt="chat"
                  />
                  <img
                    src={chatBubble}
                    className="asset chat-bubble bubble-right"
                    alt="chat"
                  />

                  <div className=" giant-clipboard">
                    <img src={clip} className="clipboard-clip" alt="clip" />

                    <div className="clipboard-paper">
                      <div className="box placeholder-box-top"></div>

                      <div className="checklist-item">
                        <div className="lines">
                          <div className="checklist-line"></div>
                          <div className="checklist-line"></div>
                        </div>
                        <div className="checkbox checked">✓</div>
                      </div>
                      <div className="checklist-item">
                        <div className="lines">
                          <div className="checklist-line"></div>
                          <div className="checklist-line"></div>
                        </div>
                        <div className="checkbox checked">✓</div>
                      </div>
                      <div className="checklist-item">
                        <div className="lines">
                          <div className="checklist-line"></div>
                          <div className="checklist-line"></div>
                        </div>
                        <div className="checkbox checked"></div>
                      </div>
                      <div className="checklist-item">
                        <div className="lines">
                          <div className="checklist-line"></div>
                          <div className="checklist-line"></div>
                        </div>
                        <div className="checkbox checked"></div>
                      </div>

                      {/* <div className="box placeholder-box-bottom"></div> */}
                    </div>
                  </div>

                  <img src={man1} className="w-32 z-30 ml-[-50px] lg:asset lg:man1" alt="man1" />
                  <img
                    src={womanStanding}
                    className="ml-4 w-[200px] relative lg:asset lg:woman-standing"
                    alt="woman standing"
                  />
                  {/* <img src={deskTeam} className="asset desk-team" alt="team at desk" /> */}
                  <img
                    src={plant}
                    className="asset plant"
                    alt="plant in vase"
                  />

                  <div className="floor-lines">
                    <div className="floor-line main"></div>
                    <div className="floor-line shadow"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden lg:flex relative h-[700px] w-6 justify-center">
          <div className="timeline-line-r"></div>

          {/* dot */}
          <div className="absolute top-32 w-4 h-4 bg-[#2563eb] rounded-full"></div>
          <div className="absolute mt-[300px] w-4 h-4 bg-[#2563eb] rounded-full"></div>
          <div className="absolute mt-[300px]  w-4 h-4 bg-[#2563eb] rounded-full"></div>
          <div className="absolute top-[500px] w-4 h-4 bg-[#2563eb] rounded-full"></div>
          <div className="absolute top-[700px] w-4 h-4 bg-[#2563eb] rounded-full"></div>
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
              className="relative my-5 w-[360px] lg:w-full flex flex-col items-center lg:items-start"
            >
              {/* Image */}
              <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-3 shadow-sm mx-auto lg:ml-0 lg:mr-auto">
                <span className="w-6 h-6 object-contain text-2xl text-gray-500">
                  {item.img}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {item.title}
              </h3>

              {/* Text */}
              <p className="lg:pt-1 lg:pr-1  text-[13.9px] font-semibold lg:mx-1 w-full lg:w-auto text-center lg:text-start text-gray-500 leading-relaxed">
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
