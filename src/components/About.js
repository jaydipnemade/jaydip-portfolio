import React from "react";
import jaydipnemade from "./jaydipnemade.png"; // Ensure the path is correct

const About = () => {
  return (
    <section id="about" className="py-10 px-6 max-w-5xl mx-auto">
      <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-8 text-center md:text-left">
        {/* Photo */}
        <div className="mb-6 md:mb-0">
          <img
            src={jaydipnemade}
            alt="Jaydip Nemade"
            className="h-44 w-44 object-cover rounded-xl border-4 border-blue-400 shadow-xl transition-transform hover:scale-105"
          />
        </div>

        {/* Info */}
        <div>
          <h1 className="text-4xl font-bold text-gray-800 mb-2 hover:underline hover:text-blue-600 cursor-pointer">
            <a href="mailto:jaydipnemade@gmail.com">Jaydip Nemade</a>
          </h1>

          <p className="text-xl text-blue-600 font-medium mb-1">
            Full Stack Developer (MERN)
          </p>

          <p className="text-sm text-gray-600 mb-1">
            <span className="mr-2">📍</span>Pune, Maharashtra
          </p>

          <p className="text-sm text-blue-500 mb-1">
            <a href="mailto:jaydipnemade@gmail.com" className="hover:underline">
              📧 jaydipnemade@gmail.com
            </a>
          </p>

          <p className="text-sm text-blue-500">
            <a href="tel:+917020106704" className="hover:underline">
              📞 +91 7020106704
            </a>
          </p>
            <p className="text-lg mb-2">
            LinkedIn:{" "}
            <a
              href="https://linkedin.com/in/jaydipnemade16"
              className=" hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              linkedin.com/in/jaydipnemade16
            </a>
          </p>
          <p className="text-lg">
            GitHub:{" "}
            <a
              href="https://github.com/jaydipnemade"
              className=" hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              github.com/jaydipnemade
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
