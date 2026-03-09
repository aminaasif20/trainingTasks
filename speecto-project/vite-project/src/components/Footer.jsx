import React from 'react';
import Logo  from '../assets/assets/speectoLogo.png';
const Footer = () => {
  return (
    <footer className="w-full font-sans text-gray-800">
      <div className="max-w-5xl mx-auto px-4 pt-16 pb-8 flex flex-col items-center">
        
        {/* Logo Section */}
        <div className='flex mb-7 items-center'>
            <img 
                src={Logo} 
                alt="Speecto Logo" 
                class="h-7 w-auto filter invert"
            />
        </div>

        {/* Newsletter Section */}
        <h2 className="text-3xl font-bold mb-6 text-center">
          Subscribe To Our Newsletter
        </h2>
        <div className="w-full max-w-2xl flex items-center border border-gray-300 rounded-md overflow-hidden mb-16 shadow-sm">
          <input 
            type="email" 
            placeholder="Email" 
            className="flex-1 border px-4 py-3 text-sm focus:outline-none placeholder-gray-400 text-gray-700"
          />
          <button className="bg-black text-white px-10 py-3 text-sm font-semibold hover:bg-[#0B1C3D]  transition-colors">
            Subscribe
          </button>
        </div>

        {/* Footer Links Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 px-48 ">
          
          {/* Explore Column */}
          <div className="flex flex-col px-">
            <h3 className="font-semibold text-base mb-4">Explore</h3>
            <ul className="flex flex-col font-semibold gap-3 text-sm text-gray-600">
              <li><a href="#" className="hover:text-black transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Our Team</a></li>
            </ul>
          </div>

          {/* Resources Column */}
          <div className="flex flex-col">
            <h3 className="font-semibold text-base mb-4">Resources</h3>
            <ul className="flex  font-semibold flex-col gap-3 text-sm text-gray-600">
              <li><a href="#" className="hover:text-black transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Services</a></li>
            </ul>
          </div>

          {/* Get In Touch Column */}
          <div className="flex flex-col">
            <h3 className="font-semibold text-base mb-4">GetInTouch</h3>
            <ul className="flex flex-col  font-semibold gap-4 text-sm text-gray-600">
              <li className="flex items-start gap-3">
                <svg className="w-4 h-4 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                <span className="leading-tight">
                  71-75 Shelton Street, Covent<br />
                  Garden, London, WC2H 9JQ
                </span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                <a href="mailto:contactus@speecto.com" className="hover:text-black transition-colors">
                  contactus@speecto.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                <a href="tel:+442071757733" className="hover:text-black transition-colors">
                  +442071757733
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Copyright Bar */}
      <div className="w-full bg-[#f1f3f4] py-4">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <p className="text-md text-gray-500">
            © 2023 Speecto Ltd is a company registered in England and Wales (Company No. 15060881)
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;