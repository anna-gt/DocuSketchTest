import { render, screen } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom';

test('renders learn vite ', () => {
  render(<App />);
  const btn = screen.getByTestId('btn');
	screen.debug();
  expect(btn).toBeInTheDocument();
});