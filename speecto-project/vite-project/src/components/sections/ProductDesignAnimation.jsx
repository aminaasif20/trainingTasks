import React from "react";
import productDesignLightMan from "../../assets/asset/productDesignLightMan.webp";
import productDesignLightBg from "../../assets/asset/productDesignLightBg.webp";
import productDesignLightCloud1 from "../../assets/asset/productDesignLightCloud1.webp";
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
      <div className="absolute top-[-14px] left-8 opacity-40 ">
        <img
          src={productDesignLightBg}
          alt="Tree Diagram"
          className="w-full h-auto object-contain"
        />
      </div>
      {/* Top Clouds (Coded SVG) */}
      <div className="absolute top-12 left-1/4 opacity-60">
        <svg width="60" height="40" viewBox="0 0 24 24" fill="#94a3b8">
          <path d="M17.5 19c2.48 0 4.5-2.02 4.5-4.5S19.98 10 17.5 10c-.17 0-.33.02-.5.05C16.27 7.15 13.82 5 11 5 7.69 5 5 7.69 5 11c0 .17.01.33.04.5C2.79 11.83 1 13.72 1 16c0 2.76 2.24 5 5 5h11.5z" />
        </svg>
      </div>
      <div className="absolute top-8 right-1/3 opacity-60">
        <svg width="40" height="30" viewBox="0 0 24 24" fill="#cbd5e1">
          <path d="M17.5 19c2.48 0 4.5-2.02 4.5-4.5S19.98 10 17.5 10c-.17 0-.33.02-.5.05C16.27 7.15 13.82 5 11 5 7.69 5 5 7.69 5 11c0 .17.01.33.04.5C2.79 11.83 1 13.72 1 16c0 2.76 2.24 5 5 5h11.5z" />
        </svg>
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

                {/* SVG Layer for all lines */}
                <svg
                  className="absolute inset-0 w-full h-full pointer-events-none z-10"
                  viewBox="0 0 137 153"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M 22 20 H 115 M 22 20 V 132 H 115 V 20 M 115 132 H 22 M 68 20 V 20 M 68 132 V 132 M 22 75 V 75 M 68 20 H 115 M 22 20 H 68"
                    stroke="#4a0e2e"
                    strokeWidth="2.5"
                    fill="none"
                    strokeLinecap="square"
                  />
                  {/* Precise Lines based on node positions */}
                  <line
                    x1="22"
                    y1="20"
                    x2="68"
                    y2="20"
                    stroke="#4a0e2e"
                    strokeWidth="2.5"
                  />
                  <line
                    x1="68"
                    y1="20"
                    x2="115"
                    y2="20"
                    stroke="#4a0e2e"
                    strokeWidth="2.5"
                  />
                  <line
                    x1="22"
                    y1="20"
                    x2="22"
                    y2="75"
                    stroke="#4a0e2e"
                    strokeWidth="2.5"
                  />
                  <line
                    x1="22"
                    y1="75"
                    x2="22"
                    y2="132"
                    stroke="#4a0e2e"
                    strokeWidth="2.5"
                  />
                  <line
                    x1="115"
                    y1="20"
                    x2="115"
                    y2="132"
                    stroke="#4a0e2e"
                    strokeWidth="2.5"
                  />
                  <line
                    x1="22"
                    y1="132"
                    x2="68"
                    y2="132"
                    stroke="#4a0e2e"
                    strokeWidth="2.5"
                  />
                  <line
                    x1="68"
                    y1="132"
                    x2="115"
                    y2="132"
                    stroke="#4a0e2e"
                    strokeWidth="2.5"
                  />
                </svg>

                {/* Nodes */}
                <div className="absolute inset-0 z-20 pointer-events-none">
                  {/* Header Nodes */}
                  <div
                    className="sda-node-new absolute"
                    style={{ left: "15px", top: "13px" }}
                  ></div>
                  <div
                    className="sda-node-new absolute"
                    style={{ left: "61px", top: "13px" }}
                  ></div>
                  <div
                    className="sda-node-new absolute"
                    style={{ left: "108px", top: "13px" }}
                  ></div>

                  {/* Body Nodes */}
                  <div
                    className="sda-node-new absolute"
                    style={{ left: "15px", top: "68px" }}
                  ></div>
                  <div
                    className="sda-node-new absolute"
                    style={{ left: "15px", top: "125px" }}
                  ></div>
                  <div
                    className="sda-node-new absolute"
                    style={{ left: "61px", top: "125px" }}
                  ></div>
                  <div
                    className="sda-node-new absolute"
                    style={{ left: "108px", top: "125px" }}
                  ></div>
                </div>

                {/* Pill Buttons in center */}
                <div className="absolute top-[50px] left-[35px] right-[15px] bottom-[40px] flex flex-col items-center justify-center gap-4 z-0">
                  <div className="sda-pill-new w-[70px] h-[35px]"></div>
                  <div className="sda-pill-new w-[70px] h-[35px]"></div>
                </div>

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
          className=" h-30 bg-[#ffbfe1] shadow-inner relative z-0"
          style={{
            clipPath: "polygon(0% 0, 80% 0, 100% 100%, 0% 100%)",
            marginTop: "-10px",
          }}
        ></div>
        {/* <div className="w-48 h-4 bg-[#f052b0] rounded-full mt-2 shadow"></div> */}
      </div>
      {/* Small Pink Box (Left) */}
      <div className="absolute bottom-42 left-[25%] z-20">
        <div className="w-18 h-14 bg-[#f12eb3] border-10 border-[#f8a5dc] shadow-lg"></div>
      </div>

      <div className="absolute inset-0 z-30 pointer-events-none flex items-center justify-center">
        <img
          src={productDesignLightMan}
          alt="Characters working"
          className="absolute w-[90%] h-[300px] mt-[40px] object-contain object-center scale-105"
        />
      </div>
    </div>
  );
};

export default ProductDesignAnimation;
