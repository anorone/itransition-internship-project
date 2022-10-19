/* eslint-disable testing-library/no-node-access */

import { render, fireEvent } from '@testing-library/react';
import App from '../App';
import ThemeSwitcher from '../components/ThemeSwitcher';

test('color themes are switching properly', () => {
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
