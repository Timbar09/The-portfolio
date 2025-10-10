const transitionValues = (duration, delay) => ({
  type: "spring",
  duration,
  delay,
});

function makeAnimation(initial, animate, duration, delay) {
  const transition = transitionValues(duration, delay);
  return {
    initial,
    animate: { ...animate, transition },
  };
}

export const fadeInUp = (duration = 1, delay = 0) =>
  makeAnimation(
    { opacity: 0, top: 50 },
    { opacity: 1, top: 0 },
    duration,
    delay
  );

export const fadeInRight = (duration = 1, delay = 0) =>
  makeAnimation(
    { opacity: 0, left: -50 },
    { opacity: 1, left: 0 },
    duration,
    delay
  );

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

const opacity = {
  initial: { opacity: 0 },
  enter: { opacity: 1, transition: { duration: 1 } },
  exit: { opacity: 1 },
};

const slide = {
  initial: { scaleY: 0 },
  enter: { scaleY: 0 },
  exit: {
    scaleY: 1,

    transition: { duration: 1, ease: [0.61, 1, 0.88, 1] },
  },
};

const perspective = {
  initial: { rotateX: 0, scale: 1 },
  enter: { rotateX: 0, scale: 1 },
  exit: {
    rotateX: 20,
    scale: 0.9,
    transition: { duration: 1 },
  },
};

export const animations = { fadeInUp, fadeInRight, tilt, enter };
export const pageTransitionVariants = { opacity, slide, perspective };
