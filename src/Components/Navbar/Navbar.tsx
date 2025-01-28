import './Navbar.css'
import Image from "../../assets/Madhushree.svg";

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
        <p>Blog</p>
      </div>

      <div className="nav-right">
        <p><a href=''>Contact</a></p>
      </div>
    </nav>
  )
}

export default Navbar