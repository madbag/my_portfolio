// import React from 'react'
import { useEffect, useState } from "react";

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
    <button className="rounded-full border border-gray-400 px-[15px] py-[5px] "
    onClick={() => setDarkMode(!darkMode)} >
      
      {darkMode ? "☀️ Light" : "🌙 Dark"}
    </button>
  );
}
