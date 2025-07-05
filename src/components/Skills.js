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
    <section id="skills" className=" relative mt-12 p-6 max-w-7xl mx-auto">
      <hr />
      <div className="absolute z-0 ">
        {/* Decorative Gradient Shape */}
        <div
          aria-hidden="true"
          className="relative transform-gpu overflow-hidden blur-3xl"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="
    relative left-1/2 z-10 
    aspect-[1155/678] w-[90vw] max-w-[36.125rem]
    -translate-x-1/2 rotate-[30deg] 
    bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-70 
    sm:left-[calc(50%-40rem)] sm:w-[72.1875rem] sm:max-w-none
  "
          />
        </div>

        {/* SVG Grid Pattern */}
        <div className="absolute inset-0 overflow-hidden">
          <svg
            aria-hidden="true"
            className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
          >
            <defs>
              <pattern
                x="50%"
                y={-1}
                id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                width={200}
                height={200}
                patternUnits="userSpaceOnUse"
              >
                <path d="M100 200V.5M.5 .5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={-1} className="overflow-visible fill-gray-100">
              <path
                d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect
              fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
              width="100%"
              height="100%"
              strokeWidth={0}
            />
          </svg>
        </div>
      </div>
      <div className="relative z-10">
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
      </div>
      <hr />
    </section>
  );
};

export default Skills;
