import React from "react";
import "../../App.css";
import HomeAnimation from "./homeAnimation/HomeAmination";
import {
  FaDesktop,
  FaMobileAlt,
  FaCode,
  FaChartBar,
  FaPaintBrush,
} from "react-icons/fa";
import {
  MdOutlineWeb,
  MdOutlineDocumentScanner,
  MdVerified,
} from "react-icons/md";
import { IoArrowForward } from "react-icons/io5";
import howWeWorkImage from "../../assets/asset/howWeWork.webp";

const servicesList = [
  {
    title: "Product/SAAS Development",
    description:
      "Unveiling software needs, capturing stakeholder expectations, and defining actionable requirements for successful development.",
    icon: <FaDesktop />,
  },
  {
    title: "Web App Development",
    description:
      "Accelerating development processes through automated tools, streamlined workflows, and efficient code generation.",
    icon: <MdOutlineWeb />,
  },
  {
    title: "SEO Optimised Web Application",
    description:
      "Crafting intuitive, user-centric interfaces that elevate user experiences and enhance digital interactions.",
    icon: <MdOutlineDocumentScanner />,
  },
  {
    title: "Mobile App Development",
    description:
      "Delivering high-quality software solutions to production, ensuring seamless deployment and optimal performance for end-users.",
    icon: <FaMobileAlt />,
  },
  {
    title: "SEO",
    description:
      "Ensuring software quality through comprehensive testing, meticulous bug identification, and continuous optimization.",
    icon: <MdVerified />,
  },
  {
    title: "MVP Development",
    description:
      "Building innovative and reliable software solutions with cutting-edge technologies and for seamless development experiences",
    icon: <FaCode />,
  },
];

const Serivces = () => {
  return (
    <div className="flex flex-col w-full">
      {/* Top Banner */}
      <div className="flex flex-col lg:flex-row bg-[#081533] min-h-[410px] w-full items-start lg:items-center py-10 lg:py-0">
        {/* Left Section */}
        <div className="flex flex-col mt-5 px-6 lg:pl-10 lg:pr-10 max-w-full lg:w-1/2">
          <h2 className="text-3xl md:text-4xl text-white font-poppins pt-2 md:pt-8 py-4 font-bold mb-4">
            OUR
            <span className="bg-gradient-to-r from-blue-600 py-8 to-blue-400 bg-clip-text text-transparent">
              SERVICES
            </span>
          </h2>
          <p className="text-gray-100 text-[1.05rem] md:text-[1.12rem] w-full font-poppins leading-7 mb-6">
            We offer a comprehensive range of IT solutions to meet your business
            needs. From Requirement Engineering, development and Product design
            to cloud computing and Testing, our experienced team is here to
            provide expert guidance and deliver innovative solutions.
          </p>

          {/* Button */}
          <div className="relative w-36 p-[1.5px] mt-8 rounded-lg bg-gradient-to-r from-blue-500 to-blue-300 group overflow-hidden">
            <button
              className="relative px-6 py-3 rounded-lg bg-[#081533] text-blue-500 
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
        <div className="w-full lg:w-1/2 flex items-center justify-center mt-10 lg:mt-0 min-h-[300px]">
          <div className="transform scale-75 md:scale-90 lg:scale-100 origin-center lg:origin-left">
            <HomeAnimation />
          </div>
        </div>
      </div>

      {/* Services Grid Section */}
      <div className="bg-white py-14 px-2 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service, index) => (
            <div
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
      <div className="bg-white py-16 px-4 md:px-8 lg:px-12 max-w-7xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="lg:w-1/2 flex flex-col">
            <div className="flex items-center gap-4 mb-4">
              <h4 className="text-blue-600 font-medium text-lg">
                How Do We Do It.
              </h4>
              <div className="h-[2px] w-12 bg-blue-600"></div>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Crafting Exceptional Digital Experiences: Our Process
            </h2>
            <p className="text-gray-500 mb-12 text-[1.1rem] leading-relaxed">
              We create exceptional digital experiences by understanding your
              business goals, user requirements, and product specifications. Our
              process involves selecting the best technology, creating user
              personas and journeys, developing information architecture and
              wireframes, and designing and launching your product.
            </p>

            {/* Steps */}
            <div className="flex flex-col gap-8">
              {/* Step 1 */}
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center text-2xl shadow-md border-[6px] border-blue-50">
                  <FaChartBar />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                    Strategy & Planning
                  </h3>
                  <p className="text-gray-500 leading-relaxed text-[1.05rem]">
                    We partner with our clients to understand their business
                    goals and objectives, then create a customized strategy that
                    aligns with their vision.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center text-2xl shadow-md border-[6px] border-blue-50">
                  <FaPaintBrush />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                    Design
                  </h3>
                  <p className="text-gray-500 leading-relaxed text-[1.05rem]">
                    Our team uses the latest UI/UX practices to create stunning,
                    user-friendly products that capture our clients' brands.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center text-2xl shadow-md border-[6px] border-blue-50">
                  <FaCode />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                    Development
                  </h3>
                  <p className="text-gray-500 leading-relaxed text-[1.05rem]">
                    We develop the product with the latest technologies and
                    frameworks to ensure the best performance and scalability.
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center text-2xl shadow-md border-[6px] border-blue-50">
                  <MdVerified />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                    Testing
                  </h3>
                  <p className="text-gray-500 leading-relaxed text-[1.05rem]">
                    Our products undergo rigorous testing before launch to
                    ensure they meet the highest standards of quality and
                    functionality.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="lg:w-1/2">
            <img
              src={howWeWorkImage}
              alt="Our Process"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Serivces;
