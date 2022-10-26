import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';

beforeEach(() => {
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
});

test.each(
  [
    [
      'Create, manage, share', 
      'Создавай и делись',
    ],
    [
      'everything from a single place', 
      'всё собрано в одном месте',
    ],
    [
      'Recently added', 
      'Новинки',
    ],
    [
      'Largest collections', 
      'Крупнейшие коллекции',
    ],
    [
      'Collecting means being able to live in the past. (Albert Camus)',
      'Коллекционировать — значит уметь жить прошлым. (Альбер Камю)',
    ]
  ]
)('languages are switching properly', (phrase, translation) => {
  render(<App />);
  const element = screen.getByText(phrase);
  expect(element).toBeInTheDocument();

  const ruButton = screen.getByText('RU');
  const enButton = screen.getByText('EN');

  fireEvent.click(ruButton);
  expect(element).toHaveTextContent(translation);
  fireEvent.click(enButton);
  expect(element).toHaveTextContent(phrase);
});
