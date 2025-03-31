import Github from "../../../assets/mingcute_github-fill.svg";
import LinkedIn from "../../../assets/mingcute_linkedin-fill.svg";
import Email from "../../../assets/Vector.svg";
import Medium from "../../../assets/ri_medium-fill (1).svg";

export default function Footer() {
  return (
    <div className="mt-auto py-[50px] flex flex-col items-center justify-center">
      <p>
        Thank you{" "}
        <span
          href="https://nevflynn.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="no-underline hover:text-[#808080]"
        >
          Nev Flynn
        </span>{" "}
        for the idea 🌸
      </p>

      <div className="footer-bottom flex flex-row justify-center gap-[10px] mt-[10px]">
        <a
          href="https://www.linkedin.com/in/madhushreeb/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={LinkedIn} alt="LinkedIn" className="w-6 h-6" />
        </a>
        <a
          href="https://github.com/madbag"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Github} alt="GitHub" className="w-6 h-6" />
        </a>
        <a href="mailto:boylemadhushree@gmail.com">
          <img src={Email} alt="Email" className="w-5 h-5 pt-[4px]" />
        </a>
        <a
          href="https://medium.com/@madhushree.b"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Medium} alt="Medium" className="w-6 h-6" />
        </a>
      </div>
    </div>
  );
}
