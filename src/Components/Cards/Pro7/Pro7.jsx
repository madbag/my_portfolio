import Kowa from "../../../../assets/Home Office.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function Pro7() {
  return (
    <div className="bg-[#ffffff] flex flex-col rounded-[20px] items-start h-[300px] w-[300px]">
      <div className="flex justify-center items-center">
        <img
          src={Kowa}
          alt="FreelanceIcon"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex flex-row justify-end flex-grow p-[10px] text-left bg-white relative ">
        <div className="mt-auto">
          <h3 className="text-xl font-semibold">Freelance</h3>
          <p className="text-sm my-[5px]">
            Some of my projects with Ad agencies
          </p>
        </div>
        <div className="flex flex-row mt-auto">
          <button className="px-[10px] py-[10px] mx-[5px] text-[#000000] rounded-full cursor-pointer hover:bg-[var(--hover-color)]">
            <FontAwesomeIcon icon={faGithub} size="lg" />
          </button>
          <button className="px-[10px] py-[10px] mx-[5px] text-[#000000] rounded-full cursor-pointer hover:bg-[var(--hover-color)]">
            &#8599;
          </button>
        </div>
      </div>
    </div>
  );
}

export default Pro7;
