import React from "react";
import "./Sections.css";

import systemDesignLightBg from "../../assets/asset/systemDesignLightBg (1).webp";
import systemDesignLightMan from "../../assets/asset/systemDesignLightMan.webp";
import systemDesignLine1 from "../../assets/asset/systemDesignLine1.webp";
import systemDesignLine2 from "../../assets/asset/systemDesignLine2.webp";
import systemDesignMessage from "../../assets/asset/systemDesignMessage.webp";

import product from "../../assets/asset/product.svg";
import roadmap from "../../assets/asset/roadmap.svg";
import v1 from "../../assets/asset/t2.mp4";
import wireframe from "../../assets/asset/wireframe.svg";
import design from "../../assets/asset/design.svg";

const Testins = () => {
  return (
    <div className="flex flex-col items-center bg-white px-5 py-10">
      {/* HEADER */}
      <div className="relative h-[50px] w-6 flex justify-center">
        <div className=" timeline-lineHeader5"></div>
      </div>

      <div className="flex flex-col items-center mb-10">
        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-[#57c126] to-[#57c126] text-white font-bold shadow-lg mb-4">
          5
        </div>

        <h2 className="text-xl tracking-[5px] font-semibold uppercase bg-gradient-to-r from-[#57c126] to-[#57c126] bg-clip-text text-transparent">
          TESTING
        </h2>
        <p className="p-4 mx-20 text-center text-gray-600 leading-relaxed">
          By employing various testing strategies such as unit, integration,
          integration testing, and end-to-end testing, we identify and fix
          defects early in the development process, leading to a highly reliable
          and performant software product that meets the requirements of our
          clients.
        </p>
      </div>

      {/* MAIN CONTENT */}
      <div className="flex max-w-6xl w-full items-start">
        {/* LEFT COLUMN */}

        {/* LEFT COLUMN */}
        <div className=" w-[50%] sticky top-24 self-start flex items-start justify-center pt-[60px] mt-[80px] sm:mt-[40px] md:mt-0 productDesignIllustrationWrapper">
          <video
            src={v1}
            autoPlay
            muted
            loop
            playsInline
            style={{ width: "100%", height: "auto" }} // Optional: ensures it fits your container
          >
            Your browser does not support the video tag.
          </video>
        </div>

        {/* -------------------------Middle dots--------------- */}
        <div className="relative h-[750px] w-16 flex justify-center">
          <div className="timeline-line5"></div>

          {/* dot */}
          <div className="absolute top-36 w-4 h-4 bg-[#57c126] rounded-full"></div>
          <div className="absolute mt-[630px] w-4 h-4 bg-[#57c126] rounded-full"></div>
          <div className="absolute mt-[380px]  w-4 h-4 bg-[#57c126] rounded-full"></div>
          <div className="absolute mt-[880px]  w-4 h-4 bg-[#57c126] rounded-full"></div>
        </div>

        {/* Right section */}
        <div className="w-[50%] flex flex-col">
          <div className="bg-white w-auto h-28"></div>

          {[
            {
              title: "Unit Testing",
              text: "Unit testing helps us identify and fix defects in individual code components, resulting in a more reliable and efficient software product that meets client requirements.",
              img: roadmap,
            },
            {
              title: "Integration Testing",
              text: "Our focus on integration testing ensures that different parts of the codebase work together seamlessly, resulting in a more reliable and efficient software product that meets client requirements.",
              img: wireframe,
            },
            {
              title: "End-to-End Testing",
              text: "End-to-end testing allows us to identify and resolve defects that might not be caught through other testing methods, resulting in a more reliable and seamless software product that meets the expectations of our clients. By emphasizing end-to-end testing, we can ensure a highly satisfied user base.",
              img: design,
            },
            {
              title: "Test-Driven Development",
              text: "Test-driven development (TDD) improves software quality by writing tests before code, leading to a more reliable and maintainable codebase with fewer defects.",
              img: design,
            },
          ].map((item, index) => (
            <div key={index} className="relative my-5 max-w-md">
              {/* Image */}
              <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-3 shadow-sm">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-6 h-6 object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {item.title}
              </h3>

              {/* Text */}
              <p className="text-gray-500 leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testins;
