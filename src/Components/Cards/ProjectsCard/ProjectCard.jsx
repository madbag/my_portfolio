// ProjectCard.jsx
import Button from "../Button/Button";


export default function ProjectCard({
  icon,
  alt,
  title,
  description,
  github,
  website,
  techStack,
}) {
  const imageBlock = (
    <div className="relative w-[240px] h-[240px] flex items-center justify-center bg-black/[0.04] dark:bg-white/[0.06] mb-3 group-hover:opacity-70 transition-opacity duration-200">
      <img src={icon} alt={alt} className="w-16 h-16 object-contain" />
      {website && (
        <span className="absolute top-2 right-2 w-6 h-6 flex items-center justify-center rounded-full bg-white dark:bg-neutral-950 text-black dark:text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-3.5 h-3.5"
          >
            <path d="M7 17 17 7" />
            <path d="M7 7h10v10" />
          </svg>
        </span>
      )}
    </div>
  );

  return (
    <div className="group w-[240px]">
      {website ? (
        <a
          href={website}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Visit ${title}`}
        >
          {imageBlock}
        </a>
      ) : (
        imageBlock
      )}
      <h3 className="text-sm font-medium text-black dark:text-white">{title}</h3>
      <p className="text-sm text-black/40 dark:text-white/40 mt-0.5 mb-1.5 leading-snug">
        {description}
      </p>
      {techStack && techStack.length > 0 && (
        <div className="flex flex-wrap gap-1 mb-1.5">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="text-xs text-black/40 dark:text-white/40 bg-black/[0.04] dark:bg-white/[0.06] px-1.5 py-0.5 rounded"
            >
              {tech}
            </span>
          ))}
        </div>
      )}
      <div className="flex items-center gap-1.5">
        <Button href={github} label="github" />
      </div>
    </div>
  );
}
