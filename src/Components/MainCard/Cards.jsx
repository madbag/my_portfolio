import About from "../Cards/About/About";
import RandomQuotes from "../Cards/RandomQuotes";
import WeatherAI from "../Cards/WeatherAI";
import UBArtHouse from "../Cards/UBArthouse";
import FTF from "../Cards/FTF";
// import Spotify from "../Cards/Spotify";
import Greenmind from "../Cards/Greenmind";
import Birthday from "../Cards/Birthday";
import Freelance from "../Cards/Freelance";
import TechStack from "../Cards/TechStack";
import "./Cards.css";
import Medium from "../Cards/Medium";
// import Form from "./Form";
import Calendly from "../Cards/Calendly";

export default function Cards({ activeSection }) {
  if (activeSection === "Projects") {
    return (
      <div className="projects grid grid-cols-4 gap-[20px] max-w-[1300px] justify-center items-center ">
        <UBArtHouse />
        <Birthday />
        <WeatherAI />
        <RandomQuotes />
        <Greenmind />
        <FTF />
        <Freelance />
      </div>
    );
  } else if (activeSection === "About") {
    return (
      <div className="about-div">
        <div className="about flex flex-row gap-[20px] max-w-[1300px] align-center justify-center">
          <About />
          <TechStack />
          <div className="flex flex-col gap-[20px]">
            <Calendly />
            <Medium />
          </div>
          {/* <Spotify /> */}
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
          <div className="flex flex-col gap-[15px] ">
            {/* <Spotify /> */}
            <Calendly />
            <Medium />
          </div>
        </div>

        <div className="w-full h-60 flex items-center justify-center">
          <div className="third-grid grid grid-cols-2 gap-[20px]">
            <UBArtHouse />
            <Birthday />
            <Greenmind />
            <FTF />
          </div>
        </div>

        <div className="fourth-grid w-full h-60 flex items-start gap-[20px] justify-center">
          <div className="flex flex-col gap-[20px]">
            <WeatherAI />
            <Freelance />
          </div>
          <RandomQuotes />
        </div>
      </div>
    );
  }
}
