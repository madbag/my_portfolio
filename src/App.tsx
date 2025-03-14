import "./App.css";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Cards from "./Components/Cards/Cards";
import { useState, useEffect } from "react";

type Section = "Home" | "About" | "Projects" | "Resume" | "Contact";

export default function App() {
  const [activeSection, setActiveSection] = useState<Section>(() => {
    const saved = localStorage.getItem("activeSection");
    return (saved as Section) || "Home";
  });

  useEffect(() => {
    localStorage.setItem("activeSection", activeSection);
  }, [activeSection]);

  return (
    <div className="App">
      <Navbar setActiveSection={setActiveSection} />
      <Cards activeSection={activeSection} />
      <Footer />
    </div>
  );
}


