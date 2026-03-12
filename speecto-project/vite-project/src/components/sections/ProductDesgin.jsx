import React from "react";
import "./Sections.css";

import womanStanding from "../../assets/asset/fman2LightVector.webp";
import man1 from "../../assets/asset/man1LightVector.webp";
import plant from "../../assets/asset/plantVectorLight.webp";
import clip from "../../assets/asset/clipVector.webp";
import chatBubble from "../../assets/asset/contactUsAnimateMessage.webp";
import windowBlind from "../../assets/asset/windowVectorLight.webp";
import paperLeft from "../../assets/asset/copyVectorLight.webp";
import paperRight from "../../assets/asset/copyVectorLight1.webp";

const ProductDesign = () => {
  return (
    <div className="flex flex-col items-center bg-white px-5 py-10">

      {/* HEADER */}
      <div className="flex flex-col items-center mb-10">
        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-pink-600 to-pink-400 text-white font-bold shadow-lg mb-4">
          2
        </div>

        <h2 className="text-pink-600 tracking-[5px] text-xl font-semibold uppercase">
          PRODUCT DESIGN
        </h2>
      </div>

      {/* MAIN CONTENT */}
      <div className="flex max-w-6xl w-full">

        {/* LEFT COLUMN */}
        
        <div >

          <div className="timeline-line"></div>

          {[
            {
              title:"Elicitation",
              text:"This step involves identifying stakeholders and understanding their needs."
            },
            {
              title:"Analysis & Suggestions",
              text:"We analyze requirements and suggest trending ideas and features."
            },
            {
              title:"Document Requirements",
              text:"Document requirements in a clear and concise manner."
            },
            {
              title:"Verification & Validation",
              text:"Verify correctness and validate suitability of requirements."
            }
          ].map((item,index)=>(
            
            <div key={index} className="relative my-5">

              <div className="timeline-dot"></div>

              <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-3 shadow-sm">
                <svg width="24" height="24" fill="none" stroke="#666" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                </svg>
              </div>

              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {item.title}
              </h3>

              <p className="text-gray-500 max-w-md leading-relaxed">
                {item.text}
              </p>

            </div>

          ))}

        </div>
        <div className=" pl-2 relative flex flex-col justify-center">
          <div className="timeline-line"></div>
        </div>
        
        {/* Right section */}
        <div className="flex-1 flex justify-center items-start relative">

          <div className="sticky top-20 w-full flex justify-start">

            
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDesign;