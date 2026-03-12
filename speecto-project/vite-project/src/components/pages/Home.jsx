import React, { useState, useEffect } from 'react';
import '../../App.css';

import HomeAmination from './homeAnimation/HomeAmination';
// Here we define the different states of the hero section
const CONTENT_VARIATIONS = [
  {
    highlight: "HIGH-PERFORMANCE",
    suffix: "MOBILE APPS",
    typewriterText: "APP DEVELOPMENT",
    themeColor: "#ff2a85" // Pink
  },
  {
    highlight: "HIGH-PERFORMANCE",
    suffix: "WEB APPS",
    typewriterText: "WEB DEVELOPMENT",
    themeColor: "#ff6d00" // Orange
  },
  {
    highlight: " Crafting SUPERIOR",
    suffix: "SOFTWARE SOLUTIONS",
    typewriterText: "DIGITAL SOLUTION",
    themeColor: "#8b80f9" // Purple
  }
];

function Home() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typedText, setTypedText] = useState('');
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
      setTypingSpeed(50); // Delete faster than typing
    }

    // Phase transitions
    if (!isDeleting && updatedText === fullText) {
      // Finished typing: pause for 2 seconds before deleting
      setIsDeleting(true);
      setTypingSpeed(2000); 
    } else if (isDeleting && updatedText === '') {
      // Finished deleting: move to next word and start typing again
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setTypingSpeed(100);
    }
  };

  // Get the current variation based on the loop number
  const currentContent = CONTENT_VARIATIONS[loopNum % CONTENT_VARIATIONS.length];

  return (
    <section className="flex flex-row hero-wrapper">
      
      {/* 1. The Faded Background Text */}
      <div className="bg-watermark-text">
        TECH
      </div>

      {/* 2. The Main Content */}
      <div className=" content-box">
        
        <h2 className="hero-title">
          <span style={{ color: isButtonHovered ? currentContent.themeColor : 'white' }}>
            WE DEVELOP
          </span>
          {' '}
          <span style={{ color: currentContent.themeColor }}>
            {currentContent.highlight}
          </span>
          <br />
          {currentContent.suffix}
        </h2>
        
        {/* The Typewriter Text */}
        <h2 
          className="hero-title mb-4" 
          style={{ color: currentContent.themeColor }}
        >
          {typedText}
          <span className="cursor">|</span>
        </h2>

        <p className="hero-description">
          We are a team of tech enthusiasts dedicated to developing world-class
          custom software solutions while fostering a culture of creativity,
          inclusivity, and continuous learning.
        </p>
        
        {/* Buttons */}
        <div className="button-group">
          <button 
            className="btn-get-started"
            // We only pass the CSS variable now! The CSS file handles the rest.
            style={{ '--btn-color': currentContent.themeColor }}
            onMouseEnter={() => setIsButtonHovered(true)}
            onMouseLeave={() => setIsButtonHovered(false)}
          >
            Get Started
          </button>
          <button 
            className="btn-learn-more"
            onMouseEnter={() => setIsButtonHovered(true)}
            onMouseLeave={() => setIsButtonHovered(false)}
          >
            Learn more <span className="arrow-icon">→</span>
          </button>
        </div>

      </div>

      {/* Right Section */}


      <HomeAmination/>
      

    </section>
  );
}

export default Home;