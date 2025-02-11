import React from "react";
import { motion } from "framer-motion";

const Vision = () => {
  return (
    <section className="text-center px-6 py-6 flex flex-col items-center">
      {/* Animated Heading */}
      <motion.h1
        className="text-lightOrange text-3xl md:text-4xl lg:text-6xl font-bold tracking-[3px]"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once:false,amount:0.5}}
      >
        <span className="text-darkOrange">Our</span> vision
      </motion.h1>

      {/* Animated Paragraph */}
      <motion.p
        className="text-black mt-4 max-w-2xl xs:text-lg sm:text-2xl lg:text-3xl tracking-[1px] mx-auto text-start"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
        viewport={{ once:false,amount:0.5}}
      >
        To empower businesses with seamless, scalable, and industry-oriented solutions
        that enhance growth and operational excellence.
      </motion.p>
    </section>
  );
};

export default Vision;
