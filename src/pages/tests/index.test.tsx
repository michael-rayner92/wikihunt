import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Home from '@pages/index.page';

jest.mock('@chakra-ui/react', () => ({
  ...jest.requireActual('@chakra-ui/react'),
  useBreakpointValue: jest.fn(() => undefined)
}));

describe('Page: Home Test Suite', () => {
  it('renders the opening instructions and closes modal when the start button is clicked', async () => {
    render(<Home />);

    // Check for welcome heading
    const welcomeHeading = screen.getByRole('banner');
    const welcomeText = within(welcomeHeading).getByText(/Welcome to Wikihunt/i);
    expect(welcomeText).toBeInTheDocument();

    // Click Let's Play button
    const startBtn = screen.getByRole('button', { name: /let's play/i });
    userEvent.click(startBtn);

    // Check main content has rendered
    const targetHeading = await screen.findByRole('heading', { name: /Kevin Bacon/i, level: 2 });
    expect(targetHeading).toBeInTheDocument();
  });
});
