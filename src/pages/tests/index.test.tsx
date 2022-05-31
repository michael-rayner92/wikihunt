import { render, screen } from '@testing-library/react';
import Home from '@pages/index.page';

jest.mock('@chakra-ui/react', () => ({
  ...jest.requireActual('@chakra-ui/react'),
  useBreakpointValue: jest.fn(() => undefined)
}));

describe('Page: Home Test Suite', () => {
  it('renders a heading', () => {
    render(<Home />);

    const heading = screen.getByRole('heading', { name: /WikiHunt 🔎/i, level: 1 });
    const targetHeading = screen.getByRole('heading', { name: /Kevin Bacon/i, level: 2 });

    expect(heading).toBeInTheDocument();
    expect(targetHeading).toBeInTheDocument();
  });
});
