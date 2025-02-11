import { motion } from "framer-motion";

export default function SuccessStories() {
  return (
    <section  className="py-12 px-6 flex flex-col items-center">
      {/* Section Heading */}
      <motion.div
        className="text-center w-[95%] md:max-w-5xl mx-auto flex flex-col items-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.5 }}
      >
        {/* Heading with Image */}
        <div className="flex flex-row items-center justify-center">
          <motion.div
            className="flex flex-col text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.5 }}
          >
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold tracking-[3px] text-darkOrange">
              Success
            </h1>
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold tracking-[3px] text-lightOrange">
              Stories
            </h1>
          </motion.div>
          <motion.img
            src="/threadimg.png"
            alt="Thread Design"
            className="w-16 md:w-32 mt-4 md:mt-0 md:ml-4"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.5 }}
          />
        </div>

        {/* Paragraph */}
        <motion.p
          className="xs:text-lg sm:text-2xl lg:text-3xl text-gray-700 leading-relaxed mt-6 w-[100%] tracking-[1px] md:max-w-5xl text-start"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.5 }}
        >
          Our tailored solutions have helped numerous businesses achieve
          efficiency and growth. Our support at Bharat Tex 2024 led to
          outstanding results for exhibitors:
        </motion.p>

        {/* Bullet Points */}
        <ul className="mt-6 text-gray-700 xs:text-lg sm:text-2xl lg:text-3xl text-start tracking-[1px] mx-auto max-w-4xl list-disc list-inside">
          {[
            "Increased Lead Conversion – Exhibitors saw a significant boost in qualified leads and conversions.",
            "Enhanced Customer Outreach – Improved engagement with potential clients during the expo.",
            "Stronger Post-Expo Connections – Made it easier for exhibitors to follow up and build lasting relationships with prospects.",
          ].map((item, index) => (
            <motion.li
              key={index}
              className="mb-2"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.5 }}
            >
              <strong>{item.split(" – ")[0]}</strong> – {item.split(" – ")[1]}
            </motion.li>
          ))}
        </ul>
      </motion.div>

      {/* Gulabo Jaipur Case Study - Centered with Left-Aligned Text */}
      <motion.div
        className="mt-16 flex flex-col items-center max-w-6xl mx-auto text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.5}}
      >
        <motion.h2
          className="text-4xl md:text-6xl font-bold"
          initial={{ opacity: 0, y: 50 }} 
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.5 }}
        >
          <span className="text-darkOrange italic tracking-[3px]">Gulabo</span>{" "}
          <span className="text-lightOrange italic tracking-[3px]">Jaipur</span>
        </motion.h2>

        {/* Case Study Points */}
        <div className="mt-8 space-y-4 lg:space-y-6 w-full flex flex-col items-center">
          {[
            "1. Strengthened pre-expo outreach, increasing market reach by 50%.",
            "2. Improved customer engagement at the expo, leading to higher lead conversions.",
            "3. Enhanced post-expo follow-ups, making client connections more effective and boosting sales by 40%.",
          ].map((point, index) => (
            <motion.div
              key={index}
              className="p-6 text-gray-800 text-start xs:text-lg sm:text-2xl tracking-[1px] lg:text-3xl max-w-5xl w-full"
              initial={{ opacity: 0, y: 20 }} // fades in from bottom and settle in
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5, delay: index * 0.2, ease: "easeOut" }} // animation duration with delay
              viewport={{ once: true, amount: 0.5 }} // triggers animation whenever the user enters the viewport and the elemt is 50% visible
            >
              {point}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
