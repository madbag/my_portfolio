import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Cards from "./Components/Cards/MainCard/Cards";
import { useState, useEffect } from "react";

function getInitialSection() {
  const saved = localStorage.getItem("activeSection");
  return saved || "Home";
}

export default function App() {
  const [activeSection, setActiveSection] = useState(getInitialSection);

  useEffect(() => {
    localStorage.setItem("activeSection", activeSection);
  }, [activeSection]);

  return (
    <div className="w-full min-h-screen flex flex-col">
      <header>
        <Navbar
          setActiveSection={setActiveSection}
          activeSection={activeSection}
        />
      </header>

      <main className="flex-1">
        <Cards activeSection={activeSection} />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}
