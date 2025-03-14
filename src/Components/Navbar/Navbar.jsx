import "./Navbar.css";
import Image from "../../../assets/Madhushree.svg";
import DarkMode from "./DarkMode/DarkMode";

// interface NavbarProps {
//   setActiveSection: (section: string) => void;
// }

export default function Navbar({ setActiveSection }) {
  return (
    <nav className="min-w-[1080px] flex justify-between items-center m-[40px]">
      <div>
        <img src={Image} alt="My name" className="w-[200px]" />
      </div>

      <div className="bg-[rgba(0,0,0,0.05)] px-[10px] py-[10px] rounded-full flex justify-center items-center">
        <p className="mx-[10px] px-[5px] font-medium cursor-pointer text-3xl" onClick={() => setActiveSection("Home")}>Home</p>
        <p className="mx-[10px] px-[5px] font-medium cursor-pointer" onClick={() => setActiveSection("Projects")}>Projects</p>
        <p className="mx-[10px] px-[5px] font-medium cursor-pointer" onClick={() => setActiveSection("Resume")}>Resume</p>
        <p className="mx-[10px] px-[5px] font-medium cursor-pointer" onClick={() => setActiveSection("About")}>About</p>
        <p className="mx-[10px] px-[5px] font-medium cursor-pointer" onClick={() => setActiveSection("Contact")}>Contact</p>
      </div>

      <div className="nav-right">
        <DarkMode />
      </div>
    </nav>
  );
};


