import { motion } from "framer-motion";

export default function SuccessStories() {
  return (
    <section id="success-stories" className="py-12 px-6 flex flex-col items-center">
      {/* Section Heading */}
      <div className="text-center max-w-5xl mx-auto flex flex-col items-center">
        {/* Heading with Image */}
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="flex flex-col text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-darkOrange">
              Success
            </h1>
            <h1 className="text-4xl md:text-6xl font-bold text-lightOrange">
              Stories
            </h1>
          </div>
          <img
            src="/threadimg.png"
            alt="Thread Design"
            className="w-16 md:w-32 mt-4 md:mt-0 md:ml-4"
          />
        </div>

        {/* Paragraph */}
        <p className="text-3xl text-gray-700 leading-relaxed mt-6 max-w-5xl text-center">
          Our tailored solutions have helped numerous businesses achieve
          efficiency and growth. Our support at Bharat Tex 2024 led to
          outstanding results for exhibitors:
        </p>

        {/* Bullet Points */}
        <ul className="mt-6 text-gray-700 text-3xl text-start mx-auto max-w-4xl list-disc list-inside">
          <li>
            <strong>Increased Lead Conversion</strong> – Exhibitors saw a
            significant boost in qualified leads and conversions.
          </li>
          <li>
            <strong>Enhanced Customer Outreach</strong> – Improved engagement
            with potential clients during the expo.
          </li>
          <li>
            <strong>Stronger Post-Expo Connections</strong> – Made it easier for
            exhibitors to follow up and build lasting relationships with
            prospects.
          </li>
        </ul>
      </div>

      {/* Gulabo Jaipur Case Study - Centered with Left-Aligned Text */}
      <div className="mt-16 flex flex-col items-center max-w-6xl mx-auto text-center">
        <h3 className="text-6xl italic font-bold text-gray-900">GULABO JAIPUR</h3>

        {/* Case Study Points */}
        <div className="mt-8 space-y-6 w-full flex flex-col items-center">
          {[
            "1.Strengthened pre-expo outreach, increasing market reach by 50%.",
            "2.Improved customer engagement at the expo, leading to higher lead conversions.",
            "3.Enhanced post-expo follow-ups, making client connections more effective and boosting sales by 40%.",
          ].map((point, index) => (
            <motion.div
              key={index}
              className="p-6  text-gray-800 text-start text-3xl max-w-5xl w-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              {point}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
