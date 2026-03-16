import React from "react";

const SectionMsg = () => {
  return (
    <div className=" py-16 flex justify-center">
      <div className="w-full max-w-3xl  p-8">
        
        {/* Title */}
        <h2 className="text-center text-blue-500 text-xl font-semibold mb-10">
          Let's Get Started
        </h2>

        <form className="space-y-6">
          
          {/* Row 1 */}
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm text-gray-700 mb-2">Name</label>
              <input
                type="text"
                placeholder="Name"
                className="w-full border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-700 mb-2">Email</label>
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
              <label className="block text-sm text-gray-700 mb-2">Phone No.</label>
              <input
                type="text"
                placeholder="Phone Number"
                className="w-full border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-700 mb-2">Subject</label>
              <input
                type="text"
                placeholder="Subject"
                className="w-full border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm text-gray-700 mb-2">Your Message</label>
            <textarea
              placeholder="Write your message..."
              rows="4"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>
          </div>

          {/* Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="px-6 py-2 border border-blue-400 text-blue-500 rounded-lg hover:bg-blue-500 hover:text-white transition"
            >
              Submit
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default SectionMsg;