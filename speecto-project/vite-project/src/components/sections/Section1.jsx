import React from "react";

const Section1 = () => {
  return (
    <div>
      <section className="flex flex-col items-center  border-[#081533] bg-white mx-3 lg:px-5 py-16 text-center font-sans">
        <h1 className="mb-8 text-[16px] lg:text-[20px] font-semibold uppercase tracking-[2.8px] text-[#081533]">
          How Do We Work
        </h1>

        <p className="mb-6 max-w-[860px] text-md leading-[1.6] font-semibold text-gray-600">
          As a team, we work tirelessly to develop software solutions that are
          both innovative and dependable, empowering businesses to prosper and
          individuals to flourish.
        </p>

        <p className="max-w-[850px] font-semibold text-md leading-[1.6] text-gray-600">
          Our meticulous and collaborative software development process delivers
          exceptional results, ensuring quality, reliability, and client
          satisfaction at every stage.
        </p>
      </section>
    </div>
  );
};

export default Section1;
