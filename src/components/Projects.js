// import React from "react";
// import {
//   FaProjectDiagram,
//   FaShoppingCart,
//   FaShieldAlt,
//   FaRocket,
//   FaSearch,
//   FaServer,
// } from "react-icons/fa";
// import {
//   BsStack,
//   BsDatabaseGear,
//   BsCloudCheck,
//   BsDiagram3,
//   BsGraphUpArrow,
// } from "react-icons/bs";

// const techBadge = (icon, label) => (
//   <div className="flex items-center space-x-1 bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-semibold">
//     {icon}
//     <span>{label}</span>
//   </div>
// );

// const Projects = () => {
//   return (
//     <section id="projects" className="mt-16">
//       <h2 className="text-3xl font-bold mb-6 text-blue-700 flex items-center">
//         <FaProjectDiagram className="mr-2 text-yellow-500" />
//         Projects
//       </h2>

//       {/* Project 1 */}
//       <div className="mb-10 p-6 rounded-lg bg-white shadow-md hover:shadow-xl transition duration-300">
//         <h3 className="text-xl font-semibold mb-2 text-gray-800">
//           Official Website / Web Portal – Proneta Tech Pvt. Ltd.
//         </h3>
//         <p className="text-sm text-gray-600 mb-4">
//           Developed a full-stack MERN application featuring secure Razorpay
//           payments, persistent cart, JWT-based authentication, SEO-friendly PHP
//           to MERN migration, optimized DB queries using MongoDB Aggregation, and
//           Google Analytics tracking.
//         </p>
//         <div className="flex flex-wrap gap-2 mt-3">
//           {techBadge(<BsStack />, "MERN Stack")}
//           {techBadge(<FaShoppingCart />, "Razorpay + Cart")}
//           {techBadge(<FaShieldAlt />, "JWT Auth")}
//           {techBadge(<FaSearch />, "SEO Friendly")}
//           {techBadge(<BsDatabaseGear />, "Mongo Aggregation")}
//           {techBadge(<FaRocket />, "Optimized Performance")}
//           {techBadge(<BsGraphUpArrow />, "Google Analytics")}
//         </div>
//       </div>

//       {/* Project 2 */}
//       <div className="mb-10 p-6 rounded-lg bg-white shadow-md hover:shadow-xl transition duration-300">
//         <h3 className="text-xl font-semibold mb-2 text-gray-800">
//           EMS – Election Management System
//         </h3>
//         <p className="text-sm text-gray-600 mb-4">
//           Built a full-featured MERN-based EMS platform to track election data,
//           role-based user access, dashboards, analytics, and constituency
//           management. Integrated JWT security, Google UTM analytics, and MongoDB
//           aggregation for real-time insights.
//         </p>
//         <div className="flex flex-wrap gap-2 mt-3">
//           {techBadge(<BsStack />, "MERN Stack")}
//           {techBadge(<FaShieldAlt />, "JWT Auth")}
//           {techBadge(<BsCloudCheck />, "Cloud Deployed")}
//           {techBadge(<BsDiagram3 />, "RBAC Access")}
//           {techBadge(<BsGraphUpArrow />, "Analytics + UTM")}
//           {techBadge(<FaRocket />, "Realtime Dashboards")}
//           {techBadge(<FaServer />, "Optimized APIs")}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;
import React from "react";

const techBadge = (iconSvg, label) => (
  <div className="flex items-center space-x-1 bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-semibold">
    <span className="w-4 h-4" dangerouslySetInnerHTML={{ __html: iconSvg }} />
    <span>{label}</span>
  </div>
);

// Bootstrap SVG icons (from https://icons.getbootstrap.com)
const icons = {
  stack: `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-layers" viewBox="0 0 16 16"><path d="M8.088.376a.5.5 0 0 0-.176 0l-7 2A.5.5 0 0 0 .5 2.824v.708l7.5 2.144L15.5 3.532v-.708a.5.5 0 0 0-.412-.448l-7-2Zm0 1.056L14.5 3.172 8 5.308 1.5 3.172 8.088 1.432ZM.5 5.424v.708l7.5 2.144 7.5-2.144v-.708L8 7.56.5 5.424ZM0 8.024v.708l7.5 2.144L15 8.732v-.708L7.5 10.168 0 8.024Z"/></svg>`,
  jwt: `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-shield-lock" viewBox="0 0 16 16"><path d="M5.5 9.995V9a2.5 2.5 0 1 1 5 0v.995c.57.094 1 .572 1 1.164v1.5a1.5 1.5 0 0 1-3 0v-1.5c0-.592.43-1.07 1-1.164V9a1.5 1.5 0 0 0-3 0v.159a1.5 1.5 0 0 0-.5-.086 1.5 1.5 0 0 0-.5.086Zm2.5 1.664v1.5a.5.5 0 0 0 1 0v-1.5a.5.5 0 0 0-1 0Z"/><path d="M7.45.661a1 1 0 0 1 1.1 0l6 4A1 1 0 0 1 15 5.5v5a8.5 8.5 0 0 1-7 8.37A8.5 8.5 0 0 1 1 10.5v-5a1 1 0 0 1 .45-.839l6-4ZM8 1.933 2 5.5v5a7.5 7.5 0 0 0 6 7.421A7.5 7.5 0 0 0 14 10.5v-5L8 1.933Z"/></svg>`,
  cart: `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16"><path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1.5 7A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.49-.402L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5ZM4.415 10h8.17l1.2-5.6H3.14L4.415 10ZM6 12a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm5 1a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"/></svg>`,
  analytics: `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-graph-up-arrow" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M0 0h1v15h15v1H0V0zm14.854 4.854a.5.5 0 0 0-.708-.708L11.5 6.793 8.354 3.646a.5.5 0 0 0-.708 0L4.5 6.793 2.354 4.646a.5.5 0 1 0-.708.708l2.5 2.5a.5.5 0 0 0 .708 0L8 4.707l2.646 2.647a.5.5 0 0 0 .708 0l3.5-3.5z"/></svg>`,
  seo: `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16"><path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001l3.85 3.85a1 1 0 0 0 1.415-1.415l-3.85-3.85zm-5.242.656a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11z"/></svg>`,
  cloud: `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-cloud-check" viewBox="0 0 16 16"><path d="M8 3a5.53 5.53 0 0 1 4.473 2.356.5.5 0 1 0 .832-.555A6.53 6.53 0 0 0 8 2a6.53 6.53 0 0 0-5.305 2.8.5.5 0 0 0 .832.555A5.53 5.53 0 0 1 8 3Z"/><path d="M3.646 10.354a.5.5 0 0 1 .708 0L6 12l2.646-2.646a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 0-.708Z"/></svg>`,
};

const Projects = () => {
  return (
    <section id="projects" className="mt-16 p-6 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-blue-700 flex items-center">
        <span
          dangerouslySetInnerHTML={{ __html: icons.stack }}
          className="w-6 h-6 mr-2"
        />
        Projects
      </h2>

      {/* Project 1 */}
      <div className="mb-10 p-6 rounded-lg bg-white shadow hover:shadow-lg transition duration-300">
        <h3 className="text-xl font-semibold mb-2 text-gray-800">
          <a
            href="https://proneta.in"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:underline hover:text-blue-900 transition-colors duration-200"
          >
            Official Website / Web Portal – Proneta Tech Pvt. Ltd.
          </a>
        </h3>

        <ul className="list-disc list-inside text-sm text-gray-600 space-y-2">
          <li>
            Built a full MERN stack web app with secure Razorpay payments and
            persistent cart.
          </li>
          <li>
            Implemented MongoDB aggregation for optimized analytics and $lookup
            operations.
          </li>
          <li>JWT-based secure user authentication and session handling.</li>
          <li>Transitioned old PHP website to SEO-friendly MERN-based site.</li>
          <li>
            Deployed to cloud and integrated Google Analytics with UTM tracking.
          </li>
        </ul>
        <div className="flex flex-wrap gap-2 mt-4">
          {techBadge(icons.stack, "MERN Stack")}
          {techBadge(icons.cart, "Razorpay Cart")}
          {techBadge(icons.jwt, "JWT Auth")}
          {techBadge(icons.analytics, "Analytics + UTM")}
          {techBadge(icons.seo, "SEO Friendly")}
          {techBadge(icons.cloud, "Cloud Deployed")}
        </div>
      </div>

      {/* Project 2 */}
      <div className="mb-10 p-6 rounded-lg bg-white shadow hover:shadow-lg transition duration-300">
        <h3 className="text-xl font-semibold mb-2 text-gray-800">
          EMS – Election Management System
        </h3>
        <ul className="list-disc list-inside text-sm text-gray-600 space-y-2">
          <li>
            Full MERN app with real-time dashboards and constituency analytics.
          </li>
          <li>MongoDB $lookup and indexing for optimized querying.</li>
          <li>JWT-based authentication with role-based access (RBAC).</li>
          <li>
            Google Analytics UTM integration and performance optimization.
          </li>
        </ul>
        <div className="flex flex-wrap gap-2 mt-4">
          {techBadge(icons.stack, "MERN Stack")}
          {techBadge(icons.jwt, "JWT Auth")}
          {techBadge(icons.cloud, "Cloud Hosting")}
          {techBadge(icons.analytics, "Realtime Analytics")}
          {techBadge(icons.seo, "Optimized Queries")}
        </div>
      </div>
    </section>
  );
};

export default Projects;
