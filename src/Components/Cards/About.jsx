import Memoji from "../../../assets/Memoji1.png";
import "./About.css";

export default function About() {
  return (
    <div className="about bg-[var(--secondary-text-color)] text-[var(--primary-text-color)] rounded-[20px] p-[20px] h-[300px] max-w-[620px] flex flex-col">
      <div className="flex flex-row mt-2.5">
        <img
          src={Memoji}
          alt="memoji-face"
          className="w-[100px] block mr-auto mb-[10px] text-[18px]"
        ></img>
        <p classname="place"> 📍 Berlin 🇩🇪</p>
      </div>

      <div className=" about-p max-w-[600px] text-left mt-auto leading-[150%] text-[18px]">
        <p>
          Hi, I'm Madhushree, a Full Stack Developer who loves building web and
          mobile applications. I specialize in creating user-friendly designs
          and efficient back-end systems. Check out my work and let’s connect!
        </p>
      </div>
    </div>
  );
}
