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
      className="pointer-events-none fixed top-0 left-0 w-1/2 h-full rounded-full bg-purple-700 opacity-5 mix-blend-normal
                       transition-transform duration-150 ease-linear blur-3xl"
      style={{
        transform: `translate(${mousePosition.x - 500}px, ${
          mousePosition.y - 500
        }px)`,
      }}
    />
  );
};

export default MouseArrowGlow;
