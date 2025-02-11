import { motion } from "framer-motion";

export default function BharatTex() {
  const services = [
    {
      title: "Website Development",
      description:
        "Custom-built websites for exhibitor booths to enhance digital presence.",
    },
    {
      title: "Campaign",
      description:
        "Running targeted campaigns to boost client outreach and engagement at Bharat Tex 2025.",
    },
    {
      title: "Branding",
      description:
        "Branding solutions tailored to Bharat Tex 2025, including booth design and creative assets to maximize exhibitor impact.",
    },
    {
      title: "Booth Design",
      description:
        "Creative booth designs with interactive elements, delivered from concept to execution.",
    },
  ];

  return (
    <section
  
      className="min-h-screen flex flex-col justify-center items-center text-center p-10 relative"
    >
      {/* Heading with Image */}
      <motion.div
        className="flex flex-row items-center justify-center gap-4"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ amount :0.5 }}
      >
        <div className="flex flex-col">
          <h1 className="text-4xl md:text-6xl font-bold tracking-[3px] text-darkOrange">
            Bharat
          </h1>
          <h1 className="text-4xl md:text-6xl font-bold tracking-[3px] text-lightOrange">
            Tex 2025
          </h1>
        </div>
        <img
          src="/threadimg.png"
          alt="Thread Design"
          className="w-16 md:w-32"
        />
      </motion.div>

      {/* Paragraph Animation (Fade in from Right) */}
      <motion.p
        className="mt-4 max-w-5xl xs:text-lg sm:text-2xl lg:text-3xl tracking-[1px] text-gray-700"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        viewport={{ amount :0.5 }}
      >
        <span className="relative inline-block before:absolute before:inset-0 before:bg-yellow-400 before:h-7 md:before:h-10 before:w-full before:-z-10 before:skew-y-3 before:rounded-md">
          <span className="relative font-bold text-darkOrange">
            Bharat Tex 2025
          </span>
        </span>{" "}
        is a premier event for industry leaders to showcase innovations and
        explore new business opportunities.{" "}
        <span className="relative inline-block before:absolute before:inset-0 before:bg-orange-300 before:h-7 md:before:h-10 before:w-full before:-z-10 before:skew-y-3 before:rounded-md">
          <span className="relative font-bold text-lightOrange">Anivarti</span>
        </span>{" "}
        is dedicated to helping exhibitors maximize their outreach and
        engagement during the expo.
      </motion.p>

      {/* Service Boxes (Fade In from Bottom with Delayed Stagger) */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 w-[95%] lg:w-[95%]">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="p-6 flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: index * 0.3 }}
            viewport={{ amount:1,once:true }}
          >
            <h3
              className="text-2xl lg:text-5xl mb-2 tracking-[1px] font-bold text-orange-500"
              style={{
                fontFamily: "Brush Script MT, cursive",
              }}
            >
              {service.title}
            </h3>
            <p className="mt-2 xs:text-lg sm:text-2xl tracking-[1px] lg:text-3xl text-gray-700">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
