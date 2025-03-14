import Memoji from "../../../../assets/Memoji1.svg"
import "./About.css"

function About() {
  return (
    <div className="main">
      <div className="top-div">
      <img src={Memoji} alt="memoji-face"></img>
      <p>Location: Berlin 🇩🇪</p>
      </div>

      <div className="bottom-div">
      <p>Hi, I'm Madhushree, a Full Stack Developer who loves building web and mobile applications. I specialize in creating user-friendly designs and efficient back-end systems. Check out my work and let’s connect!</p>
      </div>
    </div>
  )
}

export default About