import Memoji from "../../../../assets/Memoji1.png"


export default function About() {
  return (
    <div className="bg-[var(--secondary-text-color)] rounded-[20px] p-[32px] h-[300px] flex flex-col">
      <div className="flex mt-2.5">
      <img src={Memoji} alt="memoji-face" className="w-[100px] block mr-auto mb-[10px] "></img>
      <p>📍 Berlin 🇩🇪</p>
      </div>

      <div className="w-[500px] text-left mt-auto">
      <p>Hi, I'm Madhushree, a Full Stack Developer who loves building web and mobile applications. I specialize in creating user-friendly designs and efficient back-end systems. Check out my work and let’s connect!</p>
      </div>
    </div>
  )
}
