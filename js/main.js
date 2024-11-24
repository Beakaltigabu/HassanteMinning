const App = {
    init() {
        this.initIntersectionObserver();
        this.initHeaderScroll();
        this.initSmoothScroll();
        this.initMap();
        this.initAnimations();
        this.initResponsiveHandlers();
    },

    initStatsCounter() {
        const stats = document.querySelectorAll('.stat-number');
        const options = {
            threshold: 0.5,
            rootMargin: '0px'
        };

        const statsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const stat = entry.target;
                    const target = parseInt(stat.closest('.stat-item').dataset.target);
                    let current = 0;
                    const increment = target / 50;
                    const duration = 2000;
                    const stepTime = duration / (target / increment);

                    const counter = setInterval(() => {
                        current += increment;
                        if (current >= target) {
                            stat.textContent = `${target}+`;
                            clearInterval(counter);
                        } else {
                            stat.textContent = `${Math.floor(current)}+`;
                        }
                    }, stepTime);

                    statsObserver.unobserve(stat);
                }
            });
        }, options);

        stats.forEach(stat => statsObserver.observe(stat));
    },

    initMobileToggle() {
        const mobileMenu = document.querySelector('.mobile-menu');
        const navLinks = document.querySelector('.nav-links');
        const body = document.body;

        mobileMenu.addEventListener('click', (e) => {
            e.stopPropagation();
            mobileMenu.classList.toggle('active');
            navLinks.classList.toggle('active');
            body.classList.toggle('menu-open');
        });

        document.addEventListener('click', (e) => {
            if (!e.target.closest('.nav') && navLinks.classList.contains('active')) {
                mobileMenu.classList.remove('active');
                navLinks.classList.remove('active');
                body.classList.remove('menu-open');
            }
        });

        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
                navLinks.classList.remove('active');
                body.classList.remove('menu-open');
            });
        });
    },

    initCardAnimations() {
        const cards = document.querySelectorAll('.operation-card, .achievement-card, .mineral-card');
        const options = {
            threshold: 0.2,
            rootMargin: '50px'
        };

        const cardObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                }
            });
        }, options);

        cards.forEach((card, index) => {
            card.style.transitionDelay = `${index * 0.2}s`;
            cardObserver.observe(card);
        });
    }
    ,

    initIntersectionObserver() {
        const options = {
            threshold: 0.2,
            rootMargin: '0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                }
            });
        }, options);

        document.querySelectorAll('[data-animate]').forEach(el => observer.observe(el));
    },

    initHeaderScroll() {
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
    },

    initResponsiveHandlers() {
        window.addEventListener('resize', () => {
            const mobileMenu = document.querySelector('.mobile-menu');
            const navLinks = document.querySelector('.nav-links');

            if (window.innerWidth > 768 && navLinks.classList.contains('active')) {
                mobileMenu.classList.remove('active');
                navLinks.classList.remove('active');
                document.body.classList.remove('menu-open');
            }
        });
    },

    initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    },

    initMap() {
        if (document.getElementById('map')) {
            const map = L.map('map').setView([6.5244, 44.2333], 13);
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '© OpenStreetMap contributors'
            }).addTo(map);
            const marker = L.marker([6.5244, 44.2333]).addTo(map);
            marker.bindPopup('<strong>Hassante Mining</strong><br>Dawa Zone, Ethiopia').openPopup();
        }
    },

    initAnimations() {
        const heroFeatures = document.querySelectorAll('.hero-features .feature');
        heroFeatures.forEach((feature, index) => {
            feature.style.animationDelay = `${index * 200}ms`;
        });

        this.initCardAnimations();
    }
};

document.addEventListener('DOMContentLoaded', () => App.init());

export { App };
