import React, { useEffect, useState } from "react";

const MouseArrowGlow: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: -0, y: -0 });
  const [isDarkMode, setIsDarkMode] = useState(false);

  // funksjon for å oppdatere museposisjon
  const handleMouseMove = (e: MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  // funksjon for å sjekke om darkmode er aktivert
  const checkDarkMode = () => {
    const darkModeEnabled = document.documentElement.classList.contains("dark");
    setIsDarkMode(darkModeEnabled);
  };

  useEffect(() => {
    //  musebevegelse eventlistener
    window.addEventListener("mousemove", handleMouseMove);

    checkDarkMode();

    //overvåker endringer til document class list darkmode.
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    // Rydder opp eventlistener og observer ved unmount.
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      observer.disconnect();
    };
  }, []);

  if (!isDarkMode) return null;

  return (
    <div
      className="hidden lg:block pointer-events-none fixed top-0 left-0 w-64 h-64 rounded-full bg-dark-accent/90 opacity-10 mix-blend-normal
                       transition-transform duration-75  blur-3xl"
      style={{
        transform: `translate(${mousePosition.x - 125}px, ${
          mousePosition.y - 125
        }px)`,
      }}
    />
  );
};

export default MouseArrowGlow;
