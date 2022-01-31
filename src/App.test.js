import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import Test from './Component/Test'

test('list contains 5 animals', () => {
  render(<App />);

  const listElement = screen.getByRole('list');
  const listItems = screen.getAllByRole('listitem');

  expect(listElement).toBeInTheDocument();
  expect(listElement).toHaveClass('animals');
  expect(listItems.length).toEqual(5);
});

test('renders', () => {
  render(<Test />);
  const linkElement = screen.getByText(/HEY THERE/i);
  expect(linkElement).toBeInTheDocument();
});
