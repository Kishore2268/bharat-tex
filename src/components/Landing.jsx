export default function LandingSection() {
  const companyLogos = [
    "/ABC.webp",
    "/ISTART.png",
    "/TIE.png",
    "/startup-india.webp",
    "/TOT.png",
    "/Zentelia.png",
    "/NITI-AIM-LOGO.webp",
  ];

  return (
    <section
      id="landing"
      className="relative min-h-screen flex flex-col justify-center items-center text-center p-6 mb-4"
    >
{/* Centered Main Content */}
<div className="absolute top-[35%] md:top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col md:flex-row items-center text-center md:text-left">
  {/* Logo */}
  <img 
    src="/anivarti-logo.png" 
    alt="Anivarti Logo" 
    className="w-36 sm:w-40 md:w-48 lg:w-64 xl:w-72"
  />

  {/* "×" Symbol */}
  <div className="font-medium text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-gray-800 mx-3 md:mx-4">
    ×
  </div>

  {/* Text Block */}
  <div className="flex flex-col">
    <h1 className="text-2xl sm:text-xl md:text-4xl lg:text-6xl font-bold text-darkOrange tracking-widest">
      Bharat Tex
    </h1>
    <h1 className="text-2xl sm:text-xl text-center md:text-4xl lg:text-6xl font-bold text-darkOrange tracking-widest">
      2025
    </h1>
  </div>
</div>


      {/* Company Logos - Fixed at Bottom */}
      <div className="absolute bottom-3 w-[90%] mx-auto">
        <div className="grid grid-cols-2 gap-3 md:grid-cols-7 lg:grid-cols-7 md:gap-6">
          {companyLogos.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Company ${index + 1}`}
              className={`w-32 h-16 md:h-24 lg:w-48 lg:h-32 object-contain mx-auto 
              ${index === 6 ? "col-span-2 justify-self-center md:col-span-1" : ""}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
