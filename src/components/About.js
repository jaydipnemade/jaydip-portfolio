import React from "react";

const About = () => {
  return (
    <section id="about" className="text-center mt-10">
      <img
        src="https://avatars.githubusercontent.com/u/12345678?v=4"
        alt="Jaydip Nemade"
        className="w-32 h-32 rounded-full mx-auto border-4 border-blue-400 shadow-lg"
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
