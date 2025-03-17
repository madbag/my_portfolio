import React from "react";
import Ventout from "../../../../assets/ventout.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function Pro3() {
  return (
    <div className="bg-[#ffffff] w-[300px] h-64 flex flex-col rounded-[20px] items-center overflow-hidden">
      <div className="flex-3 flex justify-center items-center">
        <img
          src={Ventout}
          alt="WeatherAI"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 flex flex-col justify-center items-center p-[10px] text-center bg-white">
        <h3 className="text-xl font-semibold">Vent out</h3>
        <p className="text-sm my-[5px]">
          A message sharing social media web app 
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

export default Pro3;
