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

const ProductDesign = () => {
  return (
    
    <div className="flex flex-col items-center bg-white px-5 py-10">

      {/* HEADER */}
      <div className="relative h-[50px] w-6 flex justify-center">
        <div className=" timeline-lineHeader3"></div>
      </div>
      
      <div className="flex flex-col items-center mb-10">
        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-[#7374c9] to-[#5759b3] text-white font-bold shadow-lg mb-4">
          3
        </div>

        <h2 className="text-xl tracking-[5px] font-semibold uppercase bg-gradient-to-r from-[#5759b3] to-[#7374c9] bg-clip-text text-transparent">
          SYSTEM DESIGN
        </h2>
      </div>

      {/* MAIN CONTENT */}
      <div className="flex max-w-6xl w-full items-start">

        {/* LEFT COLUMN */}
        
        {/* LEFT COLUMN */}
          <div 
            className=" w-[50%] sticky top-24 self-start flex items-start justify-center pt-[60px] mt-[80px] sm:mt-[40px] md:mt-0 productDesignIllustrationWrapper">
              <div className="relative w-full max-w-4xl h-[600px] mx-auto bg-white overflow-hidden flex items-center justify-center font-sans">
              
              <div className="relative w-full max-w-[1200px] mx-auto overflow-hidden bg-gray-100">
      
      {/* 1. Main Background Illustration Layer */}
                <img
                  src={systemDesignLightBg}
                  alt="Complete System Architecture Diagram"
                  className="w-full h-auto block"
                />

                {/* 2. Interactive/Foreground Layer: Placing elements precisely */}
                <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                  
                  {/* The Human Figure: Positioned exactly like the reference */}
                  <div className="absolute left-[5%] top-[30%] w-[15%] pointer-events-auto">
                    <img src={systemDesignLightMan} alt="Engineer pointing at system" className="w-full h-auto" />
                  </div>

                  {/* Central Architecture (The blue monitor component) */}
                  <div className="absolute left-[30%] top-[25%] w-[40%] pointer-events-auto">
                    {/* Internal components on the screen are part of the main image, 
                        but you could overlay specific interactive buttons here */}
                  </div>

                  {/* --- Peripheral Nodes --- */}
                  {/* Note: I've extracted the common classes for nodes into a string for cleaner JSX */}
                  
                  {/* Cloud Services Node */}
                  <div className="absolute flex flex-col items-center text-center pointer-events-auto left-[25%] top-[10%]">
                    <img src={systemDesignLine1} alt="Cloud Services" className="w-full h-auto max-w-[60px]" />
                    {/* <span className="mt-1 text-xs font-bold text-gray-600">CLOUD SERVICES</span> */}
                  </div>

                  {/* Message Queue Node */}
                  <div className="absolute flex flex-col items-center text-center pointer-events-auto left-[60%] top-[10%]">
                    {/* <img src={MessageIcon} alt="Message Queue" className="w-full h-auto max-w-[60px]" /> */}
                    <span className="mt-1 text-xs font-bold text-gray-600">MESSAGE QUEUE</span>
                  </div>

                  {/* New Node 1: System Settings */}
                  <div className="absolute flex flex-col items-center text-center pointer-events-auto right-[15%] top-[35%]">
                    <span className="mt-1 text-xs font-bold text-gray-600">SYSTEM SETTINGS</span>
                  </div>

                  {/* New Node 2: RESTful API */}
                  <div className="absolute flex flex-col items-center text-center pointer-events-auto right-[5%] top-[35%]">
                    <span className="mt-1 text-xs font-bold text-gray-600">RESTFUL API</span>
                  </div>
                  
                  {/* Database Node */}
                  <div className="absolute flex flex-col items-center text-center pointer-events-auto right-[15%] bottom-[15%]">
                    <span className="mt-1 text-xs font-bold text-gray-600">DATABASE</span>
                  </div>
                  
                  {/* Cache Node */}
                  <div className="absolute flex flex-col items-center text-center pointer-events-auto right-[5%] bottom-[15%]">
                    <span className="mt-1 text-xs font-bold text-gray-600">CACHE</span>
                  </div>
                  
                  {/* Monitoring Node */}
                  <div className="absolute flex flex-col items-center text-center pointer-events-auto right-[5%] bottom-[5%]">
                    <span className="mt-1 text-xs font-bold text-gray-600">MONITORING</span>
                  </div>

                </div>
              </div>
      
      
      
          </div>
          
           

            
        </div>

{/* -------------------------Middle dots--------------- */}
        <div className="relative h-[650px] w-16 flex justify-center">
          <div className="timeline-line3"></div>

          {/* dot */}
          <div className="absolute top-36 w-4 h-4 bg-[#5759b3] rounded-full"></div>
          <div className="absolute mt-[580px] w-4 h-4 bg-[#5759b3] rounded-full"></div>
          <div className="absolute mt-[380px]  w-4 h-4 bg-[#5759b3] rounded-full"></div>
         
        </div>
        <div className="relative h-[650px] mt-[630px] w-16 mr-3 flex justify-center">
          <div className="timeline-line4"></div>

          {/* dot */}
          <div className="absolute top-38 w-4 h-4 bg-[#5759b3] rounded-full"></div>
          
          <div className="absolute mt-[450px]  w-4 h-4 bg-[#5759b3] rounded-full"></div>
          {/* <div className="absolute top-[500px] w-4 h-4 bg-[#5759b3] rounded-full"></div> */}
          {/* <div className="absolute top-[700px] w-4 h-4 bg-[#5759b3] rounded-full"></div> */}
        </div>



        {/* Right section */}
        <div className="w-[50%] flex flex-col">

          <div className="bg-white w-auto h-28"></div>

          {[
            {
              title: "Architectural design",
              text: "Our software architectural design services involve creating a high-level overview of a system's structure and organization to ensure scalability, modularity, maintainability, and performance.",
              img: roadmap
            },
            {
              title: "Database design",
              text: "We specialize in software database design, creating efficient and scalable data storage solutions that ensure optimal performance, data integrity, and security.",
              img: wireframe
            },
            {
              title: "Interface Design",
              text: "",
              img: design
            },
            {
              title: "APIs",
              text: "Designing endpoints before development is important because it helps to establish a clear communication protocol between different components, facilitates efficient data exchange, and ensures that the system is scalable, flexible, and secure",
              img: design
            },
            {
              title: "GraphQL",
              text: "Designing GraphQL prior to development is of utmost importance as it guarantees the optimization of the GraphQL schema for optimal performance, consistency, and alignment with the needs of both the server and client, thereby resulting in a highly efficient, scalable, and maintainable system.",
              img: product
            }
          ].map((item, index) => (

            <div key={index} className="relative my-5 max-w-md">

              {/* Image */}
              <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-3 shadow-sm">
                <img src={item.img} alt={item.title} className="w-6 h-6 object-contain" />
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {item.title}
              </h3>

              {/* Text */}
              <p className="text-gray-500 leading-relaxed">
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