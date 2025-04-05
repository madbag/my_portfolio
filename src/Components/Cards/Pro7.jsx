import Kowa from "../../../assets/Home Office.svg";
import Button from "../Button/Button";

function Pro7() {
  return (
    <div className="bg-[var(--secondary-text-color)] text-[var(--primary-text-color)] flex flex-col rounded-[20px] items-start h-[300px] w-[300px]  p-[20px]">
      <div className="flex justify-center items-center">
        <img
          src={Kowa}
          alt="FreelanceIcon"
          className="w-[70px] h-[70px] object-cover "
        />
      </div>

      <div className="flex flex-col justify-end flex-grow p-[10px] text-left bg-white relative ">
        <h3 className="text-[24px] font-semibold">Freelance</h3>
        <p className="text-[16px] my-[5px] mr-[5px] leading-[150%] ">
          A collection of projects done for ad agencies
        </p>

        <Button href="https://github.com/madbag/Javascript_30" label="Github" />
      </div>
    </div>
  );
}

export default Pro7;
