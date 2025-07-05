import React from "react";
import "./Contact.css"; // Assuming you have a CSS file for additional styles
import jaydipnemade from "./jaydipnemade.png";
import { FaLinkedin, FaGithub } from "react-icons/fa";
function Contact() {
  return (
    <section
      id="contact"
      className="relative bg-[#0b001a] text-white py-20 px-4 md:px-16 overflow-hidden top-wave-path"
    >
      {/* Heading */}
      <div className="text-center font-medium text-4xl md:text-6xl mt-10 md:mt-20 mb-10">
        Contact me
      </div>

      {/* Content */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-10">
        {/* Photo */}
        <div className="flex-shrink-0">
          <img
            src={jaydipnemade}
            alt="Jaydip Nemade"
            className="h-52 w-48 rounded-xl border-4 shadow-xl transition-transform hover:scale-105"
          />
        </div>

        {/* Info */}
        <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md">
          <div className="text-center md:text-end text-gray-800 space-y-3">
            <h1 className="text-2xl md:text-4xl font-bold hover:underline cursor-pointer">
              <a href="mailto:jaydipnemade@gmail.com" className="text-gray-900">
                Jaydip Nemade
              </a>
            </h1>

            <p className="text-base md:text-xl font-medium text-gray-700">
              Full Stack Developer (MERN)
            </p>

            <div className="text-sm space-y-1 text-gray-600">
              <p>
                <span className="mr-2">📍</span>Pune, Maharashtra
              </p>

              <p>
                <a
                  href="mailto:jaydipnemade@gmail.com"
                  className="hover:underline text-gray-600"
                >
                  📧 jaydipnemade@gmail.com
                </a>
              </p>

              <p>
                <a
                  href="tel:+917020106704"
                  className="hover:underline text-gray-600"
                >
                  📞 +91 7020106704
                </a>
              </p>
            </div>

            <div className="flex justify-center md:justify-end items-center gap-4 text-base pt-2 text-gray-700">
              <a
                href="https://linkedin.com/in/jaydipnemade16"
                className="flex items-center gap-1 hover:text-blue-600 transition"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin className="text-lg" />
                <span>LinkedIn</span>
              </a>

              <span className="text-gray-400 hidden md:inline">|</span>

              <a
                href="https://github.com/jaydipnemade"
                className="flex items-center gap-1 hover:text-gray-800 transition"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub className="text-lg" />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
