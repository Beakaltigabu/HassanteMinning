const ContactPage = {
    init() {
        this.initMobileMenu();
        this.initMap();
        this.initFormSubmission();
        this.initModalHandlers();
    },

    initFormSubmission() {
        const form = document.getElementById('contactForm');
        const submitButton = form.querySelector('button[type="submit"]');
        const modal = document.getElementById('successModal');
        const modalOverlay = document.querySelector('.modal-overlay');

        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            submitButton.disabled = true;

            const formData = new FormData();
            formData.append('access_key', '7691a3e2-197e-4776-a160-21be07b97cae');
            formData.append('from_name', 'Hassante Mining Website');
            formData.append('subject', 'New Contact Inquiry - Hassante Mining');

            const emailContent = `
    NEW CONTACT INQUIRY - HASSANTE MINING
    =====================================

    CONTACT DETAILS
    --------------
    Name: ${form.querySelector('#user_name').value}
    Email: ${form.querySelector('#user_email').value}
    Phone: ${form.querySelector('#user_phone').value}

    INQUIRY DETAILS
    --------------
    Subject: ${form.querySelector('#subject').value}

    MESSAGE
    -------
    ${form.querySelector('#message').value}

    =====================================
    Sent via Hassante Mining Website
    Contact: +251 911 531 220 | +251 926 823 814
    Location: Dawa Zone, Ethiopia Somalia Region
    `;

            formData.append('message', emailContent);
            formData.append('email', form.querySelector('#user_email').value);
            formData.append('name', form.querySelector('#user_name').value);

            try {
                const response = await fetch('https://api.web3forms.com/submit', {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json'
                    },
                    body: formData
                });

                const data = await response.json();

                if (data.success) {
                    modal.classList.add('show');
                    modalOverlay.classList.add('show');
                    form.reset();
                } else {
                    throw new Error('Form submission failed');
                }

            } catch (error) {
                console.error('Failed to send message:', error);
                alert('Failed to send message. Please try again.');
            } finally {
                submitButton.disabled = false;
            }
        });
    }
     ,

     initModalHandlers() {
        const modal = document.getElementById('successModal');
        const modalOverlay = document.querySelector('.modal-overlay');
        const closeButton = document.getElementById('closeModal');

        if (modal && modalOverlay && closeButton) {
            closeButton.addEventListener('click', () => {
                modal.classList.remove('show');
                modalOverlay.classList.remove('show');
            });

            modalOverlay.addEventListener('click', () => {
                modal.classList.remove('show');
                modalOverlay.classList.remove('show');
            });
        }
    }
    ,

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

    initMobileMenu() {
        const mobileMenu = document.querySelector('.mobile-menu');
        const navLinks = document.querySelector('.nav-links');

        mobileMenu.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
    }
};

document.addEventListener('DOMContentLoaded', () => {
    ContactPage.init();
});

export default ContactPage;
