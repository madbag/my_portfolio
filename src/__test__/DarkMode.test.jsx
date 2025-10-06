import {render, screen} from '@testing-library/react';
import DarkMode from '../Components/Navbar/DarkMode';   
import userEvent from '@testing-library/user-event';
import {describe, it, expect, beforeEach} from 'vitest';
import { button } from 'framer-motion/client';

beforeEach(() => {
    localStorage.clear();
    document.documentElement.removeAttribute('data-theme');
})

describe('DarkMode Component', () => {
    it("renders with default mode (light mode)", () => {
        render(<DarkMode />);
        const button = screen.getByRole("button");
        expect(button).toHaveTextContent("🌙 Dark Mode");
    });

    it("toggles dark mode on click", async () => {
        const user = userEvent.setup();
        render(<DarkMode />);
        const button = screen.getByRole("button");

        await user.click(button);
        expect(button).toHaveTextContent("☀️ Light Mode");
        expect(localStorage.getItem("theme")).toBe("dark");
        expect(document.documentElement.getAttribute("data-theme")).toBe("dark");

        await user.click(button);
        expect(button).toHaveTextContent("🌙 Dark Mode");
        expect(localStorage.getItem("theme")).toBe("light");
        expect(document.documentElement.getAttribute("data-theme")).toBe("light");
    })

    it("respects saved theme from localStorage", () => {
        localStorage.setItem("theme", "dark");
        render(<DarkMode />);
        const button = screen.getByRole("button");
    })

})