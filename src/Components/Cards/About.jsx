import Memoji from "../../../assets/Memoji1.png";
// import Footer from "../Footer/Footer";
import FooterContact from "../Footer/FooterContact";
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
          Hi, I’m Madhushree! I used to be a teacher, and now I build web and
          mobile apps as a Full Stack Developer. I love turning ideas into
          user-friendly designs and smooth back-end systems. When I’m not
          coding, I’m exploring new tech and figuring out how to make apps even
          better. Take a look at my work, and let’s connect.
        </p>
      </div>
    </div>
  );
}
