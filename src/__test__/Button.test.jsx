import {render, screen} from '@testing-library/react';
import Button from '../Components/Button/Button';
import userEvent from '@testing-library/user-event';
import {describe, it, expect} from 'vitest';

describe('Button Component', () => {
    it("renders with given label",() => {
        render(<Button label="Click Me" href="https://example.com" />);
        expect(screen.getByRole("link",{name:"Click Me"})).toBeInTheDocument();
    });

    it("has correct href and target attributes",() => {
        render(<Button label ="Visit" href="https://example.com" />);
        const link = screen.getByRole("link", {name:"Visit"});
        expect(link).toHaveAttribute("href","https://example.com");
        expect(link).toHaveAttribute("target","_blank");
        expect(link).toHaveAttribute("rel","noopener noreferrer");
    });

    it("triggers navigation when clicked", async() => {
        const user = userEvent.setup();
        render(<Button label="Go" href="https://example.com" />);
        const link = screen.getByRole("link",{name:"Go"});
        await user.click(link);
        expect(link).toBeInTheDocument();
    })
})
