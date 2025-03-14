import About from "./About/About";
import Pro1 from "./Pro1/Pro1";
import Pro2 from "./Pro2/Pro2";
import Pro3 from "./Pro3/Pro3";
import Pro from "./Pro4/Pro";
import Spotify from "./Spotify/Spotify";
import Blog from "./Blog/Blog";
import Location from "./Location/Location";
import Pro5 from "./Pro5/Pro5";
import Pro6 from "./Pro6/Pro6";
import Pro7 from "./Pro7/Pro7";
import TechStack from "./TechStack/TechStack";
import "./Cards.css";
import { motion } from "framer-motion";

export default function Cards({ activeSection }) {
  return (
    <div
    className={`cards grid gap-[20px] px-[20px] min-h-full max-w-full ${
        activeSection === "Projects" ? "projects-active" : ""
      } ${activeSection === "About" ? "about-active" : ""}`}
    >
       <div className="left grid gap-[20px]">
        <About />

        {activeSection === "Projects" ? (
           <motion.div layout className="left grid gap-[20px]">
            <Pro1 />
            <Pro2 />
            <Pro3 />
            <Pro />
            <Pro5 />
            <Pro6 />
            <Pro7 />
          </motion.div>
        ) : activeSection === "About" ? (
          <motion.div className="about-container grid gap-[20px]">
            <Spotify />
            <Blog />
            <Location />
            <TechStack />
          </motion.div>
        ) : (
          <>
            <div className="left-top grid grid-cols-2 gap-[20px]">
              <Pro1 />
              <Pro2 />
              <Pro3 />
              <Pro />
            </div>

            <div className="left-bottom flex gap-[20px] items-center justify-center mx-auto">
              <Spotify />
              <div className="hobby flex flex-col gap-[20px]">
                <Blog />
                <Location />
              </div>
            </div>
          </>
        )}
      </div>

      {activeSection !== "Projects" && activeSection !== "About" && (
        <motion.div layout className="right grid grid-cols-2 gap-[20px]">
          <Pro5 />
          <Pro6 />
          <Pro7 />
          <TechStack />
        </motion.div>
      )}
    </div>
  );
}
