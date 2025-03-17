import HTMLIcon from "../../../../assets/Html 5.svg";
import CSSIcon from "../../../../assets/CSS3.svg";
import JSIcon from "../../../../assets/JavaScript.svg";
import ReactIcon from "../../../../assets/React Native.svg";
import BootstrapIcon from "../../../../assets/Bootstrap.svg";
import TailwindIcon from "../../../../assets/Tailwind CSS.svg";

import PythonIcon from "../../../../assets/Python.svg";
import MongoIcon from "../../../../assets/MongoDB.svg";
import TsIcon from "../../../../assets/TypeScript.svg";

import NodeIcon from "../../../../assets/Nodejs.svg";

import FigmaIcon from "../../../../assets/Figma.svg";
import WordpressIcon from "../../../../assets/WordPress.svg";

export default function TechStack() {
  return (
    <div className="bg-[var(--secondary-text-color)] flex flex-col gap-6 w-96 ">
  
      <div>
        <h3>Tech Stack: </h3>
        <h4 className="text-lg font-semibold">Front End:</h4>
        <div className="flex gap-4 mt-2">
          <img src={HTMLIcon} alt="HTML" className="w-10 h-10" />
          <img src={CSSIcon} alt="CSS" className="w-10 h-10" />
          <img src={JSIcon} alt="JavaScript" className="w-10 h-10" />
          <img src={ReactIcon} alt="React" className="w-10 h-10" />
          <img src={BootstrapIcon} alt="Bootstrap" className="w-10 h-10" />
      
          <img src={TailwindIcon} alt="Tailwind" className="w-10 h-10" />
        </div>
      </div>

           <div>
        <h4 className="text-lg font-semibold">Back End:</h4>
        <div className="flex gap-4 mt-2">
          <img src={PythonIcon} alt="Python" className="w-10 h-10" />
          <img src={MongoIcon} alt="MongoDB" className="w-10 h-10" />
          <img src={TsIcon} alt="TypeScript" className="w-10 h-10" />
          <img src={NodeIcon} alt="Node.js" className="w-10 h-10" />
        </div>
      </div>

         <div>
        <h4 className="text-lg font-semibold">Others:</h4>
        <div className="flex gap-4 mt-2">
          <img src={FigmaIcon} alt="Figma" className="w-10 h-10" />
          <img src={WordpressIcon} alt="WordPress" className="w-10 h-10" />
        </div>
      </div>
    </div>
  );
}
