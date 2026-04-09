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
    <div className="bg-(--secondary-text-color) text-(--primary-text-color) rounded-xl sm:rounded-4xl p-4 sm:p-6">
      <h3 className="text-xl font-semibold mb-4">Experience:</h3>
      <div className="flex flex-col">
        {experience.map((item, index) => (
          <div key={index} className="flex gap-4">
            {/* Dot + line */}
            <div className="flex flex-col items-center">
              <div className="w-2.5 h-2.5 rounded-full bg-(--primary-text-color) mt-1 shrink-0" />
              {index < experience.length - 1 && (
                <div className="w-px flex-1 bg-(--primary-text-color) opacity-20 my-1" />
              )}
            </div>
            {/* Content */}
            <div className="pb-5">
              <p className="font-semibold text-base leading-tight">{item.role}</p>
              <p className="text-sm text-(--hover-text-color)">{item.place}</p>
              <p className="text-xs text-(--hover-text-color) mt-0.5">{item.period}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
