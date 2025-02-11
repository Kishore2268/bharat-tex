import { useState, useEffect, useCallback, useMemo } from "react";
import clsx from "clsx";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  // Memoized links array
  const links = useMemo(
    () => [
      { name: "About Us", id: "about" },
      { name: "Vision", id: "vision" },
      { name: "Mission", id: "mission" },
      { name: "Clients", id: "clients" },
      { name: "Photo Booths", id: "photo-booths" },
      { name: "Success Stories", id: "success-stories" },
      { name: "Contact", id: "contact" },
    ],
    []
  );

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const offset = 100; // Adjust based on header height
      const sectionTop = section.getBoundingClientRect().top + window.scrollY - offset;

      window.scrollTo({
        top: sectionTop,
        behavior: "smooth",
      });
    }
  };

  // Update active section on scroll
  const handleScroll = useCallback(() => {
    let current = "";
    links.forEach(({ id }) => {
      const section = document.getElementById(id);
      if (section) {
        const sectionTop = section.offsetTop - 120;
        if (window.scrollY >= sectionTop) {
          current = id;
        }
      }
    });
    setActiveSection(current);
  }, [links]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <header className="fixed top-0 left-0 w-full bg-white bg-opacity-40 backdrop-blur-md shadow-lg border-b border-gray-400 z-50">
      <div className="flex justify-between items-center w-[95%] md:w-[90%] lg:w-[95%] mx-auto py-2 h-16">
        {/* Logo */}
        <a href="/" className="text-2xl md:text-3xl font-bold text-darkOrange">Bharat Tex 2025</a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-8">
          {links.map(({ name, id }) => (
            <button
              key={id}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(id);
              }}
              className={clsx(
                "relative text-black text-md xl:text-lg font-medium hover:text-lightOrange pb-1.5 after:block after:h-[3px] after:bg-lightOrange after:origin-left after:scale-x-0 after:transition-transform hover:after:scale-x-100",
                { "text-darkOrange after:scale-x-100": activeSection === id }
              )}
            >
              {name}
            </button>
          ))}

          {/* Enquire Now Button */}
          <a
            href="https://in.bigin.online/anivarti/forms/free"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 px-6 py-2 bg-darkOrange text-white font-semibold rounded-md hover:bg-lightOrange transition"
          >
            Enquire Now
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden text-darkOrange">
          {menuOpen ? (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="lg:hidden bg-white bg-opacity-35 backdrop-blur-md bg-transparent w-full shadow-lg z-50 transition-all duration-500 ease-in-out">
          <nav className="flex flex-col items-center space-y-4 border-t border-gray-400 py-4">
            {links.map(({ name, id }, index) => (
              <div key={id} className="w-[95%]">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(id);
                    setMenuOpen(false);
                  }}
                  className={clsx(
                    "relative text-black text-md font-medium w-[95%] text-center py-2 hover:text-lightOrange",
                    { "text-darkOrange": activeSection === id }
                  )}
                >
                  {name}
                </button>
                {/* Thin gray line between links */}
                {index !== links.length - 1 && <hr className="border-gray-400 w-full" />}
              </div>
            ))}

            {/* Enquire Now Button for Mobile */}
            <a
              href="https://in.bigin.online/anivarti/forms/free"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 px-2 py-2 bg-darkOrange text-white font-semibold rounded-md hover:bg-lightOrange transition w-72 text-center"
            >
              Enquire Now
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
