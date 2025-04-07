// import React from "react";
import FTF from "../../../assets/Fire.svg";
import Button from "../Button/Button";

function Pro() {
  return (
    <div className="bg-[var(--secondary-text-color)] text-[var(--primary-text-color)] flex flex-col rounded-[20px] items-start h-[320px] w-[300px] p-[20px]">
      <img
        src={FTF}
        alt="FightTheFireIcon"
        className="w-[70px] h-[70px] object-cover mb-auto"
      />

      <div className="flex flex-col items-start p-[10px] relative mt-auto">
        <h3 className="text-[24px] font-semibold">Fight the Fire</h3>
        <p className="text-[16px] my-[5px] leading-[150%] text-[var(--hover-text-color)]">
          A fast-paced, timer-based web game
        </p>
      </div>

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
  );
}

export default Pro;
