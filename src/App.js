import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Welcome from "./components/Welcome";

const App = () => {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-purple-100 min-h-screen text-gray-800 scroll-smooth">
      <Navbar />
      <main className="">
        <Welcome />

        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
        {/* <About /> */}
        <Footer />
      </main>
    </div>
  );
};

export default App;
