import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const contactTimeLine = gsap.timeline({
    scrollTrigger: {
      trigger: '.contact',
      start: "center bottom",
    },
  });

  contactTimeLine.from(".contact, .footer", {  opacity: 0, stagger: 0.5, duration: 1.3 })