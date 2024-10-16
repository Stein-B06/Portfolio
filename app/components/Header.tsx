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
    <header className="bg-light-primary dark:bg-gradient-to-r from-dark-accent to-dark-primary  animate-background fixed top-0 left-0 right-0  w-full text-dark-primary dark:text-light-primary font-header font-semibold text-lg shadow-md dark:shadow-neon transition-colors duration-500  z-50  ">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        <Link
          href="#main"
          className="cursor-pointer text-light-textSecondary dark:text-dark-textPrimary"
        >
          Lorem
        </Link>
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="#main" className="hover:underline">
            Home
          </Link>
          <Link href="#about" className="hover:underline">
            About
          </Link>
          <Link href="#projects" className="hover:underline">
            Projects
          </Link>
          <Link href="#contact" className="hover:underline">
            Contact
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
          className="hover:underline pb-2"
          onClick={handleMenuToggle}
        >
          Home
        </Link>
        <Link
          href="#about"
          className="hover:underline pb-2"
          onClick={handleMenuToggle}
        >
          About
        </Link>
        <Link
          href="#projects"
          className="hover:underline pb-2"
          onClick={handleMenuToggle}
        >
          Projects
        </Link>
        <Link
          href="#contact"
          className="hover:underline pb-6"
          onClick={handleMenuToggle}
        >
          Contact
        </Link>
        <ThemeSwitcher />
      </div>
    </header>
  );
}
