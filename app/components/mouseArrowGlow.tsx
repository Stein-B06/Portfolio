import React, { useEffect, useState } from "react";

const MouseArrowGlow: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
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
      className="pointer-events-none fixed top-0 left-0 w-96 h-96 rounded-full bg-violet-500 opacity-45 mix-blend-overlay
                       transition-transform duration-75 ease-linear blur-3xl"
      style={{
        transform: `translate(${mousePosition.x - 192}px, ${
          mousePosition.y - 192
        }px)`,
      }}
    />
  );
};

export default MouseArrowGlow;
