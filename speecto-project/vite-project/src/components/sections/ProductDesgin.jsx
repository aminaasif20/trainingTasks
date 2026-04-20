import React from "react";
import "./Sections.css";

import productDesignLightMan from "../../assets/asset/productDesignLightMan.webp";
import productDesignLightBg from "../../assets/asset/productDesignLightBg.webp";
import productDesignLightCloud1 from "../../assets/asset/productDesignLightCloud1.webp";
import productDesignLightCloud2 from "../../assets/asset/productDesignLightCloud2.webp";
import productDesignLightGeometry from "../../assets/asset/productDesignLightGeometry.webp";

import product from "../../assets/asset/product.svg";
import roadmap from "../../assets/asset/roadmap.svg";
import wireframe from "../../assets/asset/wireframe.svg";
import design from "../../assets/asset/design.svg";
import ProductDesignAnimation from "./ProductDesignAnimation";

const ProductDesign = () => {
  return (
    <div className="flex flex-col lg:mt-10 items-center bg-white px-5 py-10">
      {/* HEADER */}
      <div className="relative h-[70px] w-6 flex justify-center">
        <div className="timeline-lineHeader1"></div>
      </div>

      <div className="flex flex-col items-center mb-10">
        <div className="lg:w-14 font-Nunito lg:h-14 h-10 w-10 flex items-center justify-center rounded-full bg-gradient-to-r from-[#f02cb1] to-[#f959cf] text-white  shadow-lg mb-4">
          2
        </div>

        <h2 className="lg:text-[28px] sm:text-2xl 2xl:text-[32px] font-nunito tracking-[5px] font-semibold uppercase bg-gradient-to-r from-[#f02cb1] to-[#f959cf] bg-clip-text text-transparent">
          PRODUCT DESIGN
        </h2>
      </div>

      {/* MAIN CONTENT */}
      <div className="flex flex-col lg:flex-row max-w-7xl w-full items-center lg:items-start relative">
        {/* LEFT COLUMN */}

        {/* LEFT COLUMN */}
        <div className="w-full lg:w-[50%] flex flex-col items-center lg:items-end text-center lg:text-right px-4">
          <div className="hidden lg:block bg-white w-auto h-28"></div>

          {[
            {
              title: "Wireframing",
              text: "Wireframing is a method of creating a basic visual outline of a product or website's structure and features in order to convey and refine design ideas.",
              img: roadmap,
            },
            {
              title: "UI/UX Design",
              text: "UI/UX design is the process of developing interfaces that are both aesthetically pleasing and easy to use, providing users with a seamless and enjoyable experience while interacting with a product or service.",
              img: wireframe,
            },
            {
              title: "Technical review",
              text: "A roadmap for product development is a strategic document that defines the timeline, milestones, stages, and necessary resources for a product's development cycle in order to achieve its launch into the market.",
              img: design,
            },
            {
              title: "Roadmap",
              text: "A roadmap for product development is a strategic document that defines the timeline, milestones, stages, and necessary resources for a product's development cycle in order to achieve its launch into the market.",
              img: product,
            },
          ].map((item, index) => (
            <div
              key={index}
              className="relative my-5 w-full flex flex-col items-center lg:items-end"
            >
              {/* Image */}
              <div className="w-10 h-10 bg-gray-200 rounded-xl flex items-center justify-center mb-3 shadow-sm mx-auto lg:ml-auto lg:mr-0">
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
              <p className="font-Nunito 2xl:text-xl xl:text-[16px] text-base text-center font-semibold lg:text-right md:text-right   mt-[10px] text-gray-500">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        <div className="hidden lg:flex relative h-[750px] w-8 justify-center">
          <div className="timeline-line1"></div>

          {/* dot */}
          <div className="absolute top-36 w-5 h-5 bg-[#f02cb1] rounded-full"></div>
          <div className="absolute mt-[350px] w-5 h-5 bg-[#f02cb1] rounded-full"></div>
          {/* <div className="absolute mt-[300px]  w-4 h-4 bg-[#f02cb1] rounded-full"></div> */}
          <div className="absolute top-[570px] w-5 h-5 bg-[#f02cb1] rounded-full"></div>
          <div className="absolute top-[810px] w-5 h-5 bg-[#f02cb1] rounded-full"></div>
        </div>

        {/*--------------- Right section------------- */}
        <div className="w-full lg:w-[50%] order-first lg:order-none relative lg:sticky lg:top-24 flex items-start justify-center pt-8 lg:pt-[60px] lg:mt-0 productDesignIllustrationWrapper">
          <div className="relative w-full max-w-4xl h-[400px] lg:h-[600px] mx-auto bg-white overflow-hidden flex items-center justify-center font-sans">
            {/* BACKGROUND ELEMENTS */}

            {/* FOREGROUND ELEMENTS */}

            <ProductDesignAnimation />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDesign;
