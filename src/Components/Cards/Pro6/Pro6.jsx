import Huggers from "../../../../assets/Hugging Face.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
// import React from "react";

function Pro6() {
  return (
    <div className="bg-[#ffffff] flex flex-col rounded-[20px] items-start h-[300px] w-[300px] p-[28px]">
      <div className="flex justify-center items-center">
        <img
          src={Huggers}
          alt="HuggersIcon"
          className="w-[70px] h-[70px] object-cover "
        />
      </div>
      <div className="flex flex-row items-start p-[10px] text-left bg-white justify-end flex-grow relative">
        <div className="mt-auto">
          <h3 className="text-xl font-semibold">Huggers</h3>
          <p className="text-[12px] my-[5px] mr-[5px]">
            A group Project based on community website for mental health
          </p>
        </div>

        <button className="px-[10px] py-[10px] mt-auto rounded-full cursor-pointer hover:bg-[var(--hover-color)] border-none">
          <a href="https://github.com/virgoeun/WD-PR2-BAM" target="_blank">
            <FontAwesomeIcon icon={faGithub} size="lg" />
          </a>
        </button>
      </div>
    </div>
  );
}

export default Pro6;
