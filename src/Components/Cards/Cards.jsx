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

import "./Cards.css";
import Medium from "./Medium";
import { div } from "framer-motion/client";

export default function Cards({ activeSection }) {
  if (activeSection === "Projects") {
    return (
      <div className="projects grid grid-cols-4 gap-[20px] max-w-[1300px] justify-center items-center ">
        <Pro1 />
        <Pro2 />
        <Pro3 />
        <Pro />
        <Pro5 />
        <Pro6 />
        <Pro7 />
      </div>
    );
  } else if (activeSection === "About") {
    return (
      <div className="about-div">
        <div className="about flex flex-row gap-[20px] max-w-[1300px]">
          <About />
          <div className="flex flex-col gap-[20px]">
            <TechStack />
            <Medium />
          </div>
          <Spotify />
        </div>
      </div>
    );
  } else {
    return (
      // Default view
      <div className="main grid grid-cols-2 place-items-center max-w-[1300px] gap-[20px]">
        <div className="w-full h-60 flex items-center justify-center">
          <About />
        </div>

        <div className="second-grid w-full h-60 flex items-center justify-center gap-[20px] ">
          <TechStack />
          <Pro1 />
        </div>

        <div className="w-full h-60 flex items-center justify-center">
          <div className="third-grid grid grid-cols-2 gap-[20px]">
            <Pro2 />
            <Pro3 />
            <Pro />
            <Pro5 />
          </div>
        </div>

        <div className="fourth-grid w-full h-60 flex items-start gap-[20px] justify-center">
          <div className="flex flex-col gap-[20px]">
            <Pro6 />
            <Pro7 />
          </div>
          <div className="flex flex-col gap-[15px] ">
            <Spotify />
            <Medium />
          </div>
        </div>
      </div>
    );
  }
}
