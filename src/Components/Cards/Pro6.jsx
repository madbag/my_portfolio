import Huggers from "../../../assets/Hugging Face.svg";
import Button from "../Button/Button";

function Pro6() {
  return (
    <div className="bg-[var(--secondary-text-color)] text-[var(--primary-text-color)] flex flex-col rounded-[20px] items-start h-[320px] w-[300px] p-[20px]">
      <img
        src={Huggers}
        alt="HuggersIcon"
        className="w-[70px] h-[70px] object-cover mb-auto"
      />

      <div className="flex flex-col items-start text-left bg-white justify-end relative mb-[35px]">
        <h3 className="text-[24px] font-semibold">Huggers</h3>
        <p className="text-[16px] my-[5px] leading-[150%] text-[var(--hover-text-color)]">
          {" "}
          Group project: A community platform for mental health support
        </p>
      </div>

      <div>
        <Button href="https://github.com/madbag/Javascript_30" label="Github" />
      </div>
    </div>
  );
}

export default Pro6;
