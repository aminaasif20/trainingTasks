import React from "react";
import "./ManLaptop.css";

// Import all required assets
import laptopBase from "../../../assets/asset/secondLaptopBase.webp";
import laptopBase2 from "../../../assets/asset/keyboardButton.webp";
import laptopBase3 from "../../../assets/asset/kayboardBlue5dfb.webp";
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
import frame from "../../../assets/asset/frame.webp";
import framelines from "../../../assets/asset/seondLaptopScreenText.webp";
import frameCheckcircle from "../../../assets/asset/FrameBugs.webp";
import FrameCode from "../../../assets/asset/FrameCode.webp";
import settingsIcons from "../../../assets/asset/settingsIcons.webp";
import FrameStaric from "../../../assets/asset/FrameStaric.webp";

const ManLaptop = () => {
  return (
    <div className="man-laptop-wrapper relative w-full h-full flex items-center justify-center">
      <div className="man-laptop-scene lg:mb-[30px] w-[300px] lg:h-[400px] relative">
        {/* Shadow Layer */}
        <img src={laptopShadow} alt="shadow" className="ml-img ml-shadow" />

        {/* Base Layer */}
        <img src={laptopBase} alt="laptop base" className="ml-img ml-base" />
        <img
          src={laptopBase2}
          alt="keyboard button"
          className="ml-img-key ml-base-key"
        />
        <img
          src={laptopBase2}
          alt="keyboard button"
          className="ml-img-key ml-base-key"
        />

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
        <img src={frame} alt="frame" className="ml-img ml-frame" />

        <img
          src={framelines}
          alt="seondLaptopScreenText"
          className="ml-img ml-framelines"
        />

        <img src={frameCheck} alt="check symbol" className="ml-img ml-check" />

        {/* Sitting Person */}
        <img
          src={personSit}
          alt="sitting person"
          className="ml-img ml-person-sit"
        />
        <img
          src={FrameCode}
          alt="sitting person"
          className="ml-img ml-framecode"
        />
        <img
          src={settingsIcons}
          alt="sitting person"
          className="ml-img ml-setting"
        />
        <img
          src={FrameStaric}
          alt="sitting person"
          className="ml-img ml-FrameStaric"
        />

        {/* Standing Person */}
        <img
          src={personStand}
          alt="standing person"
          className="ml-img ml-person-stand"
        />
        <img
          src={frameCheckcircle}
          alt="standing person"
          className="ml-img ml-person-stand-front"
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
