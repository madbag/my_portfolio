import CrochetIcon from "../../../assets/Crochet.svg";
import FireIcon from "../../../assets/Fire.svg";
import HomeOfficeIcon from "../../../assets/Home Office.svg";
import QuotesIcon from "../../../assets/Quotes.png";
import WeatherIcon from "../../../assets/The Weather Channel.svg";

const projects = [
  {
    icon: HomeOfficeIcon,
    alt: "Invoice Generator",
    title: "Invoice Generatortitle",
    description: "A website to create, organise and manage invoice",
    github: "https://github.com/madbag/Invoice-Generator",
    website: "https://ivgen.netlify.app/",
    techStack: ["React", "TailwindCSS", "Typescript", "MongoDB", "NodeJS"],
  },
  {
    icon: CrochetIcon,
    alt: "crochet-icon",
    title: "UB Arthouse",
    description: "A crochet website that offers handmade products.",
    github: "https://github.com/madbag/ubarthouse",
    website: "https://ubarthouse.vercel.app/",
    techStack: ["React", "TailwindCSS", "NextJS", "NodeJS", "Typescript"],
  },
  {
    icon: WeatherIcon,
    alt: "WeatherAI",
    title: "AI Weather Forecast",
    description: "AI-powered weather updates with Gen Z-style summaries",
    github: "https://github.com/madbag/WeatherForecastApp",
    website: "https://aiweatherforecast.netlify.app/",
    techStack: ["React", "TailwindCSS", "AI API", "NodeJS" ],
  },
  {
    icon: QuotesIcon,
    alt: "Javascript30",
    title: "Random Quotes",
    description: "A Tailwind-based app showcasing bite-sized wisdom.",
    github: "https://github.com/madbag/random_quotes",
    website: "https://random-quotes-project.vercel.app/",
    techStack: ["React", "TailwindCSS", "Framer Motion"],
  },
  {
    icon: FireIcon,
    alt: "FightTheFireIcon",
    title: "Fight the Fire",
    description: "A fast-paced, timer-based web game",
    github: "https://github.com/madbag/fight-the-fire",
    website: "https://madbag.github.io/fight-the-fire/",
    techStack: ["HTML", "CSS", "Javascript", "Object Oriented Programming"],
  },
  {
    icon: HomeOfficeIcon,
    alt: "FreelanceIcon",
    title: "Freelance",
    description: "A collection of projects done for ad agencies",
    github: "https://github.com/madbag/freelance",
    techStack: ["WordPress", "Shopify", "Figma", "HTML"],
  },
];

export default projects;
