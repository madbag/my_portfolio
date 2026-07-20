import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import App from '../App';

vi.mock('../Components/Sidebar/Sidebar', () => ({
    default: () => <div>SidebarStub</div>,
}));
vi.mock('../Components/Cards/MainCard/Cards', () => ({
    default: () => <div>CardsStub</div>,
}));

describe('App Component', () => {
    it("renders the sidebar and main content", () => {
        render(<App />);
        expect(screen.getByText("SidebarStub")).toBeInTheDocument();
        expect(screen.getByText("CardsStub")).toBeInTheDocument();
    });
});