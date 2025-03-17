// import React from "react";
import FTF from "../../../../assets/Fire.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function Pro() {
  return (
    <div className="bg-[#ffffff] flex flex-col rounded-[20px] items-start h-[300px] w-[300px]">
      <div className="flex justify-center items-center">
        <img
          src={FTF}
          alt="FightTheFireIcon"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex flex-row justify-end flex-grow relative items-start p-[10px] text-left bg-white">
        <div className="mt-auto">
          <h3 className="text-xl font-semibold">Fight the Fire</h3>
          <p className="text-sm my-[5px]">Timer based Wack-a-mole web game</p>
          <div className="flex flex-row my-[5px]"></div>
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

export default Pro;
