import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Cards from '../Components/Cards/MainCard/Cards';

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
    it("renders the Projects grid", () => {
        render(<Cards />);
        expect(screen.getByText("Project One")).toBeInTheDocument();
        expect(screen.getByText("Project Two")).toBeInTheDocument();
    });

    it("renders a copyright footer", () => {
        render(<Cards />);
        expect(screen.getByText(/Madhushree Boyle/)).toBeInTheDocument();
    });
});
