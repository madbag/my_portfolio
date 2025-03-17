import WeatherAI from "../../../../assets/The Weather Channel.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Pro2() {
  return (
    <div className="bg-[#ffffff] flex flex-col rounded-[20px] items-start h-[300px] w-[300px]">
      <div className="flex justify-center items-center">
        <img
          src={WeatherAI}
          alt="WeatherAI"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-row justify-end flex-grow relative items-start p-[10px] text-left bg-white">
        <div className="mt-auto">
          <h3 className="text-xl font-semibold">AI Weather Forecast</h3>
          <p className="text-sm my-[5px]">
            AI weather forecast giving gen z summary
          </p>
        </div>

        <div className="flex flex-row mt-auto">
          <button className="px-[10px] py-[10px] mx-[5px] text-[#000000] rounded-full cursor-pointer hover:bg-[var(--hover-color)]">
            <FontAwesomeIcon icon={faGithub} size="lg" />
          </button>
          <button className="px-[10px] py-[10px] mx-[5px] text-[#000000] rounded-full cursor-pointer hover:bg-[var(--hover-color)]">
            &#8599;
          </button>
        </div>
      </div>
    </div>
  );
}
