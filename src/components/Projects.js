import React from "react";

const Projects = () => {
  return (
    <section id="projects" className="mt-12">
      <h2 className="text-2xl font-semibold mb-4 text-blue-700">Projects</h2>
      <ul className="list-disc list-inside">
        <li>
          <strong>Election Management System</strong> – Dynamic dashboards,
          role-based access, real-time data visualisation, JWT auth, analytics
          with UTM, MongoDB aggregation, and scalable cloud deployment.
        </li>
        <li>
          <strong>Shopping Cart with Razorpay</strong> – Secure payments,
          persistent cart, webhook handling, session management.
        </li>
        <li>
          <strong>Legacy Site Migration</strong> – Migrated PHP to MERN with
          SEO-friendly URL mapping, lazy loading, and optimized API performance.
        </li>
      </ul>
    </section>
  );
};

export default Projects;
