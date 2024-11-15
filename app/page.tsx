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
    <div className="page-content bg-light-primary dark:bg-dark-primary transition-colors duration-500 ease-in-out ">
      <div className="parallax-background"></div>
      <section id="main" className=" mx-4 ">
        <Main />
      </section>

      <section id="about" className=" mx-10 ">
        <About />
      </section>

      <section id="projects" className=" flex flex-col  justify-center mx-10  ">
        <Projects />
        <div>
          <div className="font-reveal hidden md:flex md:justify-center cursor-default p-10">
            <HoverReveal snippet="In Omnia Paratus" />
          </div>
          <Contact />
        </div>
      </section>

      <MouseArrowGlow />
    </div>
  );
}
