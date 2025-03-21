import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Cards from "./Components/Cards/Cards";
import { useState, useEffect } from "react";

export default function App() {
  const [activeSection, setActiveSection] = useState(() => {
    const saved = localStorage.getItem("activeSection");
    return saved || "Home";
  });

  useEffect(() => {
    localStorage.setItem("activeSection", activeSection);
  }, [activeSection]);

  return (
    <div className="w-full min-h-screen flex flex-col bg-[var(--background-color)]">
      <Navbar setActiveSection={setActiveSection} activeSection={activeSection} />
      <Cards activeSection={activeSection} />
      <Footer />
    </div>
  );
}
