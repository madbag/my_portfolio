import "./Footer.css";
import FooterContact from "./FooterContact";

export default function Footer() {
  return (
    <div className="footer text-[var(--primary-text-color)] mt-auto py-[50px] flex flex-col items-center justify-center">
      <p>
        Thank you{" "}
        <a
          href="https://nevflynn.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="no-underline text-[var(--primary-text-color)] cursor-pointer hover:text-[var(--hover-text-color)]"
        >
          Nev Flynn
        </a>{" "}
        for the idea 🌸
      </p>

      <FooterContact />
    </div>
  );
}
