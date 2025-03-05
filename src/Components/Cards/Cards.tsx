import About from "./About/About"
import Spotify from "./Spotify/Spotify"
import "./Cards.css"
import Location from "./Location/Location"
import Pro1 from "./Pro1/Pro1"
import Pro2 from "./Pro2/Pro2"
import Pro3 from "./Pro3/Pro3"
import Pro from "./Pro4/Pro"
import Blog from "./Blog/Blog"
import TechStack from "./TechStack/TechStack"
import Pro5 from "./Pro5/Pro5"

function Cards() {
  return (
    <div className="cards">
        <About />
        <Spotify/>
        <Location/>
        <Pro1/>
        <Pro2/>
        <Pro3/>
        <Pro/>
        <Pro5/>
        <Blog/>
        <TechStack/>
    </div>
  )
}

export default Cards