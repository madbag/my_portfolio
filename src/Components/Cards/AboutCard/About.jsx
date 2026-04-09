import Memoji from "../../../assets/Memoji1.png";
import FooterContact from "../../Footer/FooterContact";

export default function About() {
  return (
    <div className="bg-(--secondary-text-color) text-(--primary-text-color) rounded-xl sm:rounded-4xl p-4 sm:p-6 flex flex-col">
      
      <div className="flex flex-row mt-2.5">
        <img
          src={Memoji}
          alt="memoji-face"
          className="w-20 sm:w-25 block mr-auto mb-2.5"
        />

        <div className="flex flex-col ml-auto text-right">
          <p className="text-4 sm:text-4"> 📍 Berlin, 🇩🇪</p>
          <FooterContact />
        </div>
      </div>

      <div className="w-full text-left mt-4 leading-[150%] text-[16px] sm:text-[18px]">
        <p>
          Hi, I'm Madhushree!
          <br />I am a full-stack developer who loves building web and mobile apps, experimenting with new technologies,
          and turning creative ideas into user-friendly experiences with clean code.
        </p>
      </div>

    </div>
  );
}
