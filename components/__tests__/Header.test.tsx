import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Header from '../Header';
import styles from "../styles/Home.module.css";

describe('Header', () => {
  it('renders the header', () => {
    render(<Header />)

    expect(screen.getByRole('banner')).toBeVisible();
  });

  it('renders the header', () => {
    render(<Header />)

    expect(screen.getByRole('banner')).toBeVisible();
  });

  it('has header class when not scrolled', () => {
    render(<Header />)

    expect(screen.getByRole('banner')).toHaveClass(styles.header);
  });

  it('has header class when scrolled 150px', async () => {
    render(<Header />)

    fireEvent.scroll(window, { target: { scrollY: 150 } })

    expect(screen.getByRole('banner')).toHaveClass(styles.scroll);
  });

  it('has header class when scrolled less then 150px', async () => {
    render(<Header />)

    fireEvent.scroll(window, { target: { scrollY: 149 } })

    expect(screen.getByRole('banner')).toHaveClass(styles.header);
  });

});