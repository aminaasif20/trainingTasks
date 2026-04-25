import React, { useState } from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import Logo from "../assets/asset/speectoLogo.png";
const Footer = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email.trim()) {
      setError("Email required!");
    } else if (!validateEmail(email)) {
      setError("Invalid email format!");
    } else {
      setError("");
      // Subscription logic
    }
  };

  return (
    <>
      <footer className="w-full min-h-screen bottom-0.5 flex flex-col font-montserrat  md:p-6 lg:px-20 text-gray-800">
        <div className="pt-6 pb-8  gap-10">
          <div className=" lg:py-16 ">
            <div className="w-auto  lg:p-8 p-6">
              {/* Title */}
              <h2 className="text-center bg-gradient-to-r leading-tight font-Nunito from-blue-700 to-blue-500 lg:text-[28px] sm:text-2xl 2xl:text-[32px]    text-xl font-bold font-Nunito  undefined 2xl:mb-[50px] mb-10 text-center lg:tracking-[0.2em] tracking-[0.1em] 2xl:tracking-[0.3em] capitalize !text-transparent  bg-clip-text undefined">
                Let's Get Started
              </h2>
              <div className="grid grid-cols-1 2xl:mt-[50px] lg:mt-10 sm:mt-8 mt-5">
                <form className="w-full">
                  <div className="w-full grid sm:grid-cols-2 2xl:gap-[50px] lg:gap-10 sm:gap-8 gap-5">
                    {/* Row 1 */}
                    <div className="relative">
                      <div className="w-full h-max undefined">
                        <label className=" 2xl:text-lg text-sm sm:text-base font-medium font-Nunito mb-[2px] !font-bold  text-black undefined">
                          Name
                        </label>
                        <input
                          type="text"
                          placeholder="Name"
                          className="rounded-[60px] 2xl:h-[60px] lg:h-[50px] h-10 placeholder:text-gray-500  w-full  border-[1.5px] bg-transparent  border-gray-100 focus:outline-none  2xl:px-5 px-3  undefined"
                        />
                      </div>
                    </div>
                    <div className="relative">
                      <div className="w-full h-max undefined">
                        <label className=" 2xl:text-lg text-sm sm:text-base font-medium font-Nunito mb-[2px] !font-bold  text-black undefined">
                          Email
                        </label>
                        <input
                          type="text"
                          placeholder="Email"
                          className="rounded-[60px] 2xl:h-[60px] lg:h-[50px] h-10 placeholder:text-gray-500  w-full  border-[1.5px] bg-transparent  border-gray-100 focus:outline-none  2xl:px-5 px-3  undefined"
                        />
                      </div>
                    </div>
                    <div className="relative">
                      <div className="w-full h-max undefined">
                        <label className="2xl:text-lg text-sm sm:text-base font-medium font-Nunito mb-[2px] !font-bold  text-black undefined">
                          Phone No.
                        </label>
                        <input
                          type="text"
                          placeholder="Phone No."
                          className="rounded-[60px] 2xl:h-[60px] lg:h-[50px] h-10 placeholder:text-gray-500  w-full  border-[1.5px] bg-transparent  border-gray-100 focus:outline-none  2xl:px-5 px-3  undefined"
                        />
                      </div>
                    </div>
                    <div className="relative">
                      <div className="w-full h-max undefined">
                        <label className="2xl:text-lg text-sm sm:text-base font-medium font-Nunito mb-[2px] !font-bold  text-black undefined">
                          Subject
                        </label>
                        <input
                          type="text"
                          placeholder="Subject"
                          className="rounded-[60px] 2xl:h-[60px] lg:h-[50px] h-10 placeholder:text-gray-500  w-full  border-[1.5px] bg-transparent  border-gray-100 focus:outline-none  2xl:px-5 px-3  undefined"
                        />
                      </div>
                    </div>

                    {/* Message */}

                    {/* Button */}
                  </div>
                  <div className="relative">
                    <div className="w-full h-max 2xl:mt-[50px] lg:mt-10 sm:mt-8 mt-5">
                      <label className=" 2xl:text-lg text-sm sm:text-base font-medium font-Nunito mb-[2px] !font-bold  text-black undefined">
                        Your Message
                      </label>
                      <textarea
                        placeholder="Write your message..."
                        rows="4"
                        className="!bg-transparent border-[1.5px] dark:!border-gray6 !border-gray7 dark:placeholder:text-gray-600 placeholder:text-gray-200 rounded-xl italic w-full h-full focus:outline-none text-gray-100 2xl:px-5 px-3 bg-gray-400  min-h-[100px] pt-3 "
                      ></textarea>
                    </div>
                  </div>
                </form>
                <div className="flex justify-center items-center">
                  <div className="relative  item-center lg:w-28 w-25 mt-5  p-[1.6px] rounded-[12px] bg-gradient-to-r from-[#0049ff] to-[#00c3ff] group overflow-hidden">
                    <button
                      className="relative lg:py-3 py-2 rounded-[12px] bg-white text-gradient-to-r from-[#0049ff] to-[#00c3ff] 
                            transition-transform duration-300 hover:translate-x-1 w-full"
                    >
                      {/* Sliding background */}
                      <span
                        className="absolute left-0 top-0 h-full w-0 bg-gradient-to-r from-[#0049ff] to-[#00c3ff] transition-all 
                            duration-300 group-hover:w-full z-0"
                      ></span>

                      {/* Button text */}
                      <span className="relative bg-gradient-to-r from-[#0049ff] to-[#00c3ff] bg-clip-text text-transparent font-bold z-10 group-hover:text-white">
                        Submit
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Logo Section */}
        </div>

        <div className="flex lg:h-[360px] flex-col mb-12 px-6 md:px-6 lg:px-20 items-center w-full">
          {/* Logo */}
          <div className="mb-7 flex justify-center items-center">
            <img
              src={Logo}
              alt="Speecto Logo"
              className="h-7  w-48 filter invert"
            />
          </div>

          {/* Newsletter Section */}
          <h2 className="text-1xl lg:font-bold  lg:text-3xl  mb-6 text-center">
            Subscribe To Our Newsletter
          </h2>

          <div className="w-full max-w-[800px] flex flex-col mb-10">
            <div className="relative sm:gap-y-0 gap-y-5 min-h-10 sm:min-h-[50px] grid grid-cols-1 sm:grid-cols-[78.6%_21.3%] w-full mb-[5px]">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => {
                  const val = e.target.value;
                  setEmail(val);
                  if (!val.trim()) {
                    setError("Email required!");
                  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) {
                    setError("Invalid email format!");
                  } else {
                    setError("");
                  }
                }}
                className="focus:outline-none w-full h-10 sm:h-11 2xl:h-full px-3 bg-transparent sm:rounded-tl-[10px] sm:rounded-none rounded-[10px] sm:rounded-bl-[10px] border-[1.5px] dark:border-white1 border-gray2 2xl:px-5 md:px-4 "
              />
              <button
                onClick={handleSubscribe}
                className="w-full sm:w-auto cursor-pointer min-w-max px-5 lg:text-lg md:text-base text-sm font-bold text-white rounded-[10px] bg-black flex justify-center items-center sm:rounded-l-none sm:rounded-r-[10px] border-[1.5px] border-black sm:h-[44px] h-10"
              >
                Subscribe
              </button>
            </div>
            {error && (
              <span className="text-red-500 text-sm mt-2 self-start">
                {error}
              </span>
            )}
          </div>

          {/* Footer Links Grid */}
          <div className="w-ful px-10 max-w-[800px] mx-auto">
            <div className="grid w-full grid-cols-1 sm:grid-cols-3 gap-8">
              {/* Explore */}
              <div className="flex flex-col w-full pb-6 2xl:gap-y-6 lg:gap-y-5 gap-y-4">
                <h3 className=" 2xl:text-lg text-sm sm:text-base font-medium font-Nunito !font-bold text-black dark:text-white1 font-Nunito">
                  Explore
                </h3>
                <ul className="flex flex-col w-full lg:gap-y-4 gap-y-3 2xl:gap-y-5">
                  <li>
                    <a
                      href="#"
                      className="text-sm font-medium text-black dark:text-white1"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm font-medium text-black dark:text-white1"
                    >
                      Our Team
                    </a>
                  </li>
                </ul>
              </div>

              {/* Resources */}
              <div className="flex -ml-2 flex-col w-full pb-6  2xl:gap-y-6 lg:gap-y-5 gap-y-4">
                <h3 className=" 2xl:text-lg text-sm sm:text-base font-medium font-Nunito !font-bold text-black dark:text-white1 font-Nunito">
                  Resources
                </h3>
                <ul className=" flex flex-col w-full lg:gap-y-4 gap-y-3 2xl:gap-y-5">
                  <li>
                    <a
                      href="#"
                      className="hover:text-black  font-text-sm font-medium text-black dark:text-white1"
                    >
                      Contact
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-black font-text-sm font-medium text-black dark:text-white1  font-Nunito"
                    >
                      Services
                    </a>
                  </li>
                </ul>
              </div>

              {/* Get In Touch */}
              <div className="flex -ml-2 flex-col w-full pb-6  2xl:gap-y-6 lg:gap-y-5 gap-y-4">
                <h3 className=" 2xl:text-lg text-sm sm:text-base font-medium  font-Nunito !font-bold text-black dark:text-white1 font-Nunito">
                  GetInTouch
                </h3>
                <ul className="flex flex-col gap-4 text-sm">
                  <li className="flex items-center text-black font-Nunito  gap-4 justify-start">
                    <FaMapMarkerAlt className="text-black   text-sm flex-shrink-0" />
                    <span className="font-text-sm font-medium text-black dark:text-white1">
                      71-75 Shelton Street, Covent Garden, London, WC2H 9JQ
                    </span>
                  </li>

                  <li className="flex items-center font-Nunito  gap-3 justify-start">
                    <FaEnvelope className="text-black text-lg flex-shrink-0" />
                    <a
                      href="mailto:contactus@speecto.com"
                      className="hover:text-black font-text-sm font-medium text-black dark:text-white1  font-Nunito"
                    >
                      contactus@speecto.com
                    </a>
                  </li>

                  <li className="flex items-center font-semibold gap-3 justify-start">
                    <FaPhoneAlt className="text-black text-lg flex-shrink-0" />
                    <a
                      href="tel:+442071757733"
                      className="hover:text-black font-text-sm font-medium text-black dark:text-white1"
                    >
                      +442071757733
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Bar */}
      </footer>
      <div className="px-5 xl:px-20 bg-[#f1f3f4] md:px-10">
        <div className=" min-h-[50px] w-full flex justify-center items-center py-2">
          <p className="md:text-base font-Nunito  text-sm font-medium text-center  text-gray-500">
            © 2023 Speecto Ltd is a company registered in England and Wales
            (Company No. 15060881)
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
