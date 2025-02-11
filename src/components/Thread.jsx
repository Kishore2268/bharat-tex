import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const Thread = () => {
  const [isInView, setIsInView] = useState(false);
  const pathRef = useRef(null);

  useEffect(() => {
    const pathElement = pathRef.current; // Store the current path reference in a variable

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting); // Update state when the thread enters the viewport
      },
      { threshold: 0.5 } // Trigger when 50% of the thread is in view
    );

    if (pathElement) {
      observer.observe(pathElement); // Observe the thread element
    }

    // Cleanup the observer when the component is unmounted or when the ref changes
    return () => {
      if (pathElement) {
        observer.unobserve(pathElement); // Clean up observer
      }
    };
  }, []);

  // Get the path length to animate stroke
  const pathLength = pathRef.current ? pathRef.current.getTotalLength() : 0;

  // Calculate dash offset based on whether the element is in view
  const dashOffset = isInView ? 0 : pathLength;

  return (
    <div className="flex justify-center items-center">
      <motion.svg
        className="w-28 h-48"
        viewBox="0 0 60 300"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          ref={pathRef}
          d="M30 10 
            C -10 70, 70 110, 25 160 
            C -20 210, 80 250, 22 300
            C 0 330, 60 370, 30 400"
          stroke="#8B4513"
          strokeWidth="6"
          fill="transparent"
          strokeLinecap="round"
          strokeDasharray={pathLength} // Set the length of the path
          strokeDashoffset={dashOffset} // Animate stroke based on visibility
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 30,
            duration: 1, // Add duration to make the animation smoother
          }}
        />
      </motion.svg>
    </div>
  );
};

export default Thread;

