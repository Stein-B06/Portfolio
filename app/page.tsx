"use client";
import React from "react";
import About from "./components/About";
import Main from "./components/Main";
import MouseArrowGlow from "./components/mouseArrowGlow";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import HoverReveal from "./components/RevealOnHover";

export default function Page() {
  return (
    <div className=" bg-light-primary dark:bg-dark-primary transition-colors duration-500 ease-in-out ">
      <section id="main" className=" mx-4 ">
        <Main />
      </section>

      <section id="about" className=" mx-10 ">
        <About />
      </section>

      <section id="projects" className=" flex  justify-center mx-10  ">
        <Projects />
      </section>
      <div className="font-reveal hidden md:flex md:justify-center cursor-default">
        <HoverReveal snippet="In Omnia Paratus" />
      </div>
      <section id="contact" className="h-full flex  justify-center">
        <Contact />
      </section>
      <MouseArrowGlow />
    </div>
  );
}
