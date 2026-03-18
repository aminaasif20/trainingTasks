import React from 'react'
import { NavLink } from 'react-router-dom'
import aboutusPicture from "../../assets/asset/aboutus.webp"

const AboutUs = () => {
  return (
    <div className='flex flex-col'>
      <div className='flex flex-row bg-[#081533] h-[400px]  items-center justify-center'>
     {/* Left */}
    <div className='flex px-4 w-[50%] flex-col justify-center ml-2'>
     <div>
       <h1 className='text-white text-5xl '>
        About <span className='bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent text-5xl '> Us</span>
       </h1>
     </div>
      <div>
        <p className='text-gray-200 mt-4 pr-7 leading'>We are keen to deliver highly innovative & technological solutions through utilizing a rigorous development process. Our journey has taken us from the development of dynamic websites and mobile applications to the development of key enterprise solutions including.</p>
      </div>
      <div className="relative w-36 mt-8 p-[1.5px] rounded-md bg-gradient-to-r from-blue-500 to-blue-300 group overflow-hidden">
          <button className="relative px-4 py-2 rounded-md bg-[#081533] text-blue-500 
                            transition-transform duration-300 hover:translate-x-1 w-full">
            
            {/* Sliding background */}
            <span className="absolute left-0 top-0 h-full w-0 bg-gradient-to-r from-blue-500 to-blue-400 
                           ransition-all 
                            duration-300 group-hover:w-full z-0"></span>
            
            {/* Button text */}
            <span className="relative font-bold z-10 group-hover:text-white">
              {/* <Link to>Our Team</Link> */}
              <NavLink to="/team">Our Team</NavLink>
            </span>
          </button>
        </div>
    </div>
    

     {/* Right */}
     <div className='w-[50%]'>
      <div className='w-[70%] h-'>
        <img src={aboutusPicture} alt="About us" />
      </div>
     </div>
    </div>
   
    </div>
  )
}

export default AboutUs
