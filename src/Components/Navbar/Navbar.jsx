import { useState } from "react";
import Image from "../../assets/Madhushree (3).svg";
import DarkMode from "./DarkMode";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { label: "Home", section: "Home" },
  { label: "Projects", section: "Projects" },
  {
    label: "Resume",
    href: "https://drive.google.com/file/d/1_QI04Sw1lz94SBOGLbzVa-1lm5NqeJcY/view?usp=sharing",
    external: true,
    section: "Resume",
  },
  { label: "About", section: "About" },
  {
    label: "Contact",
    href: "mailto:boylemadhushree@gmail.com",
    section: "Contact",
  },
];

// middle navpill component for both desktop and mobile
function NavItem({ item, activeSection, setActiveSection, setIsOpen, mobile = false }) {
  const baseItemClass =
    "px-4 py-2 cursor-pointer rounded-full hover:text-(--hover-text-color) transition-colors";
  const isActive = item.section && activeSection === item.section;
  const inactiveText = mobile ? "text-(--primary-text-color)" : "text-(--primary-text-color)";
  const className = `${baseItemClass} ${isActive ? "bg-(--secondary-text-color) text-(--primary-text-color)" : inactiveText}`;

  const handleClick = () => {
    if (!item.href) setActiveSection(item.section);
    setIsOpen(false);
  };

  return (
    <div className={className} onClick={handleClick}>
      {item.href ? (
        <a
          href={item.href}
          {...(item.external
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
          className="no-underline text-inherit block w-full"
        >
          {item.label}
        </a>
      ) : (
        item.label
      )}
    </div>
  );
}

export default function Navbar({ activeSection, setActiveSection }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full backdrop-blur-md py-4 px-4 transition-all duration-300">
      <div className="max-w-325 mx-auto grid grid-cols-3 items-center">
        {/* Logo */}
        <div
          onClick={() => setActiveSection("Home")}
          className="cursor-pointer justify-self-start"
        >
          <img src={Image} alt="My name" className="w-35 sm:w-50" />
        </div>

        {/* Desktop Nav Pill */}
        <div className="hidden sm:flex justify-self-center bg-(--middle-nav-bar) text-(--primary-text-color) px-1.5 py-1.5 rounded-full items-center border border-white/10">
          {NAV_ITEMS.map((item) => (
            <NavItem
              key={item.label}
              item={item}
              activeSection={activeSection}
              setActiveSection={setActiveSection}
              setIsOpen={setIsOpen}
            />
          ))}
        </div>

        {/* Dark Mode / Mobile Toggle */}
        <div className="col-start-3 justify-self-end flex items-center">
          <div className="hidden sm:block">
            <DarkMode />
          </div>
          <button
            className="sm:hidden p-2 text-(--primary-text-color)"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="absolute top-full left-4 right-4 p-4 bg-(--background-color) text-(--primary-text-color) backdrop-blur-lg rounded-2xl flex flex-col gap-3 shadow-xl border border-white/10 sm:hidden">
          {NAV_ITEMS.map((item) => (
            <NavItem
              key={item.label}
              item={item}
              activeSection={activeSection}
              setActiveSection={setActiveSection}
              setIsOpen={setIsOpen}
              mobile
            />
          ))}
          <hr className="border-(--primary-text-color) opacity-20" />
          <div className="flex justify-between items-center px-4">
            <span className="text-(--primary-text-color) text-sm font-medium">
              Theme
            </span>
            <DarkMode />
          </div>
        </div>
      )}
    </nav>
  );
}
