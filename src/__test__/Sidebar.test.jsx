import { render, screen } from '@testing-library/react';
import Sidebar from '../Components/Sidebar/Sidebar';
import { describe, it, expect } from 'vitest';

describe('Sidebar Component', () => {
    it("renders the name and title", () => {
        render(<Sidebar />);
        expect(screen.getByText("Madhushree Boyle")).toBeInTheDocument();
        expect(screen.getByText("Full-Stack Developer")).toBeInTheDocument();
    });

    it("renders the Resume link", () => {
        render(<Sidebar />);
        const resumeLink = screen.getByRole("link", { name: "Resume" });
        expect(resumeLink).toHaveAttribute("target", "_blank");
        expect(resumeLink).toHaveAttribute("rel", "noopener noreferrer");
    });

    it("renders LinkedIn, GitHub and Email links", () => {
        render(<Sidebar />);
        expect(screen.getByRole("link", { name: "LinkedIn" })).toHaveAttribute(
            "href",
            "https://www.linkedin.com/in/madhushreeb/"
        );
        expect(screen.getByRole("link", { name: "GitHub" })).toHaveAttribute(
            "href",
            "https://github.com/madbag"
        );
        expect(screen.getByRole("link", { name: "Email" })).toHaveAttribute(
            "href",
            "mailto:boylemadhushree@gmail.com"
        );
    });

    it("renders the tech stack as plain text under the social links", () => {
        render(<Sidebar />);
        expect(screen.getByText(/React, TypeScript, Bootstrap/)).toBeInTheDocument();
        expect(screen.getByText(/Ruby on Rails, MongoDB, PostgreSQL, Active Admin/)).toBeInTheDocument();
        expect(screen.getByText(/Git, GitLab, WordPress/)).toBeInTheDocument();
    });
});
