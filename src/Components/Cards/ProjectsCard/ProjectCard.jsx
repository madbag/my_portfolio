// ProjectCard.jsx
import Button from "../Button/Button";


export default function ProjectCard({
  icon,
  alt,
  title,
  description,
  github,
  website,
}) {
  return (
    <div className="group w-[240px]">
      <div className="w-[240px] h-[240px] flex items-center justify-center bg-black/[0.04] mb-3 group-hover:opacity-70 transition-opacity duration-200">
        <img src={icon} alt={alt} className="w-16 h-16 object-contain" />
      </div>
      <h3 className="text-sm font-medium text-black">{title}</h3>
      <p className="text-sm text-black/40 mt-0.5 mb-1.5 leading-snug">
        {description}
      </p>
      <div className="flex items-center gap-1.5">
        <Button href={github} label="Code" />
        {website && (
          <>
            <span className="text-sm text-black/30">,</span>
            <Button href={website} label="Visit" />
          </>
        )}
      </div>
    </div>
  );
}
