// Ganti nomor ini dengan nomor WhatsApp Aktasia.
// Format wajib pakai kode negara, tanpa +, tanpa spasi.
const whatsappNumber = '6281234567890';

const whatsappMessage = 'Halo Aktasia, saya ingin konsultasi Digital Growth Services untuk membantu bisnis saya lebih terlihat, dipercaya, dan mendapatkan leads yang lebih terarah.';

document.addEventListener('DOMContentLoaded', function () {
  const navbar = document.getElementById('mainNavbar');
  const whatsappButtons = document.querySelectorAll('[data-whatsapp]');
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
  const navbarCollapse = document.querySelector('.navbar-collapse');

  // Link WhatsApp otomatis
  whatsappButtons.forEach(function (button) {
    const customMessage = button.getAttribute('data-wa-message') || whatsappMessage;
    const customNumber = button.getAttribute('data-wa-number') || whatsappNumber;

    button.href = `https://wa.me/${customNumber}?text=${encodeURIComponent(customMessage)}`;
    button.target = '_blank';
    button.rel = 'noopener';
  });

  // Navbar berubah saat discroll
  function handleNavbarScroll() {
    if (window.scrollY > 40) {
      navbar.classList.add('navbar-scrolled');
    } else {
      navbar.classList.remove('navbar-scrolled');
    }
  }

  handleNavbarScroll();
  window.addEventListener('scroll', handleNavbarScroll);

  // Tutup menu mobile setelah klik menu
  navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      if (navbarCollapse.classList.contains('show')) {
        const bsCollapse = new bootstrap.Collapse(navbarCollapse);
        bsCollapse.hide();
      }
    });
  });

  const currentYear = document.getElementById('currentYear');

  if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
  }
});
