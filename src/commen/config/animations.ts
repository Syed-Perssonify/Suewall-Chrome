export const fadeInUp = {
  initial: { opacity: 0, y: 20, filter: "blur(8px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
  transition: { duration: 0.8, ease: [0.68, -0.55, 0.265, 1.55] as const },
};

export const fadeInBlur = {
  initial: { opacity: 0, y: 12, filter: "blur(8px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
  transition: { duration: 1.5, ease: [0.68, -0.55, 0.265, 1.55] as const },
};

export const textReveal = {
  initial: { opacity: 0, y: 8, filter: "blur(8px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
  transition: { duration: 0.6, ease: [0.68, -0.55, 0.265, 1.55] as const },
};

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const wordStagger = {
  animate: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};
