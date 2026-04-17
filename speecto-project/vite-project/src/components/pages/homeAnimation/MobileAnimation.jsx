import React from "react";
import mobile5 from "../../../assets/asset/mobile5.svg";
import "./MobileAnimation.css";

const MobileAnimation = () => {
  return (
    <div className="mobile-wrapper relative w-full lg:mb-[1400px] h-full flex items-center justify-center">
      <div className="mobile-animation-container relative flex items-center justify-center mb-80   w-[360px] h-[400px]">
        {/* Floating Geometric Background Shapes */}
        <div className="mobile-shapes-layer z-0 absolute inset-0 w-full h-full pointer-events-none">
          {/* Top Left Dashes */}
          <div className="mobile-dash group-dash-tl absolute left-[20%]  opacity-80 flex flex-col gap-2">
            <div className="flex gap-2"></div>
            <div className="flex gap-2 -ml-6"></div>
          </div>

          <div className="mobile-dash group-dash-b absolute left-[45%] bottom-[5%] opacity-80 flex flex-col gap-2">
            <div className="flex gap-2 -ml-4"></div>
          </div>

          {/* Isometric Square 1 (Top Left) */}
          <div className="squarebox mobile-iso-square relative sq-1"></div>

          {/* Isometric Square 2 (Bottom Right Middle) */}
          <div className="squarebox mobile-iso-square sq-2"></div>

          {/* Isometric Square 3 (Bottom Right Edge) */}
          <div className="squarebox mobile-iso-square sq-3"></div>
        </div>

        {/* Central Mobile Image Layer */}
        <div className="mobile-scene z-10 w-full   flex items-center justify-center">
          <img
            src={mobile5}
            alt="Mobile App"
            className="mobile-img w-full max-w-[500px]"
          />
        </div>
        {/* <div class="absolute top-80 left-30 w-[100px] h-[100px] bg-white overflow-hidden">
          <div class="lines-wrapper">
            <span class="line l1"></span>
            <span class="line l2"></span>
            <span class="line l3"></span>
            <span class="line l4"></span>
            <span class="line l5"></span>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default MobileAnimation;
