import './Navbar.css'
import Image from "../../assets/Madhushree (1).svg";
import DarkMode from './DarkMode/DarkMode';

function Navbar() {
  return (
    <nav>
      <div className="nav-left">
        <img src={Image} alt="My name" />
      </div>

      <div className="nav-middle">
        <p>Home</p>
        <p>Projects</p>
        <p>Resume</p>
        <p>About</p>
        <p>Contact</p>
      </div>

      <div className="nav-right">
        <DarkMode/>
      </div>
    </nav>
  )
}

export default Navbar