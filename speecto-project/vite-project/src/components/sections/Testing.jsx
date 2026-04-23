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
    <div className="flex flex-col items-center bg-white px-3 py-10">
      {/* HEADER */}
      <div className="relative h-[50px] w-6 flex justify-center">
        <div className=" timeline-lineHeader5"></div>
      </div>

      <div className="flex flex-col items-center mb-6">
        <div className="lg:w-14 font-nunito lg:h-14 w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-r from-[#57c126] to-[#a5eb84] text-white font-bold shadow-lg mb-4">
          5
        </div>

        <h2 className="lg:text-[28px] sm:text-2xl 2xl:text-[32px] font-nunito tracking-[5px] font-bold uppercase bg-gradient-to-r from-[#57c126] to-[#a5eb84] bg-clip-text text-transparent">
          TESTING
        </h2>
        <p className=" font-Nunito 2xl:text-xl xl:text-lg text-base font-medium !font-bold text-gray-500 text-center 2xl:mt-[30px] mt-6">
          By employing various testing strategies such as unit, integration,
          integration testing, and end-to-end testing, we identify and fix
          defects early in the development process, leading to a highly reliable
          and performant software product that meets the requirements of our
          clients.
        </p>
      </div>

      {/* MAIN CONTENT */}
      <div className="flex flex-col lg:flex-row max-w-6xl w-full items-center lg:items-start relative">
        {/* LEFT COLUMN */}

        {/* LEFT COLUMN */}
        <div className="w-full lg:w-[52%] order-first lg:order-none relative lg:sticky lg:top-24 self-start flex items-start justify-center lg:pt-8 lg:pt-[60px] lg:mt-0 productDesignIllustrationWrapper">
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
        <div className="hidden lg:flex relative h-[780px] w-16 justify-center">
          <div className="timeline-line5"></div>

          {/* dot */}
          <div className="absolute top-36 bg-gradient-to-r from-[#57c126] to-[#a5eb84]  w-5 h-5 rounded-full"></div>
          <div className="absolute mt-[580px] bg-gradient-to-r from-[#57c126] to-[#a5eb84]  w-5 h-5 rounded-full"></div>
          <div className="absolute mt-[350px] bg-gradient-to-r from-[#57c126] to-[#a5eb84]  w-5 h-5 rounded-full"></div>
          <div className="absolute mt-[835px] bg-gradient-to-r from-[#57c126] to-[#a5eb84]  w-5 h-5 rounded-full"></div>
        </div>

        {/* Right section */}
        <div className="w-full lg:w-[50%] lg:ml-4 flex flex-col items-center lg:items-start text-center lg:text-left ">
          <div className="hidden lg:block bg-white w-auto h-28"></div>

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
            <div
              key={index}
              className="relative mt-3 lg:my-5 w-full flex flex-col items-center lg:items-start"
            >
              {/* Image */}
              <div className="w-10 h-10 bg-gray-200 rounded-xl flex items-center justify-center mb-3 shadow-sm mx-auto lg:ml-0 lg:mr-auto">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-6 h-6 object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="text-xl sm:text-lg font-semibold text-gray-900 mb-1">
                {item.title}
              </h3>

              {/* Text */}
              <p className=" font-Nunito 2xl:text-xl xl:text-[16px] text-base font-semibold md:text-left   mt-[10px] text-gray-500">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testins;
