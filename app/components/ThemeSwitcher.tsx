import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className=" bg-dark-primary dark:bg-light-primary p-1 w-8 rounded-full   "
    >
      {theme === "dark" ? <span>🌞</span> : <span>🌙</span>}
    </button>
  );
};

export default ThemeSwitcher;
