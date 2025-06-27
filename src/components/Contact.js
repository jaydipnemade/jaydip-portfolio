import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="mt-12 text-center">
      <h2 className="text-2xl font-semibold mb-4 text-blue-700">Contact</h2>
      <p>
        Email:{" "}
        <a href="mailto:jaydipnemade@gmail.com" className="text-blue-600">
          jaydipnemade@gmail.com
        </a>
      </p>
      <p>
        Phone:{" "}
        <a href="tel:+917020106704" className="text-blue-600">
          +91 7020106704
        </a>
      </p>
      <p>
        LinkedIn:{" "}
        <a
          href="https://linkedin.com/in/jaydipnemade16"
          className="text-blue-600"
        >
          linkedin.com/in/jaydipnemade16
        </a>
      </p>
      <p>
        GitHub:{" "}
        <a href="https://github.com/jaydipnemade" className="text-blue-600">
          github.com/jaydipnemade
        </a>
      </p>
    </section>
  );
};

export default Contact;
