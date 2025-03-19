// import React from "react";
import Greenmind from "../../../../assets/Potted Plant.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function Pro5() {
  return (
    <div className="bg-[#ffffff] flex flex-col rounded-[20px] items-start h-[300px] w-[300px] p-[28px]">
      <div className="flex justify-center items-center">
        <img
          src={Greenmind}
          alt="GreenmindIcon"
           className="w-[70px] h-[70px] object-cover "
        />
      </div>
      <div className="flex flex-row items-start p-[10px] text-text bg-white justify-end flex-grow relative">
        <div className="mt-auto">
          <h3 className="text-xl font-semibold">Greenmind</h3>
          <p className="text-[12px] my-[5px] mr-[5px]">
            A group project ecommerce website selling plants
          </p>
        </div>
        <div className="flex flex-row mt-auto">
          <button className="px-[10px] py-[10px] mx-[5px] text-[#000000] rounded-full cursor-pointer hover:bg-[var(--hover-color)] border-none">
            <a href="https://github.com/m091u/GreenMind---ecommerce" target="_blank">
            <FontAwesomeIcon icon={faGithub} size="lg" />
            </a>
          </button>
          <button className="px-[10px] py-[10px] mx-[5px] text-[#000000] rounded-full cursor-pointer hover:bg-[var(--hover-color)] border-none">
            <a href="https://greenmind-shop.netlify.app/" target="_blank" className="no-underline ">
            &#8599;
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Pro5;
