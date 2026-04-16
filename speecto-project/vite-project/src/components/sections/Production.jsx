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
import ProductionAnimation from "./ProductionAnimation";

const Production = () => {
  return (
    
    <div className="flex flex-col items-center bg-white px-5 py-10">

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
        <p className="p-4 mx-4 w-full lg:w-auto lg:mx-32 text-center text-gray-600 leading-relaxed">
          Taking a product into production involves finalizing development, testing, preparing for deployment, and coordinating with operations and support teams. The process may vary based on the product and the organization's specific needs. Once completed, the product is released to the public for use.
        </p>
      </div>

      {/* MAIN CONTENT */}
      <div className="flex max-w-6xl w-full items-start justify-center pt-8">
        <div className="relative w-full max-w-4xl h-[400px] lg:h-[600px] mx-auto bg-white overflow-hidden flex items-center justify-center font-sans">
          <ProductionAnimation />
        </div>
      </div>
    </div>
  );
};

export default Production;