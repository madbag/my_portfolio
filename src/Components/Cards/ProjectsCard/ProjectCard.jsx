// ProjectCard.jsx
function GithubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
    </svg>
  );
}

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
      <div className="flex items-center justify-between gap-2">
        <h3 className="text-sm font-medium text-black dark:text-white">{title}</h3>
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${title} on GitHub`}
          className="shrink-0 text-black/30 dark:text-white/40 hover:text-black dark:hover:text-white transition-colors duration-200"
        >
          <GithubIcon />
        </a>
      </div>
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
    </div>
  );
}
