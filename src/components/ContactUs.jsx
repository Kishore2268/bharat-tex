import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function ContactUs() {
  return (
    <section className="py-32 px-2 text-center flex flex-col items-center">
      {/* Animated Heading */}
      <motion.div
        className="mb-10"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl lg:text-6xl tracking-[3px] font-bold text-darkOrange px-8 py-2 bg-yellow-400 skew-x-[-15deg] inline-block">
          Contact Us
        </h2>
      </motion.div>

      {/* Contact Details */}
      <motion.div
        className="text-lg md:text-xl space-y-6 flex flex-col items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { staggerChildren: 0.3, ease: "easeOut", duration: 0.6 },
          },
        }}
      >
        {/* Phone Numbers with Icon */}
        <motion.div
          className="flex items-center gap-2"
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
        >
          <motion.div
            className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full border-2 border-lightBrown"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaPhoneAlt className="text-lightBrown text-2xl" />
          </motion.div>
          <p className="text-gray-900 font-medium">
            <a href="tel:+918799746047" className="hover:underline">
              +91 87997 46047
            </a>,{" "}
            <a href="tel:+918955578234" className="hover:underline">
              +91 89555 78234
            </a>
          </p>
        </motion.div>

        {/* Email with Icon */}
        <motion.div
          className="flex items-center gap-2"
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
        >
          <motion.div
            className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full border-2 border-lightBrown"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaEnvelope className="text-lightBrown text-2xl" />
          </motion.div>
          <p className="text-gray-900 font-medium">
            <a href="mailto:a@anivarti.com" className="hover:underline">
              a@anivarti.com
            </a>
          </p>
        </motion.div>
      </motion.div>

      {/* Wanna Collaborate With Us Section */}
      <motion.div
        className="mt-16 flex flex-col items-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide text-darkOrange mb-4">
          Wanna Collaborate With Us?
        </h2>
        <motion.p
          className="text-lg md:text-2xl text-gray-700 max-w-3xl text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          We're always open to exciting partnerships and innovative ideas. Let's
          collaborate and make something amazing together!
        </motion.p>

        {/* Enquire Now Button */}
        <motion.a
          href="https://in.bigin.online/anivarti/forms/free"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 px-8 py-3 text-lg md:text-2xl font-semibold text-white bg-lightOrange rounded-full shadow-md hover:bg-darkOrange transition-all"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Enquire Now
        </motion.a>
      </motion.div>
    </section>
  );
}
