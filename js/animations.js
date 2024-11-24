// Animation Controller
const AnimationController = {
    init() {
        this.initParallaxEffects();
        this.initMineralCardEffects();
        this.initStatCounters();
        this.initScrollProgress();
    },

    // Parallax Scrolling Effects
    initParallaxEffects() {
        const parallaxElements = document.querySelectorAll('[data-parallax]');

        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;

            parallaxElements.forEach(element => {
                const speed = element.dataset.parallax || 0.5;
                const yPos = -(scrolled * speed);
                element.style.transform = `translate3d(0, ${yPos}px, 0)`;
            });
        });
    },

    // Mineral Card Hover Effects
    initMineralCardEffects() {
        const cards = document.querySelectorAll('.mineral-card');

        cards.forEach(card => {
            card.addEventListener('mouseenter', (e) => {
                const icon = card.querySelector('.mineral-icon');
                icon.style.transform = 'scale(1.2) rotate(5deg)';

                // Create ripple effect
                const ripple = document.createElement('div');
                ripple.className = 'ripple';
                card.appendChild(ripple);

                setTimeout(() => ripple.remove(), 1000);
            });

            card.addEventListener('mouseleave', (e) => {
                const icon = card.querySelector('.mineral-icon');
                icon.style.transform = 'scale(1) rotate(0deg)';
            });
        });
    },

    // Stat Counter Animation
    initStatCounters() {
        const stats = document.querySelectorAll('.stat-number');

        const animateValue = (element, start, end, duration) => {
            let startTimestamp = null;

            const step = (timestamp) => {
                if (!startTimestamp) startTimestamp = timestamp;
                const progress = Math.min((timestamp - startTimestamp) / duration, 1);
                const value = Math.floor(progress * (end - start) + start);
                element.textContent = value;

                if (progress < 1) {
                    window.requestAnimationFrame(step);
                } else {
                    element.textContent = end;
                }
            };

            window.requestAnimationFrame(step);
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const target = parseInt(entry.target.dataset.target);
                    animateValue(entry.target, 0, target, 2000);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        stats.forEach(stat => observer.observe(stat));
    },

    // Scroll Progress Indicator
    initScrollProgress() {
        const progressBar = document.createElement('div');
        progressBar.className = 'scroll-progress';
        document.body.appendChild(progressBar);

        window.addEventListener('scroll', () => {
            const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (winScroll / height) * 100;
            progressBar.style.width = scrolled + '%';
        });
    }
};

// Initialize animations when DOM is ready
document.addEventListener('DOMContentLoaded', () => AnimationController.init());

export default AnimationController;
