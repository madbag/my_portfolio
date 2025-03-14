import "./Navbar.css";
import Image from "../../../assets/Madhushree.svg";
import DarkMode from "./DarkMode/DarkMode";

interface NavbarProps {
  setActiveSection: (section: string) => void;
}

export default function Navbar({ setActiveSection }: NavbarProps) {
  return (
    <nav>
      <div className="nav-left">
        <img src={Image} alt="My name" />
      </div>

      <div className="nav-middle">
        <p onClick={() => setActiveSection("Home")}>Home</p>
        <p onClick={() => setActiveSection("Projects")}>Projects</p>
        <p onClick={() => setActiveSection("Resume")}>Resume</p>
        <p onClick={() => setActiveSection("About")}>About</p>
        <p onClick={() => setActiveSection("Contact")}>Contact</p>
      </div>

      <div className="nav-right">
        <DarkMode />
      </div>
    </nav>
  );
};


