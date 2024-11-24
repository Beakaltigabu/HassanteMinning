import { App } from './main.js';

const AboutPage = {
    init() {
        console.log('Initializing About Page');
        App.initMobileToggle();
        App.initStatsCounter();
        this.initAnimations();
        this.initScrollEffects();
        App.initCardAnimations();
    },

    initAnimations() {
        const animatedElements = document.querySelectorAll('[data-animate]');
        const options = {
            threshold: 0.2,
            rootMargin: '0px'
        };

        const animateOnScroll = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                    animateOnScroll.unobserve(entry.target);
                }
            });
        }, options);

        animatedElements.forEach(element => animateOnScroll.observe(element));
    },

    initScrollEffects() {
        const header = document.querySelector('.header');
        let lastScroll = 0;

        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;

            if (currentScroll > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }

            if (currentScroll > lastScroll && currentScroll > 100) {
                header.classList.add('header-hidden');
            } else {
                header.classList.remove('header-hidden');
            }

            lastScroll = currentScroll;
        });
    }
};

document.addEventListener('DOMContentLoaded', () => {
    AboutPage.init();
});

export default AboutPage;
