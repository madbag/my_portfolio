import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Cards from '../Components/Cards/MainCard/Cards';

vi.mock('../Components/Cards/AboutCard/About', () => ({
    default: () => <div>About Section</div>,
}));
vi.mock('../Components/Cards/AboutCard/Experience', () => ({
    default: () => <div>Experience Section</div>,
}));
vi.mock('../Components/Cards/AboutCard/TechStack', () => ({
    default: () => <div>TechStack Section</div>,
}));
vi.mock('../Components/Cards/ProjectsCard/ProjectCard', () => ({
    default: ({ title }) => <div>{title}</div>,
}));
vi.mock('../Components/Cards/ProjectsCard/projectsData', () => ({
    default: [
        { title: "Project One", github: "https://github.com/madbag/one" },
        { title: "Project Two", github: "https://github.com/madbag/two" },
    ],
}));

describe('Cards Component', () => {
    it("renders only the Projects section when activeSection is 'Projects'", () => {
        render(<Cards activeSection="Projects" />);
        expect(screen.getByText("Project One")).toBeInTheDocument();
        expect(screen.getByText("Project Two")).toBeInTheDocument();
        expect(screen.queryByText("About Section")).not.toBeInTheDocument();
    });

    it("renders only the About section when activeSection is 'About'", () => {
        render(<Cards activeSection="About" />);
        expect(screen.getByText("About Section")).toBeInTheDocument();
        expect(screen.getByText("TechStack Section")).toBeInTheDocument();
        expect(screen.getByText("Experience Section")).toBeInTheDocument();
        expect(screen.queryByText("Project One")).not.toBeInTheDocument();
    });

    it("renders both About and Projects sections for any other activeSection", () => {
        render(<Cards activeSection="Home" />);
        expect(screen.getByText("About Section")).toBeInTheDocument();
        expect(screen.getByText("Project One")).toBeInTheDocument();
    });
});
