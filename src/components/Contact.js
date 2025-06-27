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
      <div className="text-center font-medium text-6xl w-100 mt-20 mb-10">
        {" "}
        Contact me
      </div>
      <div className="flex justify-around ">
        {/* Photo */}
        <div className="mb-auto mt-auto md:ms-20 ">
          <img
            src={jaydipnemade}
            alt="Jaydip Nemade"
            className="h-52 w-48 my-auto rounded-xl border-4 shadow-xl transition-transform hover:scale-105"
          />
        </div>

        {/* Info */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="text-end text-gray-800 space-y-3 p-4">
            <h1 className="text-4xl font-bold hover:underline cursor-pointer">
              <a href="mailto:jaydipnemade@gmail.com" className="text-gray-900">
                Jaydip Nemade
              </a>
            </h1>

            <p className="text-xl font-medium text-gray-700">
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

            <div className="flex justify-end items-center gap-4 text-base pt-2 text-gray-700">
              <a
                href="https://linkedin.com/in/jaydipnemade16"
                className="flex items-center gap-1 hover:text-blue-600 transition"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin className="text-lg" />
                <span>LinkedIn</span>
              </a>

              <span className="text-gray-400">|</span>

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
