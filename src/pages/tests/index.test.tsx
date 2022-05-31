import { render, screen, waitFor, waitForElementToBeRemoved, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { PageManagerProvider } from '@context/PageManagerContext';
import Home from '@pages/index.page';

jest.mock('@chakra-ui/react', () => ({
  ...jest.requireActual('@chakra-ui/react'),
  useBreakpointValue: jest.fn(() => undefined)
}));

const renderPage = () => {
  render(
    <PageManagerProvider>
      <Home />
    </PageManagerProvider>
  );
};

describe('Page: Home Test Suite', () => {
  describe('When rendering the page for the first time and clicking the start button', () => {
    it('should render the opening instructions and closes modal when the start button is clicked', async () => {
      renderPage();

      // Check for starting information modal
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

  describe('After clicking the start button and selecting a starting page option', () => {
    it('should load a list of 5 starting options', async () => {
      renderPage();

      // Click start on the starting information modal
      const startBtn = screen.getByRole('button', { name: /let's play/i });
      userEvent.click(startBtn);

      // Wait for loading spinner to leave
      await waitForElementToBeRemoved(() => screen.queryByTestId('loading-pages-spinner'));

      const startingPageHeading = screen.getByText(/starting page/i);
      expect(startingPageHeading).toBeInTheDocument();

      // Check for 5 list items
      const randomPagesList = await screen.findByRole('list', { name: 'random-pages' });
      const listItems = within(randomPagesList).getAllByRole('listitem');
      expect(listItems).toHaveLength(5);
    });

    it('should highlight the selected option', async () => {
      renderPage();

      // Click start on the starting information modal
      const startBtn = screen.getByRole('button', { name: /let's play/i });
      userEvent.click(startBtn);

      // Wait for loading spinner to leave
      await waitForElementToBeRemoved(() => screen.queryByTestId('loading-pages-spinner'));

      // Select a list item and check it shows are selected
      const listItem = screen.getByTestId(/random-pages-item-random page 2/i);
      userEvent.click(listItem);
      await waitFor(() => expect(listItem).toHaveAttribute('aria-selected', 'true'));
    });
  });
});
