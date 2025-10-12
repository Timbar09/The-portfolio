const transitionValues = (duration, delay) => ({
  duration,
  delay,
  ease: [0.37, 0, 0.63, 1],
});

function makeAnimation(initial, animate, duration, delay) {
  const transition = transitionValues(duration, delay);
  return {
    initial,
    animate: { ...animate, transition },
  };
}

export const fadeInUp = (duration = 1, delay = 0) =>
  makeAnimation({ opacity: 0, y: 20 }, { opacity: 1, y: 0 }, duration, delay);

export const fadeInDown = (duration = 1, delay = 0) =>
  makeAnimation({ opacity: 0, y: -20 }, { opacity: 1, y: 0 }, duration, delay);

export const fadeInRight = (duration = 1, delay = 0) =>
  makeAnimation({ opacity: 0, x: -50 }, { opacity: 1, x: 0 }, duration, delay);

export const fadeInLeft = (duration = 1, delay = 0) =>
  makeAnimation({ opacity: 0, x: 50 }, { opacity: 1, x: 0 }, duration, delay);

export const tilt = (duration = 1, delay = 0) =>
  makeAnimation(
    { perspective: 1000, rotateX: 60, rotateY: 10, scale: 0.85 },
    { perspective: 1000, rotateX: 0, rotateY: 0, scale: 1 },
    duration,
    delay
  );

export const enter = (duration = 1, delay = 0) =>
  makeAnimation(
    { scale: 0, opacity: 0 },
    { scale: 1, opacity: 1 },
    duration,
    delay
  );

// PAGE TRANSITION VARIANTS

const appear = {
  initial: { opacity: 0 },
  enter: { opacity: 1, transition: { duration: 1 } },
  exit: { opacity: 1 },
};

const slideUp = {
  initial: { scaleY: 0 },
  enter: { scaleY: 0 },
  exit: {
    scaleY: 1,

    transition: { duration: 0.75, ease: [0.61, 1, 0.88, 1] },
  },
};

const dropBack = {
  initial: { scale: 1 },
  enter: { scale: 1 },
  exit: {
    scale: 0.9,
    transition: { duration: 0.75 },
  },
};

export const pageTransitionVariants = { appear, slideUp, dropBack };
export const animations = {
  fadeInUp,
  fadeInDown,
  fadeInRight,
  fadeInLeft,
  tilt,
  enter,
};
