"use client";
import Link from "next/link";
import { useState } from "react";
import ThemeSwitcher from "./ThemeSwitcher";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-light-primary dark:bg-gradient-to-r from-dark-accent to-dark-primary  animate-background fixed top-0 left-0 right-0  w-full text-light-textPrimary dark:text-dark-textPrimary font-header font-semibold shadow-md dark:shadow-neon z-50  ">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        <Link
          href="#main"
          className="cursor-pointer text-light-textSecondary dark:text-dark-textPrimary"
        >
          Lorem
        </Link>
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="#main" className="relative underline-transition">
            HJEM
          </Link>
          <Link href="#about" className="relative underline-transition">
            OM MEG
          </Link>
          <Link href="#projects" className="relative underline-transition">
            PROSJEKTER
          </Link>
          <Link href="#contact" className="relative underline-transition">
            KONTAKT
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
          className="relative underline-transition mb-4"
          onClick={handleMenuToggle}
        >
          HJEM
        </Link>
        <Link
          href="#about"
          className="relative underline-transition mb-4 "
          onClick={handleMenuToggle}
        >
          OM MEG
        </Link>
        <Link
          href="#projects"
          className="relative underline-transition mb-4"
          onClick={handleMenuToggle}
        >
          PROSJEKTER
        </Link>
        <Link
          href="#contact"
          className="relative underline-transition mb-8"
          onClick={handleMenuToggle}
        >
          KONTAKT
        </Link>
        <ThemeSwitcher />
      </div>
    </header>
  );
}
