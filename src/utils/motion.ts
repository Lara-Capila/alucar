export const slideIn = ({
  direction, type, delay, duration,
}:{
  type: 'tween' | 'spring' | 'inertia'
  delay?: number
  duration?: number
  direction?: 'up' | 'down' | 'left' | 'right'
}) => {
  const directionIsRigth = direction === 'right' ? '150%' : 0;
  const directionIsUp = direction === 'down' ? '100%' : 0;

  return {
    hidden: {
      x: direction === 'left' ? '-100%' : directionIsRigth,
      y: direction === 'up' ? '100%' : directionIsUp,
    },
    show: {
      x: 0,
      y: 0,
      transition: {
        type,
        delay,
        duration,
        ease: 'easeOut',
      },
    },
  };
};

export const staggerContainer = ({ staggerChildren, delayChildren }: {
  delayChildren?: number
  staggerChildren?: number
}) => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

export const textVariant = ({ delay }: { delay?: number }) => ({
  hidden: {
    y: 50,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      duration: 1.25,
      delay,
    },
  },
});

export const navVariants = {
  hidden: {
    opacity: 0,
    y: -50,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 140,
    },
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 80,
      delay: 1,
    },
  },
};
