import { motion } from "motion/react";
import About from "./About";
import Pro1 from "./Pro1";
import Pro2 from "./Pro2";
import Pro3 from "./Pro3";
import Pro from "./Pro";
import Spotify from "./Spotify";
import Pro5 from "./Pro5";
import Pro6 from "./Pro6";
import Pro7 from "./Pro7";
import TechStack from "./TechStack";
import"./Cards.css"

export default function Cards({ activeSection }) {
  if (activeSection === "Projects") {
    return (
      <motion.div className="projects grid grid-cols-4 gap-[10px] justify-center items-center ">
        <Pro1 />
        <Pro2 />
        <Pro3 />
        <Pro />
        <Pro5 />
        <Pro6 />
        <Pro7 />
      </motion.div>
    );
  } else if (activeSection === "About") {
    return (
      <motion.div className="about flex flex-row gap-[10px]">
        <About />
        <div className="about-inner flex flex-row gap-[10px]">
          <TechStack />
          <Spotify />
        </div>
      </motion.div>
    );
  } else {
    return (
// Default view
      <div className="main grid grid-cols-2 gap-[10px] place-items-center max-w-[1300px]">
        <div className="w-full h-60 flex items-center justify-center">
          <About />
        </div>

        <div className="second-grid w-full h-60 gap-[10px] flex items-center justify-center ">
          <TechStack />
          <Pro1 />
        </div>

        <div className="w-full h-60 gap-[10px] flex items-center justify-center">
          <div className="third-grid grid grid-cols-2 gap-[15px]">
            <Pro2 />
            <Pro3 />
            <Pro />
            <Pro5 />
          </div>
        </div>

        <div className="fourth-grid w-full h-60 flex gap-[10px] items-center justify-center">
          <div className="flex flex-col gap-[20px]">
            <Pro6 />
            <Pro7 />
          </div>
          <Spotify />
        </div>
      </div>
    );
  }
}
