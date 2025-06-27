import React from "react";

const Experience = () => {
  return (
    <section id="experience" className="mt-12 p-6 max-w-7xl mx-auto bg-slate-200 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-6 text-blue-700">Experience</h2>

      <div className="flex items-start gap-4 mb-6">
        {/* Company Logo */}
        <img
          src="https://proneta.in/static/media/2.5x1.2d8a48d74533750bc99b.jpg"
          alt="Proneta Logo"
          className="h-20 w-auto object-contain rounded-md shadow-lg"
        />

        {/* Experience Details */}
        <div className="text-gray-800 space-y-2">
          <p className="text-lg font-semibold">
            Full Stack Developer – Proneta Tech Pvt. Ltd.
            <span className="text-sm font-normal block">
              (Jan 2024 – Present)
            </span>
          </p>
          <p className="text-sm leading-relaxed">
            Responsible for end-to-end development using React.js, Node.js, and
            MongoDB. Owned features, handled performance optimization,
            integrations (Razorpay, Google Analytics), authentication (JWT), and
            cloud deployment.
          </p>
        </div>
      </div>
      <hr/>
    </section>
  );
};

export default Experience;
