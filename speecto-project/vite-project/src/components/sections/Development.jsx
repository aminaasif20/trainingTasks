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
import DevelopmentAnimation from "./DevelopmentAnimation";

const Development = () => {
  return (
    <div className="flex flex-col items-center bg-white px2 lg:px-5 py-3 lg:py-10">
      {/* HEADER */}
      <div className="relative h-[50px] w-6 flex justify-center">
        <div className="timeline-lineHeader4"></div>
      </div>

      <div className="flex flex-col items-center mb-10">
        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-[#f46b48] to-[#f46b48] text-white font-bold shadow-lg mb-4">
          4
        </div>

        <h2 className="text-[#f46b48] tracking-[5px] text-xl font-semibold uppercase">
          DEVELOPMENT
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
              title: "Using scrum",
              text: "At our software development company, we use the Scrum framework to develop software iteratively, in close collaboration with our clients, emphasizing flexibility, continuous improvement, and rapid delivery of high-quality software products. By using Scrum, we prioritize customer satisfaction, team communication, and product adaptability, ensuring that we meet the evolving needs of our clients throughout the software development lifecycle.",
              img: roadmap,
            },
            {
              title: "Code Quality",
              text: "Emphasizing code quality is crucial to achieving superior software quality, and we achieve this through various techniques such as automated testing, code reviews, and strict adherence to coding standards. By prioritizing the quality of the code, we can create a highly reliable, maintainable, and efficient software product that meets the ever-changing demands of our clients.",
              img: wireframe,
            },
          ].map((item, index) => (
            <div
              key={index}
              className="relative my-5 w-full flex flex-col items-center lg:items-end"
            >
              {/* Image */}
              <div className="lg:w-12 lg:h-12 w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center mb-3 shadow-sm mx-auto lg:ml-auto lg:mr-0">
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
              <p className=" lg:pt-1 lg:pr-1 pl-4 pr-4 text-[13.9px] font-semibold lg:mx-1 w-full lg:w-auto text-center lg:text-end text-gray-500 leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        <div className="hidden lg:flex relative h-[600px] w-6 justify-center">
          <div className="timeline-linee4"></div>

          {/* dot */}
          <div className="absolute top-38 w-4 h-4 bg-[#f46b48] rounded-full"></div>
          {/* <div className="absolute mt-[300px] w-4 h-4 bg-pink-600 rounded-full"></div> */}
          {/* <div className="absolute mt-[300px]  w-4 h-4 bg-pink-600 rounded-full"></div> */}
          <div className="absolute top-[500px] w-4 h-4 bg-[#f46b48] rounded-full"></div>
          {/* <div className="absolute top-[700px] w-4 h-4 bg-pink-600 rounded-full"></div> */}
        </div>

        {/* -------------------Right section---------------- */}
        <div className="w-full lg:w-[50%] order-first lg:order-none relative lg:sticky mb-[px] lg:top-24 flex items-start justify-center pt-8 lg:pt-[60px] lg:mt-0 productDesignIllustrationWrapper">
          <div className="relative w-full max-w-4xl h-[550px] mb-[-10px] lg:h-[600px] mx-auto item-end bg-white overflow-hidden flex items-end md:items-center justify-center font-sans">
            <DevelopmentAnimation />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Development;
