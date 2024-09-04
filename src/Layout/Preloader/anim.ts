type OpacityTransition = {
  duration: number,
  delay: number,
};

type SlideUpTransition = {
  duration: number,
  ease: [number, number, number, number],
  delay: number,
};

type AnimationState = {
  opacity?: number,
  top?: number | string,
  transition?: OpacityTransition | SlideUpTransition,
};

export const opacity: { initial: AnimationState, enter: AnimationState } = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 0.75,
    transition: { duration: 1, delay: 0.2 },
  },
};

export const slideUp: { initial: AnimationState, exit: AnimationState } = {
  initial: {
    top: 0,
  },
  exit: {
    top: "-100vh",
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 },
  },
};
