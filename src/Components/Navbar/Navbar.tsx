import './Navbar.css'

function Navbar() {
  return (
    <nav>
      <div className="nav-left">
        <h1>Madhushree</h1>
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