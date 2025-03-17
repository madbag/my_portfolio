import WeatherAI from "../../../../assets/Weather AI.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Pro2() {
  return (
    <div className="bg-[#ffffff] w-[300px] h-[400px] flex flex-col rounded-[20px] items-center overflow-hidden">
      <div className="flex-3 flex justify-center items-center">
        <img
          src={WeatherAI}
          alt="WeatherAI"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 flex flex-col justify-center items-center p-[10px] text-center bg-white">
        <h3 className="text-xl font-semibold">AI Weather Forecast</h3>
        <p className="text-sm my-[5px]">
          AI weather forecast giving gen z summary
        </p>
        <div className="flex flex-row">
          <button className="px-[16px] py-[5px]  text-[#000000] rounded-[50px] cursor-pointer hover:bg-[var(--hover-color)]">
          <FontAwesomeIcon icon={faGithub} size="lg" />
          </button>
          <button className="px-[16px] py-[5px]  text-[#000000] rounded-[50px] cursor-pointer hover:bg-[var(--hover-color)]">
           &#8599;
          </button>
        </div>
      </div>
    </div>
  );
}
