// import React from "react";
import Greenmind from "../../../assets/Potted Plant.svg";
import Button from "../Button/Button";

function Pro5() {
  return (
    <div className="bg-[var(--secondary-text-color)] text-[var(--primary-text-color)] flex flex-col rounded-[20px] items-start h-[300px] w-[300px]  p-[20px]">
      <div className="flex justify-center items-center">
        <img
          src={Greenmind}
          alt="GreenmindIcon"
          className="w-[70px] h-[70px] object-cover "
        />
      </div>
      <div className="flex flex-col items-start p-[10px] justify-end flex-grow relative">
        <h3 className="text-[24px] font-semibold">Greenmind</h3>
        <p className="text-[16px] my-[5px] mr-[5px] leading-[150%] ">
          Group project: An eCommerce site for plant lovers
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

export default Pro5;
