import React, { useState } from "react";
import { MdLocationPin } from "react-icons/md";
import { RiInboxArchiveFill } from "react-icons/ri";
import contactus from "../../assets/asset/contactUS.mp4";
import { FaPhoneAlt } from "react-icons/fa";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

import logo from "../../assets/asset/speectoLogo.png";

// Fix default marker icon broken in Vite/Webpack builds
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});
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
      <div className="flex hidden sm:flex flex-col md:flex-row lg:flex-row bg-[#081533] min-h-[250px] md:min-h-[330px] w-full items-center justify-center py-12 md:py-0">
        {/* Left */}
        <div className="flex md:w-1/2 ml-3 mt-[-6px] font-semibold justify-start items-left  md:mb-0">
          <h1 className="bg-gradient-to-r from-blue-600 to-blue-300 bg-clip-text text-transparent font-Nunito sm:text-2xl lg:text-4xl md:text-5xl text-left px-2">
            CONTACT
          </h1>
          <h1 className="text-white sm:text-2xl lg:text-4xl md:text-5xl text-left px-1">
            US
          </h1>
        </div>

        {/* Right */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
          {/* Picture Placeholder */}
          <div className="mb-7 pl-10 w-200 h-90 flex justify-center items-center">
            <video
              src={contactus}
              autoPlay
              loop
              muted
              className="w-full h-full object-contain"
            ></video>
          </div>
        </div>
      </div>

      <div className=" px-6 py-4 lg:py-16">
        <h2 className="text-[18px] font-bold mb-8">Get In Touch</h2>

        <div className="grid md:grid-cols-2 gap-18">
          <div className="space-y-6">
            <div className="flex items-start space-x-3">
              <span className="mt-2">
                <MdLocationPin />
              </span>
              <p className="text-[14px] mb-[-4px]">
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
            <div className="mt-4 h-78 w-full  overflow-hidden border border-gray-200 z-0">
              <MapContainer
                center={[31.4237, 73.079]}
                zoom={13}
                scrollWheelZoom={false}
                className="w-full h-full"
                style={{ zIndex: 0 }}
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[31.4237, 73.079]}>
                  <Popup>Speecto — Faisalabad, Pakistan</Popup>
                </Marker>
              </MapContainer>
            </div>
          </div>

          {/* Right side */}
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="font-semibold ml-1">Name</label>
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
                <label className=" font-semibold ml-1">Email</label>
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
                <label className=" font-semibold ml-1">Phone No.</label>
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
                <label className="font-semibold ml-1">Subject</label>
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
              <label className=" font-semibold ml-1">Your Message</label>
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
              className={`relative  item-center lg:w-28 w-25 mt-5  p-[1.6px] rounded-[12px] bg-gradient-to-r from-[#0049ff] to-[#00c3ff] group overflow-hidden${isSubmitting ? "opacity-80 pointer-events-none" : ""}`}
            >
              <button
                type="submit"
                disabled={isSubmitting}
                className="relative lg:py-3 py-2 rounded-[12px] bg-white text-gradient-to-r from-[#0049ff] to-[#00c3ff] 
                            transition-transform duration-300 hover:translate-x-1 w-full"
              >
                {!isSubmitting && (
                  <span
                    className="absolute left-0 top-0 h-full w-0 bg-gradient-to-r from-[#0049ff] to-[#00c3ff] transition-all 
                            duration-300 group-hover:w-full z-0"
                  ></span>
                )}

                <span className="relative bg-gradient-to-r from-[#0049ff] to-[#00c3ff] bg-clip-text text-transparent font-bold z-10 group-hover:text-white">
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
