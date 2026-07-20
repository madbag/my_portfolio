import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import Navbar from '../Components/Navbar/Navbar';

vi.mock('../Components/Navbar/DarkMode', () => ({
    default: () => <div>DarkModeStub</div>,
}));

describe('Navbar Component', () => {
    it("renders all nav items", () => {
        render(<Navbar activeSection="Home" setActiveSection={vi.fn()} />);
        expect(screen.getByText("Home")).toBeInTheDocument();
        expect(screen.getByText("Projects")).toBeInTheDocument();
        expect(screen.getByText("Resume")).toBeInTheDocument();
        expect(screen.getByText("About")).toBeInTheDocument();
        expect(screen.getByText("Contact")).toBeInTheDocument();
    });

    it("calls setActiveSection when a nav item without an href is clicked", async () => {
        const user = userEvent.setup();
        const setActiveSection = vi.fn();
        render(<Navbar activeSection="Home" setActiveSection={setActiveSection} />);

        await user.click(screen.getByText("Projects"));
        expect(setActiveSection).toHaveBeenCalledWith("Projects");
    });

    it("does not call setActiveSection when an external link item is clicked", async () => {
        const user = userEvent.setup();
        const setActiveSection = vi.fn();
        render(<Navbar activeSection="Home" setActiveSection={setActiveSection} />);

        await user.click(screen.getByText("Resume"));
        expect(setActiveSection).not.toHaveBeenCalled();
    });

    it("renders external nav links with target and rel attributes", () => {
        render(<Navbar activeSection="Home" setActiveSection={vi.fn()} />);
        const resumeLink = screen.getByRole("link", { name: "Resume" });
        expect(resumeLink).toHaveAttribute("target", "_blank");
        expect(resumeLink).toHaveAttribute("rel", "noopener noreferrer");
    });

    it("highlights the active section", () => {
        render(<Navbar activeSection="Projects" setActiveSection={vi.fn()} />);
        const projectsItem = screen.getByText("Projects").closest("div");
        expect(projectsItem).toHaveClass("bg-(--secondary-text-color)");
    });

    it("does not highlight inactive sections", () => {
        render(<Navbar activeSection="Projects" setActiveSection={vi.fn()} />);
        const homeItem = screen.getByText("Home").closest("div");
        expect(homeItem).not.toHaveClass("bg-(--secondary-text-color)");
    });

    it("toggles the mobile menu when the hamburger button is clicked", async () => {
        const user = userEvent.setup();
        render(<Navbar activeSection="Home" setActiveSection={vi.fn()} />);

        expect(screen.queryByText("Theme")).not.toBeInTheDocument();

        const toggleButton = screen.getByRole("button");
        await user.click(toggleButton);
        expect(screen.getByText("Theme")).toBeInTheDocument();

        await user.click(toggleButton);
        expect(screen.queryByText("Theme")).not.toBeInTheDocument();
    });

    it("closes the mobile menu after selecting a nav item", async () => {
        const user = userEvent.setup();
        render(<Navbar activeSection="Home" setActiveSection={vi.fn()} />);

        await user.click(screen.getByRole("button"));
        expect(screen.getByText("Theme")).toBeInTheDocument();

        const projectsItems = screen.getAllByText("Projects");
        await user.click(projectsItems[projectsItems.length - 1]);
        expect(screen.queryByText("Theme")).not.toBeInTheDocument();
    });
});
