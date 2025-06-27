import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white px-6 py-4 shadow-md sticky top-0 z-50">
      <ul className="flex space-x-6 justify-center text-sm md:text-base">
        <li>
          <a href="#about" className="hover:text-yellow-300 transition">
            About
          </a>
        </li>
        <li>
          <a href="#skills" className="hover:text-yellow-300 transition">
            Skills
          </a>
        </li>
        <li>
          <a href="#projects" className="hover:text-yellow-300 transition">
            Projects
          </a>
        </li>
        <li>
          <a href="#experience" className="hover:text-yellow-300 transition">
            Experience
          </a>
        </li>
        <li>
          <a href="#education" className="hover:text-yellow-300 transition">
            Education
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:text-yellow-300 transition">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
