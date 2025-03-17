import MediumImage from "../../../../assets/Medium.jpg";

function Blog() {
  return (
    <div className="rounded-lg flex items-center justify-center p-2">
      <img src={MediumImage} alt="Blog-Image" className="w-[100px] h-[100px] object-cover" />
    </div>
  );
}

export default Blog;
