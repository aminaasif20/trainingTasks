import React from "react";
import "./Sections.css";

import productDesignLightMan from "../../assets/asset/productDesignLightMan.webp";
import productDesignLightBg from "../../assets/asset/productDesignLightBg.webp";
import productDesignLightCloud1 from "../../assets/asset/productDesignLightCloud1.webp";
import productDesignLightCloud2 from "../../assets/asset/productDesignLightCloud2.webp";
import productDesignLightGeometry from "../../assets/asset/productDesignLightGeometry.webp";

import product from "../../assets/asset/product.svg";
import roadmap from "../../assets/asset/roadmap.svg";
import wireframe from "../../assets/asset/wireframe.svg";
import design from "../../assets/asset/design.svg";
import ProductDesignAnimation from "./ProductDesignAnimation";

const ProductDesign = () => {
  return (
    <div className="flex flex-col items-center bg-white px-5 py-10">
      {/* HEADER */}
      <div className="relative h-[50px] w-6 flex justify-center">
        <div className="timeline-lineHeader"></div>
      </div>

      <div className="flex flex-col items-center mb-10">
        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-pink-600 to-pink-400 text-white font-bold shadow-lg mb-4">
          2
        </div>

        <h2 className="text-pink-600 tracking-[5px] text-xl font-semibold uppercase">
          PRODUCT DESIGN
        </h2>
      </div>

      {/* MAIN CONTENT */}
      <div className="flex flex-col lg:flex-row max-w-6xl w-full items-center lg:items-start relative">
        {/* LEFT COLUMN */}

        {/* LEFT COLUMN */}
        <div className="w-full lg:w-[50%] flex flex-col items-center lg:items-end text-center lg:text-right px-4">
          <div className="hidden lg:block bg-white w-auto h-28"></div>

          {[
            {
              title: "Elicitation",
              text: "This step involves identifying stakeholders and understanding their needs.",
              img: roadmap,
            },
            {
              title: "Analysis & Suggestions",
              text: "We analyze requirements and suggest trending ideas and features.",
              img: wireframe,
            },
            {
              title: "Document Requirements",
              text: "Document requirements in a clear and concise manner.",
              img: design,
            },
            {
              title: "Verification & Validation",
              text: "Verify correctness and validate suitability of requirements.",
              img: product,
            },
          ].map((item, index) => (
            <div key={index} className="relative my-5 w-full flex flex-col items-center lg:items-end">
              {/* Image */}
              <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-3 shadow-sm mx-auto lg:ml-auto lg:mr-0">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-6 h-6 object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {item.title}
              </h3>

              {/* Text */}
              <p className="text-gray-500 leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="hidden lg:flex relative h-[700px] w-6 justify-center">
          <div className="timeline-line1"></div>

          {/* dot */}
          <div className="absolute top-32 w-4 h-4 bg-pink-600 rounded-full"></div>
          <div className="absolute mt-[300px] w-4 h-4 bg-pink-600 rounded-full"></div>
          <div className="absolute mt-[300px]  w-4 h-4 bg-pink-600 rounded-full"></div>
          <div className="absolute top-[500px] w-4 h-4 bg-pink-600 rounded-full"></div>
          <div className="absolute top-[700px] w-4 h-4 bg-pink-600 rounded-full"></div>
        </div>

        {/*--------------- Right section------------- */}
        <div className="w-full lg:w-[50%] order-first lg:order-none relative lg:sticky lg:top-24 flex items-start justify-center pt-8 lg:pt-[60px] lg:mt-0 productDesignIllustrationWrapper">
          <div className="relative w-full max-w-4xl h-[400px] lg:h-[600px] mx-auto bg-white overflow-hidden flex items-center justify-center font-sans">
            {/* BACKGROUND ELEMENTS */}

            {/* FOREGROUND ELEMENTS */}

            <ProductDesignAnimation />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDesign;
