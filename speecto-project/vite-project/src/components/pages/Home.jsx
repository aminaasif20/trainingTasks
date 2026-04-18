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

  useEffect(() => {
    let ticker = setInterval(() => {
      handleTyping();
    }, typingSpeed);
    return () => clearInterval(ticker);
  }, [typedText, isDeleting, loopNum, typingSpeed]);

  const myComponents = [
    {
      component: <LaptopAnimation />,
      delay: 0,
    },
    {
      component: <ManLaptop />,
      delay: 2,
    },
    {
      component: <MobileAnimation />,
      delay: 4,
    },
    {
      component: <StandingAnimation />,
      delay: 6,
    },
  ];

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

  return (
    <section className="relative flex flex-col lg:flex-row hero-wrapper items-start justify-between px-6  lg:h-[600px] overflow-hidden pt-20">
      {/* 1. Background Watermark */}
      <div className=" bg-watermark-text select-none">TECH</div>

      {/* 2. Main Content Box */}
      {/* Increased lg:w to 60% to give text more room to stay on one line */}
      <div className="relative z-10 w-full lg:w-[60%] lg:mt-[1px] ">
        <div className="header-group text-left text-2xl lg:w-[700px]">
          <h2 className="hero-title lg:text-2xl text-2xl   tracking-tight leading-[1.1] uppercase">
            <span
              className="inline-block"
              style={{
                color: isButtonHovered ? currentContent.themeColor : "white",
                transition: "color 0.3s",
              }}
            >
              WE DEVELOP
            </span>{" "}
            {/* whitespace-nowrap ensures WE DEVELOP + HIGHLIGHT stay on Line 1 */}
            <span
              className="whitespace-nowrap"
              style={{ color: currentContent.themeColor }}
            >
              {currentContent.highlight}
            </span>
            <br />
            {/* Line 2: Suffix */}
            <span className="text-white inline-block mt-1">
              {currentContent.suffix}
            </span>
          </h2>

          {/* Line 3: Typewriter */}
          <h2
            className="hero-title text-3xl lg:text-5xl font-bold mt-1"
            style={{ color: currentContent.themeColor }}
          >
            {typedText}
            <span className="cursor text-white">|</span>
          </h2>
        </div>

        <p className="hero-description text-left  lg:w-[690px] lg:mt-2 mt-8 text-gray-400 font-medium leading-6 ">
          We are a team of tech enthusiasts dedicated to developing world-class
          custom software solutions while fostering a culture of creativity,
          inclusivity, and continuous learning.
        </p>

        <div className="button-group flex gap-6 mt-10">
          <button
            className="btn-get-started px-8 py-3 rounded-lg font-bold"
            style={{ "--btn-color": currentContent.themeColor }}
          >
            Get Started
          </button>
          <button className="btn-learn-more flex items-center text-white font-bold gap-2">
            Learn more <span className="arrow-icon">→</span>
          </button>
        </div>
      </div>

      {/* 3. Right Side Animation - Stays low and centered */}
      <div className="hidden lg:flex relative flex-1 items-center justify-center lg:pt-30">
        <div className="scale-125">
          {myComponents.map((item, index) => (
            <div
              key={item.id}
              // The CSS class that holds your animation logic
              className={`staggered-item w-80 p-6 rounded-lg text-white font-bold text-center shadow-lg ${item.color}`}
              style={{
                // THE TRICK: Multiply the array index by a set time (e.g., 0.4 seconds)
                // Item 0 gets 0s delay. Item 1 gets 0.4s. Item 2 gets 0.8s, etc.
                animationDelay: `${index * 0.4}s`,
              }}
            >
              {item.title}
            </div>
          ))}
          {/* <StandingAnimation /> */}
          {/* <MobileAnimation /> */}
          {/* <ManLaptop /> */}
          {/* <LaptopAnimation /> */}
        </div>
      </div>
    </section>
  );
}

export default Home;
