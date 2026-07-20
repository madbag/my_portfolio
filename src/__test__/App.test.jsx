import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import App from '../App';

vi.mock('../Components/Footer/Footer', () => ({
    default: () => <div>FooterStub</div>,
}));
vi.mock('../Components/Navbar/Navbar', () => ({
    default: ({ activeSection, setActiveSection }) => (
        <button onClick={() => setActiveSection("Projects")}>
            NavbarStub-{activeSection}
        </button>
    ),
}));
vi.mock('../Components/Cards/MainCard/Cards', () => ({
    default: ({ activeSection }) => <div>Cards-{activeSection}</div>,
}));

beforeEach(() => {
    localStorage.clear();
});

describe('App Component', () => {
    it("defaults to the Home section when nothing is saved", () => {
        render(<App />);
        expect(screen.getByText("Cards-Home")).toBeInTheDocument();
    });

    it("restores the saved active section from localStorage on mount", () => {
        localStorage.setItem("activeSection", "About");
        render(<App />);
        expect(screen.getByText("Cards-About")).toBeInTheDocument();
    });

    it("persists the active section to localStorage when it changes", async () => {
        const user = userEvent.setup();
        render(<App />);

        await user.click(screen.getByRole("button"));

        expect(screen.getByText("Cards-Projects")).toBeInTheDocument();
        expect(localStorage.getItem("activeSection")).toBe("Projects");
    });
});
