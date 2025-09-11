import Crochet from "../../../assets/Crochet.svg";
import Button from "../Button/Button";

function Pro3() {
  return (
    <div className="bg-[var(--secondary-text-color)] text-[var(--primary-text-color)] flex flex-col rounded-[20px] items-start h-[320px] w-[300px] p-[20px]">
      <img
        src={Crochet}
        alt="crochet-icon"
        className="w-[70px] h-[70px] object-cover mb-auto"
      />

      <div className="flex flex-col justify-end  relative items-start p-[10px] text-left bg-white mt-auto">
        <h3 className="text-[24px] font-semibold">UB Arthouse</h3>
        <p className="text-[16px] my-[5px] leading-[150%] text-[var(--hover-text-color)]">
          A crochet website that offers handmade products.
        </p>
      </div>

      <div className="flex flex-row mt-auto gap-[10px]">
        <Button
          href="https://github.com/madbag/ubarthouse"
          label="Github"
        />
        <Button href="https://ubarthouse.vercel.app/" label="Website" />
      </div>
    </div>
  );
}

export default Pro3;
