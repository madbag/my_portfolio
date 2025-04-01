import Image from "../../../assets/Madhushree.svg";
import DarkMode from "./DarkMode";
import { motion } from "framer-motion";

export default function Navbar({ activeSection, setActiveSection }) {
  return (
    <nav className="min-w-[700px] flex justify-center items-center my-[40px] ">
      <div onClick={() => setActiveSection("Home")} className="cursor-pointer">
        <img src={Image} alt="My name" className="w-[200px]" />
      </div>

      <div className="bg-[var(--middle-nav-bar)] px-[5px] py-[5px] rounded-full flex justify-center items-center mx-[270px]">
        <motion.p
          className={`px-[15px] py-[5px] font-medium cursor-pointer rounded-full hover:text-[#808080]
            ${
              activeSection === "Home"
                ? "bg-[#ffffff] px-[5px]"
                : "hover:bg-gray-300"
            }
          `}
          onClick={() => {
            setActiveSection("Home");
          }}
        >
          Home
        </motion.p>

        <motion.p
          className={`px-[15px] py-[5px] font-medium cursor-pointer rounded-full hover:text-[#808080]
            ${
              activeSection === "Projects"
                ? "bg-[#ffffff] px-[5px]"
                : "hover:bg-gray-300"
            }
          `}
          onClick={() => {
            setActiveSection("Projects");
          }}
        >
          Projects
        </motion.p>

        <motion.p
          className={`px-[15px] py-[5px] font-medium cursor-pointer rounded-full hover:text-[#808080]
           
          `}
          onClick={() => {
            setActiveSection("Resume");
          }}
        >
          <a
            href="https://drive.google.com/file/d/1_QI04Sw1lz94SBOGLbzVa-1lm5NqeJcY/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline text-[#000000] hover:text-[#808080]"
          >
            Resume
          </a>
        </motion.p>

        <motion.p
          className={`px-[15px] py-[5px] font-medium cursor-pointer rounded-full hover:text-[#808080]
            ${
              activeSection === "About"
                ? "bg-[#ffffff] px-[5px]"
                : "hover:bg-gray-300"
            }
          `}
          onClick={() => {
            setActiveSection("About");
          }}
        >
          About
        </motion.p>

        <motion.p className="mx-[10px] px-[5px] font-medium cursor-pointer hover:text-[#e2dfd2]">
          <a
            href="mailto:boylemadhushree@gmail.com"
            className="no-underline text-[#000000] hover:text-[#808080]"
          >
            Contact
          </a>
        </motion.p>
      </div>

      <div className="nav-right">
        <DarkMode />
      </div>
    </nav>
  );
}
