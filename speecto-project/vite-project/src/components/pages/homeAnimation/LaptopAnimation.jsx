import React, { useEffect, useState } from "react";

import kayboardBlue5dfb from "../../../assets/asset/kayboardBlue5dfb.webp";
import keyboardBase from "../../../assets/asset/keyboardBase.webp";
import laptopBase from "../../../assets/asset/laptopBase.webp";
import laptopBaseOutline from "../../../assets/asset/laptopBaseOutline.svg";
import laptopBaseUpper from "../../../assets/asset/laptopBaseUpper.webp";
import laptopShadow from "../../../assets/asset/laptopShadow.webp";
import laptopScreenBack from "../../../assets/asset/laptopScreenBack.svg";
import laptopScreenUppeback from "../../../assets/asset/laptopScreenUppeback.svg";
import seondLaptopScreenText from "../../../assets/asset/seondLaptopScreenText.webp";

import bigCircle from "../../../assets/asset/mediumCircle.webp";
import smallCircle from "../../../assets/asset/smallCircle.webp";

import "./LaptopAnimation.css";

const LaptopAnimation = () => {
  const [brightness, setBrightness] = useState(40);

  useEffect(() => {
    let value = 30;

    const interval = setInterval(() => {
      value += 1.5;
      if (value >= 100) clearInterval(interval);
      setBrightness(value);
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="wrapper relative w-full h-full flex items-center justify-center">
      <div className="animation-container relative flex items-center justify-center w-[600px] h-[600px]">
        {/* Floating Geometric Background Shapes */}
        <div className="floating-shapes-layer z-0 absolute inset-0 w-full h-full pointer-events-none">
          {/* Orange/Red Circles */}
          <img src={bigCircle} alt="shape" className="shape pos1" />
          <img src={bigCircle} alt="shape" className="shape pos2" />
          <img src={smallCircle} alt="shape" className="shape pos6" />
          <img src={smallCircle} alt="shape" className="shape pos7" />

          {/* Cyan Hollow Circle */}
          <div className="shape pos3">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#2dd4bf"
              strokeWidth="4"
              className="rounded-full"
            >
              <circle cx="12" cy="12" r="10" />
            </svg>
          </div>

          {/* Red Cross */}
          <div className="shape pos4">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#ef4444"
              strokeWidth="4"
              strokeLinecap="round"
            >
              <line x1="4" y1="4" x2="20" y2="20"></line>
              <line x1="20" y1="4" x2="4" y2="20"></line>
            </svg>
          </div>

          {/* Cyan Diamond */}
          <div className="shape pos5">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#2dd4bf"
              strokeWidth="4"
            >
              <polygon points="12,2 22,12 12,22 2,12" />
            </svg>
          </div>

          {/* Small Cyan Dot */}
          <div className="shape pos8">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="#2dd4bf">
              <circle cx="12" cy="12" r="12" />
            </svg>
          </div>
        </div>

        <div
          className="scene z-10"
          style={{ filter: `brightness(${brightness}%)` }}
        >
          <div className="laptop">
            {/* BASE */}
            <div className="base">
              <img src={laptopShadow} className="img shadow" />
              <img src={laptopBase} className="img1" />
              <img src={laptopBaseOutline} className="img" />
              <img src={laptopBaseUpper} className="img2" />
              <img src={kayboardBlue5dfb} className="img3 glow" />
            </div>

            {/* LID */}
            <div className="lid">
              <img src={laptopScreenBack} className="imgLid" />
              {/* <img src={keyboardBase} className="img" /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LaptopAnimation;
