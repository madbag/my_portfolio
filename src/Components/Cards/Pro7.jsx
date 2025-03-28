import Kowa from "../../../../assets/Home Office.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function Pro7() {
  return (
    <div className="bg-[#ffffff] flex flex-col rounded-[20px] items-start h-[300px] w-[300px] p-[28px]">
      <div className="flex justify-center items-center">
        <img
          src={Kowa}
          alt="FreelanceIcon"
          className="w-[70px] h-[70px] object-cover "
        />
      </div>

      <div className="flex flex-row justify-end flex-grow p-[10px] text-left bg-white relative ">
        <div className="mt-auto">
          <h3 className="text-xl font-semibold">Freelance</h3>
          <p className="text-[12px] my-[5px] mr-[5px]">
            Some of my projects with Ad agencies
          </p>
        </div>

        <button className="px-[10px] py-[10px] mt-auto rounded-full cursor-pointer hover:bg-[var(--hover-color)] border-none">
          <FontAwesomeIcon icon={faGithub} size="lg" />
        </button>
      </div>
    </div>
  );
}

export default Pro7;
