import WeatherAI from "../../../assets/The Weather Channel.svg";
import Button from "../Button/Button";
export default function Pro2() {
  return (
    <div className="bg-[var(--secondary-text-color)] text-[var(--primary-text-color)] flex flex-col rounded-[20px] items-start h-[320px] w-[300px] p-[20px]">
      <img
        src={WeatherAI}
        alt="WeatherAI"
        className="w-[70px] h-[70px] object-cover mb-auto"
      />

      <div className="flex flex-col justify-end items-start text-left bg-white mt-auto" >
        <h3 className="text-[24px] font-semibold">AI Weather Forecast</h3>
        <p className="text-[16px] my-[5px] leading-[150%] text-[var(--hover-text-color)]">
          AI-powered weather updates with Gen Z-style summaries
        </p>
      </div>

      <div className="flex flex-row mt-auto gap-[10px]">
        <Button
          href="https://github.com/madbag/WeatherForecastApp"
          label="Github"
        />
        <Button
          href="https://aiweatherforecast.netlify.app/"
          label="Website"
        />
      </div>
    </div>
  );
}
