import React from "react";
import Ventout from "../../../assets/VO.svg";
import Button from "../Button/Button";

function Pro3() {
  return (
    <div className="bg-[var(--secondary-text-color)] text-[var(--primary-text-color)] flex flex-col rounded-[20px] items-start h-[300px] w-[300px] p-[20px]">
      <div className="flex justify-center items-center">
        <img
          src={Ventout}
          alt="VentoutIcon"
          className="w-[80px] h-[70px] object-cover "
        />
      </div>
      <div className="flex flex-col justify-end flex-grow relative items-start p-[10px] text-left bg-white">
        <h3 className="text-[24px] font-semibold">Vent out</h3>
        <p className="text-[16px] my-[5px] mr-[5px] leading-[150%] ">
          A message-sharing social media web app
        </p>

        <div className="flex flex-row mt-auto gap-[10px]">
          <Button
            href="https://github.com/madbag/fight-the-fire"
            label="Github"
          />
          <Button
            href="https://madbag.github.io/fight-the-fire/"
            label="Website"
          />
        </div>
      </div>
    </div>
  );
}

export default Pro3;
