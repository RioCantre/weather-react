import { render, screen } from '@testing-library/react';
import App from './App';


test('renders Open-source link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Open-source/i);
  expect(linkElement).toBeTruthy();
});
