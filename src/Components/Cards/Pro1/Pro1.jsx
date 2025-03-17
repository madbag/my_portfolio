import JS30 from "../../../../assets/JavaScript_Project.svg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Pro1() {
  return (
    <div className="bg-[#ffffff] flex flex-col rounded-[20px] items-start h-[300px] w-[300px]">
      <div className="flex justify-center items-center">
        <img
          src={JS30}
          alt="Javascript30"
          className="w-[70px] h-[70px] object-cover "
        />
      </div>
      <div className="flex flex-row justify-end flex-grow relative items-start p-[10px] text-left bg-white">
        <div className="mt-auto">
          <h3 className="text-xl font-semibold">Javascript 30</h3>
          <p className="text-sm my-[5px]">
            A 30-day vanilla JavaScript coding challenge.
          </p>
        </div>
        <button className="px-[10px] py-[10px]  text-[#000000] rounded-full cursor-pointer hover:bg-[var(--hover-color)] mt-auto">
          <FontAwesomeIcon icon={faGithub} size="lg" />
        </button>
      </div>
    </div>
  );
}
