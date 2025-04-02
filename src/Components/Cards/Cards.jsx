import { useEffect, useRef } from "react";
import { createSwapy } from "swapy";
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

export default function Cards({ activeSection }) {
  const swapy = useRef(null);
  const container = useRef(null);

  useEffect(() => {
    // If container element is loaded
    if (container.current) {
      swapy.current = createSwapy(container.current);

      // Your event listeners
      swapy.current.onSwap((event) => {
        console.log("swap", event);
      });
    }

    return () => {
      // Destroy the swapy instance on component destroy
      swapy.current?.destroy();
    };
  }, []);

  if (activeSection === "Projects") {
    return (
      <div ref={container} className="cards projects-active">
        <div data-swapy-slot="pro1-slot">
          <div data-swapy-item="pro1-item">
            <Pro1 />
          </div>
        </div>

        <div data-swapy-slot="pro2-slot">
          <div data-swapy-item="pro2-item">
            <Pro2 />
          </div>
        </div>

        <div data-swapy-slot="pro3-slot">
          <div data-swapy-item="pro3-item">
            <Pro3 />
          </div>
        </div>

        <div data-swapy-slot="pro4-slot">
          <div data-swapy-item="pro4-item">
            <Pro />
          </div>
        </div>

        <div data-swapy-slot="pro5-slot">
          <div data-swapy-item="pro5-item">
            <Pro5 />
          </div>
        </div>

        <div data-swapy-slot="pro6-slot">
          <div data-swapy-item="pro6-item">
            <Pro6 />
          </div>
        </div>

        <div data-swapy-slot="pro7-slot">
          <div data-swapy-item="pro7-item">
            <Pro7 />
          </div>
        </div>
      </div>
    );
  } else if (activeSection === "About") {
    return (
      <div ref={container} className="cards about-active">
        <div data-swapy-slot="about-slot">
          <div data-swapy-item="about-item">
            <About />
          </div>
        </div>

        <div data-swapy-slot="spotify-slot">
          <div data-swapy-item="spotify-item">
            <Spotify />
          </div>
        </div>

        <div data-swapy-slot="tech-stack-slot">
          <div data-swapy-item="tech-stack-item">
            <TechStack />
          </div>
        </div>
      </div>
    );
  } else {
    // Default view
    return (
      <div ref={container} className="cards">
        <div data-swapy-slot="about-slot">
          <div data-swapy-item="about-item">
            <About />
          </div>
        </div>
        <div data-swapy-slot="tech-stack-slot">
          <div data-swapy-item="tech-stack-item">
            <TechStack />
          </div>
        </div>

        <div data-swapy-slot="pro1-slot">
          <div data-swapy-item="pro1-item">
            <Pro1 />
          </div>
        </div>

        <div data-swapy-slot="pro2-slot">
          <div data-swapy-item="pro2-item">
            <Pro2 />
          </div>
        </div>

        <div data-swapy-slot="pro3-slot">
          <div data-swapy-item="pro3-item">
            <Pro3 />
          </div>
        </div>

        <div data-swapy-slot="pro4-slot">
          <div data-swapy-item="pro4-item">
            <Pro />
          </div>
        </div>

        <div data-swapy-slot="spotify-slot">
          <div data-swapy-item="spotify-item">
            <Spotify />
          </div>
        </div>

        <div data-swapy-slot="pro5-slot">
          <div data-swapy-item="pro5-item">
            <Pro5 />
          </div>
        </div>

        <div data-swapy-slot="pro6-slot">
          <div data-swapy-item="pro6-item">
            <Pro6 />
          </div>
        </div>

        <div data-swapy-slot="pro7-slot">
          <div data-swapy-item="pro7-item">
            <Pro7 />
          </div>
        </div>
      </div>
    );
  }
}
