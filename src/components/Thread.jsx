import React from "react";

const Thread = () => {
  return (
    <div className="flex justify-center items-center">
      {/* Twisted Thread with Bigger Unequal Curves */}
      <svg
        className="w-28 h-48" // Increased width & height
        viewBox="0 0 60 300" // Increased canvas height for larger curves
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M30 10 
            C -10 70, 70 110, 25 160 
            C -20 210, 80 250, 22 300
            C 0 330, 60 370, 30 400"
          stroke="#8B4513"  // Brown (Saddle Brown)
          strokeWidth="6" // Slightly thicker stroke for better visibility
          fill="transparent"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};

export default Thread;


