import { useEffect, useRef } from "react";
import { createSwapy } from "swapy";
import About from "./About/About";
import Pro1 from "./Pro1/Pro1";
import Pro2 from "./Pro2/Pro2";
import Pro3 from "./Pro3/Pro3";
import Pro from "./Pro4/Pro";
import Spotify from "./Spotify/Spotify";

import Pro5 from "./Pro5/Pro5";
import Pro6 from "./Pro6/Pro6";
import Pro7 from "./Pro7/Pro7";
import TechStack from "./TechStack/TechStack";
import "./Cards.css";

export default function Cards({ activeSection }) {
  const swapy = useRef(null);
  const container = useRef(null);

  useEffect(() => {
    if (container.current) {
      console.log("Initializing Swapy...");

      // Clean up any previous instance
      if (swapy.current) {
        swapy.current.destroy();
      }

      // Create new instance
      swapy.current = createSwapy(container.current);

      if (!swapy.current) {
        console.error("Swapy did not initialize properly!");
      } else {
        console.log("Swapy initialized:", swapy.current);

        swapy.current.onSwap((event) => {
          console.log("Items swapped:", event);
        });
      }
    }

    return () => {
      if (swapy.current) {
        swapy.current.destroy();
      }
    };
  }, [activeSection]); // Re-initialize when section changes

  if (activeSection === "Projects") {
    return (
      <div ref={container} className="cards projects-active">
        {/* In Projects view, each component gets its own slot */}

        <div data-swapy-slot="about-slot">
          <div data-swapy-item="about-item">
            <About />
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
        {/* In About view */}
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
