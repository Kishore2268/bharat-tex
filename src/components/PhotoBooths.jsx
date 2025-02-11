import { motion } from "framer-motion";

export function PhotoBoothsSection() {
  const photoBooths = [
    "/photo1.png",
    "/photo2.png",
    "/photo3.png",
    "/photo4.png",
    "/photo5.png",
  ];

  return (
    <section  className="text-center py-12">
      {/* Heading with Image */}
      <div className="flex items-center justify-center mb-6">
        <motion.div
          className="flex flex-row items-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.5 }}
        >
          <h2 className="flex flex-col text-3xl md:text-4xl lg:text-6xl font-bold">
            <span className="text-darkOrange">Photo</span>{" "}
            <span className="text-lightOrange">Booths</span>
          </h2>
          <motion.img
            src="/threadimg.png"
            alt="Thread Design"
            className="w-16 md:w-32 ml-4"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            viewport={{once: false, amount: 0.5 }}
          />
        </motion.div>
      </div>

      {/* Photo Booths Grid */}
      <div className="w-[100%] lg:w-[95%] grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto">
        {photoBooths.map((photo, index) => (
          <motion.img
            key={index}
            src={photo}
            alt={`Booth ${index + 1}`}
            className="w-88 md:w-104 lg:w-full h-64 object-cover rounded-lg shadow-md mx-auto"
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
