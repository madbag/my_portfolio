const experience = [
  {
    role: "Full Stack Developer - Intern",
    place: "Gaddr",
    period: "October 2025 – January 2026",
  },
  {
    role: "Mobile App Developer - Volunteer",
    place: "Xounds",
    period: "August 2024 – October 2024",
  },
  {
    role: "Assistant Teacher",
    place: "Christ Church School",
    period: "March 2018 – December 2021",
  },
];

export default function Experience() {
  return (
    <section>
      <h2 className="text-sm font-medium text-black dark:text-white mb-4">Experience</h2>
      <div className="flex flex-col">
        {experience.map((item, index) => (
          <div key={index} className="flex gap-4">
            <div className="flex flex-col items-center">
              <div className="w-2 h-2 rounded-full bg-black dark:bg-white mt-1.5 shrink-0" />
              {index < experience.length - 1 && (
                <div className="w-px flex-1 bg-black/10 dark:bg-white/20 my-1" />
              )}
            </div>
            <div className="pb-5">
              <p className="font-medium text-sm text-black dark:text-white leading-tight">{item.role}</p>
              <p className="text-sm text-black/40 dark:text-white/40">{item.place}</p>
              <p className="text-xs text-black/30 dark:text-white/40 mt-0.5">{item.period}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
