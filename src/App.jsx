import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Cards from "./Components/MainCard/Cards";
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
    <div className="w-full min-h-screen">
      <div>
        <Navbar
          setActiveSection={setActiveSection}
          activeSection={activeSection}
        />
      </div>
      <div>
        <Cards activeSection={activeSection} />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
