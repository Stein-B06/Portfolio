"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import ThemeSwitcher from "./ThemeSwitcher";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const options = {
      threshold: 0.4, // aktiverer observer når 40% av seksjonene er synlig.
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    sections.forEach((section) => {
      observer.observe(section);
    });

    // Fjern observer når komponenten unmountes
    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-light-accent dark:bg-dark-primary  fixed top-0 left-0 right-0  w-full h-16 text-dark-primary dark:text-light-primary font-header font-semibold z-50">
      <div className="max-w-7xl mx-auto flex justify-end items-center p-4">
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="#main" className="hover:text-dark-accent">
            <span
              className={`  ${
                activeSection === "main"
                  ? "text-light-primary dark:text-dark-accent   "
                  : ""
              } `}
            >
              HJEM
            </span>
          </Link>
          <Link href="#about" className="hover:text-dark-accent">
            <span
              className={`  ${
                activeSection === "about"
                  ? "text-light-primary dark:text-dark-accent  "
                  : ""
              } `}
            >
              OM MEG
            </span>
          </Link>
          <Link href="#projects" className="hover:text-dark-accent">
            <span
              className={`  ${
                activeSection === "projects"
                  ? "text-light-primary dark:text-dark-accent   "
                  : ""
              } `}
            >
              PROSJEKTER
            </span>
          </Link>

          <div>
            <ThemeSwitcher />
          </div>
        </nav>

        <div className="md:hidden flex items-center">
          <button
            className={`hamburger ${menuOpen ? "open" : ""}`}
            onClick={handleMenuToggle}
          >
            <div className="hamburger-line"></div>
            <div className="hamburger-line"></div>
            <div className="hamburger-line"></div>
          </button>
        </div>
      </div>

      {/* Dropdown-meny for mobil */}
      <div
        className={`md:hidden flex flex-col items-center overflow-hidden mb-2 pb-4 transition-all duration-500 ease-in-out transform bg-light-accent dark:bg-dark-primary  ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <Link href="#main" className=" mb-4" onClick={handleMenuToggle}>
          <span
            className={`  ${
              activeSection === "main"
                ? "text-light-primary dark:text-dark-accent "
                : ""
            } `}
          >
            HJEM
          </span>
        </Link>
        <Link href="#about" className=" mb-4 " onClick={handleMenuToggle}>
          <span
            className={`  ${
              activeSection === "about"
                ? "text-light-primary dark:text-dark-accent  "
                : ""
            } `}
          >
            OM MEG
          </span>
        </Link>
        <Link href="#projects" className=" mb-4" onClick={handleMenuToggle}>
          <span
            className={`  ${
              activeSection === "projects"
                ? "text-light-primary dark:text-dark-accent "
                : ""
            } `}
          >
            PROSJEKTER
          </span>
        </Link>

        <ThemeSwitcher />
      </div>
    </header>
  );
}
