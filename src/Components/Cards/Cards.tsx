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

type Section = "Home" | "Projects" | "About" | "Resume" | "Contact";

interface CardsProps {
  activeSection: Section;
}

export default function Cards({ activeSection }: CardsProps) {
  return (
    <motion.div
      className={`cards ${activeSection}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="left">
        <About />
        <div className="left-top">
          <Pro1 className="project-card" />
          <Pro2 className="project-card" />
          <Pro3 className="project-card" />
          <Pro className="project-card" />
        </div>

        <div className="left-bottom">
          <Spotify className="about-card" />
          <div className="hobby">
            <Blog className="about-card" />
            <Location className="about-card" />
          </div>
        </div>
      </div>

      <div className="right">
        <Pro5 className="project-card" />
        <Pro6 className="project-card" />
        <Pro7 className="project-card" />
        <TechStack className="about-card" />
      </div>
    </motion.div>
  );
}
