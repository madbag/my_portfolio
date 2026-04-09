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

const stack = {
  Frontend: [
    { src: HTMLIcon, alt: "HTML" },
    { src: CSSIcon, alt: "CSS" },
    { src: JSIcon, alt: "JavaScript" },
    { src: ReactIcon, alt: "React" },
    { src: TsIcon, alt: "TypeScript" },
    { src: BootstrapIcon, alt: "Bootstrap" },
  ],
  Backend: [
    { src: PythonIcon, alt: "Python" },
    { src: MongoIcon, alt: "MongoDB" },
    { src: NodeIcon, alt: "Node.js" },
  ],
  Others: [
    { src: GitIcon, alt: "Git" },
    { src: WordpressIcon, alt: "WordPress" },
  ],
};

export default function TechStack() {
  return (
    <div className="bg-(--secondary-text-color) text-(--primary-text-color) rounded-3xl flex flex-col gap-3 w-full p-5">
      <h3 className="text-xl font-semibold">Tech Stack:</h3>
      {Object.entries(stack).map(([category, icons]) => (
        <div key={category}>
          <p className="text-sm text-(--hover-text-color) mb-2">
            {category}:
          </p>
          <div className="flex flex-wrap gap-3 items-center">
            {icons.map(({ src, alt }) => (
              <img key={alt} src={src} alt={alt} className="w-8 h-8" />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
