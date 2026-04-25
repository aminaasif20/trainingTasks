import React, { useState, useEffect } from "react";
import "../../App.css";

import StandingAnimation from "./homeAnimation/StandingAnimation.jsx";
import MobileAnimation from "./homeAnimation/MobileAnimation.jsx";
import ManLaptop from "./homeAnimation/ManLaptop.jsx";
import LaptopAnimation from "./homeAnimation/LaptopAnimation.jsx";
import homeAnimation from "./homeAnimation/HomeAmination.jsx";
import tech from "../../assets/asset/tech.jpg";
import HomeAnimation from "./homeAnimation/HomeAmination.jsx";

const CONTENT_VARIATIONS = [
  {
    highlight: "HIGH-PERFORMANCE",
    suffix: "MOBILE APPS",
    typewriterText: "APP DEVELOPMENT",
    themeColor: "#ff2a85",
    gradientLight: "#ffadd2",
  },
  {
    highlight: "HIGH-PERFORMANCE",
    suffix: "WEB APPS",
    typewriterText: "WEB DEVELOPMENT",
    themeColor: "#ff6d00",
    gradientLight: "#ffb347",
  },
  {
    highlight: "CRAFTING SUPERIOR",
    suffix: "SOFTWARE SOLUTIONS",
    typewriterText: "DIGITAL SOLUTION",
    themeColor: "#8b80f9",
    gradientLight: "#c4beff",
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
    { component: <HomeAnimation />, delay: 4 },
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
    <section className="relative flex flex-col lg:flex-row hero-wrapper items-stretch lg:items-start justify-between px-6 min-h-screen overflow-hidden pt-16 lg:pt-20">
      {/* 1. Background Watermark */}
      <div className=" bg-watermark-text select-none">
        TECH
        {/* <img src={tech} alt="" /> */}
      </div>

      <div className="contents lg:block lg:relative lg:z-10 lg:w-[60%] lg:mt-[1px]">
        {/* Title block — order 1 on mobile */}
        <div className="order-1 header-group lg:w-[700px]">
          <h2 className="hero-title 2xl:text-4xl lg:text-3xl sm:text-2xl text-lg text-primary font-bold font-Nunito md:!text-left !font-Lemon !font-normal !text-center !text-white1 2xl:!text-5xl lg:!text-4xl sm:!text-3xl uppercase">
            <span
              className="inline-block hero-title"
              style={{
                color: isButtonHovered ? currentContent.themeColor : "white",
                transition: "color 0.3s",
              }}
            >
              WE DEVELOP
            </span>{" "}
            <span
              className="hero-title whitespace-nowrap theme-gradient-shift"
              style={{
                "--c1": currentContent.themeColor,
                "--c2": currentContent.gradientLight,
              }}
            >
              {currentContent.highlight}
            </span>
            {/* <br /> */}
          </h2>
          <span className=" hero-title mt-1 text-white inline-block">
            {currentContent.suffix}
          </span>

          {/* Typewriter */}
          <h2
            className="hero-title my-2 theme-gradient-shift  uppercase"
            style={{
              "--c1": currentContent.themeColor,
              "--c2": currentContent.gradientLight,
            }}
          >
            {typedText}
            <span
              className=" whitespace-nowrap theme-gradient-shift text-white"
              style={{
                "--c1": currentContent.themeColor,
                "--c2": currentContent.gradientLight,
              }}
            ></span>
          </h2>
        </div>

        {/* Description — order 2 on mobile */}
        <p className="order-2  font-nunito sm:block hidden text-left w-full lg:w-[700px] lg:mt-2 text-gray-400 font-medium leading-4  lg:text-base  hero-description">
          We are a team of tech enthusiasts dedicated to developing world-class
          custom software solutions while fostering a culture of creativity,
          inclusivity, and continuous learning.
        </p>

        {/* CTA Buttons — order 4 on mobile (after animation) */}
        <div className="order-4 flex flex-col sm:flex-row w-full sm:w-80 items-center sm:items-start justify-center lg:justify-start gap-8 mt-4 lg:mt-4">
          <button
            className="btn-get-started text-lg rounded-lg font-bold w-full lg:w-40 sm:w-80"
            style={{ "--btn-color": currentContent.themeColor }}
            onMouseEnter={() => setIsButtonHovered(true)}
            onMouseLeave={() => setIsButtonHovered(false)}
          >
            Get Started
          </button>
          <button className="flex mt-3 ml-3 text-lg items-center text-white font-bold  btn-learn-more">
            Learn more <span className="arrow-icon">→</span>
          </button>
        </div>
      </div>

      {/* Animation — order 3 on mobile (between description and buttons) */}
      <div className="order-3 lg:order-2 mt-6 lg:mt-5 lg:flex-1 relative flex items-center justify-center h-[400px] lg:h-auto hero-anim-cycle">
        <div className="scale-80 lg:scale-105 w-full h-full flex items-center justify-center">
          <div
            className="anim-container w-full h-full flex items-center justify-center"
            style={{
              transition:
                "opacity 0.8s ease, transform 0.8s cubic-bezier(0.25,0.46,0.45,0.94)",
              opacity: 1,
              transitionDelay: `${myComponents[currentAnimIndex].delay * 0.3}s`,
            }}
          >
            {ActiveAnimation}
          </div>
          {/* <LaptopAnimation/> */}
        </div>
      </div>
    </section>
  );
}
export default Home;
