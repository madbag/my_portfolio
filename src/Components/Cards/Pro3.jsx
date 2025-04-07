import React from "react";
import Ventout from "../../../assets/VO.svg";
import Button from "../Button/Button";

function Pro3() {
  return (
    <div className="bg-[var(--secondary-text-color)] text-[var(--primary-text-color)] flex flex-col rounded-[20px] items-start h-[320px] w-[300px] p-[20px]">
      <img
        src={Ventout}
        alt="VentoutIcon"
        className="w-[80px] h-[70px] object-cover mb-auto"
      />

      <div className="flex flex-col justify-end  relative items-start p-[10px] text-left bg-white mt-auto">
        <h3 className="text-[24px] font-semibold">Vent out</h3>
        <p className="text-[16px] my-[5px] leading-[150%] text-[var(--hover-text-color)]">
          A message-sharing social media web app
        </p>
      </div>
      
      <div className="flex flex-row mt-auto gap-[10px]">
        <Button
          href="https://github.com/madbag/FullStack_Final_client"
          label="Github"
        />
        <Button
          href="https://ventout.netlify.app/"
          label="Website"
        />
      </div>
    </div>
  );
}

export default Pro3;
