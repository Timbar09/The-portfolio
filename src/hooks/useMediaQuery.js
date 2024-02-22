import { useState, useEffect } from 'react';

const breakpointsUp = {
  md: '43.75em',
  lg: '56.25em',
  xlg: '90em',
};

const breakpointsDown = {
  sm: '43.6875em',
  md: '56.1875em',
  lg: '89.6875em',
};

export function useMediaQuery(breakpoint, direction = 'up') {
  const breakpoints = direction === 'up' ? breakpointsUp : breakpointsDown;
  const query = `(${direction === 'up' ? 'min' : 'max'}-width: ${
    breakpoints[breakpoint]
  })`;
  const [matches, setMatches] = useState(window.matchMedia(query).matches);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query);
    const documentChangeHandler = () => setMatches(mediaQueryList.matches);

    mediaQueryList.addEventListener('change', documentChangeHandler);

    return () => {
      mediaQueryList.removeEventListener('change', documentChangeHandler);
    };
  }, [query]);

  return matches;
}
