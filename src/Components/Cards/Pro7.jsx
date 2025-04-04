import Kowa from "../../../assets/Home Office.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function Pro7() {
  return (
    <div className="bg-[var(--secondary-text-color)] text-[var(--primary-text-color)] flex flex-col rounded-[20px] items-start h-[300px] w-[300px] p-[26px]">
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
          A collection of projects done for ad agencies
          </p>
        </div>

        <button className="px-[10px] py-[10px] mt-auto rounded-full cursor-pointer hover:bg-[var(--hover-color)] border-none">
          <a
            href="https://github.com/madbag/freelance.git"
            target="_blank"
            className="no-underline text-[#000000]"
          >
            <FontAwesomeIcon icon={faGithub} size="lg" />
          </a>
        </button>
      </div>
    </div>
  );
}

export default Pro7;
