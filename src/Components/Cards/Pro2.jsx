import WeatherAI from "../../../assets/The Weather Channel.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Pro2() {
  return (
    <div className="bg-[var(--secondary-text-color)] text-[var(--primary-text-color)] flex flex-col rounded-[20px] items-start h-[300px] w-[300px] p-[26px]">
      <div className="flex justify-center items-center">
        <img
          src={WeatherAI}
          alt="WeatherAI"
          className="w-[70px] h-[70px] object-cover "
        />
      </div>
      <div className="flex flex-row justify-end flex-grow relative items-start p-[10px] text-left bg-white">
        <div className="mt-auto">
          <h3 className="text-xl font-semibold">AI Weather Forecast</h3>
          <p className="text-[12px] my-[5px] mr-[5px]">
          AI-powered weather updates with Gen Z-style summaries
          </p>
        </div>

        <div className="flex flex-row mt-auto">
          <button className="px-[10px] py-[10px] mx-[5px] rounded-full cursor-pointer hover:bg-[var(--hover-color)] border-none">
            <a
              href="https://github.com/madbag/WeatherForecastApp"
              target="_blank"
              className="text-[#000000]"
            >
              <FontAwesomeIcon icon={faGithub} size="lg" />
            </a>
          </button>
          <button className="px-[10px] py-[10px] mx-[5px]  rounded-full cursor-pointer hover:bg-[var(--hover-color)] border-none">
            <a
              href="https://aiweatherforecast.netlify.app/"
              target="_blank"
              className="no-underline text-[#000000]"
            >
              &#8599;
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}
