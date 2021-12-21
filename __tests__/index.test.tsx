import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../pages/index';

describe('Home', () => {
  it('renders About Me', () => {
    render(<Home />)

    expect(screen.getByText('About Me')).toBeVisible();
    expect(screen.getByText('My responsibilities include:')).toBeVisible();
  });
  it('renders My Skills', () => {
    render(<Home />)

    expect(screen.getByText('My Technical Skills')).toBeVisible();
  });
});