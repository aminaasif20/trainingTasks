import React, { useState } from "react";

import bannerReactCircle1 from "../../../assets/asset/bannerReactCircle1.webp";
import bannerReactCircle2 from "../../../assets/asset/bannerReactCircle2.webp";
import bannerReactCircle3 from "../../../assets/asset/bannerReactCircle3.webp";
import bannerReactCircle4 from "../../../assets/asset/bannerReactCircle4.webp";
import reactLogo from "../../../assets/asset/reactIcon2.webp";

const HomeAnimation = () => {
  const [hoveredImg, setHoveredImg] = useState(null);

  // Exact 16-node orbit pattern matching the screenshot
  const nodes = [
    // 0° quadrant
    { id: 1, type: "image", src: bannerReactCircle1, angle: 0 },
    { id: 2, type: "large-white", angle: 14 },
    { id: 3, type: "orange-empty", angle: 45 },
    { id: 4, type: "tiny-white", angle: 68 },
    
    // 90° quadrant
    { id: 5, type: "image", src: bannerReactCircle2, angle: 90 },
    { id: 6, type: "large-white", angle: 104 },
    { id: 7, type: "orange-empty", angle: 135 },
    { id: 8, type: "tiny-white", angle: 158 },
    
    // 180° quadrant
    { id: 9, type: "image", src: bannerReactCircle3, angle: 180 },
    { id: 10, type: "large-white", angle: 194 },
    { id: 11, type: "tiny-white", angle: 225 },
    { id: 12, type: "orange-empty", angle: 248 },
    
    // 270° quadrant
    { id: 13, type: "image", src: bannerReactCircle4, angle: 270 },
    { id: 14, type: "large-white", angle: 284 },
    { id: 15, type: "tiny-white", angle: 315 },
    { id: 16, type: "orange-empty", angle: 338 },
  ];

  return (
    <div className="flex w-full h-[400px] items-center justify-center -mt-6">
      <div className="relative w-[400px] h-[400px] flex items-center justify-center">
        
        {/* Center Image */}
        <div className="absolute w-[180px] h-[180px] z-30 flex items-center justify-center pointer-events-none">
          <img
            src={hoveredImg ? hoveredImg : reactLogo}
            alt="center"
            className="w-full h-full object-contain transition-all duration-300"
          />
        </div>

        {/* Rotating Orbit */}
        <div className="absolute w-[400px] h-[400px] spin-slow z-20">
          {nodes.map((node) => {
            const angle = node.angle;

            const style = {
              transform: `rotate(${angle}deg) translate(165px) rotate(-${angle}deg)`
            };

            return (
              <div
                key={node.id}
                className="absolute top-1/2 left-1/2 -mt-[25px] -ml-[25px] flex items-center justify-center"
                style={{
                   width: '50px',
                   height: '50px',
                   ...style
                }}
              >
                {node.type === "image" && (
                  <div
                    onMouseEnter={() => setHoveredImg(node.src)}
                    onMouseLeave={() => setHoveredImg(null)}
                    className="w-[52px] h-[52px] rounded-full border-[2.5px] border-white overflow-hidden cursor-pointer bg-[#0e1635] flex items-center justify-center relative z-20 transition-transform duration-300 hover:scale-110"
                  >
                    <img
                      src={node.src}
                      alt="tech"
                      className="w-[60%] h-[60%] object-contain mt-1" 
                    />
                  </div>
                )}
                
                {node.type === "large-white" && (
                  <div className="w-[42px] h-[42px] rounded-full bg-white relative z-10 shadow overflow-hidden"></div>
                )}
                
                {node.type === "orange-empty" && (
                  <div className="w-3.5 h-3.5 rounded-full border-[1.5px] border-[#fc5b3f] bg-transparent"></div>
                )}
                
                {node.type === "tiny-white" && (
                  <div className="w-2.5 h-2.5 rounded-full bg-white"></div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HomeAnimation;