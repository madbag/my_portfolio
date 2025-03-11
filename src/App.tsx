import "./App.css";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import About from "./Components/Cards/About/About";
import Pro1 from "./Components/Cards/Pro1/Pro1";
import Pro2 from "./Components/Cards/Pro2/Pro2";
import Pro3 from "./Components/Cards/Pro3/Pro3";
import Pro from "./Components/Cards/Pro4/Pro";
import Spotify from "./Components/Cards/Spotify/Spotify";
import Blog from "./Components/Cards/Blog/Blog";
import Location from "./Components/Cards/Location/Location";
import TechStack from "./Components/Cards/TechStack/TechStack";
import Pro5 from "./Components/Cards/Pro5/Pro5";
import Pro6 from "./Components/Cards/Pro6/Pro6";
import Pro7 from "./Components/Cards/Pro7/Pro7";

export default function App() {
  return (
    <div className="App">
      <Navbar />
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
            <div className="hobby">
              <Blog />
              <Location />
            </div>
          </div>
        </div>

        <div className="right">
          <Pro5 />
          <Pro6 />
          <Pro7 />
          <TechStack />
        </div>
      </div>
      <Footer />
    </div>
  );
}
