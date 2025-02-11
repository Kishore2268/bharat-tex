import { motion } from "framer-motion";

export function ClientsSection() {
  const clientLogos = [
    "/arrr.png",
    "/gulabojaipur.png",
    "/bigflex.png",
    "/PLT.webp",
    "/kriti.png",
    "/midwest.png",
  ];

  return (
    <section className="text-center py-8">
      {/* Heading */}
      <div className="flex flex-col md:flex-row items-center justify-center mb-8">
        <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold">
          <span className="text-darkOrange tracking-[3px]">Our</span>{" "}
          <span className="text-lightOrange tracking-[3px]">Clients</span>
        </h2>
      </div>

      {/* Clients Logo Section */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 place-items-center mx-auto">
        {clientLogos.map((logo, index) => (
          <motion.img
            key={index}
            src={logo}
            alt={`Client ${index + 1}`}
            className="w-32 h-32 md:w-36 md:h-36 lg:w-48 lg:h-40 object-contain"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.5 }}
          />
        ))}
      </div>
    </section>
  );
}

  