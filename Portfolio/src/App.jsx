// src/App.js
import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import './App.css'

const App = () => {
  return (
    <div className="scroll-smooth">
      <Navbar />
      <div className="pt-16">
        <section id="home">
          <Home />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="#contact">
          <Contact/>
        </section>
        <section id="#footer">
          <Footer/>
        </section>
      </div>
    </div>
  );
};

export default App;
