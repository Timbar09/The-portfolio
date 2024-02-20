import { render, screen } from '@testing-library/react';
import { useMediaQuery } from '../../src/hooks/useMediaQueries';

// Test component that uses the hook
function TestComponent() {
  const matches = useMediaQuery('(min-width: 600px)');
  return <div>{matches ? 'Matches' : 'Does not match'}</div>;
}

// Mock window.matchMedia
globalThis.matchMedia = (query) => ({
  matches: false,
  media: query,
  onchange: null,
  addEventListener: () => {},
  removeEventListener: () => {},
  dispatchEvent: () => {},
});

test('useMediaQuery returns false when the media query does not match', () => {
  render(<TestComponent />);
  expect(screen.getByText('Does not match')).toBeInTheDocument();
});

test('useMediaQuery returns true when the media query matches', () => {
  globalThis.matchMedia = (query) => ({
    matches: true,
    media: query,
    onchange: null,
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => {},
  });

  render(<TestComponent />);
  expect(screen.getByText('Matches')).toBeInTheDocument();
});
