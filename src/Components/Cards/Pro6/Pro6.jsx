import Huggers from "../../../../assets/Huggers.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
// import React from "react";

function Pro6() {
  return (
    <div className="bg-[#ffffff] w-[300px] h-64 flex flex-col rounded-[20px] items-center overflow-hidden relative">
      <div className="flex-3 flex justify-center items-center">
        <img
          src={Huggers}
          alt="WeatherAI"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 flex flex-col justify-center items-center p-[10px] text-center bg-white">
        <h3 className="text-xl font-semibold">Huggers</h3>
        <p className="text-sm my-[5px]">
          A group Project based on community website for mental health
        </p>
        <div className="flex flex-row my-[5px]">
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

export default Pro6;
