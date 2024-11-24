import { App } from './main.js';
import galleryData from './data/galleryData.js';

const GalleryPage = {
    currentIndex: 0,

    init() {
        App.initMobileToggle();
        this.initGallery();
        this.initFilters();
        this.initLightbox();
        this.initKeyboardControls();
    },

    initGallery() {
        const galleryGrid = document.querySelector('.gallery-grid');
        this.renderGallery(galleryData);
    },

    renderGallery(items) {
        const galleryGrid = document.querySelector('.gallery-grid');
        galleryGrid.innerHTML = '';

        items.forEach((item, index) => {
            const galleryItem = document.createElement('div');
            galleryItem.className = 'gallery-item';
            galleryItem.setAttribute('data-category', item.category);
            galleryItem.setAttribute('data-index', index);
            galleryItem.innerHTML = `
                <picture>
                    <source srcset="${item.image.webp}" type="image/webp">
                    <img src="${item.image.fallback}" alt="${item.title}" loading="lazy">
                </picture>
                <div class="gallery-overlay">
                    <h3>${item.title}</h3>
                    <p>${item.description}</p>
                    <span class="location"><i class="fas fa-map-marker-alt"></i> ${item.location}</span>
                </div>
            `;
            galleryGrid.appendChild(galleryItem);
        });
    }
    ,

    initFilters() {
        const filterBtns = document.querySelectorAll('.filter-btn');

        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const filter = btn.dataset.filter;
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                const filteredItems = filter === 'all'
                    ? galleryData
                    : galleryData.filter(item => item.category === filter);

                this.renderGallery(filteredItems);
            });
        });
    },

    initLightbox() {
        const lightbox = document.getElementById('lightbox');
        const galleryGrid = document.querySelector('.gallery-grid');

        galleryGrid.addEventListener('click', e => {
            const item = e.target.closest('.gallery-item');
            if (!item) return;

            this.currentIndex = parseInt(item.dataset.index);
            this.openLightbox(this.currentIndex);
        });

        document.querySelector('.lightbox-close').addEventListener('click', () => {
            this.closeLightbox();
        });

        document.querySelector('.lightbox-prev').addEventListener('click', () => {
            this.currentIndex = (this.currentIndex - 1 + galleryData.length) % galleryData.length;
            this.openLightbox(this.currentIndex);
        });

        document.querySelector('.lightbox-next').addEventListener('click', () => {
            this.currentIndex = (this.currentIndex + 1) % galleryData.length;
            this.openLightbox(this.currentIndex);
        });
    },

    initKeyboardControls() {
        document.addEventListener('keydown', (e) => {
            if (!document.getElementById('lightbox').classList.contains('active')) return;

            switch(e.key) {
                case 'Escape':
                    this.closeLightbox();
                    break;
                case 'ArrowLeft':
                    this.currentIndex = (this.currentIndex - 1 + galleryData.length) % galleryData.length;
                    this.openLightbox(this.currentIndex);
                    break;
                case 'ArrowRight':
                    this.currentIndex = (this.currentIndex + 1) % galleryData.length;
                    this.openLightbox(this.currentIndex);
                    break;
            }
        });
    },

    openLightbox(index) {
        const lightbox = document.getElementById('lightbox');
        const item = galleryData[index];

        const lightboxImage = lightbox.querySelector('.lightbox-image');
        const lightboxTitle = lightbox.querySelector('.lightbox-title');
        const lightboxDescription = lightbox.querySelector('.lightbox-description');

        lightboxImage.src = item.image.fallback;
        lightboxImage.alt = item.title;
        lightboxTitle.textContent = item.title;
        lightboxDescription.textContent = item.description;

        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    ,

    closeLightbox() {
        const lightbox = document.getElementById('lightbox');
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    }
};

document.addEventListener('DOMContentLoaded', () => {
    GalleryPage.init();
});

export default GalleryPage;
