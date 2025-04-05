import HTMLIcon from "../../../assets/Html 5.svg";
import CSSIcon from "../../../assets/CSS3.svg";
import JSIcon from "../../../assets/JavaScript.svg";
import ReactIcon from "../../../assets/React Native.svg";
import BootstrapIcon from "../../../assets/Bootstrap.svg";

import PythonIcon from "../../../assets/Python.svg";
import MongoIcon from "../../../assets/MongoDB.svg";
import TsIcon from "../../../assets/TypeScript.svg";

import NodeIcon from "../../../assets/Nodejs.svg";

import GitIcon from "../../../assets/Git.svg";
import WordpressIcon from "../../../assets/WordPress.svg";

export default function TechStack() {
  return (
    <div className="bg-[var(--secondary-text-color)] text-[var(--primary-text-color)] rounded-[20px] flex flex-col gap-6 h-[300px] w-[300px]  p-[20px]">
      <div>
        <h3 className="mb-[10px]">Tech Stack: </h3>
        <h4 className="text-lg font-semibold mb-[10px]">Frontend:</h4>
        <div className="flex flex-wrap gap-4 mt-2 mb-[10px]">
          <img src={HTMLIcon} alt="HTML" className="w-10 h-10 mr-[5px]" />
          <img src={CSSIcon} alt="CSS" className="w-10 h-10 mr-[5px]" />
          <img src={JSIcon} alt="JavaScript" className="w-10 h-10 mr-[5px]" />
          <img src={ReactIcon} alt="React" className="w-10 h-10 mr-[5px]" />
          <img src={TsIcon} alt="TypeScript" className="w-10 h-10 mr-[6px]" />
          <img
            src={BootstrapIcon}
            alt="Bootstrap"
            className="w-10 h-10 mr-[5px]"
          />
        </div>
      </div>

      <div>
        <h4 className="text-lg font-semibold mb-[10px]">Backend:</h4>
        <div className="flex flex-wrap gap-4 mt-2 mb-[10px]">
          <img src={PythonIcon} alt="Python" className="w-10 h-10 mr-[5px]" />
          <img src={MongoIcon} alt="MongoDB" className="w-10 h-10 mr-[5px]" />
          <img src={NodeIcon} alt="Node.js" className="w-10 h-10 mr-[5px]" />
        </div>
      </div>

      <div>
        <h4 className="text-lg font-semibold  mb-[10px]">Others:</h4>
        <div className="flex flex-wrap gap-4 mt-2 mb-[10px]">
          <img src={GitIcon} alt="Git" className="w-10 h-10 mr-[5px]" />
          <img src={WordpressIcon} alt="WordPress" className="w-10 h-10" />
        </div>
      </div>
    </div>
  );
}
