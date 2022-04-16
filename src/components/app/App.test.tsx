import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  console.log(screen);
  const linkElement = screen.getByText(/Preparing the survey/i); // Loading screen first

  expect(linkElement).toBeInTheDocument();
});
