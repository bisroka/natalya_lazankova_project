import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const animationAboutMe = () => {
  console.log('dziala')
  gsap.registerPlugin(ScrollTrigger);
  const aboutMeTimeLine = gsap.timeline({
    scrollTrigger: {
      trigger: '.aboutme',
      start: "top center",
    },
  });
  
  aboutMeTimeLine.from(".aboutme__title, .aboutme article", {  opacity: 0, stagger: 0.2, duration: 2})
}