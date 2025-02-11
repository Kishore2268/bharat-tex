import React from "react";

const Mission = () => {
  return (
    <div className="text-center px-6 py-6 flex flex-col items-center">
      {/* "Our" and "Mission" in separate lines */}
      <div className="flex flex-col items-center">
        <h1 className="text-darkOrange text-6xl font-bold">Our</h1>
        <h1 className="text-lightOrange text-6xl font-bold">Mission</h1>
      </div>

      {/* Mission List */}
      <ul className="text-black mt-4 max-w-5xl text-3xl mx-auto list-disc list-inside text-start">
        <li>Provide end-to-end solutions for D2C brands and B2B companies.</li>
        <li>Foster business transformation through technology-driven strategies.</li>
        <li>Build long-term partnerships with clients, ensuring continuous growth and innovation.</li>
      </ul>
    </div>
  );
};

export default Mission;
