"use client";
import React from "react";
import About from "./components/About";
import Main from "./components/Main";
import MouseArrowGlow from "./components/mouseArrowGlow";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function Page() {
  return (
    <div className=" bg-light-primary dark:bg-dark-primary  text-light-textPrimary dark:text-dark-textPrimary  transition-colors duration-500 ease-in-out ">
      <section id="main" className=" mx-4 ">
        <Main />
      </section>

      <section id="about" className=" mx-10 ">
        <About />
      </section>

      <section id="projects" className=" flex  justify-center mx-6 ">
        <Projects />
      </section>

      <section id="contact" className="h-full flex  justify-center">
        <Contact />
      </section>
      <MouseArrowGlow />
    </div>
  );
}
