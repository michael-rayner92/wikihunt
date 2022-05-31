import { render, screen, waitForElementToBeRemoved, within } from '@testing-library/react';
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

  describe('After clicking the start button', () => {
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
  });

  describe('After selecting a starting page option', () => {
    it('should load the page data for the selected article', async () => {
      renderPage();

      // Click start on the starting information modal
      const startBtn = screen.getByRole('button', { name: /let's play/i });
      userEvent.click(startBtn);

      // Wait for loading spinner to leave
      await waitForElementToBeRemoved(() => screen.queryByTestId('loading-pages-spinner'));

      // Select a list item and check it shows are selected
      const listItem = screen.getByTestId(/random-pages-item-random page 2/i);
      userEvent.click(listItem);

      // Check Article Viewer component has rendered with correct data
      const articleLinkList = await screen.findByRole('list', { name: /article-link-list/i });
      const articleLinkListTitle = screen.getByTestId('active-link-list-title');
      expect(articleLinkList).toBeInTheDocument();
      expect(articleLinkListTitle).toBeInTheDocument();
    });

    it('should update the article tracker progress and counters', async () => {
      renderPage();

      // Click start on the starting information modal
      const startBtn = screen.getByRole('button', { name: /let's play/i });
      userEvent.click(startBtn);

      // Wait for loading spinner to leave
      await waitForElementToBeRemoved(() => screen.queryByTestId('loading-pages-spinner'));

      // Select a list item and check it shows are selected
      const listItem = screen.getByTestId(/random-pages-item-random page 2/i);
      userEvent.click(listItem);

      // Wait for state to be updated
      await screen.findByRole('list', { name: /article-link-list/i });

      // Check link counter has updated to 1
      const linkCount = screen.getByRole('heading', { level: 2, name: '1 / 6' });
      expect(linkCount).toBeInTheDocument();

      // Check article tracker has updated step 1 to completed
      const articleTrackerStep1 = screen.getByTestId(/article-tracker-step-article 1/i);
      expect(articleTrackerStep1).toBeInTheDocument();
      expect(within(articleTrackerStep1).getByText(/random page 2/i)).toBeInTheDocument();
    });
  });
});
