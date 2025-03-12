import "./App.css";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Cards from "./Components/Cards/Cards";
import React, { useState } from "react";

type Section = "Home" | "About" | "Projects" | "Resume" | "Contact";

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<Section>("Home");

  return (
    <div className="App">
      <Navbar setActiveSection={setActiveSection} />
      <Cards activeSection={activeSection} />
      <Footer />
    </div>
  );
};

export default App;
