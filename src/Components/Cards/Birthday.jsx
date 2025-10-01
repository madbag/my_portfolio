import Cake from "../../../assets/Birthday_Cake.svg";
import Button from "../Button/Button";

function Pro6() {
  return (
    <div className="bg-[var(--secondary-text-color)] text-[var(--primary-text-color)] flex flex-col rounded-[20px] items-start h-[320px] w-[300px] p-[20px]">
      <img
        src={Cake}
        alt="Birthday_Cake"
        className="w-[70px] h-[70px] object-cover mb-auto"
      />

      <div className="flex flex-col justify-end items-start text-left bg-white mt-auto">
        <h3 className="text-[24px] font-semibold">Birthday Game</h3>
        <p className="text-[16px] my-[5px] leading-[150%] text-[var(--hover-text-color)]">
          T-Rex runner game based on a friend's birthday
        </p>
      </div>

      <div className="flex flex-row mt-auto gap-[10px]">
        <Button href="https://github.com/madbag/birthday_boy" label="Github" />
        <Button href="https://happybirthday-a.vercel.app/" label="Website" />
      </div>
    </div>
  );
}

export default Pro6;
