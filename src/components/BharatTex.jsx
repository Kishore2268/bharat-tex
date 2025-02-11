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
      id="bharattex"
      className="min-h-screen flex flex-col justify-center items-center text-center p-10 relative"
    >
      {/* Heading with Image */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-4">
        <div className="flex flex-col">
        <h1 className="text-4xl md:text-6xl font-bold text-darkOrange">
          Bharat
        </h1>
        <h1 className="text-4xl md:text-6xl font-bold text-lightOrange">
          Tex 2025
        </h1>
        </div>
        <img
          src="/threadimg.png"
          alt="Thread Design"
          className="w-16 md:w-32"
        />
      </div>

      <p className="mt-4 max-w-5xl text-3xl text-gray-700">
        Bharat Tex 2025 is a premier event for industry leaders to showcase
        innovations and explore new business opportunities. Anivarti is
        dedicated to helping exhibitors maximize their outreach and engagement
        during the expo.
      </p>

      {/* Service Boxes */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-[95%] lg:w-[95%]">
        {services.map((service, index) => (
          <div
            key={index}
            className="p-6 flex flex-col items-center text-center"
          >
            <h3
              className="text-5xl mb-2 font-bold text-orange-500"
              style={{
                fontFamily: "Brush Script MT, cursive",
              }}
            >
              {service.title}
            </h3>
            <p className="mt-2 text-3xl text-gray-700">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

  