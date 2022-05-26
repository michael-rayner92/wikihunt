import { render, screen } from '@testing-library/react';
import Home from 'pages/index.page';

describe('Page: Home Test Suite', () => {
  it('renders a heading', () => {
    render(<Home />);

    const heading = screen.getByRole('heading', { name: /welcome to next\.js!/i });

    expect(heading).toBeInTheDocument();
  });
});
