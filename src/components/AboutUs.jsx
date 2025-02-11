import React from "react";

const AboutUs = () => {
  return (
    <div className="text-center px-6 py-6 flex flex-col items-center">
      {/* About and Us in separate lines with color and slant effect */}
      <div className="flex flex-row gap-2 items-center">
        <h1 className="text-darkOrange text-6xl font-bold ">
          About
        </h1>
        <h1 className="text-lightOrange text-6xl font-bold">
          Us
        </h1>
      </div>

      {/* Description */}
      <p className="text-black mt-4 text-3xl max-w-3xl mx-auto text-start">
        Anivarti is a one-stop solution for D2C brands and B2B companies, helping them
        scale, expand market reach, and optimize operations with customized strategies
        for growth and efficiency.
      </p>
    </div>
  );
};

export default AboutUs;
