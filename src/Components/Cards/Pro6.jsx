import Huggers from "../../../assets/Hugging Face.svg";
import Button from "../Button/Button";

function Pro6() {
  return (
    <div className="bg-[var(--secondary-text-color)] text-[var(--primary-text-color)] flex flex-col rounded-[20px] items-start h-[300px] w-[300px] p-[20px]">
      <div className="flex justify-center items-center">
        <img
          src={Huggers}
          alt="HuggersIcon"
          className="w-[70px] h-[70px] object-cover "
        />
      </div>
      <div className="flex flex-col items-start p-[10px] text-left bg-white justify-end flex-grow relative">
        <h3 className="text-[24px] font-semibold">Huggers</h3>
        <p className="text-[16px] my-[5px] mr-[5px] leading-[150%] ">
          Group project: A community platform for mental health support
        </p>

        <div>
          <Button
            href="https://github.com/madbag/Javascript_30"
            label="Github"
          />
        </div>
      </div>
    </div>
  );
}

export default Pro6;
