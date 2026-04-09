import { useEffect, useState } from "react";
import { motion } from "motion/react";

export default function DarkMode() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <motion.button
      className="rounded-full border bg-(--primary-text-color) text-(--secondary-text-color) border-gray-400 px-2.5 py-1.25 sm:px-3.75 sm:py-2.5 text-sm"
      onClick={() => setDarkMode(!darkMode)}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
    </motion.button>
  );
}
