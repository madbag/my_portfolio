import Memoji from "../../../../assets/Memoji1.png";
// import Footer from "../Footer/Footer";
import FooterContact from "../../Footer/FooterContact";
import "./About.css";

export default function About() {
  return (
    <div className="about bg-[var(--secondary-text-color)] text-[var(--primary-text-color)] rounded-[20px] p-[20px] h-[320px] max-w-[620px] flex flex-col">
      <div className="flex flex-row mt-2.5">
        <img
          src={Memoji}
          alt="memoji-face"
          className="w-[100px] block mr-auto mb-[10px] text-[18px]"
        />
        <div className="flex flex-col ml-auto text-right">
          <p className="place text-[18px]"> 📍 Berlin, 🇩🇪</p>
          <FooterContact />
        </div>
      </div>

      <div className=" about-p max-w-[600px] text-left mt-auto leading-[150%] text-[18px]">
        <p>
          Hi, I’m Madhushree! 
          <br/>I build web and mobile apps, love experimenting
          with new tech, and enjoy turning creative ideas into
          user-friendly experiences.
        </p>
      </div>
    </div>
  );
}
