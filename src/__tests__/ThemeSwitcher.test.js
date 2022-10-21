/* eslint-disable testing-library/no-node-access */

import { render, fireEvent } from '@testing-library/react';
import App from '../App';
import ThemeSwitcher from '../components/ThemeSwitcher';

test('color themes are switching properly', () => {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation(query => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });

  render(<App />);
  render(<ThemeSwitcher />);
  const app = document.querySelector('.dark');
  const themeSwitcher = document.querySelector('.theme-switcher');

  expect(app).toBeInTheDocument();
  expect(app).toHaveClass('dark');
  expect(themeSwitcher).toBeInTheDocument();

  fireEvent.click(themeSwitcher);

  expect(app).toHaveClass('light');
  expect(app).not.toHaveClass('dark');

  fireEvent.click(themeSwitcher);

  expect(app).toHaveClass('dark');
  expect(app).not.toHaveClass('light');
});
