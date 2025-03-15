import "./Navbar.css";
import Image from "../../../assets/Madhushree.svg";
import DarkMode from "./DarkMode/DarkMode";

export default function Navbar({ setActiveSection }) {
  return (
    <nav className="min-w-[700px] flex justify-center items-center my-[40px]">
      <div>
        <img src={Image} alt="My name" className="w-[200px]" />
      </div>

      <div className="bg-[rgba(0,0,0,0.05)] px-[10px] py-[10px] rounded-full flex justify-center items-center mx-[270px]">
        <p
          className="mx-[10px] px-[5px] font-medium cursor-pointer text-3xl"
          onClick={() => setActiveSection("Home")}
        >
          Home
        </p>
        <p
          className="mx-[10px] px-[5px] font-medium cursor-pointer"
          onClick={() => setActiveSection("Projects")}
        >
          Projects
        </p>
        <p className="mx-[10px] px-[5px] font-medium cursor-pointer">
          <a
            href="https://drive.google.com/file/d/1_QI04Sw1lz94SBOGLbzVa-1lm5NqeJcY/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline"
          >
            Resume
          </a>
        </p>
        <p
          className="mx-[10px] px-[5px] font-medium cursor-pointer"
          onClick={() => setActiveSection("About")}
        >
          About
        </p>
        <p
          className="mx-[10px] px-[5px] font-medium cursor-pointer"
          onClick={() => setActiveSection("Contact")}
        >
          Contact
        </p>
      </div>

      <div className="nav-right">
        <DarkMode />
      </div>
    </nav>
  );
}
