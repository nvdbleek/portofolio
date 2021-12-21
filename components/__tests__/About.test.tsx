import { render, screen } from '@testing-library/react';
import About from '../About';

describe('About', () => {
  it('renders the heading', () => {
    render(<About />);

    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('About Me');
  });

  it('renders responsibilities', () => {
    render(<About />);

    expect(screen.getByText('My responsibilities include:')).toBeVisible();
    expect(screen.getAllByRole('listitem').length).toBe(9);
  });
});
