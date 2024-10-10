"use client"; // Bruker client-side rendering

import React from "react";

export default function Page() {
  return (
    <div className="bg-light-primary dark:bg-dark-primary min-h-screen text-light-textPrimary dark:text-dark-textPrimary  transition-colors duration-1000 ">
      {/* Main Section */}
      <section
        id="main"
        className="h-screen flex flex-col items-center justify-center "
      >
        <h1 className="text-5xl font-bold">Lorem, ipsum dolor.</h1>
        <p className="mt-4 text-lg pb-10">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum
          sapiente, tempora cupiditate odit molestiae neque?
        </p>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="h-screen flex items-center justify-center "
      >
        <h1 className="text-4xl font-header">About Section</h1>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="h-screen flex items-center justify-center"
      >
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
