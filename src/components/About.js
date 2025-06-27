import React from "react";
import jaydipnemade from "./jaydipnemade.png"; // Adjust the path as necessary

const About = () => {
  return (
    <section id="about" className="text-center mt-10">
      <img
        src={jaydipnemade}
        alt="Jaydip Nemade"
        className="h-44 rounded-xl mx-auto border-2 border-blue-400 shadow-lg"
      />

      <h1 className="text-4xl font-bold mt-4">Jaydip Nemade</h1>
      <p className="text-lg text-blue-600">Full Stack Developer (MERN)</p>
      <p className="text-sm mt-2">
        Pune, Maharashtra | jaydipnemade@gmail.com | +91 7020106704
      </p>
    </section>
  );
};

export default About;
