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
    <header className="bg-light-primary dark:bg-gradient-to-r from-dark-accent to-dark-primary  animate-background fixed top-0 left-0 right-0  w-full text-light-textPrimary dark:text-dark-textPrimary font-header font-semibold shadow-md dark:shadow-neon z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        <Link
          href="#main"
          className="cursor-pointer text-light-textSecondary dark:text-dark-textPrimary"
        >
          Lorem
        </Link>
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="#main" className="hover:text-dark-ekstra">
            <span
              className={`  ${
                activeSection === "main" ? "text-dark-ekstra  " : ""
              } `}
            >
              HJEM
            </span>
          </Link>
          <Link href="#about" className="hover:text-dark-ekstra">
            <span
              className={`  ${
                activeSection === "about" ? "text-dark-ekstra" : ""
              } `}
            >
              OM MEG
            </span>
          </Link>
          <Link href="#projects" className="hover:text-dark-ekstra">
            <span
              className={`  ${
                activeSection === "projects" ? "text-dark-ekstra  " : ""
              } `}
            >
              PROSJEKTER
            </span>
          </Link>
          <Link href="#contact" className="hover:text-dark-ekstra">
            <span
              className={`  ${
                activeSection === "contact" ? "text-dark-ekstra " : ""
              } `}
            >
              KONTAKT
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
        className={`md:hidden flex flex-col items-center overflow-hidden mb-2 pb-2 transition-all duration-500 ease-in-out transform ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <Link
          href="#main"
          className="hover:text-dark-ekstra mb-4"
          onClick={handleMenuToggle}
        >
          <span
            className={`  ${
              activeSection === "main" ? "text-dark-ekstra  " : ""
            } `}
          >
            HJEM
          </span>
        </Link>
        <Link
          href="#about"
          className="hover:text-dark-ekstra mb-4 "
          onClick={handleMenuToggle}
        >
          <span
            className={`  ${
              activeSection === "about" ? "text-dark-ekstra  " : ""
            } `}
          >
            OM MEG
          </span>
        </Link>
        <Link
          href="#projects"
          className="hover:text-dark-ekstra mb-4"
          onClick={handleMenuToggle}
        >
          <span
            className={`  ${
              activeSection === "projects" ? "text-dark-ekstra  " : ""
            } `}
          >
            PROSJEKTER
          </span>
        </Link>
        <Link
          href="#contact"
          className="hover:text-dark-ekstra mb-8"
          onClick={handleMenuToggle}
        >
          <span
            className={`  ${
              activeSection === "contact" ? "text-dark-ekstra  " : ""
            } `}
          >
            KONTAKT
          </span>
        </Link>
        <ThemeSwitcher />
      </div>
    </header>
  );
}
