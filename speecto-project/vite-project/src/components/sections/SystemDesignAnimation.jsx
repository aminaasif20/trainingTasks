import React from "react";
import systemDesignLightMan from "../../assets/asset/systemDesignLightMan.webp";
import "./SystemDesignAnimation.css";
import l1 from "../../assets/asset/systemDesignLine1.webp";
import l2 from "../../assets/asset/systemDesignLine2.webp";

/* ── Inline gear SVG (material-design settings icon) ── */
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

const SystemDesignAnimation = () => {
  return (
    <div className="sda-scene">
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
          {/* Big central gear: PULSES only — no rotation */}
          <div className="sda-big-gear">
            <GearSVG size={125} color="#7c3aed" />
            {/* White circle behind API label */}
            <div className="sda-api-circle">
              <span className="sda-api-label">API</span>
            </div>
          </div>
          <img className="w-15 mr-8  mt-25" src={l2} alt="" />
          {/* Small gears at FIXED positions — each spins on its own axis */}
          {/* Top-right gear */}

          <div className="sda-small-gear sda-gear-top-right">
            <GearSVG size={42} color="#5759b3" />
          </div>

          {/* Bottom-left gear */}
          <div className="mb-3 sda-small-gear sda-gear-bottom-left">
            <GearSVG size={42} color="#5759b3" />
          </div>
          <div className="mr-[-20px] sda-small-gear sda-gear-bottom-left1">
            <GearSVG size={26} color="#454679ff" />
          </div>

          {/* Bottom-right gear */}
          <div className="sda-small-gear sda-gear-bottom-right">
            <GearSVG size={28} color="#454679ff" />
          </div>
        </div>

        <div className="sda-neck" />
        <div className="sda-base" />
      </div>

      {/* ── GREY FADING ELEMENTS ── */}
      <div className="sda-grey sda-grey-rect sda-fade-a">
        <div className="sda-grey-rect-dots">
          <span />
          <span />
          <span />
        </div>
        <div className="sda-grey-rect-bar" />
        <div className="sda-grey-rect-bar sda-bar-short" />
      </div>

      <div className="sda-grey sda-grey-gear-tr sda-fade-b">
        <GearSVG size={42} color="#9ca3af" />
      </div>

      <div className="sda-grey sda-code-brackets sda-fade-c">&lt;/&gt;</div>

      <div className="sda-grey sda-grey-gear-ml sda-fade-a">
        <GearSVG size={46} color="#9ca3af" />
      </div>

      <div className="sda-grey sda-grey-gear-mr sda-fade-b">
        <GearSVG size={32} color="#9ca3af" />
      </div>

      {/* ── PURPLE CARDS ── */}
      <div className="sda-card sda-cloud-card">
        <div className="sda-card-hdr">
          <span />
          <span />
          <span />
        </div>
        <div className="sda-cloud-body">
          <svg width="38" height="32" viewBox="0 0 38 32" fill="none">
            <ellipse cx="19" cy="20" rx="15" ry="10" fill="#1f1f4e" />
            <ellipse cx="12" cy="20" rx="9" ry="7" fill="#1f1f4e" />
            <ellipse cx="26" cy="20" rx="9" ry="7" fill="#1f1f4e" />
            <ellipse cx="19" cy="14" rx="9" ry="9" fill="#1f1f4e" />
            <polygon points="19,6 14,14 24,14" fill="white" />
            <rect x="17" y="14" width="4" height="8" fill="white" />
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
            </div>
          ))}
        </div>
      </div>

      <div className="sda-code-bubble">&lt;/&gt;</div>

      {/* ── PERSON ── */}
      <img src={systemDesignLightMan} alt="Developer" className="sda-person" />
    </div>
  );
};

export default SystemDesignAnimation;
