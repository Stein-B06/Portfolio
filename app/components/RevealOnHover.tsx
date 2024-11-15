import React, { useState, useEffect, useRef } from "react";

// Definer props-typen for komponenten med TypeScript
type HoverRevealProps = {
  snippet: string; // Denne prop-en representerer tekst/kode-snippet som skal vises
};

const HoverReveal: React.FC<HoverRevealProps> = ({ snippet }) => {
  // State for å lagre musens posisjon
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Referanse til snippet-div-en, slik at vi kan få dens posisjon i DOM-en
  const snippetRef = useRef<HTMLDivElement>(null);

  // State for å kontrollere gjennomsiktigheten til snippet basert på avstand til musen
  const [opacity, setOpacity] = useState(0);

  // Effekt for å oppdatere musens posisjon når musen beveger seg
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      // Oppdaterer musens posisjon med de nåværende x- og y-koordinatene til musen
      setMousePos({ x: event.clientX, y: event.clientY });
    };

    // Lytter til "mousemove"-hendelser og oppdaterer mousePos tilsvarende
    window.addEventListener("mousemove", handleMouseMove);

    // Fjerner event listener når komponenten fjernes for å unngå minnelekkasje
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Effekt for å oppdatere gjennomsiktigheten basert på avstand fra musen til sentrum av snippet
  useEffect(() => {
    if (snippetRef.current) {
      // Henter bounding box til snippet-elementet
      const snippetBounds = snippetRef.current.getBoundingClientRect();

      // Beregner sentrum av snippet-elementet
      const snippetCenterX = snippetBounds.left + snippetBounds.width / 2;
      const snippetCenterY = snippetBounds.top + snippetBounds.height / 2;

      // Beregner avstanden mellom musens posisjon og snippet sitt sentrum
      const distance = Math.sqrt(
        Math.pow(mousePos.x - snippetCenterX, 2) +
          Math.pow(mousePos.y - snippetCenterY, 2)
      );

      // Definerer en maksimal avstandsgrense for når effekten begynner å avta
      const maxDistance = 250;
      // Beregner en avstandsfaktor for å kontrollere gjennomsiktigheten (1 når nærme, 0 når langt unna)
      const distanceFactor = Math.max(0, maxDistance - distance) / maxDistance;

      // Oppdaterer gjennomsiktighet basert på den beregnede avstandsfaktoren
      setOpacity(distanceFactor);
    }
  }, [mousePos]);

  return (
    <div
      ref={snippetRef} // Legger til ref for å få posisjonsdata
      style={{
        opacity, // Kontrollerer elementets gjennomsiktighet dynamisk basert på musens nærhet
        filter: `brightness(${opacity * 1.5 + 0.5})`, // Legger til lysstyrke for en glød-effekt
        transition: "opacity 0.2s ease, filter 0.2s ease", // Jevn overgang for gjennomsiktighet og lysstyrke
      }}
      className="hidden dark:flex items-center justify-center text-light-primary text-sm "
    >
      {/* Legger betinget til glow-text klasse hvis gjennomsiktigheten er høy */}
      <code
        className={`font-reveal transition-all duration-300 ${
          opacity > 0.6 ? "glow-text" : ""
        }`}
      >
        {snippet}
      </code>
    </div>
  );
};

export default HoverReveal;
