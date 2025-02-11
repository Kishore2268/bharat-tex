import React from "react";
import { motion } from "framer-motion";

const Mission = () => {
  return (
    <section  className="text-center px-6 py-6 flex flex-col items-center">
      {/* Animated Heading */}
      <motion.h1
        className="text-lightOrange text-3xl md:text-4xl lg:text-6xl tracking-[3px] font-bold"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once:false,amount:0.5 }}
      >
        <span className="text-darkOrange">Our</span> Mission
      </motion.h1>

      {/* Animated Mission List with Staggered Delay */}
      <motion.ul
        className="text-black mt-4 max-w-5xl xs:text-lg sm:text-2xl lg:text-3xl mx-auto tracking-[1px] list-disc list-inside text-start"
        initial="hidden"
        whileInView="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.3 }, // Staggered delay for <li> items
          },
        }}
        viewport={{ once:false,amount:0.5 }}
      >
        {[
          "Provide end-to-end solutions for D2C brands and B2B companies.",
          "Foster business transformation through technology-driven strategies.",
          "Build long-term partnerships with clients, ensuring continuous growth and innovation.",
        ].map((item, index) => (
          <motion.li
            key={index}
            className="mb-2"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
            }}
          >
            {item}
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
};

export default Mission;
