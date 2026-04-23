import React, { useState, useEffect } from "react";

import bannerReactCircle1 from "../../../assets/asset/bannerReactCircle1.webp";
import bannerReactCircle2 from "../../../assets/asset/bannerReactCircle2.webp";
import bannerReactCircle3 from "../../../assets/asset/bannerReactCircle3.webp";
import bannerReactCircle4 from "../../../assets/asset/bannerReactCircle4.webp";
import reactLogo from "../../../assets/asset/reactIcon2.webp";

import LaptopAnimation from "../homeAnimation/LaptopAnimation.jsx";
import ManAnimation from "../homeAnimation/StandingAnimation.jsx";
import ManLaptopAnimation from "../homeAnimation/ManLaptop.jsx";
import MobileAnimation from "../homeAnimation/MobileAnimation.jsx";
import CenterDisplay from "./CenterDisplay.jsx";

const HomeAnimation = () => {
  const [hoveredComponent, setHoveredComponent] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 100);
  }, []);

  const nodes = [
    {
      id: 1,
      type: "component",
      component: <LaptopAnimation />,
      img: bannerReactCircle1,
      angle: 0,
    },
    { id: 2, type: "large-white", angle: 14 },
    { id: 3, type: "orange-empty", angle: 45 },
    { id: 4, type: "tiny-white", angle: 68 },

    {
      id: 5,
      type: "component",
      component: <ManAnimation />,
      img: bannerReactCircle2,
      angle: 90,
    },
    { id: 6, type: "large-white", angle: 104 },
    { id: 7, type: "orange-empty", angle: 135 },
    { id: 8, type: "tiny-white", angle: 158 },

    {
      id: 9,
      type: "component",
      component: <ManLaptopAnimation />,
      img: bannerReactCircle3,
      angle: 180,
    },
    { id: 10, type: "large-white", angle: 194 },
    { id: 11, type: "tiny-white", angle: 225 },
    { id: 12, type: "orange-empty", angle: 248 },

    {
      id: 13,
      type: "component",
      component: <MobileAnimation />,
      img: bannerReactCircle4,
      angle: 270,
    },
    { id: 14, type: "large-white", angle: 284 },
    { id: 15, type: "tiny-white", angle: 315 },
    { id: 16, type: "orange-empty", angle: 338 },
  ];

  return (
    <div className="flex w-[90%] h-[260px] lg:h-[400px] items-center justify-center lg:-mt-6 mt-0">
      <style>{`
        @keyframes orbit-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes orbit-spin-reverse {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
        .spin-orbit {
          animation: orbit-spin 10s linear infinite;
        }
        .spin-orbit-reverse {
          animation: orbit-spin-reverse 10s linear infinite;
        }
        .spin-paused {
          animation-play-state: paused !important;
        }
      `}</style>
      <div className="relative w-[180px] h-[180px] sm:w-[250px] sm:h-[250px] lg:w-[350px] lg:h-[350px] flex items-center justify-center">
        {/* Center Image */}
        <CenterDisplay hoveredComponent={hoveredComponent} />

        {/* Orbit */}
        <div className="absolute sm:w-[300px] sm:h-[300px] w-[200px] h-[200px] z-20">
          {nodes.map((node) => {
            const isComponent = node.type === "component";
            const radius = isComponent ? (isLoaded ? 140 : 0) : 140;

            return (
              <div
                key={node.id}
                className="absolute top-1/2 left-1/2"
                style={{
                  transform: `rotate(${node.angle}deg)`,
                }}
              >
                <div
                  className={`${isComponent ? "spin-orbit" : ""} ${hoveredComponent ? "spin-paused" : ""}`}
                >
                  <div
                    className="absolute"
                    style={{
                      transform: `translate(${radius}px)`,
                      transition: isComponent
                        ? `transform 0.8s ease-out ${node.id * 0.05}s`
                        : "none",
                    }}
                  >
                    <div
                      className={`${isComponent ? "spin-orbit-reverse" : ""} ${hoveredComponent ? "spin-paused" : ""}`}
                    >
                      <div
                        className="absolute flex items-center justify-center"
                        style={{
                          width: "50px",
                          height: "50px",
                          top: "-25px",
                          left: "-25px",
                          transform: `rotate(-${node.angle}deg)`,
                        }}
                      >
                        {/* COMPONENT NODE */}
                        {node.type === "component" && (
                          <div
                            className="lg:w-[36px] lg:h-[36px] w-[26px] h-[30px] rounded-full border-[2.5px] border-white overflow-hidden cursor-pointer bg-[#0e1635] flex items-center justify-center relative z-4 transition-transform duration-300 hover:scale-110"
                            onMouseEnter={() =>
                              setHoveredComponent(node.component)
                            }
                            onMouseLeave={() => setHoveredComponent(null)}
                          >
                            <img
                              src={node.img}
                              alt="banner"
                              className="w-full z-50 h-full object-cover"
                            />
                          </div>
                        )}

                        {/* LARGE WHITE */}
                        {node.type === "large-white" && (
                          <div className="lg:w-[36px] lg:h-[36px] w-[26px] h-[26px] rounded-full bg-white z-4"></div>
                        )}

                        {/* ORANGE */}
                        {node.type === "orange-empty" && (
                          <div className="w-3.5 h-3.5 rounded-full border-[1.5px] border-[#fc5b3f]"></div>
                        )}

                        {/* SMALL WHITE */}
                        {node.type === "tiny-white" && (
                          <div className="w-2.5 h-2.5 rounded-full bg-white"></div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HomeAnimation;
