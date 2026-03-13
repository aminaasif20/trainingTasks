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

const Development = () => {
  return (
    
    <div className="flex flex-col items-center bg-white px-5 py-10">

      {/* HEADER */}
      <div className="relative h-[50px] w-6 flex justify-center">
        <div className="timeline-lineHeader4"></div>
      </div>
      
      <div className="flex flex-col items-center mb-10">
        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-[#f46b48] to-[#f46b48] text-white font-bold shadow-lg mb-4">
          4
        </div>

        <h2 className="text-[#f46b48] tracking-[5px] text-xl font-semibold uppercase">
          PRODUCT DESIGN
        </h2>
      </div>

      {/* MAIN CONTENT */}
      <div className="flex max-w-6xl w-full items-start">

        {/* LEFT COLUMN */}
        
        {/* LEFT COLUMN */}
        <div className="w-[50%] px-5 flex flex-col items-end text-right">

          <div className="bg-white w-auto h-28"></div>

          {[
            {
              title: "Using scrum",
              text: "At our software development company, we use the Scrum framework to develop software iteratively, in close collaboration with our clients, emphasizing flexibility, continuous improvement, and rapid delivery of high-quality software products. By using Scrum, we prioritize customer satisfaction, team communication, and product adaptability, ensuring that we meet the evolving needs of our clients throughout the software development lifecycle.",
              img: roadmap
            },
            {
              title: "Code Quality",
              text: "Emphasizing code quality is crucial to achieving superior software quality, and we achieve this through various techniques such as automated testing, code reviews, and strict adherence to coding standards. By prioritizing the quality of the code, we can create a highly reliable, maintainable, and efficient software product that meets the ever-changing demands of our clients.",
              img: wireframe
            }
          ].map((item, index) => (

            <div key={index} className="relative my-5 max-w-md">

              {/* Image */}
              <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-3 shadow-sm ml-auto">
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


        <div className="relative h-[600px] w-6 flex justify-center">
          <div className="timeline-linee4"></div>

          {/* dot */}
          <div className="absolute top-38 w-4 h-4 bg-[#f46b48] rounded-full"></div>
          {/* <div className="absolute mt-[300px] w-4 h-4 bg-pink-600 rounded-full"></div> */}
          {/* <div className="absolute mt-[300px]  w-4 h-4 bg-pink-600 rounded-full"></div> */}
          <div className="absolute top-[500px] w-4 h-4 bg-[#f46b48] rounded-full"></div>
          {/* <div className="absolute top-[700px] w-4 h-4 bg-pink-600 rounded-full"></div> */}
        </div>


        {/* Right section */}
        <div 
          className="order-1 sticky top-24 self-startflex items-start justify-center pt-[60px] mt-[80px] sm:mt-[40px] md:mt-0 productDesignIllustrationWrapper">
            <div className="relative w-full max-w-4xl h-[600px] mx-auto bg-white overflow-hidden flex items-center justify-center font-sans">
      
      {/* BACKGROUND ELEMENTS */}
      
      {/* Left Tree Diagram (From your uploaded image) */}
      <div className="absolute top-12 left-8 opacity-40 w-48">
        <img src={productDesignLightBg} alt="Tree Diagram" className="w-full h-auto object-contain" />
      </div>

      {/* Top Clouds (Coded SVG) */}
      <div className="absolute top-12 left-1/4 opacity-60">
        <svg width="60" height="40" viewBox="0 0 24 24" fill="#94a3b8">
          <path d="M17.5 19c2.48 0 4.5-2.02 4.5-4.5S19.98 10 17.5 10c-.17 0-.33.02-.5.05C16.27 7.15 13.82 5 11 5 7.69 5 5 7.69 5 11c0 .17.01.33.04.5C2.79 11.83 1 13.72 1 16c0 2.76 2.24 5 5 5h11.5z"/>
        </svg>
      </div>
      <div className="absolute top-8 right-1/3 opacity-60">
        <svg width="40" height="30" viewBox="0 0 24 24" fill="#cbd5e1">
          <path d="M17.5 19c2.48 0 4.5-2.02 4.5-4.5S19.98 10 17.5 10c-.17 0-.33.02-.5.05C16.27 7.15 13.82 5 11 5 7.69 5 5 7.69 5 11c0 .17.01.33.04.5C2.79 11.83 1 13.72 1 16c0 2.76 2.24 5 5 5h11.5z"/>
        </svg>
      </div>

      {/* CENTRAL MONITOR (Coded UI) */}
      <div className="relative z-10 w-[450px] mt-16 flex flex-col items-center">
        {/* Screen Bezel */}
        <div className="w-[300px] h-[320px] bg-[#f052b0] rounded-xl p-3 shadow-2xl relative border-b-8 border-[#d43793]">
          
          {/* Top Window Controls */}
          <div className="absolute top-4 left-4 flex space-x-2">
            <div className="w-2 h-2 rounded-full bg-pink-900"></div>
            <div className="w-2 h-2 rounded-full bg-pink-900"></div>
            <div className="w-2 h-2 rounded-full bg-pink-900"></div>
          </div>
          
          {/* Screen Content Split */}
          <div className="w-full h-full mt-4 bg-white rounded flex overflow-hidden">
            
            {/* Left Panel - Geometry */}
            <div className="w-[45%] h-full bg-[#ffd6eb] flex items-center justify-center relative p-4">
               {/* Using your geometry reference */}
               <img src={productDesignLightGeometry} alt="Bezier Curve" className="w-24 h-auto opacity-80" />
               <div className="absolute bottom-6 left-6 text-[#f052b0] opacity-60">⚙️</div>
            </div>

            {/* Right Panel - Bounding Box Area */}
            <div className="w-[55%] h-full bg-[#f052b0] p-6 flex flex-col justify-center items-center relative">
              {/* Dashed Bounding Box */}
              <div className="w-full h-3/4 border-2 border-dashed border-pink-900 rounded relative p-4 flex flex-col space-y-4">
                {/* Transform Nodes */}
                {[
                  '-top-1 -left-1', '-top-1 -right-1', '-bottom-1 -left-1', '-bottom-1 -right-1',
                  'top-1/2 -left-1 -translate-y-1/2', 'top-1/2 -right-1 -translate-y-1/2',
                  '-top-1 left-1/2 -translate-x-1/2', '-bottom-1 left-1/2 -translate-x-1/2'
                ].map((pos, i) => (
                  <div key={i} className={`absolute w-2 h-2 bg-pink-900 ${pos}`}></div>
                ))}

                {/* UI Buttons Inside Box */}
                <div className="w-20 h-6 bg-white opacity-80 rounded-full mx-auto mt-4"></div>
                <div className="w-16 h-6 bg-white opacity-80 rounded-full mx-auto"></div>
              </div>
              
              {/* Floating Bottom Button */}
              <div className="w-24 h-6 bg-white opacity-80 rounded-full absolute bottom-4 left-1/2 transform -translate-x-1/2 shadow"></div>
            </div>
          </div>
        </div>

        {/* Monitor Stand */}
        <div className="w-32 h-24 bg-[#ffbfe1] shadow-inner relative z-0" style={{ clipPath: 'polygon(20% 0, 80% 0, 100% 100%, 0% 100%)', marginTop: '-10px' }}></div>
        <div className="w-48 h-4 bg-[#f052b0] rounded-full mt-2 shadow"></div>
      </div>

      {/* FOREGROUND ELEMENTS */}

      {/* Small Pink Box (Left) */}
      <div className="absolute bottom-16 left-[25%] z-20">
        <div className="w-16 h-12 bg-[#f052b0] border-2 border-[#d43793] rounded shadow-lg"></div>
      </div>

      {/* CHARACTERS (Using your provided WebP) */}
      <div className="absolute inset-0 z-30 pointer-events-none flex items-center justify-center">
        {/* We place the character image over the whole container and scale it to fit. 
            Since the webp includes both characters and the ladder with a transparent background, 
            it will naturally overlay the coded monitor exactly like your reference image. */}
        <img 
          src={productDesignLightMan} 
          alt="Characters working" 
          className="w-full h-full object-contain object-center scale-105" 
        />
      </div>

    </div>
          
           

            
        </div>
       
      </div>
    </div>
  );
};

export default Development;