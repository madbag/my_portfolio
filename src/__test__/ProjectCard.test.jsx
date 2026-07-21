import { render, screen } from '@testing-library/react';
import ProjectCard from '../Components/Cards/ProjectsCard/ProjectCard';
import { describe, it, expect } from 'vitest';

describe('ProjectCard Component', () => {
    it("renders title, description and icon", () => {
        render(
            <ProjectCard
                icon="icon.svg"
                alt="My Project"
                title="My Project"
                description="A cool project"
                github="https://github.com/madbag/my-project"
            />
        );
        expect(screen.getByText("My Project")).toBeInTheDocument();
        expect(screen.getByText("A cool project")).toBeInTheDocument();
        expect(screen.getByAltText("My Project")).toHaveAttribute("src", "icon.svg");
    });

    it("always renders a Code link with the given github href", () => {
        render(
            <ProjectCard
                icon="icon.svg"
                alt="My Project"
                title="My Project"
                description="A cool project"
                github="https://github.com/madbag/my-project"
            />
        );
        expect(screen.getByRole("link", { name: "Code" })).toHaveAttribute(
            "href",
            "https://github.com/madbag/my-project"
        );
    });

    it("renders a Visit link when website is provided", () => {
        render(
            <ProjectCard
                icon="icon.svg"
                alt="My Project"
                title="My Project"
                description="A cool project"
                github="https://github.com/madbag/my-project"
                website="https://my-project.vercel.app/"
            />
        );
        expect(screen.getByRole("link", { name: "Visit" })).toHaveAttribute(
            "href",
            "https://my-project.vercel.app/"
        );
    });

    it("does not render a Visit link when website is not provided", () => {
        render(
            <ProjectCard
                icon="icon.svg"
                alt="My Project"
                title="My Project"
                description="A cool project"
                github="https://github.com/madbag/my-project"
            />
        );
        expect(screen.queryByRole("link", { name: "Visit" })).not.toBeInTheDocument();
    });
});