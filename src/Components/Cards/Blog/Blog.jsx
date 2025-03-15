import MediumImage from"../../../../assets/Medium.png"

function Blog() {
  return (
    <div className="">
    <img src={MediumImage} alt="Blog-Image" className="object-cover"/>
    <button>Redirect</button>
    </div>
  )
}

export default Blog