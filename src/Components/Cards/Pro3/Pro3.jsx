import React from "react";
import Ventout from "../../../../assets/VO.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function Pro3() {
  return (
    <div className="bg-[#ffffff] flex flex-col rounded-[20px] items-start h-[300px] w-[300px] p-[28px]">
      <div className="flex justify-center items-center">
        <img
          src={Ventout}
          alt="VentoutIcon"
           className="w-[80px] h-[70px] object-cover "
        />
      </div>
      <div className="flex flex-row justify-end flex-grow relative items-start p-[10px] text-left bg-white">
      <div className="mt-auto">
      <h3 className="text-xl font-semibold">Vent out</h3>
      <p className="text-[12px] my-[5px] mr-[5px]">
            A message sharing social media web app
          </p>
        </div>

        <div className="flex flex-row mt-auto">
          <button className="px-[10px] py-[10px] mx-[5px] text-[#000000] rounded-full cursor-pointer hover:bg-[var(--hover-color)] border-none">
          <a
              href="https://github.com/madbag/FullStack_Final_client"
              target="_blank"
            >
            <FontAwesomeIcon icon={faGithub} size="lg" />
          </a>
          </button>
          <button className="px-[10px] py-[10px] mx-[5px] text-[#000000] rounded-full cursor-pointer hover:bg-[var(--hover-color)] border-none">
           <a href="https://ventout.netlify.app/" target="_target" className="no-underline">
            &#8599;
           </a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Pro3;
