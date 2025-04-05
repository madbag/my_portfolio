// import React from 'react'
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import "./DarkMode.css";

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
      className="dark-mode rounded-full border bg-[var(--primary-text-color)] text-[var(--secondary-text-color)] border-gray-400 px-[15px] py-[10px]  text-[16px]"
      onClick={() => setDarkMode(!darkMode)}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
    </motion.button>
  );
}
