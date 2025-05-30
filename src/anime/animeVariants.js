
import anime from 'animejs';

export const animeInVariants = {
  fadeInUp: (el) =>
    anime({
      targets: el,
      translateY: [50, 0],
      opacity: [0, 1],
      duration: 700,
      easing: 'easeOutQuad',
    }),
  fadeInLeft: (el) =>
    anime({
      targets: el,
      translateX: [-50, 0],
      opacity: [0, 1],
      duration: 700,
      easing: 'easeOutQuad',
    }),
  fadeInRight: (el) =>
    anime({
      targets: el,
      translateX: [50, 0],
      opacity: [0, 1],
      duration: 700,
      easing: 'easeOutQuad',
    }),
  scaleUp: (el) =>
    anime({
      targets: el,
      scale: [0.8, 1],
      opacity: [0, 1],
      duration: 600,
      easing: 'easeOutBack',
    }),
};

export const animeOutVariants = {
  fadeInUp: (el) =>
    anime({
      targets: el,
      translateY: [0, -30],
      opacity: [1, 0],
      duration: 600,
      easing: 'easeInQuad',
    }),
  fadeInLeft: (el) =>
    anime({
      targets: el,
      translateX: [0, -50],
      opacity: [1, 0],
      duration: 600,
      easing: 'easeInQuad',
    }),
  fadeInRight: (el) =>
    anime({
      targets: el,
      translateX: [0, 50],
      opacity: [1, 0],
      duration: 600,
      easing: 'easeInQuad',
    }),
  scaleUp: (el) =>
    anime({
      targets: el,
      scale: [1, 0.8],
      opacity: [1, 0],
      duration: 500,
      easing: 'easeInBack',
    }),
};
