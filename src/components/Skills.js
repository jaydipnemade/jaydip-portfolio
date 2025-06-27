// import React from "react";

// const Skills = () => {
//   return (
//     <section id="skills" className="mt-12">
//       <h2 className="text-2xl font-semibold mb-4 text-blue-700">Skills</h2>
//       <ul className="grid grid-cols-2 gap-3 list-disc list-inside">
//         <li>React.js, Next.js, Node.js, Express.js</li>
//         <li>MongoDB, MySQL</li>
//         <li>Tailwind CSS, Bootstrap</li>
//         <li>JWT Auth, REST APIs</li>
//         <li>AWS, Docker, Git, GitHub</li>
//         <li>Google Analytics, Postman</li>
//       </ul>
//     </section>
//   );
// };

// export default Skills;
//
//
//
// import React from "react";

// const skills = [
//   {
//     name: "React.js",
//     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
//     bg: "bg-blue-100",
//   },
//   {
//     name: "Next.js",
//     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
//     bg: "bg-gray-100",
//   },
//   {
//     name: "Node.js",
//     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
//     bg: "bg-green-100",
//   },
//   {
//     name: "Express.js",
//     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
//     bg: "bg-neutral-100",
//   },
//   {
//     name: "MongoDB",
//     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
//     bg: "bg-green-50",
//   },
//   {
//     name: "MySQL",
//     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
//     bg: "bg-blue-50",
//   },
//   {
//     name: "Tailwind CSS",
//     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
//     bg: "bg-cyan-50",
//   },
//   {
//     name: "Bootstrap",
//     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
//     bg: "bg-purple-50",
//   },
//   {
//     name: "JWT",
//     icon: "https://www.svgrepo.com/show/306500/jwt.svg",
//     bg: "bg-orange-50",
//   },
//   {
//     name: "REST API",
//     icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
//     bg: "bg-orange-100",
//   },
//   {
//     name: "AWS",
//     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
//     bg: "bg-yellow-50",
//   },
//   {
//     name: "Docker",
//     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
//     bg: "bg-blue-50",
//   },
//   {
//     name: "Git",
//     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
//     bg: "bg-red-50",
//   },
//   {
//     name: "GitHub",
//     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
//     bg: "bg-gray-200",
//   },
//   {
//     name: "Google Analytics",
//     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg",
//     bg: "bg-yellow-100",
//   },
//   {
//     name: "Postman",
//     icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
//     bg: "bg-orange-200",
//   },
// ];

// const Skills = () => {
//   return (
//     <section id="skills" className="mt-12">
//       <h2 className="text-3xl font-bold mb-6 text-blue-700">Skills</h2>
//       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
//         {skills.map((skill) => (
//           <div
//             key={skill.name}
//             className={`flex items-center space-x-2 p-3 rounded-lg shadow-sm ${skill.bg}`}
//           >
//             <img src={skill.icon} alt={skill.name} className="w-6 h-6" />
//             <span className="text-sm font-medium text-gray-800">
//               {skill.name}
//             </span>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Skills;

import React from "react";

// Grouped skill sets
const skillSections = [
  {
    title: "Languages",
    items: [
      {
        name: "JavaScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        bg: "bg-yellow-100",
      },
      {
        name: "TypeScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        bg: "bg-blue-100",
      },
    ],
  },
  {
    title: "Databases",
    items: [
      {
        name: "MongoDB",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
        bg: "bg-green-50",
      },
      {
        name: "MySQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
        bg: "bg-blue-50",
      },
    ],
  },
  {
    title: "Frameworks & Libraries",
    items: [
      {
        name: "React.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        bg: "bg-blue-100",
      },
      {
        name: "Next.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
        bg: "bg-gray-100",
      },
      {
        name: "Redux",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
        bg: "bg-violet-200",
      },
      {
        name: "Node.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        bg: "bg-green-100",
      },
      {
        name: "Express.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
        bg: "bg-neutral-100",
      },
      {
        name: "Tailwind CSS",
        icon: "https://img.icons8.com/?size=100&id=4PiNHtUJVbLs&format=png&color=000000",
        bg: "bg-cyan-100",
      },
      {
        name: "Bootstrap",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
        bg: "bg-purple-100",
      },
    ],
  },
  {
    title: "Cloud & DevOps",
    items: [
      {
        name: "AWS",
        icon: "https://img.icons8.com/?size=100&id=33039&format=png&color=000000",
        bg: "bg-yellow-100",
      },
      {
        name: "Docker",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
        bg: "bg-blue-100",
      },
    ],
  },
  {
    title: "Developer Tools",
    items: [
      {
        name: "Git",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
        bg: "bg-red-100",
      },
      {
        name: "GitHub",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
        bg: "bg-gray-200",
      },
      {
        name: "Postman",
        icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
        bg: "bg-orange-200",
      },
      {
        name: "Google Analytics",
        icon: "https://img.icons8.com/?size=100&id=avtI03bQMwX3&format=png&color=000000",
        bg: "bg-yellow-200",
      },
    ],
  },
  {
    title: "Security & Auth",
    items: [
      {
        name: "JWT",
        icon: "https://img.icons8.com/?size=100&id=13679&format=png&color=000000",
        bg: "bg-orange-100",
      },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="mt-12 p-6 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-blue-700">Skills</h2>

      {skillSections.map((section) => (
        <div key={section.title} className="mb-10">
          <h3 className="text-xl font-semibold mb-4 text-gray-700">
            {section.title}
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {section.items.map((skill) => (
              <div
                key={skill.name}
                className={`flex items-center space-x-2 p-3 rounded-lg shadow-sm ${skill.bg}`}
              >
                <img src={skill.icon} alt={skill.name} className="w-6 h-6" />
                <span className="text-sm font-medium text-gray-800">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Skills;
