import React, { useState } from "react";
import "./StandingAnimation.css";

import manImg from "../../../assets/asset/man.webp";
import baseImg from "../../../assets/asset/steps.webp";
import baseImg1 from "../../../assets/asset/stepsBottom.webp";
import dashboard1 from "../../../assets/asset/psRound1.webp";
import dashboard2 from "../../../assets/asset/psRound2.webp";
// import dashboard2 from "../../../assets/asset/productionWave.webp";
// import dashboard3 from "../../../assets/asset/psRound2.webp";

const StandingAnimation = () => {
  return (
    <div className="standing-animation-container">
      <div className="isometric-scene">
        {/* Layered Platforms */}
        <div className="platform-base">
          <img src={baseImg} alt="Base Platform" className="platform-img" />
        </div>
        <div className="platform-base-step">
          <img src={baseImg1} alt="Base Platform" className="platform-img" />
        </div>

        {/* Floating/Orbiting Dashboards */}
        <div className="orbiting-dashboards">
          <div className="dashboard orbit-1">
            <img src={dashboard1} alt="Chart 1" />
          </div>

          {/* <div className="dashboard orbit-3">
            <img src={dashboard2} alt="Chart 3" />
          </div> */}
        </div>
        <div className="orbiting-dashboards-base">
          <div className="dashboard orbit-2">
            <img src={dashboard2} alt="Chart 2" />
          </div>
        </div>

        {/* Standing Man in Center */}
        <div className="standing-man">
          <img
            src={manImg}
            alt="Businessman"
            className="man-img flex flex-col items-center justify-center"
          />
        </div>
      </div>
    </div>
  );
};

export default StandingAnimation;
