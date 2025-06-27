import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#0b001a]  text-white px-4 sm:px-8 py-4 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          {/* Initials */}
          <div className="w-10 h-10 bg-yellow-100 text-black flex items-center justify-center rounded-full font-bold shadow-md animate-slide-in">
            JN
          </div>

          {/* Name */}
          <span className="font-bold text-3xl tracking-wide animate-fade-in">
            Jaydip Nemade
          </span>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8 text-sm lg:text-base animate-slide-in">
          {[
            // "about",
            "skills",
            "projects",
            "experience",
            "education",
            "contact",
          ].map((section) => (
            <li key={section}>
              <a
                href={`#${section}`}
                className="hover:text-yellow-400 transition duration-300 ease-in-out transform hover:scale-110"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none transition-transform hover:scale-110"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden mt-4 space-y-4 text-center animate-fade-in">
          {[
            // "about",
            "skills",
            "projects",
            "experience",
            "education",
            "contact",
          ].map((section) => (
            <li key={section}>
              <a
                href={`#${section}`}
                className="block py-2 hover:text-yellow-300 transition"
                onClick={() => setIsOpen(false)}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
