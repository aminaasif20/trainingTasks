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
import SystemDesignAnimation from "./SystemDesignAnimation";

const ProductDesign = () => {
  return (
    <div className="flex flex-col items-center bg-white lg:px-1 py-5">
      {/* HEADER */}
      <div className="relative h-[50px] w-6 flex justify-center">
        <div className=" timeline-lineHeader3"></div>
      </div>

      <div className="flex flex-col items-center mb-2">
        <div className="lg:w-14 font-Nunito lg:h-14 w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-r from-[#554bac] to-[#8c99e3] text-white font-bold shadow-lg mb-4">
          3
        </div>

        <h2 className="lg:text-[28px] sm:text-2xl 2xl:text-[32px] font-Nunito tracking-[5px] font-bold uppercase bg-gradient-to-r from-[#554bac] to-[#8c99e3] bg-clip-text text-transparent">
          SYSTEM DESIGN
        </h2>
      </div>

      {/* MAIN CONTENT */}
      <div className="flex flex-col lg:flex-row max-w-5xl w-full items-center lg:items-start relative">
        {/* LEFT COLUMN */}

        {/* LEFT COLUMN */}
        <div className="lg:w-[480px] lg:w-[40%] order-first lg:order-none relative lg:sticky lg:top-12 w-[330px] self-start flex items-start justify-center lg:pt-[px] lg:mt-0 productDesignIllustrationWrapper">
          <div className="relative w-full  h-[400px] lg:w-[500px] lg:-ml-8 lg:h-[600px] mx-auto ml-3 overflow-hidden flex items-center justify-center font-sans">
            <div className="sda-animation-scaler">
              <SystemDesignAnimation />
            </div>
          </div>
        </div>

        {/* -------------------------Middle dots--------------- */}
        <div className="hidden lg:flex relative h-[650px] w-16 ml-5 justify-center">
          <div className="timeline-line3"></div>

          {/* dot */}
          <div className="absolute top-36 w-4 h-4 bg-[#5759b3] rounded-full"></div>
          <div className="absolute mt-[620px] w-4 h-4 bg-[#5759b3] rounded-full"></div>
          <div className="absolute mt-[380px]  w-4 h-4 bg-[#5759b3] rounded-full"></div>
        </div>
        <div className="hidden lg:flex relative h-[670px] mt-[690px] w-12 mr-2 justify-center">
          <div className="timeline-line4"></div>

          {/* dot */}
          <div className="absolute top-18 w-4 h-4 bg-[#5759b3] rounded-full"></div>

          <div className="absolute mt-[410px]  w-4 h-4 bg-[#5759b3] rounded-full"></div>
          {/* <div className="absolute top-[500px] w-4 h-4 bg-[#5759b3] rounded-full"></div> */}
          {/* <div className="absolute top-[700px] w-4 h-4 bg-[#5759b3] rounded-full"></div> */}
        </div>

        {/*------------------- Right section----------------------- */}
        <div className="w-full lg:w-[50%] flex flex-col items-center lg:items-start text-center lg:items-start lg:text-left ">
          <div className="hidden lg:block bg-white w-auto h-28"></div>

          {[
            {
              title: "Architectural design",
              text: "Our software architectural design services involve creating a high-level overview of a system's structure and organization to ensure scalability, modularity, maintainability, and performance.",
              img: roadmap,
            },
            {
              title: "Database design",
              text: "We specialize in software database design, creating efficient and scalable data storage solutions that ensure optimal performance, data integrity, and security.",
              img: wireframe,
            },
            {
              title: "Interface Design",
              text: "",
              img: design,
            },
            {
              title: "APIs",
              text: "Designing endpoints before development is important because it helps to establish a clear communication protocol between different components, facilitates efficient data exchange, and ensures that the system is scalable, flexible, and secure",
              img: design,
            },
            {
              title: "GraphQL",
              text: "Designing GraphQL prior to development is of utmost importance as it guarantees the optimization of the GraphQL schema for optimal performance, consistency, and alignment with the needs of both the server and client, thereby resulting in a highly efficient, scalable, and maintainable system.",
              img: product,
            },
          ].map((item, index) => (
            <div
              key={index}
              className="relative my-5 w-full flex flex-col items-center lg:items-start"
            >
              {/* Image */}
              <div className="w-10 h-10  bg-gray-200 rounded-xl flex items-center justify-center mb-3 shadow-sm mx-auto lg:ml-0 lg:mr-auto">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-6 h-6 object-contain"
                />
              </div>

              {/* Title */}
              <h3 className=" font-Nunito 2xl:text-2xl lg:text-xl  text-lg font-medium  2xl:!text-2xl !text-xl justify-start text-black   mt-[10px] !font-bold text-opacity-100 undefined">
                {item.title}
              </h3>

              {/* Text */}
              <p className=" font-Nunito 2xl:text-xl  xl:text-lg text-base font-medium text-center md:text-left  !font-bold mt-[10px] text-gray-500 undefined">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDesign;
