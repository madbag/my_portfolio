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
    <div className="card bg-(--secondary-text-color) text-(--primary-text-color) flex flex-col rounded-3xl items-start w-full p-5">
      <img src={icon} alt={alt} className="w-17.5 h-17.5 object-cover" />
      <h3 className="text-xl md:text-2xl font-semibold mt-4">{title}</h3>
      <p className="text-base mt-1 mb-4 leading-normal text-(--hover-text-color)">
        {description}
      </p>
      <div className="flex flex-row gap-2.5">
        <Button href={github} label="Github" />
        {website && <Button href={website} label="Website" />}
      </div>
    </div>
  );
}
