export function ClientsSection() {
  const clientLogos = [
    "/logos/client1.png",
    "/logos/client2.png",
    "/logos/client3.png",
    "/logos/client4.png",
    "/logos/client5.png",
    "/logos/client6.png",
  ];

  return (
    <section id="clients" className="text-center py-12">
      {/* Heading with Image */}
      <div className="flex flex-col md:flex-row items-center justify-center mb-6">
        <div className="flex flex-col md:flex-row items-center">
          <h2 className="text-4xl md:text-6xl font-bold">
            <span className="text-darkOrange">Our</span>{" "}
            <span className="text-lightOrange">Clients</span>
          </h2>
        </div>
      </div>

      {/* Clients Logo Section */}
      <div className="flex flex-wrap justify-center gap-6">
        {clientLogos.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`Client ${index + 1}`}
            className="w-28 h-28 object-contain"
          />
        ))}
      </div>
    </section>
  );
}

  