import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const headerTimeLine = gsap.timeline({
    defaults: {
        duration: 1,
    },
})


headerTimeLine.from('.header__title', {y: -50, stagger: .6, opacity: 0,})
.from('.header__subtitle', {y: -50, stagger: .6, opacity: 0,})
.from('.header__img', {x: 50, stagger: .6, opacity: 0,}, 2)
.from('.header__cta', {y: 50, stagger: .6, opacity: 0,},2.2)


