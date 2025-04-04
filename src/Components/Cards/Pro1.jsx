import JS30 from "../../../assets/JavaScript_Project.svg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Pro1() {
  return (
    <div className="bg-[var(--secondary-text-color)] text-[var(--primary-text-color)] flex flex-col rounded-[20px] items-start h-[300px] w-[300px] p-[26px]">
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
          <p className="text-[12px] my-[5px] mr-[5px]">
            Hands-on daily projects with vanilla JavaScript
          </p>
        </div>
        <button className="p-[10px] rounded-full cursor-pointer hover:bg-[var(--hover-color)] mt-auto border-none">
          <a
            href="https://github.com/madbag/Javascript_30"
            target="_blank"
            className="text-[#000000]"
          >
            <FontAwesomeIcon icon={faGithub} size="lg" />
          </a>
        </button>
      </div>
    </div>
  );
}
