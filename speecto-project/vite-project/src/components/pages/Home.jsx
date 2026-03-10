import React, { useState, useEffect } from 'react';
import '../../App.css';

import bannerReactCircle1 from '../../assets/asset/bannerReactCircle1.webp'
import bannerReactCircle2 from '../../assets/asset/bannerReactCircle2.webp'
import bannerReactCircle3 from '../../assets/asset/bannerReactCircle3.webp'
import bannerReactCircle4 from '../../assets/asset/bannerReactCircle4.webp'
import reactLogo from '../../assets/asset/reactIcon2.webp'
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
  const nodes = [
    { id: 1, type: 'image', src: bannerReactCircle1, rotation: -90 }, // Top
    { id: 2, type: 'dot',   src: null,               rotation: -45 }, // Top-Right
    { id: 3, type: 'image', src: bannerReactCircle2, rotation: 0 },   // Right
    { id: 4, type: 'dot',   src: null,               rotation: 45 },  // Bottom-Right
    { id: 5, type: 'image', src: bannerReactCircle3, rotation: 90 },  // Bottom
    { id: 6, type: 'dot',   src: null,               rotation: 135 }, // Bottom-Left
    { id: 7, type: 'image', src: bannerReactCircle4, rotation: 180 }, // Left
    { id: 8, type: 'dot',   src: null,               rotation: 225 }, // Top-Left
  ];

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
      <div className="content-box">
        
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


      <div>
        <div className="relative w-[400px] h-[400px] flex items-center justify-center">
      
      {/* 1. The Dotted Orbit Ring */}
      <div className="absolute w-[300px] h-[300px] border-[1px] border-dashed border-slate-500 rounded-full z-0 pointer-events-none"></div>

      {/* 2. The Main Central React Logo */}
      <div className="absolute z-10 w-44 h-44 flex items-center justify-center pointer-events-none">
        <img src={reactLogo} alt="React Logo" className="w-full h-full object-contain" />
      </div>

      {/* 3. The Popping Center Images */}
      {/* We pre-render all 4 images in the center, but keep them at scale-0 (shrunk to center) until hovered */}
      {nodes.filter(n => n.type === 'image').map((node) => (
        <img
          key={`center-${node.id}`}
          src={node.src}
          alt={`Center pop ${node.id}`}
          className={`
            absolute z-20 w-40 h-40 rounded-full object-cover shadow-[0_0_30px_rgba(139,128,249,0.5)]
            transition-all duration-300 ease-out origin-center
            ${hoveredImg === node.src ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}
          `}
        />
      ))}

      {/* 4. The Orbiting Small Circles & Dots */}
      {nodes.map((node) => {
        // We use inline styles for the transform because it dynamically calculates the perfect circle position
        // translate(150px) pushes it out to the edge of the 300px ring.
        const positionStyle = {
          transform: `rotate(${node.rotation}deg) translate(150px) rotate(-${node.rotation}deg)`,
        };

        return (
          <div key={node.id} className="absolute z-30 flex items-center justify-center" style={positionStyle}>
            {node.type === 'image' ? (
              // The small orbiting image
              <div
                className={`
                  w-14 h-14 rounded-full border-2 border-indigo-400 overflow-hidden cursor-pointer 
                  transition-transform duration-300 bg-[#081533]
                  ${hoveredImg === node.src ? 'scale-110 shadow-[0_0_15px_rgba(139,128,249,0.8)]' : 'scale-100'}
                `}
                onMouseEnter={() => setHoveredImg(node.src)}
                onMouseLeave={() => setHoveredImg(null)}
              >
                <img src={node.src} alt="tech" className="w-full h-full object-cover" />
              </div>
            ) : (
              // The small white dot
              <div className="w-4 h-4 rounded-full bg-white shadow-md pointer-events-none"></div>
            )}
          </div>
        );
      })}

    </div>
      </div>
    </section>
  );
}

export default Home;