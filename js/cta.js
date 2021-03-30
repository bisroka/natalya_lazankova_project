export const ctaHandler = () => {
    const main = document.getElementById('main')
    document.querySelector('.header__cta').addEventListener('click', ()=> main.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"}) )
}