import { render, fireEvent, screen } from '@testing-library/react';
import App from '../src/components/App';

test('renders Vite + React heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/Vite \+ React/i);
  expect(headingElement).toBeInTheDocument();
});

test('increments count when button is clicked', () => {
  render(<App />);
  const buttonElement = screen.getByText(/count is 0/i);
  fireEvent.click(buttonElement);
  expect(screen.getByText(/count is 1/i)).toBeInTheDocument();
});
