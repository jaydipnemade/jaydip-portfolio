import React from "react";

const Skills = () => {
  return (
    <section id="skills" className="mt-12">
      <h2 className="text-2xl font-semibold mb-4 text-blue-700">Skills</h2>
      <ul className="grid grid-cols-2 gap-3 list-disc list-inside">
        <li>React.js, Next.js, Node.js, Express.js</li>
        <li>MongoDB, MySQL</li>
        <li>Tailwind CSS, Bootstrap</li>
        <li>JWT Auth, REST APIs</li>
        <li>AWS, Docker, Git, GitHub</li>
        <li>Google Analytics, Postman</li>
      </ul>
    </section>
  );
};

export default Skills;
