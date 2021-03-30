import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const animationGallery = () => {
const elements  =  [
  {
    container: document.querySelector('.gallery__container:nth-child(1) .photo__container'),
    section: document.querySelectorAll('.gallery__container:nth-child(1) .photo__container img, .nature__title'),
    animation: { scale:1.2, opacity: 0, stagger: 0.2, duration: 0.7 },
  },
  {
    container: document.querySelector('.gallery__container:nth-child(2) .photo__container'),
    section: document.querySelectorAll('.gallery__container:nth-child(2) .photo__container img, .portrait__title'),
    animation:  { x: -200, opacity: 0, stagger: 0.1, duration: 1.5 },
  },
  {
    container: document.querySelector('.gallery__container:nth-child(3) .photo__container'),
    section: document.querySelectorAll('.gallery__container:nth-child(3) .photo__container img, .city_title'),
    animation:  { x: 200, opacity: 0, stagger: 0.1, duration: 1.5 },
  },
]
 elements.forEach(cont => {
   gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: cont.container,
        start: "top center"
      },
    });
    tl.from(cont.section,  cont.animation)
  })
}