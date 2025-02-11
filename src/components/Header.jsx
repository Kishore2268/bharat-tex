import { useState, useEffect, useCallback, useMemo } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  // Memoize the links array to prevent unnecessary re-renders
  const links = useMemo(() => [
    { name: "About Us", id: "about" },
    { name: "Our Vision", id: "vision" },
    { name: "Our Mission", id: "mission" },
    { name: "Our Clients", id: "clients" },
    { name: "Photo Booths", id: "booths" },
    { name: "Success Stories", id: "stories" },
    { name: "Contact", id: "contact" },
  ], []);

  // Memoize handleScroll function to avoid recreating it on each render
  const handleScroll = useCallback(() => {
    let current = "";
    links.forEach(({ id }) => {
      const section = document.getElementById(id);
      if (section) {
        const sectionTop = section.offsetTop - 100;
        if (window.scrollY >= sectionTop) {
          current = id;
        }
      }
    });
    setActiveSection(current);
  }, [links]); // Now links are memoized, so handleScroll is stable

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]); // No warning now!

  return (
    <header className="fixed w-full top-0 shadow-md z-50 bg-white">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <h1 className="text-3xl font-bold text-orange-500">Bharat Tex 2025</h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6">
          {links.map(({ name, id }) => (
            <a
              key={id}
              href={`#${id}`}
              className={`text-md py-2 px-4 ${
                activeSection === id ? "text-orange-500 font-bold" : "text-gray-700"
              } hover:text-orange-500 transition`}
            >
              {name}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden focus:outline-none"
        >
          {menuOpen ? (
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <nav className="md:hidden bg-white shadow-md p-4 absolute w-full">
          {links.map(({ name, id }) => (
            <a
              key={id}
              href={`#${id}`}
              className={`block py-2 ${
                activeSection === id ? "text-orange-500 font-bold" : "text-gray-700"
              } hover:text-orange-500 transition`}
              onClick={() => setMenuOpen(false)}
            >
              {name}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
