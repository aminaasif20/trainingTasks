import React from "react";
import productDesignLightMan from "../../assets/asset/productDesignLightMan.webp";
import productDesignLightBg from "../../assets/asset/productDesignLightBg.webp";
import productDesignLightCloud1 from "../../assets/asset/productDesignLightCloud1.webp";
import productDesignLightCloud2 from "../../assets/asset/productDesignLightCloud2.webp";
import productDesignLightGeometry from "../../assets/asset/productDesignLightGeometry.webp";
import "./ProductDesignAnimation.css";

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
          <div className="w-full h-full bg-white rounded flex overflow-hidden">
            {/* Left Panel */}
            <div className="w-[45%] h-full bg-[#ffd6eb] flex items-center justify-center relative p-4">
              <img
                src={productDesignLightGeometry}
                alt="Bezier Curve"
                className="w-10 h-auto opacity-80"
              />
              <div className="absolute bottom-6 left-6 text-[#f052b0] opacity-60">
                ⚙️
              </div>
            </div>

            {/* Right Panel - Bounding Box Area */}
            <div className="w-[55%] h-full bg-[#f052b0] p-6 flex flex-col justify-center items-center relative">
              {/* Dashed Bounding Box */}
              <div className="w-full h-3/4 border-2 border-dashed border-pink-900 rounded relative p-4 flex flex-col space-y-4">
                {/* Transform Nodes */}
                {[
                  "-top-1 -left-1",
                  "-top-1 -right-1",
                  "-bottom-1 -left-1",
                  "-bottom-1 -right-1",
                  "top-1/2 -left-1 -translate-y-1/2",
                  "top-1/2 -right-1 -translate-y-1/2",
                  "-top-1 left-1/2 -translate-x-1/2",
                  "-bottom-1 left-1/2 -translate-x-1/2",
                ].map((pos, i) => (
                  <div
                    key={i}
                    className={`absolute w-2 h-2 bg-pink-900 ${pos}`}
                  ></div>
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
        <div
          className="w-32 h-24 bg-[#ffbfe1] shadow-inner relative z-0"
          style={{
            clipPath: "polygon(20% 0, 80% 0, 100% 100%, 0% 100%)",
            marginTop: "-10px",
          }}
        ></div>
        <div className="w-48 h-4 bg-[#f052b0] rounded-full mt-2 shadow"></div>
      </div>
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
  );
};

export default ProductDesignAnimation;
