import React from "react";
import "./Sections.css";

import systemDesignLightBg from "../../assets/asset/systemDesignLightBg (1).webp";
import systemDesignLightMan from "../../assets/asset/systemDesignLightMan.webp";
import systemDesignLine1 from "../../assets/asset/systemDesignLine1.webp";
import systemDesignLine2 from "../../assets/asset/systemDesignLine2.webp";
import systemDesignMessage from "../../assets/asset/systemDesignMessage.webp";

import product from "../../assets/asset/product.svg";
import roadmap from "../../assets/asset/roadmap.svg";
import wireframe from "../../assets/asset/wireframe.svg";
import design from "../../assets/asset/design.svg";

const AutomatedDep = () => {
  return (
    
    <div className="flex flex-col items-center bg-white px-5 py-10">

      {/* HEADER */}
      <div className="relative h-[50px] w-6 flex justify-center">
        <div className=" timeline-lineHeader7"></div>
      </div>
      
      <div className="flex flex-col items-center mb-10">
        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-[#ff4550] to-[#ff4550] text-white font-bold shadow-lg mb-4">
          6
        </div>

        <h2 className="text-xl tracking-[5px] font-semibold uppercase bg-gradient-to-r from-[#ff4550] to-[#ff4550] bg-clip-text text-transparent">
          AUTOMATED DEPLOUMENT
        </h2>
        <p 
          className="p-4 mx-34 text-center text-gray-600 leading-relaxed">Taking a product into Automate involves finalizing development, testing, preparing for deployment, and coordinating with operations and support teams. The process may vary based on the product and the organization's specific needs. Once completed, the product is released to the public for use.

        </p>
      </div>

      {/* MAIN CONTENT */}
      
      <div className="relative w-full max-w-5xl aspect-[16/10] mx-auto bg-white overflow-hidden flex items-center justify-center font-sans">
      
      {/* Embedded CSS for custom animations */}
      <style>{`
        @keyframes popIn {
          0% { transform: scale(0.5) translateY(20px); opacity: 0; }
          70% { transform: scale(1.05) translateY(-5px); opacity: 1; }
          100% { transform: scale(1) translateY(0); opacity: 1; }
        }
        @keyframes slideRight {
          0% { transform: translateX(-20px); opacity: 0; }
          100% { transform: translateX(0); opacity: 1; }
        }
        @keyframes drawLine {
          0% { r: 0; }
          100% { r: 150%; }
        }
        @keyframes spinSlow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes spinSlowReverse {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(-360deg); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        
        .animate-pop {
          animation: popIn 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
          opacity: 0; /* Hidden initially */
        }
        .animate-slide-right {
          animation: slideRight 0.5s ease-out forwards;
          opacity: 0;
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        .gear-spin {
          animation: spinSlow 8s linear infinite;
        }
        .gear-spin-reverse {
          animation: spinSlowReverse 8s linear infinite;
        }
      `}</style>

      {/* Background Image (Light Blob & Plant & Monitor Stand) */}
      <img 
        src="/productionLightBg.webp" 
        alt="Background" 
        className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[90%] object-contain z-0"
      />

      {/* SVG Container for Connecting Dashed Lines */}
      {/* We use a clipping circle that expands to reveal the lines naturally */}
      <svg className="absolute inset-0 w-full h-full z-0 pointer-events-none" viewBox="0 0 1000 625">
        <defs>
          <clipPath id="reveal-clip">
            <circle cx="500" cy="350" r="0">
              <animate attributeName="r" from="0" to="1000" dur="1.5s" fill="freeze" ease="ease-out" />
            </circle>
          </clipPath>
        </defs>
        
        <g clipPath="url(#reveal-clip)">
          {/* Top Left Path to Volume/Search */}
          <path d="M420,280 L350,150 L280,150" stroke="#10b981" strokeWidth="3" strokeDasharray="6 6" fill="none" />
          
          {/* Top Line to Gears */}
          <path d="M480,250 L480,120 L550,120" stroke="#10b981" strokeWidth="3" strokeDasharray="6 6" fill="none" />
          
          {/* Left Line to Jumar Flowchart */}
          <path d="M400,350 L220,350" stroke="#10b981" strokeWidth="3" strokeDasharray="6 6" fill="none" />
          
          {/* Bottom Left Lines to Waves */}
          <path d="M400,420 L220,420" stroke="#10b981" strokeWidth="3" strokeDasharray="6 6" fill="none" />
          <path d="M220,420 L220,480 L180,480" stroke="#10b981" strokeWidth="3" strokeDasharray="6 6" fill="none" />
          <path d="M220,420 L220,380 L180,380" stroke="#10b981" strokeWidth="3" strokeDasharray="6 6" fill="none" />
        </g>
      </svg>

      {/* Main Monitor Screen */}
      <div 
        className="absolute top-[35%] left-1/2 -translate-x-1/2 w-[42%] aspect-[16/11] bg-white border-[6px] border-emerald-500 rounded-lg shadow-xl flex overflow-hidden z-10 animate-pop"
        style={{ animationDelay: '0.2s' }}
      >
        {/* Left Side (Dark Code Editor) */}
        <div className="w-1/2 bg-[#1e293b] p-4 flex flex-col relative overflow-hidden">
          <div className="text-emerald-400 font-mono text-xl font-bold mb-4 animate-slide-right" style={{ animationDelay: '0.6s' }}>
            &lt;/&gt;
          </div>
          
          {/* Decorative code lines */}
          <div className="flex flex-col gap-3 mt-4">
             <div className="h-2 w-3/4 bg-gray-600 rounded animate-slide-right" style={{ animationDelay: '0.7s' }}></div>
             <div className="h-2 w-1/2 bg-emerald-500 rounded animate-slide-right" style={{ animationDelay: '0.8s' }}></div>
             <div className="h-2 w-5/6 bg-gray-600 rounded animate-slide-right" style={{ animationDelay: '0.9s' }}></div>
             <div className="h-2 w-2/3 bg-gray-600 rounded animate-slide-right" style={{ animationDelay: '1.0s' }}></div>
             <div className="mt-4 h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center animate-pop" style={{ animationDelay: '1.1s' }}>
               <span className="text-blue-800 font-bold text-xs">W</span>
             </div>
          </div>
        </div>

        {/* Right Side (White Content Area) */}
        <div className="w-1/2 bg-white p-4 flex flex-col gap-4">
          {/* Top Card */}
          <div className="w-full bg-gray-50 border border-gray-100 rounded shadow-sm p-2 flex flex-col gap-2 animate-pop" style={{ animationDelay: '0.8s' }}>
            <div className="h-16 bg-gray-200 rounded overflow-hidden relative">
               <div className="absolute bottom-0 left-0 w-full h-1/2 bg-emerald-100"></div>
               <div className="absolute bottom-0 left-4 w-8 h-8 rounded-full bg-emerald-300"></div>
            </div>
          </div>
          {/* Bottom Card */}
          <div className="w-full bg-gray-50 border border-gray-100 rounded shadow-sm p-2 flex flex-col gap-2 animate-pop" style={{ animationDelay: '1.0s' }}>
            <div className="h-16 bg-gray-200 rounded overflow-hidden relative">
               <div className="absolute bottom-0 left-0 w-full h-1/2 bg-emerald-100"></div>
               <div className="absolute bottom-0 left-8 w-12 h-6 bg-emerald-400 rounded-t-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* --- FLOATING ELEMENTS --- */}

      {/* Top Left: Volume Chart & Search Icon */}
      <div className="absolute top-[18%] left-[22%] z-20 animate-pop animate-float" style={{ animationDelay: '0.8s' }}>
        <div className="bg-white border border-gray-200 shadow-lg rounded-md p-2 relative flex items-center justify-center">
          {/* Search Icon sticking out */}
          <img src="/productionSearchIcon.webp" alt="Search" className="absolute -top-4 -left-4 w-8 h-8 drop-shadow-md" />
          <img src="/productionVolume.webp" alt="Volume Chart" className="w-16 h-auto" />
        </div>
      </div>

      {/* Top Right: Gears */}
      <div className="absolute top-[15%] right-[38%] z-20 animate-pop flex items-center gap-1" style={{ animationDelay: '1.0s' }}>
        <img src="/productionGear1.webp" alt="Gear 1" className="w-12 h-12 gear-spin" />
        <img src="/productionGear2.webp" alt="Gear 2" className="w-8 h-8 gear-spin-reverse -ml-2 -mt-4" />
      </div>

      {/* Mid Left: Jumar Flowchart */}
      <div className="absolute top-[50%] left-[12%] -translate-y-1/2 z-20 animate-pop animate-float" style={{ animationDelay: '1.1s' }}>
        <img src="/productionJumar.webp" alt="Flowchart" className="w-24 h-auto drop-shadow-lg" />
      </div>

      {/* Bottom Left: Wave Cards */}
      <div className="absolute top-[60%] left-[14%] z-20 flex flex-col gap-3">
        {/* Top Wave Card */}
        <div className="bg-white border-2 border-emerald-400 shadow-md rounded p-1 w-16 animate-pop" style={{ animationDelay: '1.2s' }}>
          <img src="/productionWave.webp" alt="Wave" className="w-full h-auto" />
        </div>
        {/* Bottom Wave Card */}
        <div className="bg-white border border-gray-300 shadow-md rounded p-1 w-16 ml-8 animate-pop" style={{ animationDelay: '1.3s' }}>
          <div className="w-full flex justify-between mb-1">
             <div className="w-2 h-2 rounded-full bg-gray-300"></div>
             <div className="w-6 h-2 rounded bg-gray-200"></div>
          </div>
          <img src="/productionWave.webp" alt="Wave" className="w-full h-auto opacity-70" />
        </div>
      </div>

    </div>


        



        
    </div>
  );
};

export default AutomatedDep;