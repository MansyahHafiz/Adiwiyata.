// Array gambar untuk slideshow
const images = [
    'lidah mertua.jpg',
    'c:\Users\Lenovo\Downloads\Sirih gading.png',
    'taman sekolah.jpg'
];

let currentImageIndex = 0;

function changeImage(direction) {
    currentImageIndex += direction;

    if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
    } else if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1;
    }

    const slideImage = document.getElementById('slideImage');
    slideImage.src = images[currentImageIndex];
    slideImage.alt = `Gambar lingkungan ${currentImageIndex + 1}`;
}

// Tangani form jika ada
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (name === '' || email === '' || message === '') {
            alert('Mohon isi semua field yang diperlukan!');
        } else {
            alert('Formulir Anda telah dikirim! Terima kasih atas pesannya.');
            this.reset();
        }
    });
}

// Tambahkan ini ke script.js (atau ganti jika sudah ada)
document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modal-image');
    const modalCaption = document.getElementById('modal-caption');
    const closeModal = document.querySelector('.close-modal');
    const galleryImages = document.querySelectorAll('.gallery-item img');

    galleryImages.forEach(img => {
        img.addEventListener('click', function () {
            modal.style.display = 'flex';  // Tampilkan modal
            modalImage.src = this.src;
            modalImage.alt = this.alt;
            modalCaption.textContent = this.getAttribute('data-caption');  // Ambil caption dari data-caption
        });
    });

    closeModal.addEventListener('click', function () {
        modal.style.display = 'none';  // Sembunyikan modal
    });

    // Tutup modal jika klik di luar gambar
    modal.addEventListener('click', function (e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});