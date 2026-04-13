import React from "react";
import systemDesignLightMan from "../../assets/asset/systemDesignLightMan.webp";
import systemDesignLightBg from "../../assets/asset/systemDesignLightBg.webp";
import bracesIcon from "../../assets/asset/bracesIcon.webp";
import settingsIcon from "../../assets/asset/settingsIcons.webp";
import "./SystemDesignAnimation.css";
import l1 from "../../assets/asset/systemDesignLine1.webp";
import l2 from "../../assets/asset/systemDesignLine2.webp";
import message from "../../assets/asset/systemDesignMessage.webp";

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

const Gear6SVG = ({ size = 50, color = "#8b95a1" }) => (
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

const SystemDesignAnimation = () => {
  return (
    <div className="sda-scene">
      {/* ── GREY BACKGROUND IMAGE LAYER (asset) ── */}
      <img src={systemDesignLightBg} alt="" className="sda-bg-layer" />
      {/* ── SVG CONNECTOR LINES ── */}
      <svg
        className="sda-connectors"
        viewBox="0 0 490 505"
        xmlns="http://www.w3.org/2000/svg"
      >
        <polyline
          points="108,165 130,165 130,200"
          fill="none"
          stroke="#b0b8d0"
          strokeWidth="1.8"
        />
        <polyline
          points="360,210 386,210 386,220"
          fill="none"
          stroke="#b0b8d0"
          strokeWidth="1.8"
        />
        <polyline
          points="430,272 430,340"
          fill="none"
          stroke="#7375c9"
          strokeWidth="1.8"
        />
        <circle cx="386" cy="210" r="4" fill="#7375c9" />
        <circle cx="430" cy="340" r="4" fill="#7375c9" />
        <line
          x1="210"
          y1="72"
          x2="210"
          y2="90"
          stroke="#b0b8d0"
          strokeWidth="1.5"
        />
      </svg>

      {/* ── MONITOR ── */}
      <div className="sda-monitor">
        <div className="sda-topbar">
          <span className="sda-dot" />
          <span className="sda-dot" />
          <span className="sda-dot" />
        </div>

        <div className="sda-screen">
          <img className="w-10 ml-10 mb-10" src={l1} alt="" />
          {/* Big central gear*/}
          <div className="sda-big-gear">
            <GearSVG size={105} color="#9246f4" />
            {/* White circle behind API label */}
            <div className="sda-api-circle">
              <span className="sda-api-label">API</span>
            </div>
          </div>
          <img className="w-15 mr-8  mt-25" src={l2} alt="" />
          {/* Top-right gear */}

          <div className="sda-small-gear sda-gear-top-right">
            <GearSVG size={42} color="#6230a0" />
          </div>

          {/* Bottom-left gear */}
          <div className="mb-3 sda-small-gear sda-gear-bottom-left">
            <GearSVG size={42} color="#6230a0" />
          </div>
          <div className="mr-[-20px] sda-small-gear sda-gear-bottom-left1">
            <GearSVG size={26} color="#503d67" />
          </div>

          {/* Bottom-right gear */}
          <div className="sda-small-gear sda-gear-bottom-right">
            <GearSVG size={28} color="#503d67" />
          </div>
        </div>
      </div>

      {/* Top-center grey box */}
      <div className="sda-grey1 sda-grey-rect sda-fade-a1">
        <div className="sda-grey-rect-dots">
          <span />
          <span />
          <span />
        </div>
        <div className="sda-grey-rect-bar" />
        <div className="sda-grey-rect-bar sda-bar-short" />
      </div>
      <div className=" sda-self-spin sda-grey sda-grey-gear-ml1 sda-fade-a">
        <Gear6SVG size={92} />
      </div>

      {/* Top-right grey gear SVG */}
      <div className="sda-grey sda-grey-gear-tr sda-fade-b">
        <Gear6SVG size={44} />
      </div>

      {/* Code brackets image */}
      {/* <div className="sda-grey sda-code-brackets sda-fade-c">
        <img src={bracesIcon} alt="" className="sda-braces-img" />
      </div> */}

      {/* Left-middle grey gear SVG */}
      <div className="  sda-grey sda-grey-gear-ml sda-fade-a">
        <Gear6SVG size={52} />
      </div>

      {/* Right-middle small grey gear SVG */}
      <div className="sda-grey sda-grey-gear-mr sda-fade-b">
        <Gear6SVG size={46} />
      </div>

      {/* ── PURPLE CARDS ── */}
      <div className="sda-card sda-cloud-card">
        {/* Dark header with 3 white dots */}
        <div className="sda-cloud-hdr">
          <span className="sda-cloud-dot" />
          <span className="sda-cloud-dot" />
          <span className="sda-cloud-dot" />
        </div>
        {/* Light lavender body with cloud upload icon */}
        <div className="sda-cloud-body">
          <svg
            width="44"
            height="36"
            viewBox="0 0 44 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Cloud silhouette — dark solid shape */}
            <path
              d="M34 28H12C7.6 28 4 24.4 4 20C4 16.1 6.7 12.8 10.4 12.1C10.9 7.6 14.8 4 19.5 4C23.1 4 26.2 6 27.8 9
                 C28.7 8.7 29.6 8.5 30.5 8.5C35.2 8.5 39 12.3 39 17C39 17.7 38.9 18.3 38.7 18.9
                 C40.6 19.8 42 21.7 42 24C42 26.2 40.3 28 38 28Z"
              fill="#2a1050"
            />
            {/* Upload arrow stem */}
            <rect x="20" y="15" width="4" height="10" rx="1.5" fill="#c69ef9" />
            {/* Upload arrow head */}
            <polygon points="22,8 16,16 28,16" fill="#c69ef9" />
          </svg>
        </div>
      </div>

      <div className="sda-card sda-code-card">
        <div className="sda-card-hdr">
          <span />
          <span />
          <span />
        </div>
        <div className="sda-lines-wrap">
          {/* Row 1 — full width purple */}
          <div className="sda-cl sda-cl-purple sda-cl-90" />
          {/* Row 2 — two segments: green + grey */}
          <div className="sda-cl-row">
            <div className="sda-cl sda-cl-green sda-cl-30" />
            <div className="sda-cl sda-cl-grey sda-cl-40" />
          </div>
          {/* Row 3 — wide purple */}
          <div className="sda-cl sda-cl-purple sda-cl-75" />
          {/* Row 4 — indented: green + green short */}
          <div className="sda-cl-row sda-cl-indent">
            <div className="sda-cl sda-cl-green sda-cl-35" />
            <div className="sda-cl sda-cl-green sda-cl-25" />
          </div>
          {/* Row 5 — purple medium */}
          <div className="sda-cl sda-cl-purple sda-cl-50" />
          {/* Row 6 — grey long */}
          <div className="sda-cl sda-cl-grey sda-cl-80" />
          {/* Row 7 — indented green */}
          <div className="sda-cl-row sda-cl-indent">
            <div className="sda-cl sda-cl-green sda-cl-45" />
          </div>
          {/* Row 8 — dark/muted short */}
          <div className="sda-cl sda-cl-dark sda-cl-60" />
          {/* Row 9 — two green segments */}
          <div className="sda-cl-row">
            <div className="sda-cl sda-cl-green sda-cl-28" />
            <div className="sda-cl sda-cl-grey sda-cl-35" />
          </div>
        </div>
      </div>

      <div className="sda-card sda-db-card">
        {/* ── LEFT: blocks enter from top → fill → exit top ── */}
        <div className="sda-db-left">
          <div className="sda-db-left-track">
            <div className="sda-db-block" />
            <div className="sda-db-block" />
            <div className="sda-db-block" />
            <div className="sda-db-block" />
            <div className="sda-db-block" />
            <div className="sda-db-block" />
          </div>
        </div>

        {/* ── RIGHT: dots always visible, bar scans left → right over them ── */}
        <div className="sda-db-right">
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="sda-db-row">
              {/* Scanner bar — slides left→right over the dots */}
              <div className="sda-db-bar" />
              {/* Dots — always visible, sit above the bar */}
              <div className=" sda-db-dot" />
              <div className="sda-db-dot" />
              <div className="sda-db-dot" />
              <div className="sda-db-dot" />
            </div>
          ))}
        </div>
      </div>

      <div className="sda-code-bubble">
        <img src={message} alt="" />
      </div>

      {/* ── PERSON ── */}
      <img src={systemDesignLightMan} alt="Developer" className="sda-person" />
    </div>
  );
};

export default SystemDesignAnimation;
