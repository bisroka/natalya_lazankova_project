import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const aboutMeTimeLine = gsap.timeline({
    scrollTrigger: {
      trigger: '.aboutme',
      start: "top bottom",
    },
  });

  aboutMeTimeLine.from(".aboutme__title, .aboutme article", {  opacity: 0, stagger: 0.2, duration: 1.3 })