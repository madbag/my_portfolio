import Image from "../../../assets/Madhushree.svg";
import DarkMode from "./DarkMode";
import "./Navbar/Navbar.css"

export default function Navbar({ activeSection, setActiveSection }) {
  return (
    <nav className="navbar w-full flex sm:flex-col flex-row  items-center justify-between max-w-[1200px] sm:min-w[200px] mx-auto py-4 px-4 my-[40px] sm:my-[20px]">
      <div
        onClick={() => setActiveSection("Home")}
        className="cursor-pointer mb-4"
      >
        <img src={Image} alt="My name" className="w-[200px]" />
      </div>

      <div className="bg-[var(--middle-nav-bar)] px-[5px] py-[5px] rounded-full flex justify-center items-center">
        <p
          className={`px-[15px] py-[5px] font-medium cursor-pointer rounded-full hover:text-[var(--hover-text-color)]
            ${
              activeSection === "Home"
                ? "bg-[var(--secondary-text-color)] text-[var(--primary-text-color)] px-[5px]"
                : ""
            }
          `}
          onClick={() => {
            setActiveSection("Home");
          }}
        >
          Home
        </p>

        <p
          className={`px-[15px] py-[5px] font-medium cursor-pointer rounded-full hover:text-[var(--hover-text-color)]
            ${
              activeSection === "Projects"
                ? "bg-[var(--secondary-text-color)] text-[var(--primary-text-color)] px-[5px]"
                : ""
            }
          `}
          onClick={() => {
            setActiveSection("Projects");
          }}
        >
          Projects
        </p>

        <p
          className={`px-[15px] py-[5px] font-medium cursor-pointer rounded-full hover:text-[var(--hover-text-color)]
           
          `}
          onClick={() => {
            setActiveSection("Resume");
          }}
        >
          <a
            href="https://drive.google.com/file/d/1_QI04Sw1lz94SBOGLbzVa-1lm5NqeJcY/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline text-[#000000] hover:text-[var(--hover-text-color)]"
          >
            Resume
          </a>
        </p>

        <p
          className={`px-[15px] py-[5px] font-medium cursor-pointer rounded-full hover:text-[var(--hover-text-color)]
            ${
              activeSection === "About"
                ? "bg-[var(--secondary-text-color)] text-[var(--primary-text-color)] px-[5px]"
                : ""
            }
          `}
          onClick={() => {
            setActiveSection("About");
          }}
        >
          About
        </p>

        <p className="mx-[10px] px-[5px] font-medium cursor-pointer hover:text-[var(--hover-text-color)]">
          <a
            href="mailto:boylemadhushree@gmail.com"
            className="no-underline text-[#000000] hover:text-[var(--hover-text-color)]"
          >
            Contact
          </a>
        </p>
      </div>

      <div className="nav-right">
        <DarkMode />
      </div>
    </nav>
  );
}
