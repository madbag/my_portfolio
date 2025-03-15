// import React from "react";
import FTF from "../../../../assets/FTF.png";

function Pro() {
  return (
    <div className="bg-[#ffffff] w-[300px] h-[400px] flex flex-col rounded-[20px] items-center overflow-hidden">
      <div className="flex-3 flex justify-center items-center">
        <img src={FTF} alt="WeatherAI" className="w-full h-full object-cover" />
      </div>
      <div className="flex-1 flex flex-col justify-center items-center p-[10px] text-center bg-white">
        <h3 className="text-xl font-semibold">Fight the Fire</h3>
        <p className="text-sm my-[5px]">
          A 30-day vanilla JavaScript coding challenge.
        </p>
        <div className="flex flex-col">
          <button className="px-[16px] py-[5px] bg-[var(--foreground-color)] text-[#000000] rounded-[4px] cursor-pointer hover:bg-[var(--hover-color)]">
            R
          </button>
          <button className="px-[16px] py-[5px] bg-[var(--foreground-color)] text-[#000000] rounded-[4px] cursor-pointer hover:bg-[var(--hover-color)]">
            L
          </button>
        </div>
      </div>
    </div>
  );
}

export default Pro;
