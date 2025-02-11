export default function LandingSection() {
    const companyLogos = [
      "/logos/company1.png",
      "/logos/company2.png",
      "/logos/company3.png",
      "/logos/company4.png",
      "/logos/company5.png",
      "/logos/company6.png",
      "/logos/company7.png",
      "/logos/company8.png",
    ];
  
    return (
      <section
        id="landing"
        className="relative min-h-screen flex flex-col justify-center items-center text-center p-6"
      >
        {/* Centered Main Content */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-row items-center">
          <img src="/logos/anivarti.png" alt="Anivarti Logo" className="w-48" />
          <div className="font-thin text-8xl text-gray-800 mx-4">×</div>
          <h1 className="text-3xl md:text-6xl font-bold text-orange-500">
            Bharat Tex 2025
          </h1>
        </div>
  
        {/* Company Logos - Fixed at Bottom */}
        <div className="absolute bottom-3 w-full max-w-5xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {companyLogos.map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt={`Company ${index + 1}`}
                className="w-24 h-24 object-contain mx-auto"
              />
            ))}
          </div>
        </div>
      </section>
    );
  }
  