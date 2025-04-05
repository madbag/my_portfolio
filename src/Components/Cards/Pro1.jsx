import JS30 from "../../../assets/JavaScript_Project.svg";
import Button from "../Button/Button";

export default function Pro1() {
  return (
    <div className="bg-[var(--secondary-text-color)] text-[var(--primary-text-color)] flex flex-col rounded-[20px] items-start h-[300px] w-[300px]   p-[20px]">
      <div className="flex justify-center items-center">
        <img
          src={JS30}
          alt="Javascript30"
          className="w-[70px] h-[70px] object-cover "
        />
      </div>
      <div className="flex flex-col justify-end flex-grow relative items-start p-[10px] text-left bg-white">
        <h3 className="text-[24px] font-semibold">Javascript 30</h3>
        <p className="text-[16px] my-[5px] mr-[5px] leading-[150%] ">
          Hands-on daily projects with vanilla JavaScript
        </p>

        <Button href="https://github.com/madbag/Javascript_30" label="Github" />
      </div>
    </div>
  );
}
