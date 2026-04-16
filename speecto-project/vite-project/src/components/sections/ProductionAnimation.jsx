import React from "react";
import "./ProductionAnimation.css";

// Assets
import productionLightBg from "../../assets/asset/productionLightBg.webp";
import productionJumar from "../../assets/asset/productionJumar.webp";
import productionSearchIcon from "../../assets/asset/productionSearchIcon.webp";
import productionVolume from "../../assets/asset/productionVolume.webp";
import productionGear1 from "../../assets/asset/productionGear1.webp";
import productionGear2 from "../../assets/asset/productionGear2.webp";
import plantVectorLight from "../../assets/asset/plantVectorLight.webp";
import windowVectorLight from "../../assets/asset/windowVectorLight.webp";

// A reusable line of code component
const CodeLine = ({
  w,
  h = "h-1.5",
  color = "bg-[#455A64]",
  mt = "mt-3",
  ml = "ml-0",
}) => (
  <div
    className={`${w} ${h} ${color} ${mt} ${ml} rounded-sm pa-code-line`}
  ></div>
);
const mountainLine = ({
  w,
  h = "h-1.5",
  color = "bg-[#455A64]",
  mt = "mt-3",
  ml = "ml-0",
}) => (
  <div
    className={`${w} ${h} ${color} ${mt} ${ml} rounded-sm pa-code-line`}
  ></div>
);

const ProductionAnimation = () => {
  return (
    <div className="relative w-full h-[600px] flex items-center justify-center font-sans">
      {/* 1. Background Blob */}
      <div className="absolute top-[10%] left-[8%] w-[85%] h-[80%] z-0 opacity-80 pointer-events-none">
        <img
          src={productionLightBg}
          alt="Background Blob"
          className="w-full h-full object-contain"
          onError={(e) => (e.target.style.display = "none")}
        />
      </div>

      {/* 2. Dotted Connection Lines */}
      {/* Defined in an SVG that spans the whole area */}
      <svg
        className="absolute inset-0 w-full h-full z-0 pointer-events-none"
        style={{ top: 0, left: 0 }}
      >
        {/* Line to Top Left (Search) */}
        <line
          x1="40%"
          y1="40%"
          x2="25%"
          y2="25%"
          stroke="#a0aab0"
          strokeWidth="2"
          strokeDasharray="4 4"
        />
        {/* Line to Top Middle (Volume/Chart) */}
        <line
          x1="40%"
          y1="35%"
          x2="35%"
          y2="18%"
          stroke="#a0aab0"
          strokeWidth="2"
          strokeDasharray="4 4"
        />

        {/* Line to Top Right (Gears) */}
        <line
          x1="40%"
          y1="35%"
          x2="50%"
          y2="20%"
          stroke="#a0aab0"
          strokeWidth="2"
          strokeDasharray="4 4"
        />
        {/* Line to Left (Jumar structure) */}
        <line
          x1="19%"
          y1="50%"
          x2="50%"
          y2="50%"
          stroke="#a0aab0"
          strokeWidth="2"
          strokeDasharray="4 4"
        />
        <line
          x1="19%"
          y1="70%"
          x2="50%"
          y2="50%"
          stroke="#a0aab0"
          strokeWidth="2"
          strokeDasharray="4 4"
        />
      </svg>

      {/* 3. Floating Elements (will be animated later) */}

      {/* Top Left: Search & Window */}
      <div className="absolute top-[15%] left-[20%] z-20 flex flex-col items-center pa-float-1">
        <div className="relative">
          <div className="sda-card-Pro">
            {/* Dark header with 3 white dots */}
            <div className="sda-cloud-hdr-Pro">
              <span className="sda-cloud-dot" />
              <span className="sda-cloud-dot" />
              <span className="sda-cloud-dot" />
            </div>
            <div className="w-12 h-10   border-white shadow-lg">
              <div className="sda-db-right-Pro">
                {[0, 1, 2, 3].map((i) => (
                  <div key={i} className="sda-db-row-Pro">
                    <div className="sda-db-bar-Pro" />
                  </div>
                ))}
              </div>
            </div>
            {/* <div className="sda-cloud-body"></div> */}
          </div>
          <img
            src={productionSearchIcon}
            alt="Search"
            className="relative w-8 ml-2 mt-12 object-contain drop-shadow-lg pa-bounce"
            onError={(e) => (e.target.style.display = "none")}
          />
        </div>
      </div>

      {/* Top Middle: Chart/Volume */}
      <div className="absolute top-[5%] left-[35%] z-20 pa-float-2">
        <img
          src={productionVolume}
          alt="Chart Volume"
          className="w-24 object-contain drop-shadow-md"
          onError={(e) => (e.target.style.display = "none")}
        />
      </div>

      {/* Top Right: Gears */}
      <div className="absolute top-[12%] right-[40%] z-20 flex items-center justify-center pa-float-3">
        <div className="relative w-24 h-24">
          <img
            src={productionGear1}
            alt="Gear 1"
            className="absolute top-0 left-0 w-15 object-contain pa-spin"
            onError={(e) => (e.target.style.display = "none")}
          />
          <img
            src={productionGear2}
            alt="Gear 2"
            className="absolute bottom-3 right-[-2px] w-12 object-contain pa-spin-reverse"
            onError={(e) => (e.target.style.display = "none")}
          />
        </div>
      </div>

      <div className="absolute inset-0 overflow-hidden">
        <div className="line line1"></div>
        <div className="line line2"></div>
        <div className="line line3"></div>
        <div className="line line4"></div>
        <div className="line line5"></div>
      </div>

      {/* Left Middle: Tree/Jumar */}
      <div className="absolute top-[48%] left-[17%] z-20 ">
        <img
          src={productionJumar}
          alt="Hierarchy"
          className="w-28  object-contain drop-shadow-md"
          onError={(e) => (e.target.style.display = "none")}
        />
        {/* Sample small floating boxes mimicking the Jumar */}
        <div className="w-30 h-6 ml-[-18px]  bg-white border border-gray-900 shadow-sm mt-8 p-1">
          <div className="flex items-center mt-1">
            {/* <div className="w-10 h-1 bg-gray-200"></div> */}
          </div>
        </div>
        {/* Document Card */}
        <div className="w-[70%] ml-6 h-8 mt-3 border-1 border-gray-900  relative bg-gray-100 shadow-sm overflow-hidden">
          {/* Top Left Dot */}
          <div className="absolute top-2 left-2 w-2 h-2 bg-[#2ecc71] rounded-full"></div>
          <div className="absolute bottom-2 left-2 right-2 h-8 overflow-hidden">
            <svg
              viewBox="0 0 100 40"
              preserveAspectRatio="none"
              className="w-full h-full mountain-move"
            >
              <polygon
                points="0,40 35,22 55,28 75,12 100,20 100,40"
                fill="#2ecc71"
              />
            </svg>
          </div>
        </div>
        <div className="w-[70%] ml-6 h-8 mt-2 border-1 mb-4 border-gray-900  relative bg-gray-100 shadow-sm overflow-hidden">
          {/* Top Left Dot */}
          <div className="absolute top-2 left-2 w-2 h-2 bg-[#2ecc71] rounded-full"></div>

          <div className="absolute bottom-2 left-2 right-2 h-8 overflow-hidden">
            <svg
              viewBox="0 0 100 40"
              preserveAspectRatio="none"
              className="w-full h-full mountain-move"
            >
              <polygon
                points="0,40 35,22 55,28 75,12 100,20 100,40"
                fill="#2ecc71"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* 4. Central Monitor Layout */}
      <div className="relative z-10 flex flex-col items-center mt-8">
        {/* Monitor Screen Frame */}
        <div className="w-[380px] ml-16 h-[260px] border-[10px] border-[#0bd886] rounded-sm bg-white shadow-xl relative flex overflow-hidden">
          {/* Central Black Semi-Circle Overlap */}
          <div className="absolute left-[50%] top-1/2 -translate-y-1/2 -translate-x-[50%] w-10 h-10 bg-[#1b2a33] rounded-full z-20 border-r-2 border-white"></div>

          {/* Left Screen: Dark Code Editor */}
          <div className="w-[50%] h-full bg-[#1b2a33] relative p-4 flex flex-col z-10">
            <div className="text-white font-bold text-xl mb-4 tracking-widest pl-2">
              &lt;/&gt;
            </div>

            {/* Code Lines */}
            <div className="flex flex-col gap-1.5 ml-2 w-[90%]">
              <CodeLine w="w-[80%]" h="h-1" mt="mt-0" color="bg-[#e2e8f0]" />
              <CodeLine w="w-[40%]" h="h-1" mt="mt-0" color="bg-[#e2e8f0]" />

              <div className="flex flex-col gap-1.5 mt-3 w-full">
                <div className="flex flex-row gap-2 w-full">
                  <CodeLine w="w-[35%]" h="h-[3px]" mt="mt-0" />
                  <CodeLine
                    w="w-[15%]"
                    h="h-[3px]"
                    mt="mt-0"
                    color="bg-[#0bd886]"
                  />
                  <CodeLine w="w-[20%]" h="h-[3px]" mt="mt-0" />
                </div>
                <div className="flex flex-row gap-2 w-full">
                  <CodeLine w="w-[20%]" h="h-[3px]" mt="mt-0" />
                  <CodeLine w="w-[25%]" h="h-[3px]" mt="mt-0" />
                  <CodeLine w="w-[15%]" h="h-[3px]" mt="mt-0" />
                </div>
                <CodeLine
                  w="w-[55%]"
                  h="h-[3px]"
                  mt="mt-0"
                  color="bg-[#0bd886]"
                />
                <div className="flex flex-row gap-2 w-full">
                  <CodeLine w="w-[40%]" h="h-[3px]" mt="mt-0" />
                  <CodeLine
                    w="w-[20%]"
                    h="h-[3px]"
                    mt="mt-0"
                    color="bg-[#e2e8f0]"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5 mt-3 w-full">
                <div className="flex flex-row gap-2 w-full">
                  <CodeLine w="w-[30%]" h="h-[3px]" mt="mt-0" />
                  <CodeLine w="w-[20%]" h="h-[3px]" mt="mt-0" />
                </div>
                <CodeLine w="w-[70%]" h="h-[3px]" mt="mt-0" />
                <div className="flex flex-row gap-2 w-full ml-4">
                  <CodeLine w="w-[25%]" h="h-[3px]" mt="mt-0" />
                  <CodeLine
                    w="w-[30%]"
                    h="h-[3px]"
                    mt="mt-0"
                    color="bg-[#0bd886]"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Screen: Light UI Layout */}
          <div className="w-[50%] h-full bg-white relative p-3 flex flex-col items-center gap-3 z-10">
            <div className="w-[90%] h-12 border-black border-2 border-gray-300 rounded-sm"></div>

            {/* Document Card 1 */}

            <div className="w-[76%] h-20 border-2 border-black ml-4 border-gray-300 rounded-sm relative bg-gray-100 shadow-sm overflow-hidden">
              <div className="absolute top-2 left-2 w-4 h-4 bg-[#2ecc71] rounded-full"></div>
              <div className="absolute bottom-2 left-2 right-2 h-8 overflow-hidden">
                <svg
                  viewBox="0 0 100 40"
                  preserveAspectRatio="none"
                  className="w-18 h-full mountain-move"
                >
                  <polygon
                    className="w-14"
                    points="0,40 35,22 55,28 75,12 100,20 100,40"
                    fill="#2ecc71"
                  />
                </svg>
              </div>
            </div>

            {/* Document Card 2 */}

            <div className="w-[76%] ml-4 h-20 border-2 border-gray-300 rounded-sm relative bg-gray-100 shadow-sm overflow-hidden ">
              <div className="absolute top-2 left-2 w-4 h-4 bg-[#2ecc71] rounded-full"></div>
              <div className="absolute bottom-2 left-2 right-2 h-8 overflow-hidden">
                <svg
                  viewBox="0 0 100 40"
                  preserveAspectRatio="none"
                  className="w-18 h-full mountain-move"
                >
                  <polygon
                    className="w-14"
                    points="0,40 35,22 55,28 75,12 100,20 100,40"
                    fill="#2ecc71"
                  />
                </svg>
              </div>
            </div>
            {/* The letter W indicator from image */}
            <div className="absolute left-[-2px] top-[140px] text-lg font-extrabold text-[#1b2a33] z-30 drop-shadow-md">
              W
            </div>
          </div>
        </div>

        {/* Monitor Base & Stand */}
      </div>
    </div>
  );
};

export default ProductionAnimation;
