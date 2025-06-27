import React, { useEffect, useState } from "react";
import LaptopImage from "../Images/hero_setup.webp";
import "./Welcome.css"; // Assuming you have a CSS file for additional styles
function Welcome() {
  
  return (
    <section className=" relative bg-[#0b001a] text-white py-20 px-4 md:px-16 overflow-hidden bottom-wave-path">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between mb-20">
        {/* Text Section */}
        <div className="flex-1 text-center md:text-left ">
          <div className="text-[72px] md:text-[96px] font-montserrat leading-tight mb-3 animate-decayBounce">
            Welcome<span className="text-white">...</span>
          </div>
          <div className="text-sm md:text-md max-w-5xl font-montserrat text-gray-200">
            My name is <span className="font-bold">Jaydip Nemade</span>, a
            full-stack web developer based in{" "}
            <span className="font-bold">Pune, Maharashtra</span>. I’ve spent the
            past two years building and scaling web applications using{" "}
            <span className="font-bold">React.js, Node.js, JavaScript</span>,
            and <span className="font-bold">MongoDB</span>. I focus on crafting
            clean, efficient systems that solve real-world problems and ensure
            seamless user experiences. I'm passionate about writing maintainable
            code and thrive in fast-paced, startup-driven environments.
          </div>
        </div>

        {/* Image Section */}
        <div className="flex-1 flex justify-center md:justify-end">
          <img
            src={LaptopImage}
            alt="Laptop with code"
            className="w-80 md:w-[400px] rounded-xl shadow-xl"
          />
        </div>
        {/* <div className=" absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
          <svg
            className="relative block w-full h-[60px] md:h-[100px] "
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            <path
              fill="#eff6ff"
              d="M0,224L60,229.3C120,235,240,245,360,240C480,235,600,213,720,202.7C840,192,960,192,1080,213.3C1200,235,1320,277,1380,298.7L1440,320L1440,320L0,320Z"
            ></path>
          </svg>
        </div> */}
      </div>
    </section>
  );
}

export default Welcome;
