import JS30 from "../../../../assets/JS30.png";
import "./Pro1.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Pro1() {
  return (
    <div className="bg-[#ffffff] w-[300px] h-[400px] flex flex-col rounded-[20px] items-center overflow-hidden">
      <div className="flex-3 flex justify-center items-center">
        <img
          src={JS30}
          alt="Javascript30"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 flex flex-col justify-center items-center p-[10px] text-center bg-white">
        <h3 className="text-xl font-semibold">Javascript 30</h3>
        <p className="text-sm my-[5px]">
          A 30-day vanilla JavaScript coding challenge.
        </p>
        <button className="px-[16px] py-[5px]  text-[#000000] rounded-[50px] cursor-pointer hover:bg-[var(--hover-color)]">
          <FontAwesomeIcon icon={faGithub} size="lg" />
        </button>
      </div>
    </div>
  );
}
