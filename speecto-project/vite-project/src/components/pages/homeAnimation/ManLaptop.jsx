import React from "react";
import "./ManLaptop.css";

// Import all required assets
import laptopBase from "../../../assets/asset/secondLaptopBase.webp";
import laptopScreen from "../../../assets/asset/secondLaptopScreen.webp";
import laptopScreenText from "../../../assets/asset/seondLaptopScreenText.webp";
import laptopShadow from "../../../assets/asset/secondLaptopShadow.webp";
import personSit from "../../../assets/asset/secondLaptopPerson.webp";
import personStand from "../../../assets/asset/secondLaptopPerson1.webp";
import targetRing from "../../../assets/asset/secondLaptopTargert.webp";
import magnifyGlass from "../../../assets/asset/magnifysetImage.webp";
import frameCode from "../../../assets/asset/frmaeCode.webp";
import framePercentage from "../../../assets/asset/FramePercentage.webp";
import frameCheck from "../../../assets/asset/FrameCheck.webp";

const ManLaptop = () => {
  return (
    <div className="man-laptop-wrapper relative w-full h-full flex items-center top-[-40] justify-center">
      <div className="man-laptop-scene w-[300px] h-[400px] relative">
        {/* Shadow Layer */}
        <img src={laptopShadow} alt="shadow" className="ml-img ml-shadow" />

        {/* Base Layer */}
        <img src={laptopBase} alt="laptop base" className="ml-img ml-base" />

        {/* Screen Layer */}
        <div className="ml-screen-container">
          <img
            src={laptopScreen}
            alt="screen back"
            className="ml-img ml-screen-bg"
          />
          <img
            src={laptopScreenText}
            alt="screen code"
            className="ml-img ml-screen-text"
          />
        </div>

        {/* Floating Elements Right */}
        <img src={targetRing} alt="target ring" className="ml-img ml-target" />
        <img
          src={framePercentage}
          alt="percentages"
          className="ml-img ml-percentages"
        />
        <img src={frameCheck} alt="check symbol" className="ml-img ml-check" />

        {/* Sitting Person */}
        <img
          src={personSit}
          alt="sitting person"
          className="ml-img ml-person-sit"
        />

        {/* Standing Person */}
        <img
          src={personStand}
          alt="standing person"
          className="ml-img ml-person-stand"
        />

        {/* Magnifying Glass */}
        <img src={magnifyGlass} alt="magnifier" className="ml-img ml-magnify" />

        {/* Code frame for the left floating symbols */}
        <img
          src={frameCode}
          alt="code symbols"
          className="ml-img ml-code-left"
        />
      </div>
    </div>
  );
};

export default ManLaptop;
