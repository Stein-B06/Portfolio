"use client"; // Bruker client-side rendering

import React from "react";
import About from "./components/About";
import Main from "./components/Main";

export default function Page() {
  return (
    <div className="font-body bg-light-primary dark:bg-dark-primary min-h-screen text-light-textPrimary dark:text-dark-textPrimary  transition-colors duration-500 ease-in-out ">
      {/* Main Section */}
      <section id="main" className=" mx-4 ">
        <Main />
      </section>

      {/* About Section */}
      <section id="about" className=" flex justify-center ">
        <About />
      </section>

      {/* Projects Section */}
      <section id="projects" className=" flex  justify-center">
        <h1 className="text-4xl">Projects Section</h1>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="h-screen flex items-center justify-center"
      >
        <h1 className="text-4xl">Contact Section</h1>
      </section>
    </div>
  );
}
