import "./Footer.css";

export default function Footer() {
  return (
    <div className="mt-auto py-[50px] flex flex-col items-center justify-center">
      <p>Thank you Nev Flynn for the idea 🌸</p>

      <div className="footer-bottom flex flex-row justify-center gap-[10px] mt-[10px]">
      <a href="https://www.linkedin.com/in/madhushreeb/" className="text-blue-500 hover:text-blue-700"  target="_blank" rel="noopener noreferrer">LinkedIn</a>
      <a href="https://github.com/madbag" className="text-blue-500 hover:text-blue-700" target="_blank" rel="noopener noreferrer">GitHub</a>
      <a href="mailto:boylemadhushree@gmail.com" className="text-blue-500 hover:text-blue-700">Email</a>
      </div>
    </div>
  );
}
