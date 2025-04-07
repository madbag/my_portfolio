import Kowa from "../../../assets/Home Office.svg";
import Button from "../Button/Button";

function Pro7() {
  return (
    <div className="bg-[var(--secondary-text-color)] text-[var(--primary-text-color)] flex flex-col rounded-[20px] items-start h-[320px] w-[300px] p-[20px]">
      <img
        src={Kowa}
        alt="FreelanceIcon"
        className="w-[70px] h-[70px] object-cover mb-auto"
      />

      <div className="flex flex-col justify-end items-start text-left bg-white relative mb-[35px] ">
        <h3 className="text-[24px] font-semibold">Freelance</h3>
        <p className="text-[16px] my-[5px] leading-[150%] text-[var(--hover-text-color)]">
          A collection of projects done for ad agencies
        </p>
      </div>

      <Button href="https://github.com/madbag/Javascript_30" label="Github" />
    </div>
  );
}

export default Pro7;
