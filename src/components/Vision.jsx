import React from "react";

const Vision = () => {
  return (
    <div className="text-center px-6 py-6 flex flex-col items-center">
      {/* "Our" and "Vision" in separate lines with slant effect */}
      <div className="flex flex-col items-center">
        <h1 className="text-darkOrange text-6xl font-bold">
          Our
        </h1>
        <h1 className="text-lightOrange text-6xl font-bold">
          Vision
        </h1>
      </div>

      {/* Description */}
      <p className="text-black mt-4 max-w-2xl text-3xl mx-auto text-start">
        To empower businesses with seamless, scalable, and industry-oriented solutions
        that enhance growth and operational excellence.
      </p>
    </div>
  );
};

export default Vision;
