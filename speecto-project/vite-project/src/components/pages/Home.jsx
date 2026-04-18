import React, { useState, useEffect } from "react";
import "../../App.css";

import StandingAnimation from "./homeAnimation/StandingAnimation.jsx";
import MobileAnimation from "./homeAnimation/MobileAnimation.jsx";
import ManLaptop from "./homeAnimation/ManLaptop.jsx";
import LaptopAnimation from "./homeAnimation/LaptopAnimation.jsx";

const CONTENT_VARIATIONS = [
  {
    highlight: "HIGH-PERFORMANCE",
    suffix: "MOBILE APPS",
    typewriterText: "APP DEVELOPMENT",
    themeColor: "#ff2a85",
  },
  {
    highlight: "HIGH-PERFORMANCE",
    suffix: "WEB APPS",
    typewriterText: "WEB DEVELOPMENT",
    themeColor: "#ff6d00",
  },
  {
    highlight: "CRAFTING SUPERIOR",
    suffix: "SOFTWARE SOLUTIONS",
    typewriterText: "DIGITAL SOLUTION",
    themeColor: "#8b80f9",
  },
];

function Home() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [typingSpeed, setTypingSpeed] = useState(100);
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  // New animation cycle state
  const [currentAnimIndex, setCurrentAnimIndex] = useState(0);

  const myComponents = [
    { component: <LaptopAnimation />, delay: 0 },
    { component: <ManLaptop />, delay: 1 },
    { component: <MobileAnimation />, delay: 2 },
    { component: <StandingAnimation />, delay: 3 },
  ];

  useEffect(() => {
    let ticker = setInterval(() => {
      handleTyping();
    }, typingSpeed);
    return () => clearInterval(ticker);
  }, [typedText, isDeleting, loopNum, typingSpeed]);

  // New: Animation cycle every 4 seconds
  useEffect(() => {
    const animInterval = setInterval(() => {
      setCurrentAnimIndex((prev) => (prev + 1) % myComponents.length);
    }, 5000); // 4s cycle to match staggered feel
    return () => clearInterval(animInterval);
  }, []);

  // Optional sync: Reset anim on typewriter loop
  // useEffect(() => {
  //   setCurrentAnimIndex(loopNum % myComponents.length);
  // }, [loopNum]);

  const handleTyping = () => {
    const currentVariantIndex = loopNum % CONTENT_VARIATIONS.length;
    const fullText = CONTENT_VARIATIONS[currentVariantIndex].typewriterText;
    const updatedText = isDeleting
      ? fullText.substring(0, typedText.length - 1)
      : fullText.substring(0, typedText.length + 1);

    setTypedText(updatedText);

    if (isDeleting) setTypingSpeed(50);

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setTypingSpeed(2000);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setTypingSpeed(100);
    }
  };

  const currentContent =
    CONTENT_VARIATIONS[loopNum % CONTENT_VARIATIONS.length];

  const ActiveAnimation = myComponents[currentAnimIndex].component;

  return (
    <section className="relative flex flex-col lg:flex-row hero-wrapper items-start justify-between px-6 lg:h-[600px] overflow-hidden pt-20">
      {/* 1. Background Watermark */}
      <div className="bg-watermark-text select-none">TECH</div>

      {/* 2. Main Content Box */}
      <div className="relative z-10 w-full lg:w-[60%] lg:mt-[1px]">
        <div className="header-group text-left text-2xl lg:w-[700px]">
          <h2 className="hero-title lg:text-2xl text-2xl tracking-tight leading-[1.1] uppercase">
            <span
              className="inline-block"
              style={{
                color: isButtonHovered ? currentContent.themeColor : "white",
                transition: "color 0.3s",
              }}
            >
              WE DEVELOP
            </span>{" "}
            <span
              className="whitespace-nowrap"
              style={{ color: currentContent.themeColor }}
            >
              {currentContent.highlight}
            </span>
            <br />
            <span className="text-white inline-block mt-1">
              {currentContent.suffix}
            </span>
          </h2>

          {/* Typewriter */}
          <h2
            className="hero-title text-3xl lg:text-5xl font-bold mt-1"
            style={{ color: currentContent.themeColor }}
          >
            {typedText}
            <span className="cursor text-white">|</span>
          </h2>
        </div>

        <p className="hero-description text-left lg:w-[690px] lg:mt-2 mt-8 text-gray-400 font-medium leading-6">
          We are a team of tech enthusiasts dedicated to developing world-class
          custom software solutions while fostering a culture of creativity,
          inclusivity, and continuous learning.
        </p>

        <div className="button-group flex gap-6 mt-10">
          <button
            className="btn-get-started px-8 py-3 rounded-lg font-bold"
            style={{ "--btn-color": currentContent.themeColor }}
            onMouseEnter={() => setIsButtonHovered(true)}
            onMouseLeave={() => setIsButtonHovered(false)}
          >
            Get Started
          </button>
          <button className="btn-learn-more flex items-center text-white font-bold gap-2">
            Learn more <span className="arrow-icon">→</span>
          </button>
        </div>
      </div>

      {/* 3. Right Side Animation - Cycling w/ transitions */}
      <div className="hidden lg:flex relative flex-1 items-center justify-center lg:pt-30 hero-anim-cycle">
        <div className="scale-125">
          <div
            className="anim-container opacity-100"
            style={{
              transitionDelay: `${myComponents[currentAnimIndex].delay * 0.3}s`,
            }}
          >
            {ActiveAnimation}
          </div>
        </div>
        {/* Debug: Show current index */}
        {/* <div className="text-xs text-white absolute bottom-0">Anim: {currentAnimIndex}</div> */}
      </div>
    </section>
  );
}

export default Home;
