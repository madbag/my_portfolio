import JS30 from "../../../../assets/Project 12.png"
import "./Pro1.css"

export default function Pro1() {
  return (
    <div className='pro1-main'>
      <div className='image-container'>
        <img src={JS30} alt="Javascript30" />
      </div>
      <div className='content'>
        <h3>Javascript 30</h3>
        <p>A 30-day vanilla JavaScript coding challenge. Build 30 things in 30 days with 30 tutorials.</p>
        <button>Repository</button>
      </div>
    </div>
  )
}