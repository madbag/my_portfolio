import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

function getInitialIsDark() {
  const stored = localStorage.getItem("theme");
  if (stored) return stored === "dark";
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

export default function DarkModeToggle() {
  const [isDark, setIsDark] = useState(getInitialIsDark);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  return (
    <button
      type="button"
      onClick={() => setIsDark((prev) => !prev)}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="flex items-center text-black/30 hover:text-black dark:text-white/30 dark:hover:text-white transition-colors duration-200"
    >
      {isDark ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );
}
