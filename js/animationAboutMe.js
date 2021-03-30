import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const animationAboutMe = () => {
  gsap.registerPlugin(ScrollTrigger);
  const aboutMeTimeLine = gsap.timeline({
    scrollTrigger: {
      trigger: '.aboutme',
      start: "top center",
    },
  });
  
  aboutMeTimeLine.from(".aboutme__title, .aboutme article", {  opacity: 0, stagger: 0.2, duration: 2})
}