import { App } from './main.js';

function initMap() {
    if (document.getElementById('map-dawa')) {
        const dawaMap = L.map('map-dawa').setView([6.5244, 44.2333], 13);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors'
        }).addTo(dawaMap);
        const dawaMarker = L.marker([6.5244, 44.2333]).addTo(dawaMap);
        dawaMarker.bindPopup(`
            <strong>Hassante Mining Cooperative - Dawa Site</strong><br>
            Dawa Zone, Ethiopia Somalia Region
        `).openPopup();
    }

    if (document.getElementById('map-moyale')) {
        const moyaleMap = L.map('map-moyale').setView([3.5300, 39.0500], 13);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors'
        }).addTo(moyaleMap);
        const moyaleMarker = L.marker([3.5300, 39.0500]).addTo(moyaleMap);
        moyaleMarker.bindPopup(`
            <strong>Hassante Mining Cooperative - Moyale Site</strong><br>
            Moyale, Ethiopia
        `).openPopup();
    }
}

function initHomeAnimations() {
    const features = document.querySelectorAll('.feature');
    features.forEach(feature => {
        feature.addEventListener('mouseenter', () => {
            feature.style.transform = 'translateY(-5px) scale(1.05)';
        });

        feature.addEventListener('mouseleave', () => {
            feature.style.transform = 'translateY(0) scale(1)';
        });
    });
}

function initScrollAnimations() {
    const sections = document.querySelectorAll('section');
    const options = {
        threshold: 0.2,
        rootMargin: '0px'
    };

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                sectionObserver.unobserve(entry.target);
            }
        });
    }, options);

    sections.forEach(section => {
        section.classList.add('section-hidden');
        sectionObserver.observe(section);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    initMap();
    initHomeAnimations();
    initScrollAnimations();
    App.initMobileToggle();
    App.initStatsCounter();
    App.initCardAnimations();
    App.init();
});

export default {
    initMap,
    initHomeAnimations,
    initScrollAnimations
};
