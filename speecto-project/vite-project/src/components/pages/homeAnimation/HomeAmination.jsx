import React, { useState } from "react";

import bannerReactCircle1 from "../../../assets/asset/bannerReactCircle1.webp";
import bannerReactCircle2 from "../../../assets/asset/bannerReactCircle2.webp";
import bannerReactCircle3 from "../../../assets/asset/bannerReactCircle3.webp";
import bannerReactCircle4 from "../../../assets/asset/bannerReactCircle4.webp";
import reactLogo from "../../../assets/asset/reactIcon2.webp";

const HomeAnimation = () => {

  const [hoveredImg, setHoveredImg] = useState(null);

  const nodes = [
    { id: 1, type: "image", src: bannerReactCircle1 },
    { id: 2, type: "dot" },
    { id: 3, type: "image", src: bannerReactCircle2 },
    { id: 4, type: "dot" },
    { id: 5, type: "image", src: bannerReactCircle3 },
    { id: 6, type: "dot" },
    { id: 7, type: "image", src: bannerReactCircle4 },
    { id: 8, type: "dot" },
  ];

  return (
    <div className="flex">

      <div className="relative w-[400px] h-[400px] flex items-center justify-center">

        {/* Orbit Ring */}
        <div className="absolute w-[300px] h-[300px] border border-dashed border-slate-500 rounded-full"></div>

        {/* Center Image */}
        <div className="absolute w-44 h-44 z-20 flex items-center justify-center">
          <img
            src={hoveredImg ? hoveredImg : reactLogo}
            alt="center"
            className="w-full h-full object-contain transition-all duration-300"
          />
        </div>

        {/* Rotating Orbit */}
        <div className="absolute w-[300px] h-[300px] spin-slow">

          {nodes.map((node, index) => {

            const angle = (360 / nodes.length) * index;

            const style = {
              transform: `rotate(${angle}deg) translate(150px) rotate(-${angle}deg)`
            };

            return (
              <div
                key={node.id}
                className="absolute top-1/2 left-1/2"
                style={style}
              >

                {node.type === "image" ? (

                  <div
                    onMouseEnter={() => setHoveredImg(node.src)}
                    onMouseLeave={() => setHoveredImg(null)}
                    className="w-12 h-12 rounded-full border-2 border-indigo-400 overflow-hidden cursor-pointer bg-white"
                  >
                    <img
                      src={node.src}
                      alt="tech"
                      className="w-full h-full object-cover"
                    />
                  </div>

                ) : (

                  <div className="w-4 h-4 rounded-full bg-white"></div>

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