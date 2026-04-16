import React, { useState, useEffect } from "react";
import "../../App.css";

import HomeAmination from "./homeAnimation/HomeAmination";
import LaptopAnimation from "./homeAnimation/LaptopAnimation";
import StandingAnimation from "./homeAnimation/StandingAnimation.jsx";
import MobileAnimation from "./homeAnimation/MobileAnimation.jsx";
import ManLaptop from "./homeAnimation/ManLaptop.jsx";
// Here we define the different states of the hero section
const CONTENT_VARIATIONS = [
  {
    highlight: "HIGH-PERFORMANCE",
    suffix: "MOBILE APPS",
    typewriterText: "APP DEVELOPMENT",
    themeColor: "#ff2a85", // Pink
  },
  {
    highlight: "HIGH-PERFORMANCE",
    suffix: "WEB APPS",
    typewriterText: "WEB DEVELOPMENT",
    themeColor: "#ff6d00", // Orange
  },
  {
    highlight: " Crafting SUPERIOR",
    suffix: "SOFTWARE SOLUTIONS",
    typewriterText: "DIGITAL SOLUTION",
    themeColor: "#8b80f9", // Purple
  },
];

function Home() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [typingSpeed, setTypingSpeed] = useState(100);
  const [isButtonHovered, setIsButtonHovered] = useState(false);

  // Typewriter effect logic
  useEffect(() => {
    let ticker = setInterval(() => {
      handleTyping();
    }, typingSpeed);

    return () => clearInterval(ticker);
  }, [typedText, isDeleting, loopNum]);

  const [hoveredImg, setHoveredImg] = useState(null);

  // Define the 8 points on your circle.
  // 'rotation' is the angle: 0 is right, 90 is bottom, 180 is left, 270 is top
  // I've spaced them exactly 45 degrees apart as shown in your picture.

  const handleTyping = () => {
    const currentVariantIndex = loopNum % CONTENT_VARIATIONS.length;
    const fullText = CONTENT_VARIATIONS[currentVariantIndex].typewriterText;

    // Determine what the new text should be based on if we are typing or deleting
    const updatedText = isDeleting
      ? fullText.substring(0, typedText.length - 1)
      : fullText.substring(0, typedText.length + 1);

    setTypedText(updatedText);

    // Speed logic
    if (isDeleting) {
      setTypingSpeed(50);
    }

    // Phase transitions
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

  return (
    <section className="flex flex-col lg:flex-row hero-wrapper items-center justify-between">
      {/* 1. The Faded Background Text */}
      <div className="bg-watermark-text">TECH</div>

      {/* 2. The Main Content */}
      <div className="content-box w-full lg:w-[50%] z-10">
        <div className="order-1 lg:order-none header-group text-center lg:text-left w-full">
          <h2 className="hero-title">
            <span
              style={{
                color: isButtonHovered ? currentContent.themeColor : "white",
              }}
            >
              WE DEVELOP
            </span>{" "}
            <span style={{ color: currentContent.themeColor }}>
              {currentContent.highlight}
            </span>{" "}
            <span className="lg:block inline">{currentContent.suffix}</span>
          </h2>

          <h2
            className="hero-title mb-4 hidden lg:block"
            style={{ color: currentContent.themeColor }}
          >
            {typedText}
            <span className="cursor">|</span>
          </h2>
        </div>

        {/* Mobile Animation */}
        <div className="order-2 lg:hidden w-full h-[250px] relative flex items-center justify-center -my-10 scale-50 origin-center pointer-events-none">
          <StandingAnimation />
        </div>

        <p className="order-3 lg:order-none hero-description text-center lg:text-left w-full">
          We are a team of tech enthusiasts dedicated to developing world-class
          custom software solutions while fostering a culture of creativity,
          inclusivity, and continuous learning.
        </p>

        {/* Buttons */}
        <div className="order-4 lg:order-none button-group flex flex-col lg:flex-row w-full lg:w-auto px-2 lg:px-0 mt-4 lg:mt-0 items-center justify-center lg:justify-start lg:gap-[30px]">
          <button
            className="btn-get-started w-full lg:w-auto font-medium"
            style={{ "--btn-color": currentContent.themeColor }}
            onMouseEnter={() => setIsButtonHovered(true)}
            onMouseLeave={() => setIsButtonHovered(false)}
          >
            Get Started
          </button>
          <button
            className="btn-learn-more hidden lg:flex"
            onMouseEnter={() => setIsButtonHovered(true)}
            onMouseLeave={() => setIsButtonHovered(false)}
          >
            Learn more <span className="arrow-icon">→</span>
          </button>
        </div>
      </div>

      {/* Right Section Desktop Animation */}
      <div className="hidden lg:flex relative flex-1 w-full h-full min-h-[400px] md:min-h-[700px] overflow-hidden mt-10 md:mt-0">
        {/* <div className="absolute inset-0 flex items-center justify-center">
          <LaptopAnimation />
        </div> */}
        <div className="absolute inset-0 flex items-center justify-center">
          <StandingAnimation />
        </div>
        {/* <div className="absolute inset-0 flex items-center justify-center">
          <MobileAnimation />
        </div> */}
        {/* <ManLaptop /> */}
        {/* <div className="absolute inset-0 flex items-center justify-center">
          <ManLaptop />
        </div> */}
      </div>
    </section>
  );
}

export default Home;
