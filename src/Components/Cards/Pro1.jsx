import JS30 from "../../../assets/JavaScript_Project.svg";
import Button from "../Button/Button";

export default function Pro1() {
  return (
    <div className="bg-[var(--secondary-text-color)] text-[var(--primary-text-color)] flex flex-col rounded-[20px] items-start h-[320px] w-[300px] p-[20px]">
      <img
        src={JS30}
        alt="Javascript30"
        className="w-[70px] h-[70px] object-cover mb-auto"
      />

      <div className="flex flex-col justify-end relative items-start text-left bg-white mb-[35px]">
        <h3 className="text-[24px] font-semibold">Javascript 30</h3>
        <p className="text-[16px] my-[5px] leading-[150%] text-[var(--hover-text-color)]">
          Hands-on daily projects with vanilla JavaScript
        </p>
      </div>

      <Button href="https://github.com/madbag/Javascript_30" label="Github" />
    </div>
  );
}
