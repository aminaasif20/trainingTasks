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
import v1 from "../../assets/asset/Dep1.mp4";

const AutomatedDep = () => {
  return (
    <div className="flex flex-col items-center bg-white px-5 py-10">
      {/* HEADER */}
      <div className="relative h-[50px] w-6 flex justify-center">
        <div className=" timeline-lineHeader7"></div>
      </div>

      <div className="flex flex-col items-center mb-10">
        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-[#ff4550] to-[#ff4550] text-white font-bold shadow-lg mb-4">
          6
        </div>

        <h2 className="text-xl tracking-[5px] font-semibold uppercase bg-gradient-to-r from-[#ff4550] to-[#ff4550] bg-clip-text text-transparent">
          AUTOMATED DEPLOUMENT
        </h2>
        <p className="p-4 mx-34 text-center text-gray-600 leading-relaxed">
          Taking a product into Automate involves finalizing development,
          testing, preparing for deployment, and coordinating with operations
          and support teams. The process may vary based on the product and the
          organization's specific needs. Once completed, the product is released
          to the public for use.
        </p>
      </div>

      {/* MAIN CONTENT */}

      <div className="relative w-full max-w-5xl aspect-[16/10] mx-auto bg-white overflow-hidden flex items-center justify-center font-sans">
        {/* <video
          src={v1}
          autoPlay
          loop
          muted
          className="w-full h-full object-cover"
        ></video> */}
      </div>
    </div>
  );
};

export default AutomatedDep;
