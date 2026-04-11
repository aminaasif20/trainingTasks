import React, { useState } from "react";
import { MdLocationPin } from "react-icons/md";
import { RiInboxArchiveFill } from "react-icons/ri";
import { FaPhoneAlt } from "react-icons/fa";

import logo from "../../assets/asset/speectoLogo.png";
const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = (name, value) => {
    let error = "";
    if (name === "name" && !value.trim()) error = "Name is required.";
    else if (name === "email") {
      if (!value.trim()) error = "Email is required.";
      else if (!/\S+@\S+\.\S+/.test(value)) error = "Invalid email format.";
    } else if (name === "phone" && !value.trim()) {
      error = "Phone number is required.";
    } else if (name === "subject" && !value.trim()) {
      error = "Subject is required.";
    } else if (name === "message" && !value.trim()) {
      error = "Message cannot be empty.";
    }
    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: validate(name, value) }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      const err = validate(key, formData[key]);
      if (err) newErrors[key] = err;
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    }, 2000); // Wait 2 seconds mocking a backend network request
  };

  return (
    <div className="flex flex-col">
      <div className="flex flex-col md:flex-row bg-[#081533] min-h-[250px] md:min-h-[330px] w-full items-center justify-center py-12 md:py-0">
        {/* Left */}
        <div className="flex w-full md:w-1/2 justify-center items-center mb-6 md:mb-0">
          <h1 className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent text-4xl md:text-5xl text-center px-4">
            Contact Us
          </h1>
        </div>

        {/* Right */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
          {/* Picture Placeholder */}
          <div className="mb-7 flex justify-center items-center"></div>
        </div>
      </div>

      <div className=" px-4 py-12">
        <h2 className="text-[18px] font-semibold mb-8">Get In Touch</h2>

        <div className="grid md:grid-cols-2 gap-18">
          <div className="space-y-6">
            <div className="flex items-start space-x-3">
              <span className="mt-3">
                <MdLocationPin />
              </span>
              <p className="text-[14x]">
                71-75 Shelton Street, Covent Garden, <br />
                London, WC2H 9JQ
              </p>
            </div>

            {/* Email */}
            <div className="flex items-center space-x-3">
              <span className="">
                <RiInboxArchiveFill />
              </span>
              <a
                href="mailto:contactus@speecto.com"
                className="text-[14px] underline"
              >
                contactus@speecto.com
              </a>
            </div>

            {/* Phone */}
            <div className="flex items-center space-x-3">
              <span className="">
                <FaPhoneAlt />
              </span>
              <p className="text-[14px]">+44 2071757733</p>
            </div>

            {/* Map */}
            <div className="mt-4">
              <iframe
                title="Google Map"
                className="w-full h-64 rounded-md border"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d217897.62046051834!2d72.92448501493419!3d31.42375904241891!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x392242a895a55ca9%3A0xdec58f88932671c6!2sFaisalabad%2C%20Pakistan!5e0!3m2!1sen!2s!4v1773650091226!5m2!1sen!2s"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Right side */}
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-gray-900 font-semibold ml-1">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  className={`w-[90%] border ${errors.name ? "border-red-500 focus:ring-red-400" : "border-gray-300 focus:ring-blue-400"} rounded-full px-2 py-3 text-gray-700  focus:outline-none `}
                />
                {errors.name && (
                  <span className="text-red-500 text-xs ml-2 -mt-1">
                    {errors.name}
                  </span>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-gray-900 font-semibold ml-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className={`w-[90%] border ${errors.email ? "border-red-500 focus:ring-red-400" : "border-gray-300 focus:ring-blue-400"} rounded-full px-2 py-3 text-gray-700 focus:outline-none `}
                />
                {errors.email && (
                  <span className="text-red-500 text-xs ml-2 -mt-1">
                    {errors.email}
                  </span>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-gray-900 font-semibold ml-1">
                  Phone No.
                </label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  className={`w-[90%] border ${errors.phone ? "border-red-500 focus:ring-red-400" : "border-gray-300 focus:ring-blue-400"} rounded-full px-2 py-3 text-gray-700  focus:outline-none `}
                />
                {errors.phone && (
                  <span className="text-red-500 text-xs ml-2 -mt-1">
                    {errors.phone}
                  </span>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-gray-900 font-semibold ml-1">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  className={`w-[90%] border ${errors.subject ? "border-red-500 focus:ring-red-400" : "border-gray-300 focus:ring-blue-400"} rounded-full px-2 py-3 text-gray-700  focus:outline-none`}
                />
                {errors.subject && (
                  <span className="text-red-500 text-xs ml-2 -mt-1">
                    {errors.subject}
                  </span>
                )}
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-gray-900 font-semibold ml-1">
                Your Message
              </label>
              <textarea
                name="message"
                cols={40}
                rows={40}
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message..."
                className={`w-[90%] border ${errors.message ? "border-red-500 focus:ring-red-400" : "border-gray-300 focus:ring-blue-400"} rounded-[1.5rem] px-5 py-4 h-32 text-gray-700 focus:outline-none`}
              ></textarea>
              {errors.message && (
                <span className="text-red-500 text-xs ml-2 -mt-1">
                  {errors.message}
                </span>
              )}
            </div>

            <div
              className={`relative w-36 p-[1.5px] rounded-md bg-gradient-to-r from-blue-500 to-blue-300 group overflow-hidden ${isSubmitting ? "opacity-80 pointer-events-none" : ""}`}
            >
              <button
                type="submit"
                disabled={isSubmitting}
                className="relative flex items-center justify-center gap-2 px-4 py-2 rounded-md bg-white text-blue-500 transition-transform duration-300 hover:translate-x-1 w-full"
              >
                {!isSubmitting && (
                  <span className="absolute left-0 top-0 h-full w-0 bg-gradient-to-r from-blue-500 to-blue-400 transition-all duration-300 group-hover:w-full z-0"></span>
                )}

                <span className="relative font-bold z-10 flex items-center gap-2 group-hover:text-white">
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Loading...
                    </>
                  ) : (
                    "Submit"
                  )}
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
