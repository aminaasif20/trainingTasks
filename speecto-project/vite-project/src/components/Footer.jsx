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
              <h2 className="text-center bg-gradient-to-r leading-tight font-Nunito from-blue-600 to-blue-400 lg:tracking-[0.2em] tracking-[0.1em] bg-clip-text text-transparent lg:text-[28px] sm:text-2xl 2xl:text-[32px] font-semibold mb-12">
                Let's Get Started
              </h2>

              <form className="space-y-6 mx-3">
                {/* Row 1 */}
                <div className="grid grid-cols-1 mb-10 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold  mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      placeholder="Name"
                      className="w-full border border-gray-300 rounded-full px-3 py-2 focus:outline-none "
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="Email"
                      className="w-full border border-gray-300 rounded-full px-3 py-2 focus:outline-none "
                    />
                  </div>
                </div>

                {/* Row 2 */}
                <div className="grid grid-cols-1 mb-10 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold mb-2">
                      Phone No.
                    </label>
                    <input
                      type="text"
                      placeholder="Phone Number"
                      className="w-full border border-gray-300 rounded-full px-3 py-2 focus:outline-none  "
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      placeholder="Subject"
                      className="w-full border border-gray-300 rounded-full px-3 py-2 focus:outline-none "
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-bold mb-2">
                    Your Message
                  </label>
                  <textarea
                    placeholder="Write your message..."
                    rows="4"
                    className="w-full border border-gray-300 rounded-lg px-3 py-3 mb-6 focus:outline-none focus:ring-2 "
                  ></textarea>
                </div>

                {/* Button */}
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
              </form>
            </div>
          </div>

          {/* Logo Section */}
        </div>

        <div className="flex flex-col mb-12 px-6 md:px-6 lg:px-20 items-center w-full">
          {/* Logo */}
          <div className="mb-7 flex justify-center items-center">
            <img
              src={Logo}
              alt="Speecto Logo"
              className="h-7  w-48 filter invert"
            />
          </div>

          {/* Newsletter Section */}
          <h2 className="text-1xl lg:font-semibold  lg:text-3xl  mb-6 text-center">
            Subscribe To Our Newsletter
          </h2>

          <div className="w-full max-w-[800px] flex flex-col mb-10">
            <div className="w-full flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-0">
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
                className="focus:outline-none w-full h-10 sm:h-11 2xl:h-full px-3 bg-transparent sm:rounded-tl-[10px] sm:rounded-none rounded-[10px] sm:rounded-bl-[10px] border-[1.5px] dark:border-white1 border-gray1 2xl:px-5 md:px-4 "
              />

              <button
                onClick={handleSubscribe}
                className="w-full sm:w-auto cursor-pointer min-w-max py-[14px] px-5 lg:text-lg md:text-base text-sm 2xl:text-xl font-bold text-white rounded-[10px] bg-black  flex justify-center items-center sm:rounded-tr-[10px] sm:rounded-br-[10px] rounded-[10px] sm:rounded-none border-[1.5px] border-black w-full !px-10 2xl:h-[50px] sm:h-11 h-10 text-white  "
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
          <div className="w-full grid  grid-cols-1 md:grid-cols-3 gap-2 lg:px-26">
            {/* Explore */}
            <div className="flex flex-col items-start mb-4 md:mb-0 text-left">
              <h3 className="font-semibold text-base  font-Nunito mb-6">
                Explore
              </h3>
              <ul className="flex flex-col gap-4 font-semibold text-sm">
                <li>
                  <a
                    href="#"
                    className="hover:text-black font-text-sm font-medium text-black dark:text-white1  font-Nunito"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-black font-text-sm font-medium text-black dark:text-white1  font-Nunito"
                  >
                    Our Team
                  </a>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div className="flex flex-col items-start mb-4 md:mb-0 text-left">
              <h3 className="font-semibold text-base  font-Nunito mb-5">
                Resources
              </h3>
              <ul className="flex flex-col gap-4 text-sm">
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
            <div className="flex flex-col items-start mb-4 md:mb-0 text-left">
              <h3 className="font-semibold text-base   font-Nunito mb-5">
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

        {/* Copyright Bar */}
      </footer>
      <div className="w-auto bg-[#f1f3f4] py-4">
        <div className=" text-center">
          <p className="text-[15px] text-gray-600">
            © 2023 Speecto Ltd is a company registered in England and Wales
            (Company No. 15060881)
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
