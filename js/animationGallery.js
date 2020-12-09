import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const galleryTimeLine1 = gsap.timeline({
    scrollTrigger: {
      trigger: '.photo__container1',
      start: "center bottom",
    //   pin: true,
    },
  });

  galleryTimeLine1.from(".photo__container1 img, .nature__title", { scale:1.2, opacity: 0, stagger: 0.2, duration: 0.7 })

  const galleryTimeLine2 = gsap.timeline({
    scrollTrigger: {
      trigger: '.photo__container2',
      start: "center bottom",
    },
  });

  galleryTimeLine2.from(".photo__container2 img, .portraits__title", { x: -200, opacity: 0, stagger: 0.1, duration: 1.5 })

  const galleryTimeLine3 = gsap.timeline({
    scrollTrigger: {
      trigger: '.photo__container3',
      start: "center bottom",
    },
  });

  galleryTimeLine3.from(".photo__container3 img, .city__title", { x: 200, opacity: 0, stagger: 0.1, duration: 1.5 })