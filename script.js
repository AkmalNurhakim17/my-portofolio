const hamburgerBtn = document.getElementById('hamburgerBtn');
const hamburgerIcon = document.getElementById('hamburgerIcon');
const mobileMenu = document.getElementById('mobileMenu');
const mobileOverlay = document.getElementById('mobileOverlay');
const mobileLinks = document.querySelectorAll('.mobile-link');
const heroBg = document.getElementById('heroBg');
const backToTopBtn = document.getElementById('backToTop');
// Animasi background hero zoom-out perlahan saat halaman selesai dimuat
window.addEventListener('DOMContentLoaded', () => {
    if (heroBg) {
        requestAnimationFrame(() => {
            heroBg.classList.remove('scale-105');
            heroBg.classList.add('scale-100');
        });
    }
});

// Fungsi membuka menu
function openMenu() {
    mobileMenu.classList.remove('translate-x-full');
    mobileMenu.classList.add('translate-x-0');

    mobileOverlay.classList.remove('opacity-0', 'pointer-events-none');
    mobileOverlay.classList.add('opacity-100', 'pointer-events-auto');

    hamburgerIcon.classList.remove('fa-bars');
    hamburgerIcon.classList.add('fa-xmark', 'rotate-90');
}

// Fungsi menutup menu
function closeMenu() {
    mobileMenu.classList.remove('translate-x-0');
    mobileMenu.classList.add('translate-x-full');

    mobileOverlay.classList.remove('opacity-100', 'pointer-events-auto');
    mobileOverlay.classList.add('opacity-0', 'pointer-events-none');

    hamburgerIcon.classList.remove('fa-xmark', 'rotate-90');
    hamburgerIcon.classList.add('fa-bars');
}

// Toggle buka/tutup saat tombol diklik
hamburgerBtn.addEventListener('click', () => {
    const isClosed = mobileMenu.classList.contains('translate-x-full');
    if (isClosed) {
        openMenu();
    } else {
        closeMenu();
    }
});

// Tutup menu jika area gelap (overlay) di luar menu diklik
mobileOverlay.addEventListener('click', closeMenu);

// Otomatis tutup menu ketika salah satu link diklik
mobileLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
});

// Fungsi untuk menampilkan tombol "Back to Top" saat di-scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopBtn.classList.remove('hidden');
    } else {
        backToTopBtn.classList.add('hidden');
    }
});