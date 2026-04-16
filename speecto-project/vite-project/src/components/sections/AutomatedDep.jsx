import React from "react";
import "./Sections.css";

import systemDesignLightBg from "../../assets/asset/systemDesignLightBg (1).webp";
import systemDesignLightMan from "../../assets/asset/systemDesignLightMan.webp";
import systemDesignLine1 from "../../assets/asset/systemDesignLine1.webp";
import systemDesignLine2 from "../../assets/asset/systemDesignLine2.webp";
import systemDesignMessage from "../../assets/asset/systemDesignMessage.webp";

import product from "../../assets/asset/product.svg";
import roadmap from "../../assets/asset/roadmap.svg";
import wireframe from "../../assets/asset/wireframe.svg";
import design from "../../assets/asset/design.svg";
import v1 from "../../assets/asset/d1.mp4";
import v2 from "../../assets/asset/md.mp4";

const AutomatedDep = () => {
  return (
    <div className="flex flex-col items-center bg-white px-4 lg:px-5 py-10">
      {/* HEADER */}
      <div className="relative h-[50px] w-6 flex justify-center">
        <div className=" timeline-lineHeader7"></div>
      </div>

      <div className="flex flex-col items-center mb-10">
        <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-r from-[#ff4550] to-[#ff4550] text-white  shadow-lg mb-4">
          7
        </div>

        <h2 className="text-lg lg:text-xl text-center lg:tracking-[5px] tracking-[2px] font-semibold uppercase bg-gradient-to-r from-[#ff4550] to-[#ff4550] bg-clip-text text-transparent">
          AUTOMATED DEPLOUMENT
        </h2>
        <p className="pt-4 pl-4 pr-4 text-[13.9px] font-semibold lg:mx-4 w-full lg:w-auto lg:mx-32 text-center text-gray-500 leading-relaxed">
          Automated deployment ensures a smoother and safer production process
          by streamlining deployment, reducing human error, and allowing for
          faster and more consistent releases. It can be achieved through
          continuous integration and delivery tools, leading to an efficient and
          reliable production process.
        </p>
      </div>

      {/* MAIN CONTENT */}

      <div className="relative w-full lg:w-[700px] max-w-5xl aspect-[16/10] mx-auto bg-white overflow-hidden flex items-center justify-center font-sans">
        <div className="relative w-full lg:w-[700px] max-w-5xl aspect-[16/10] mx-auto bg-white overflow-hidden flex items-center justify-center font-sans">
          {/* Desktop Video */}
          <video
            src={v1}
            autoPlay
            loop
            muted
            className="hidden md:block w-full h-full object-cover"
          />

          {/* Mobile Video */}
          <video
            src={v2}
            autoPlay
            loop
            muted
            className="block md:hidden  w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default AutomatedDep;
