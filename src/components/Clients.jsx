import { motion } from "framer-motion";

const brands = [
  
  { id: 1, name: "Big Flex Marketing", logo: "/bigflex.png" },
  { id: 2, name: "ARR", logo: "/arrr.png" },
  { id: 3, name: "Pretty Living Thing", text: "Pretty Living Thing" },
  { id: 4, name: "Rock MidWest Group Granite", text: "Rock MidWest Group Granite" },
  { id: 5, name: "Gulabo", logo: "/gulabo.png" },
  { id: 6, name: "Kriti", logo: "/kriti.png" },
];

export function ClientsSection() {
  return (
    <section className="text-center py-8 w-[95%] md:w-[90%] lg:w-[70%] mx-auto">
      {/* Heading */}
      <div className="flex flex-col md:flex-row items-center justify-center mb-8">
        <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold">
          <span className="text-darkOrange tracking-[3px]">Our</span>{" "}
          <span className="text-lightOrange tracking-[3px]">Clients</span>
        </h2>
      </div>

      {/* Clients Logo Section */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 place-items-center mx-auto   p-8">
        {brands.map((brand) => (
          <motion.div
            key={brand.id}
            layout
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="bg-[#e3d6cb] bg-opacity-95 bg-transparent backdrop-blur-md shadow-md flex items-center justify-center rounded-lg"
          >
            {brand.logo ? (
              <img
                src={brand.logo}
                alt={brand.name}
                loading="lazy"
                className="w-32 h-32 md:w-36 md:h-36 lg:w-56 lg:h-40 object-contain"
              />
            ) : (
              <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-800 w-32 h-32 md:w-36 md:h-36 lg:w-56 lg:h-40 flex items-center justify-center bg-[#e3d6cb] bg-opacity-80 backdrop-blur-md rounded-lg">
                {brand.text}
              </p>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
