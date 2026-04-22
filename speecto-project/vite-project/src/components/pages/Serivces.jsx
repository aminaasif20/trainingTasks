import React from "react";
import "../../App.css";
import HomeAnimation from "./homeAnimation/HomeAmination";
import {
  FaDesktop,
  FaMobileAlt,
  FaCode,
  FaChartBar,
  FaPaintBrush,
  FaVaadin,
} from "react-icons/fa";
import {
  MdOutlineWeb,
  MdOutlineDocumentScanner,
  MdVerified,
} from "react-icons/md";
import { IoArrowForward } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import howWeWorkImage from "../../assets/asset/howWeWork.webp";

const servicesList = [
  {
    title: "Product/SAAS Development",
    description:
      "Unveiling software needs, capturing stakeholder expectations, and defining actionable requirements for successful development.",
    icon: <FaDesktop />,
    link: "/services/product-saas",
  },
  {
    title: "Web App Development",
    description:
      "Accelerating development processes through automated tools, streamlined workflows, and efficient code generation.",
    icon: <MdOutlineWeb />,
    link: "/services/web-app",
  },
  {
    title: "SEO Optimised Web Application",
    description:
      "Crafting intuitive, user-centric interfaces that elevate user experiences and enhance digital interactions.",
    icon: <MdOutlineDocumentScanner />,
    link: "/services/seo-optimization",
  },
  {
    title: "Mobile App Development",
    description:
      "Delivering high-quality software solutions to production, ensuring seamless deployment and optimal performance for end-users.",
    icon: <FaMobileAlt />,
    link: "/services/mobile-app",
  },
  {
    title: "SEO",
    description:
      "Ensuring software quality through comprehensive testing, meticulous bug identification, and continuous optimization.",
    icon: <MdVerified />,
    link: "/services/seo",
  },
  {
    title: "MVP Development",
    description:
      "Building innovative and reliable software solutions with cutting-edge technologies and for seamless development experiences",
    icon: <FaCode />,
    link: "/services/mvp",
  },
];

const Serivces = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col w-full">
      {/* Top Banner */}
      <div className="flex flex-col lg:flex-row bg-[#081533] min-h-[410px] w-full items-start lg:items-top lg:pt-10 lg:py-0">
        {/* Left Section */}
        <div className="flex lg:text-left text-center flex-col px-6 lg:pl-6 lg:pr-8 max-w-full lg:w-1/2">
          <h2 className="text-3xl text-xl md:text-4xl text-white font-nunito pt-2 md:pt-2 pb-4 font-bold ">
            OUR
            <span className="bg-gradient-to-r from-blue-600 py-8 to-blue-400 bg-clip-text text-transparent">
              SERVICES
            </span>
          </h2>
          <p className="text-white lg:text-left text-center text-[1rem] md:text-[1.12rem] w-full font-nunito leading-5 lg:leading-7  mb-5">
            We offer a comprehensive range of IT solutions to meet your business
            needs. From Requirement Engineering, development and Product design
            to cloud computing and Testing, our experienced team is here to
            provide expert guidance and deliver innovative solutions.
          </p>

          {/* Button (Desktop) */}
          <div className="hidden lg:block relative w-36 p-[1.5px] mt-8 rounded-lg bg-gradient-to-r from-blue-500 to-blue-300 group overflow-hidden">
            <button
              className="relative px-2 py-3 rounded-lg bg-[#081533] text-blue-500 
                              transition-transform duration-300 hover:translate-x-1 w-full flex items-center justify-center"
            >
              {/* Sliding background */}
              <span
                className="absolute left-0 top-0 h-full w-0 bg-gradient-to-r from-blue-500 to-blue-400 
                             transition-all duration-300 group-hover:w-full z-0"
              ></span>

              {/* Button text */}
              <span className="relative font-poppins text-lg font-bold  z-10 group-hover:text-white">
                Contact Us
              </span>
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full sm:w-1/2  w-full flex flex-col items-center justify-center mt-2 lg:mt-0 min-h-[220px]">
          <div className="transform scale-[0.8] sm:scale-100 origin-center lg:origin-center">
            <HomeAnimation />
          </div>

          {/* Button (Mobile) */}
          <div className="lg:hidden pt-14 w-full px-6 mb-10 flex justify-center -mt-8">
            <div className="relative w-full p-[1.5px] rounded-lg bg-gradient-to-r from-blue-500 to-blue-300 group overflow-hidden">
              <button
                className="relative px-2 py-3 rounded-lg bg-[#081533] text-blue-500 
                              transition-transform duration-300 hover:translate-x-1 w-full flex items-center justify-center"
              >
                {/* Sliding background */}
                <span
                  className="absolute left-0 top-0 h-full w-0 bg-gradient-to-r from-blue-500 to-blue-400 
                               transition-all duration-300 group-hover:w-full z-0"
                ></span>

                {/* Button text */}
                <span className="relative font-poppins text-lg font-bold z-10 group-hover:text-white">
                  Contact Us
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid Section */}
      <div className="bg-white py-14 px-2 md:px-4 lg:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service, index) => (
            <div
              onClick={() => navigate(service.link)}
              key={index}
              className="group relative bg-white rounded-2xl p-4 border border-gray-100 shadow-sm hover:shadow-lg  overflow-hidden flex flex-col items-start"
            >
              {/* Gradient hover background */}
              <div className="absolute cursor-pointer inset-0 bg-gradient-to-br from-[#0065ff] to-[#00b3ff] opacity-0 group-hover:opacity-100 z-0"></div>

              <div className="relative z-10  flex flex-row items-center gap-4 mb-4 w-full">
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-blue-600 text-white flex items-center justify-center text-2xl group-hover:bg-white group-hover:text-blue-600 ">
                  {service.icon}
                </div>
                <h3 className="text-[1.15rem]  text-gray-800 leading-tight group-hover:text-white ">
                  {service.title}
                </h3>
              </div>

              <p className="relative z-10 font-medium text-gray-500 mb-2 leading-tight text-[1.05rem] group-hover:text-blue-50 transition-colors">
                {service.description}
              </p>

              <div className="relative z-10 mt-auto w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-white group-hover:text-blue-600 transition-colors duration-300 cursor-pointer">
                <IoArrowForward className="text-xl font-bold" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Process Section */}
      <div className="bg-white py-8 px-2 md:px-4 lg:px-6 max-w-7xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center lg:items-start">
          {/* Left Content */}
          <div className="lg:w-1/2 flex flex-col">
            <div className="flex items-center gap-4 mb-4">
              <h4 className="text-blue-600 font-nunito text-sm">
                How Do We Do It.
              </h4>
              <div className="h-[2px] w-12 bg-blue-600"></div>
            </div>
            <h2 className="text-2xl  md:text-2xl font-Montserrat lg:text-[1.7rem] font-bold text-gray-900 mb-3 leading-tight">
              Crafting Exceptional Digital Experiences: Our Process
            </h2>
            <p className="text-gray-500 mb-7 text-[.8rem] leading-relaxed">
              We create exceptional digital experiences by understanding your
              business goals, user requirements, and product specifications. Our
              process involves selecting the best technology, creating user
              personas and journeys, developing information architecture and
              wireframes, and designing and launching your product.
            </p>

            {/* Mobile/Tablet Image */}
            <div className="w-full block lg:hidden pb-6">
              <img
                src={howWeWorkImage}
                alt="Our Process"
                className="w-full h-auto max-h-[400px] object-cover rounded-lg shadow-sm"
              />
            </div>

            {/* Steps */}
            <div className="flex flex-col gap-8">
              {/* Step 1 */}
              <div className="flex gap-5 items-start">
                <div className="relative flex-shrink-0 w-10 h-10 md:w-14 md:h-14 flex items-center justify-center">
                  {/* Top-left grey circle */}
                  <div className="absolute w-10 h-10 md:w-14 md:h-14 rounded-full bg-gray-200 -top-1 -left-1 md:-top-2 md:-left-2"></div>

                  {/* Bottom-right grey circle */}
                  <div className="absolute w-10 h-10 md:w-14 md:h-14 rounded-full bg-gray-200 top-1 left-1 md:top-2 md:left-2"></div>

                  {/* Main blue circle */}
                  <div className="relative w-10 h-10 md:w-14 md:h-14 rounded-full bg-[#008cff] text-white flex items-center justify-center text-[18px] md:text-[26px]">
                    <FaChartBar />
                  </div>
                </div>

                <div>
                  <h3 className="text-[20px]  mb-2">Strategy & Planning</h3>
                  <p className="text-gray-500 leading-relaxed text-[.8rem]">
                    We partner with our clients to understand their business
                    goals and objectives, then create a customized strategy that
                    aligns with their vision.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex gap-5 items-start">
                <div className="relative flex-shrink-0 w-10 h-10 md:w-14 md:h-14 flex items-center justify-center">
                  {/* Top-left grey circle */}
                  <div className="absolute w-10 h-10 md:w-14 md:h-14 rounded-full bg-gray-200 -top-1 -left-1 md:-top-2 md:-left-2"></div>

                  {/* Bottom-right grey circle */}
                  <div className="absolute w-10 h-10 md:w-14 md:h-14 rounded-full bg-gray-200 top-1 left-1 md:top-2 md:left-2"></div>

                  {/* Main blue circle */}
                  <div className="relative w-10 h-10 md:w-14 md:h-14 rounded-full bg-[#008cff] text-white flex items-center justify-center text-[18px] md:text-[26px]">
                    <FaPaintBrush />
                  </div>
                </div>

                <div>
                  <h3 className="text-[20px] mb-2">Design</h3>
                  <p className="text-gray-500 leading-relaxed text-[.8rem]">
                    Our team uses the latest UI/UX practices to create stunning,
                    user-friendly products that capture our clients' brands.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex gap-5 items-start">
                <div className="relative flex-shrink-0 w-10 h-10 md:w-14 md:h-14 flex items-center justify-center">
                  {/* Top-left grey circle */}
                  <div className="absolute w-10 h-10 md:w-14 md:h-14 rounded-full bg-gray-200 -top-1 -left-1 md:-top-2 md:-left-2"></div>

                  {/* Bottom-right grey circle */}
                  <div className="absolute w-10 h-10 md:w-14 md:h-14 rounded-full bg-gray-200 top-1 left-1 md:top-2 md:left-2"></div>

                  {/* Main blue circle */}
                  <div className="relative w-10 h-10 md:w-14 md:h-14 rounded-full bg-[#008cff] text-white flex items-center justify-center text-[18px] md:text-[26px]">
                    <FaCode />
                  </div>
                </div>

                <div>
                  <h3 className="text-[20px]  mb-2">Development</h3>
                  <p className="text-gray-500 leading-relaxed text-[.8rem]">
                    We develop the product with the latest technologies and
                    frameworks to ensure the best performance and scalability.
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex gap-5 items-start">
                <div className="relative flex-shrink-0 w-10 h-10 md:w-14 md:h-14 flex items-center justify-center">
                  {/* Top-left grey circle */}
                  <div className="absolute w-10 h-10 md:w-14 md:h-14 rounded-full bg-gray-200 -top-1 -left-1 md:-top-2 md:-left-2"></div>

                  {/* Bottom-right grey circle */}
                  <div className="absolute w-10 h-10 md:w-14 md:h-14 rounded-full bg-gray-200 top-1 left-1 md:top-2 md:left-2"></div>

                  {/* Main blue circle */}
                  <div className="relative w-10 h-10 md:w-14 md:h-14 rounded-full bg-[#008cff] text-white flex items-center justify-center text-[18px] md:text-[26px]">
                    <FaVaadin />
                  </div>
                </div>

                <div>
                  <h3 className="text-[20px]   mb-2">Testing</h3>
                  <p className="text-gray-500 leading-relaxed text-[.8rem]">
                    Our products undergo rigorous testing before launch to
                    ensure they meet the highest standards of quality and
                    functionality.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image (Desktop) */}
          <div className="hidden lg:block w-full object-cover lg:w-[55%] lg:order-last">
            <img
              src={howWeWorkImage}
              alt="Our Process"
              className="w-full h-[650px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Serivces;
