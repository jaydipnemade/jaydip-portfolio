import React from 'react';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 p-8">
      <header className="text-center">
        <h1 className="text-4xl font-bold mb-2">Jaydip Nemade</h1>
        <p className="text-lg">Full Stack Developer (MERN)</p>
        <p className="text-sm mt-2">Pune, Maharashtra | jaydipnemade@gmail.com | +91 7020106704</p>
      </header>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <p>
          Passionate MERN stack developer with 2 years of experience building scalable web applications at Proneta Tech Pvt. Ltd.
          Proficient in React.js, Node.js, MongoDB, Express.js, and more.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Skills</h2>
        <ul className="list-disc list-inside">
          <li>React.js, Next.js, Node.js, Express.js</li>
          <li>MongoDB, MySQL</li>
          <li>Tailwind CSS, Bootstrap</li>
          <li>JWT Auth, REST APIs</li>
          <li>AWS, Docker, Git, GitHub</li>
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        <ul className="list-disc list-inside">
          <li>Election Management System – MERN-based platform for constituency tracking and analytics</li>
          <li>Shopping Cart with Razorpay Integration – Full e-commerce cart with payment and order tracking</li>
          <li>Legacy Site Migration – PHP to MERN stack with SEO retention</li>
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Experience</h2>
        <p><strong>Full Stack Developer – Proneta Tech Pvt. Ltd.</strong> (Jan 2023 – Present)</p>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Education</h2>
        <ul className="list-disc list-inside">
          <li>PG-DAC, C-DAC Mumbai (2023)</li>
          <li>B.E. Mechanical, MMCOE Pune (2020)</li>
        </ul>
      </section>

      <footer className="mt-12 text-center text-sm">
        &copy; {new Date().getFullYear()} Jaydip Nemade. All rights reserved.
      </footer>
    </div>
  );
};

export default App;