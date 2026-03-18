import React, { useState } from 'react'
import kayboardBlue5dfb from "../../../assets/asset/kayboardBlue5dfb.webp"
import keyboardBase from "../../../assets/asset/keyboardBase.webp"
import keyboardButton from '../../../assets/asset/keyboardButton.webp'
import laptopBase from '../../../assets/asset/laptopBase.webp'
import laptopBaseOutline from '../../../assets/asset/laptopBaseOutline.svg'
import laptopBaseUpper from '../../../assets/asset/laptopBaseUpper.webp'
import laptopShadow from '../../../assets/asset/laptopShadow.webp'
import laptopScreenBack from '../../../assets/asset/laptopScreenBack.svg'
import laptopScreenUppeback from '../../../assets/asset/laptopScreenUppeback.svg'
import seondLaptopScreenText from '../../../assets/asset/seondLaptopScreenText.webp'

import './animation.css'


const LaptopAnimation = () => {
  const [brightness, setBrightness] = useState(100);
  return (
    <div>
      <div className="animation-wrapper">
      {/* Brightness Controller */}
      <div className="controls">
        <label>Brightness: {brightness}%</label>
        <input 
          type="range" 
          min="20" 
          max="150" 
          value={brightness} 
          onChange={(e) => setBrightness(e.target.value)} 
        />
      </div>

      {/* Main Animation Container */}
      <div 
        className="scene-container" 
        style={{ filter: `brightness(${brightness}%)` }}
      >
        <div className="isometric-scene">
          
          {/* Floating background elements (Spheres/Icons) */}
          <div className="floating-elements">
            {/* Large circles */}
            <div className="sphere sphere-1"></div>
            <div className="sphere sphere-2"></div>
            <div className="sphere sphere-3"></div>
            <div className="sphere sphere-4"></div>
            <div className="sphere sphere-5"></div>
            
            {/* Medium circles */}
            <div className="sphere sphere-6"></div>
            <div className="sphere sphere-7"></div>
            <div className="sphere sphere-8"></div>
            
            {/* Small decorative elements */}
            <div className="icon cross cross-1">✕</div>
            <div className="icon circle-outline circle-1"></div>
            <div className="icon dot dot-1"></div>
            <div className="icon dot dot-2"></div>
            <div className="icon dot dot-3"></div>
            <div className="icon dot dot-4"></div>
          </div>

          {/* Laptop Assembly */}
          <div className="laptop">
            
            {/* Shadow & Base */}
            <div className="laptop-bottom">
              <img src={laptopShadow} alt="shadow" className="layer shadow" />
              <img src={laptopBase} alt="base" className="layer base-main" />
              <img src={laptopBaseOutline} alt="outline" className="layer base-outline" />
              <img src={laptopBaseUpper} alt="upper base" className="layer base-upper" />
              <img src={seondLaptopScreenText} alt="keys" className="layer keyboard" />
              <img src={kayboardBlue5dfb} alt="glow" className="layer keyboard-glow pulse" />
            </div>

            {/* Screen / Lid */}
            <div className="laptop-lid">
              <img src={laptopScreenBack} alt="lid back" className="layer lid-back" />
              <img src={laptopScreenUppeback} alt="lid upper back" className="layer lid-upper" />
              <img src={keyboardBase} alt="screen" className="layer screen-front" />
              
              {/* Simulated Code Typing on Screen */}
              <div className="screen-content">
                <div className="code-line w-long type-1"></div>
                <div className="code-line w-short type-2"></div>
                <div className="code-line w-med type-3"></div>
                <div className="code-line w-long type-4"></div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
      
    </div>
  )
}

export default LaptopAnimation
