import React from 'react'
import '../../App.css'
import HomeAnimation from './homeAnimation/HomeAmination'
import { FaDesktop, FaMobileAlt, FaCode } from 'react-icons/fa';
import { MdOutlineWeb, MdOutlineDocumentScanner, MdVerified } from 'react-icons/md';
import { BsArrowRight } from 'react-icons/bs';

const servicesList = [
  {
    title: "Product/SAAS Development",
    description: "Unveiling software needs, capturing stakeholder expectations, and defining actionable requirements for successful development.",
    icon: <FaDesktop />,
  },
  {
    title: "Web App Development",
    description: "Accelerating development processes through automated tools, streamlined workflows, and efficient code generation.",
    icon: <MdOutlineWeb />,
  },
  {
    title: "SEO Optimised Web Application",
    description: "Crafting intuitive, user-centric interfaces that elevate user experiences and enhance digital interactions.",
    icon: <MdOutlineDocumentScanner />,
  },
  {
    title: "Mobile App Development",
    description: "Delivering high-quality software solutions to production, ensuring seamless deployment and optimal performance for end-users.",
    icon: <FaMobileAlt />,
  },
  {
    title: "SEO",
    description: "Ensuring software quality through comprehensive testing, meticulous bug identification, and continuous optimization.",
    icon: <MdVerified />,
  },
  {
    title: "MVP Development",
    description: "Building innovative and reliable software solutions with cutting-edge technologies and for seamless development experiences",
    icon: <FaCode />,
  }
];

const Serivces = () => {
  return (
    <div className='flex flex-col w-full'>
      {/* Top Banner */}
      <div className='flex flex-row bg-[#081533] h-[330px] w-full items-start'>
        {/* Left Section */}
        <div className='flex flex-col mt-5 p-7 mx-12'>
          <h2 className="text-4xl text-white font-bold mb-4">
            OUR<span className= "bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">SERVICES</span>
          </h2>
          <p className="text-gray-300 max-w-auto  mb-6">
            We offer a comprehensive range of IT solutions to meet your business needs.
            From Requirement Engineering, development and Product design to cloud
            computing and Testing, our experienced team is here to provide expert
            guidance and deliver innovative solutions.
          </p>

          {/* Button */}
          <div className="relative w-36 p-[1.5px] rounded-md bg-gradient-to-r from-blue-500 to-blue-300 group overflow-hidden">
            <button className="relative px-4 py-2 rounded-md bg-[#081533] text-blue-500 
                              transition-transform duration-300 hover:translate-x-1 w-full flex items-center justify-center">
              
              {/* Sliding background */}
              <span className="absolute left-0 top-0 h-full w-0 bg-gradient-to-r from-blue-500 to-blue-400 
                             transition-all duration-300 group-hover:w-full z-0"></span>
              
              {/* Button text */}
              <span className="relative font-bold z-10 group-hover:text-white">
                Contact Us
              </span>
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div><HomeAnimation/></div>
      </div>

      {/* Services Grid Section */}
      <div className="bg-white py-16 px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service, index) => (
            <div 
              key={index} 
              className="group relative bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden flex flex-col items-start"
            >
              {/* Gradient hover background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#0055ff] to-[#00b3ff] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></div>
              
              <div className="relative z-10 flex flex-row items-center gap-4 mb-4 w-full">
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-blue-600 text-white flex items-center justify-center text-2xl group-hover:bg-white group-hover:text-blue-600 transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="text-[1.15rem] font-bold text-gray-800 leading-tight group-hover:text-white transition-colors duration-300">
                  {service.title}
                </h3>
              </div>
              
              <p className="relative z-10 text-gray-500 text-[0.9rem] leading-relaxed mb-8 flex-grow group-hover:text-blue-50 transition-colors duration-300">
                {service.description}
              </p>
              
              <div className="relative z-10 mt-auto w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-white group-hover:text-blue-600 transition-colors duration-300 cursor-pointer">
                <BsArrowRight className="text-xl" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Serivces
