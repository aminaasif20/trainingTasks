import React from "react";
import productDesignLightMan from "../../assets/asset/productDesignLightMan.webp";
import productDesignLightCloud1 from "../../assets/asset/productDesignLightCloud1.webp";
import productDesignLightBg from "../../assets/asset/productDesignLightBg.webp";
import productDesignLightCloud2 from "../../assets/asset/productDesignLightCloud2.webp";
import productDesignLightGeometry from "../../assets/asset/productDesignLightGeometry.webp";
import "./ProductDesignAnimation.css";

/* ── 6-toothed Gear SVG (for fading grey elements) ── */
const Gear6SVG = ({ size = 50, color = "#8b95a1" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
  >
    <path d="M19.34 11.23c-.02-.27-.05-.53-.1-.8l2.09-1.55a.48.48 0 0 0 .11-.61l-1.92-3.32a.48.48 0 0 0-.59-.22l-2.47.96c-.45-.36-.95-.66-1.48-.88l-.37-2.52a.48.48 0 0 0-.47-.4H10.3a.48.48 0 0 0-.47.4l-.37 2.52c-.53.22-1.03.52-1.48.88l-2.47-.96a.48.48 0 0 0-.59.22L3 8.27a.48.48 0 0 0 .11.61L5.2 10.43c-.05.27-.08.53-.1.8l-2.09 1.55a.48.48 0 0 0-.11.61l1.92 3.32a.48.48 0 0 0 .59.22l2.47-.96c.45.36.95.66 1.48.88l.37 2.52c.05.22.24.4.47.4h3.84a.48.48 0 0 0 .47-.4l.37-2.52c.53-.22 1.03-.52 1.48-.88l2.47.96a.48.48 0 0 0 .59-.22l1.92-3.32a.48.48 0 0 0-.11-.61L19.34 11.23zM12.22 14.88c-1.59 0-2.88-1.29-2.88-2.88s1.29-2.88 2.88-2.88 2.88 1.29 2.88 2.88-1.29 2.88-2.88 2.88z" />
  </svg>
);
const GearSVG = ({ size = 40, color = "#7c3aed" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
  >
    <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94L14.4 2.81A.485.485 0 0 0 13.92 2.4h-3.84c-.24 0-.43.17-.47.41L9.25 5.35c-.59.24-1.13.57-1.62.94L5.24 5.33c-.22-.08-.47 0-.59.22L2.74 8.87c-.13.21-.07.47.12.61l2.03 1.58C4.84 11.36 4.8 11.69 4.8 12s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zm-7.14 2.66c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z" />
  </svg>
);

const ProductDesignAnimation = () => {
  return (
    <div>
      <div className="absolute mt-[-48px] left-8 opacity-50 ">
        <img
          src={productDesignLightBg}
          alt="Tree Diagram"
          className="w-full  h-auto object-contain"
        />
      </div>
      {/* Top Clouds (Coded SVG) */}
      <div className="absolute left-16 top-16 w-18 h-18 cloud-animate">
        <img src={productDesignLightCloud1} alt="cloud1" />
      </div>
      <div className="absolute left-62 top-28 w-10 h-10 right-20 opacity-60 cloud-animate">
        <img src={productDesignLightCloud2} alt="cloud2" />
      </div>
      <div className="absolute right-28 ">
        <div className="ml-12 mt-2 sda-small-gear sda-gear-bottom-left3">
          <GearSVG size={30} color="#dad4d8ff" />
        </div>
        <div className="mt-[-8px] ml-3 sda-small-gear sda-gear-bottom-left3">
          <GearSVG size={42} color="#dad4d8ff" />
        </div>
        <div className="mt-7 ml-8 sda-small-gear sda-gear-bottom-left3">
          <GearSVG size={23} color="#dad4d8ff" />
        </div>
      </div>

      {/* CENTRAL MONITOR (Coded UI) */}
      <div className="relative z-10 w-[410px] mt-16 flex flex-col items-center">
        {/* Screen Bezel */}
        <div className="w-[250px] h-[170px] bg-[#f9b9e4] rounded-xl p-3 shadow-2xl relative border-b-8 border-[#d43793]">
          {/* Top Window Controls */}

          <div className="sda-topbar1">
            <span className="sda-dot" />
            <span className="sda-dot" />
            <span className="sda-dot" />
          </div>

          {/* Screen Content Split */}
          <div className="w-[99%] h-[90%] bg-white rounded flex overflow-hidden">
            {/* Left Panel */}
            <div className="w-[45%] h-full bg-[#fa99dd] justify-center relative">
              <img
                src={productDesignLightGeometry}
                alt="Bezier Curve"
                className="w-13 h-13 mx-6 my-2 opacity-80"
              />
              <div className="">
                <div className="ml-12 mt-2 sda-small-gear sda-gear-bottom-left3">
                  <GearSVG size={30} color="#fed0f4" />
                </div>
                <div className="mt-[-8px] ml-3 sda-small-gear sda-gear-bottom-left3">
                  <GearSVG size={42} color="#fcecf9ff" />
                </div>
                <div className="mt-7 ml-8 sda-small-gear sda-gear-bottom-left3">
                  <GearSVG size={23} color="#fed0f4" />
                </div>
              </div>
            </div>

            {/* Right Panel */}
            <div className="w-[55%] h-full bg-[#f74ec7] flex relative overflow-hidden">
              {/* Sidebar */}
              <div className="w-[12%] h-full bg-[#ff9de2]"></div>

              {/* Main Content Area */}
              <div className="flex-1 flex flex-col relative">
                {/* Header Bar */}
                <div className="h-[25%] bg-[#c2238e]"></div>
                {/* Animated Bounding Box (Marching Ants) */}
                <div className="box">
                  {/* Moving dashed border via SVG */}
                  <svg
                    className="absolute top-0 left-0 w-full h-full"
                    style={{ overflow: "visible" }}
                  >
                    <rect
                      x="0"
                      y="0"
                      width="100%"
                      height="100%"
                      fill="none"
                      stroke="#8b1e60"
                      strokeWidth="2"
                      strokeDasharray="6 6"
                      className="sda-marching-ants"
                    />
                  </svg>

                  {/* Static Corner Handles */}
                  <div className="dot p-tl"></div>
                  <div className="dot p-tm"></div>
                  <div className="dot p-tr"></div>
                  <div className="dot p-bl"></div>
                  <div className="dot p-bm"></div>
                  <div className="dot p-br"></div>

                  {/* Inner Two Pills */}
                  <div className="flex justify-center gap-3 items-center h-full relative z-10">
                    <div className="w-6 h-2.5 bg-[#ffebf6] opacity-90 rounded-full border border-[#d24ab0]"></div>
                    <div className="w-6 h-2.5 bg-[#ffebf6] opacity-90 rounded-full border border-[#d24ab0]"></div>
                  </div>
                </div>

                <div className="sda-db-right2">
                  {[0, 1, 2, 3].map((i) => (
                    <div key={i} className="sda-db-row2">
                      {/* Scanner bar — slides left→right over the dots */}
                      <div className="sda-db-bar2" />
                    </div>
                  ))}
                </div>
                <div className="w-10 absolute ml-[-16px] mt-[90px] h-3  bg-[#ffebf6] opacity-80 rounded-full"></div>

                {/* Decorative Text Bars */}
                <div className="absolute bottom-2 right-4 flex flex-col gap-1 items-end z-20">
                  <div className="w-8 h-1.5 bg-[#ffebf6] opacity-60 rounded-full"></div>
                  <div className="w-6 h-1.5 bg-[#ffebf6] opacity-60 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Monitor Stand */}
        <div
          className=" h-26 bg-[#ffbfe1] shadow-inner relative z-0"
          style={{
            clipPath: "polygon(0% 0, 80% 0, 100% 100%, 0% 100%)",
            marginTop: "-10px",
          }}
        ></div>
        {/* <div className="w-48 h-4 bg-[#f052b0] rounded-full mt-2 shadow"></div> */}
      </div>
      {/* Small Pink Box (Left) */}
      <div className="absolute bottom-20 lg:bottom-44 left-[25%] z-20">
        <div className="w-12 h-10 bg-[#f12eb3] border-5 border-[#f8a5dc] shadow-lg">
          <div className=" sda-db-right1">
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className="sda-db-row1">
                {/* Scanner bar — slides left→right over the dots */}
                <div className="sda-db-bar1" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute inset-0 z-30 pointer-events-none flex items-center justify-center">
        <img
          src={productDesignLightMan}
          alt="Characters working"
          className="absolute w-[98%] h-[350px] mt-[40px] object-contain object-center scale-105"
        />
      </div>
    </div>
  );
};

export default ProductDesignAnimation;
