import JS30 from "../../../assets/Quotes.png";
import Button from "../Button/Button";

export default function Pro1() {
  return (
    <div className="bg-[var(--secondary-text-color)] text-[var(--primary-text-color)] flex flex-col rounded-[20px] items-start h-[320px] w-[300px] p-[20px]">
      <img
        src={JS30}
        alt="Javascript30"
        className="w-[70px] h-[70px] object-cover mb-auto"
      />

      <div className="flex flex-col justify-end items-start text-left bg-white mt-auto">
        <h3 className="text-[24px] font-semibold">Random Quotes</h3>
        <p className="text-[16px] my-[5px] leading-[150%] text-[var(--hover-text-color)]">
          A Tailwind-based app showcasing bite-sized wisdom.
        </p>
      </div>

      <div className="flex flex-row mt-auto gap-[10px]">
        <Button href="https://github.com/madbag/random_quotes" label="Github" />
        <Button
          href="https://random-quotes-project.vercel.app/"
          label="Website"
        />
      </div>
    </div>
  );
}
