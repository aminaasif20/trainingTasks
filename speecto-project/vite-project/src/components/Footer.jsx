import React, { useState } from "react";
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
    <footer className="w-full min-h-screen bottom-0.5 flex flex-col font-sans text-gray-800">
      <div className="pt-6 pb-8 px-20 gap-10">
        <div className=" py-16 ">
          <div className="w-auto  p-8">
            {/* Title */}
            <h2 className="text-center text-blue-500 text-2xl font-bold mb-10">
              Let's Get Started
            </h2>

            <form className="space-y-6">
              {/* Row 1 */}
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold  mb-2">Name</label>
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold mb-2">Email</label>
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold mb-2">
                    Phone No.
                  </label>
                  <input
                    type="text"
                    placeholder="Phone Number"
                    className="w-full border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="Subject"
                    className="w-full border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
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
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                ></textarea>
              </div>

              {/* Button */}
              <div className="flex justify-center items-center">
                <div className="relative  item-center w-28 mt-5  p-[1.6px] rounded-md bg-gradient-to-r from-blue-500 to-blue-300 group overflow-hidden">
                  <button
                    className="relative py-2 rounded-md bg-white text-blue-500 
                            transition-transform duration-300 hover:translate-x-1 w-full"
                  >
                    {/* Sliding background */}
                    <span
                      className="absolute left-0 top-0 h-full w-0 bg-gradient-to-r from-blue-500 to-blue-400 
                           ransition-all 
                            duration-300 group-hover:w-full z-0"
                    ></span>

                    {/* Button text */}
                    <span className="relative font-bold z-10 group-hover:text-white">
                      {/* <Link to>Our Team</Link> */}
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

      <div className="flex flex-col mb-12 px-20 items-center w-full">
        {/* Logo */}
        <div className="mb-7 flex justify-center items-center">
          <img
            src={Logo}
            alt="Speecto Logo"
            className="h-7 w-auto filter invert"
          />
        </div>

        {/* Newsletter Section */}
        <h2 className="text-3xl font-medium mb-6 text-center">
          Subscribe To Our Newsletter
        </h2>

        <div className="w-full max-w-3xl flex flex-col mb-8">
          <div className="w-full flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-0">
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
              className="w-full sm:flex-1 border border-gray-800 sm:border-r-0 rounded-md sm:rounded-l-md sm:rounded-r-none px-4 py-3 text-sm focus:outline-none placeholder-gray-400 text-gray-700"
            />

            <button
              onClick={handleSubscribe}
              className="w-full sm:w-auto bg-black border border-black text-white px-6 sm:px-10 py-3 text-sm sm:text-md font-semibold rounded-md sm:rounded-r-md sm:rounded-l-none"
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
        <div className="w-full grid lg:ml-12 grid-cols-1 md:grid-cols-3 gap-2 px-6 md:px-42">
          {/* Explore */}
          <div className="flex flex-col  items-center md:items-start text-center md:text-left">
            <h3 className="font-semibold text-base mb-4">Explore</h3>
            <ul className="flex flex-col  gap-3 text-sm text-gray-900">
              <li>
                <a href="#" className="hover:text-black">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  Our Team
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="font-semibold text-base mb-4">Resources</h3>
            <ul className="flex flex-col gap-3 text-sm text-gray-900">
              <li>
                <a href="#" className="hover:text-black">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  Services
                </a>
              </li>
            </ul>
          </div>

          {/* Get In Touch */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="font-semibold text-base mb-4">Get In Touch</h3>
            <ul className="flex flex-col gap-4 text-sm text-gray-900">
              <li className="flex items-start gap-3 justify-center md:justify-start">
                <span>
                  71-75 Shelton Street, Covent <br />
                  Garden, London, WC2H 9JQ
                </span>
              </li>

              <li className="flex items-center gap-3 justify-center md:justify-start">
                <a
                  href="mailto:contactus@speecto.com"
                  className="hover:text-black"
                >
                  contactus@speecto.com
                </a>
              </li>

              <li className="flex items-center gap-3 justify-center md:justify-start">
                <a href="tel:+442071757733" className="hover:text-black">
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
            © 2023 Speecto Ltd is a company registered in England and Wales
            (Company No. 15060881)
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
