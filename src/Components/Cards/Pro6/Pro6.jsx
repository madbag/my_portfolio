import Huggers from "../../../../assets/Hugging Face.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
// import React from "react";

function Pro6() {
  return (
    <div className="bg-[#ffffff] flex flex-col rounded-[20px] items-start h-[300px] w-[300px]">
      <div className="flex justify-center items-center">
        <img
          src={Huggers}
          alt="HuggersIcon"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-row items-start p-[10px] text-left bg-white justify-end flex-grow relative">
        <div className="mt-auto">
          <h3 className="text-xl font-semibold">Huggers</h3>
          <p className="text-sm my-[5px]">
            A group Project based on community website for mental health
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

export default Pro6;
