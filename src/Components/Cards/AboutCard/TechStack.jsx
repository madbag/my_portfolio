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
    <section>
      <h2 className="text-sm font-medium text-black dark:text-white mb-4">Tech Stack</h2>
      <div className="flex flex-col gap-4">
        {Object.entries(stack).map(([category, icons]) => (
          <div key={category}>
            <p className="text-sm text-black/30 dark:text-white/40 mb-2">{category}</p>
            <div className="flex flex-wrap gap-3 items-center">
              {icons.map(({ src, alt }) => (
                <img key={alt} src={src} alt={alt} className="w-6 h-6" />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
