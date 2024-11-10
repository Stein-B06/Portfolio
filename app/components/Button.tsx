import React from "react";

interface NeonButtonProps {
  text: string;
  onClick?: () => void;
  color?: string; // Farge for neon glow
  disabled?: boolean;
}

const NeonButton: React.FC<NeonButtonProps> = ({
  text,
  onClick,
  color = "#facc15", // Default neon farge
  disabled = false,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={` font-semibold text-white transition-all duration-300 ease-in-out rounded-full bg-gradient-to-r from-dark-primary/20 to-dark-accent/40  border border-white/20 shadow-neon ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      }`}
      style={{
        boxShadow: `0 1px 10px ${color}, 0 0 10px ${color}`,
        minWidth: "6rem", //
      }}
    >
      {/* Button Tekst */}
      <span className="block text-lg md:text-xl lg:text-2xl px-4 sm:px-6 md:px-8 py-2 sm:py-3 lg:py-4">
        {text}
      </span>
    </button>
  );
};

export default NeonButton;
