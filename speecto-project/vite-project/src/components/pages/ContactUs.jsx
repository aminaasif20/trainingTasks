import React from "react";

const ContactUs = () => {
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
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-semibold mb-8">Get In Touch</h2>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Left side: Contact info + map */}
          <div className="space-y-6">
            {/* Address */}
            <div className="flex items-start space-x-3">
              <span className="text-gray-500">📍</span>
              <p>71-75 Shelton Street, Covent Garden, London, WC2H 9JQ</p>
            </div>

            {/* Email */}
            <div className="flex items-center space-x-3">
              <span className="text-gray-500">📧</span>
              <a href="mailto:contactus@speecto.com" className=" underline">
                contactus@speecto.com
              </a>
            </div>

            {/* Phone */}
            <div className="flex items-center space-x-3">
              <span className="text-gray-500">📞</span>
              <p>+44 2071757733</p>
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

          {/* Right side: Contact Form */}
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full border border-gray-300 rounded-2xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full border border-gray-300 rounded-2xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Phone Number"
                className="w-full  border border-gray-300 rounded-2xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <input
                type="text"
                placeholder="Subject"
                className="w-full border border-gray-300 rounded-2xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <textarea
              placeholder="Write your message..."
              className="w-full border border-gray-300 rounded-2xl px-4 py-2 h-32 resize-none focus:outline-none  focus:ring-blue-400"
            ></textarea>

            <div className="relative w-36 p-[1.5px] rounded-md bg-gradient-to-r from-blue-500 to-blue-300 group overflow-hidden">
              <button
                className="relative px-4 py-2 rounded-md bg-white text-blue-500 
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
                  Contact Us
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
