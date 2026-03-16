import React from 'react'
import '../../App.css'
import HomeAnimation from './homeAnimation/HomeAmination'
const Serivces = () => {
  return (
    <div className='flex flex-row bg-[#081533] h-[330px] w-full items-start'>
     {/* Left Section */}
        <div className='flex flex-col mt-5 p-7 mx-12'>
          <h2 className="text-4xl text-white font-bold mb-4">
          OUR<span className= "bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">SERVICES</span>
        </h2>
        <p className="text-gray-300 max-w-aito  mb-6">
          We offer a comprehensive range of IT solutions to meet your business needs.
          From Requirement Engineering, development and Product design to cloud
          computing and Testing, our experienced team is here to provide expert
          guidance and deliver innovative solutions.
        </p>

        {/* Button */}
        {/* Button with gradient border */}
        <div className="relative w-36 p-[1.5px] rounded-md bg-gradient-to-r from-blue-500 to-blue-300 group overflow-hidden">
          <button className="relative px-4 py-2 rounded-md bg-[#081533] text-blue-500 
                            transition-transform duration-300 hover:translate-x-1 w-full">
            
            {/* Sliding background */}
            <span className="absolute left-0 top-0 h-full w-0 bg-gradient-to-r from-blue-500 to-blue-400 
                           ransition-all 
                            duration-300 group-hover:w-full z-0"></span>
            
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
  )
}

export default Serivces
