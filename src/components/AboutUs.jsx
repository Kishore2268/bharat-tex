import React from "react";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <section  className="text-center px-6 py-6 flex flex-col items-center">
      {/* About and Us in separate lines with color and slant effect */}
      <motion.div 
        className="flex flex-row gap-4 items-center"
        initial={{ opacity: 0, y: 50 }} // Fade in from bottom
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount:0.5}}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="text-darkOrange tracking-[3px] text-3xl md:text-4xl lg:text-6xl font-bold">
          About
        </h1>
        <h1 className="text-lightOrange tracking-[3px] text-3xl md:text-4xl lg:text-6xl font-bold">
          Us
        </h1>
      </motion.div>

      {/* Description */}
      <motion.p 
        className="text-black mt-4 xs:text-lg sm:text-2xl lg:text-3xl tracking-[1px] max-w-3xl mx-auto text-start"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        viewport={{ amount :0.5 }} 
      >
        Anivarti is a one-stop solution for D2C brands and B2B companies, helping them
        scale, expand market reach, and optimize operations with customized strategies
        for growth and efficiency.
      </motion.p>
    </section>
  );
};

export default AboutUs;

