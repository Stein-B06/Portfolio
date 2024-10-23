"use client";
import React from "react";
import About from "./components/About";
import Main from "./components/Main";
import MouseArrowGlow from "./components/mouseArrowGlow";

export default function Page() {
  return (
    <div className="font-body bg-light-primary dark:bg-dark-primary  text-light-textPrimary dark:text-dark-textPrimary  transition-colors duration-500 ease-in-out ">
      {/* Main Section */}
      <section id="main" className=" mx-4 ">
        <Main />
      </section>

      {/* About Section */}
      <section id="about" className=" mx-4 ">
        <About />
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="py-20 min-h-screen flex justify-center items-center "
      >
        <h1 className="text-4xl font-header">PROSJEKT SEKSJON</h1>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="h-screen flex items-center justify-center"
      >
        <h1 className="text-4xl font-header">KONTAKT SEKSJON</h1>
      </section>
      <MouseArrowGlow />
    </div>
  );
}
