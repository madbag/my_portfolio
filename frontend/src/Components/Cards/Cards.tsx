import About from "./About/About";
import Spotify from "./Spotify/Spotify";
import "./Cards.css";
import Location from "./Location/Location";
import Pro1 from "./Pro1/Pro1";
import Pro2 from "./Pro2/Pro2";
import Pro3 from "./Pro3/Pro3";
import Pro from "./Pro4/Pro";
import Blog from "./Blog/Blog";
import TechStack from "./TechStack/TechStack";
import Pro5 from "./Pro5/Pro5";
import Pro6 from "./Pro6/Pro6";
import Pro7 from "./Pro7/Pro7";

function Cards() {
  return (
    <div className="cards">
      <div className="left">
        <About />

        <div className="left-top">
          <Pro1 />
          <Pro2 />
          <Pro3 />
          <Pro />
        </div>

        <div className="left-bottom">
          <Spotify />
          <Blog />
          <Location />
        </div>
      </div>

      <div className="right">
        <Pro5 />
        <Pro6 />
        <Pro7 />
        <TechStack />
      </div>
    </div>
  );
}

export default Cards;
