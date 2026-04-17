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
import v1 from "../../assets/asset/ps1.mp4";
import ProductionAnimation from "./ProductionAnimation";

const Production = () => {
  return (
    <div className="flex flex-col items-center bg-white px-4 lg:px-5 py-10">
      {/* HEADER */}
      <div className="relative h-[50px] w-6 flex justify-center">
        <div className=" timeline-lineHeader5"></div>
      </div>

      <div className="flex flex-col items-center mb-10">
        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-[#22bf86] to-[#22bf86] text-white font-bold shadow-lg mb-4">
          6
        </div>

        <h2 className="text-xl tracking-[5px] font-semibold uppercase bg-gradient-to-r from-[#22bf86] to-[#22bf86] bg-clip-text text-transparent">
          PRODUCTION
        </h2>
        <p className="pt-4 pl-4 pr-4 text-[13.9px] font-semibold lg:mx-4 w-full lg:w-auto lg:mx-32 text-center text-gray-500 leading-relaxed">
          Taking a product into production involves finalizing development,
          testing, preparing for deployment, and coordinating with operations
          and support teams. The process may vary based on the product and the
          organization's specific needs. Once completed, the product is released
          to the public for use.
        </p>
      </div>

      {/* MAIN CONTENT */}
      <div className="flex max-w-6xl w-full items-start justify-center pt-8">
        <div className="relative w-full max-w-4xl h-[520px] lg:h-[600px] mx-auto bg-white overflow-hidden flex items-center justify-center font-sans ">
          <div className="hidden md:flex w-full h-full items-center justify-center">
            <ProductionAnimation />
          </div>

          {/* 🔹 MOBILE VIDEO */}
          <video
            src={v1}
            autoPlay
            loop
            muted
            playsInline
            className="block md:hidden w-[600px] h-[600px]  object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Production;
