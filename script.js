
    // Mobile menu toggle
    const mobileMenu = document.getElementById('mobile-menu');
    const nav = document.getElementById('nav');
    mobileMenu.addEventListener('click', () => {
      nav.classList.toggle('open');
    });

    // Dark/light mode toggle
    const themeToggle = document.getElementById('toggle-theme');
    themeToggle.addEventListener('click', () => {
      document.body.classList.toggle('dark');
      themeToggle.textContent = document.body.classList.contains('dark') ? '☀' : '🌙';
    });

    // Contact form validation
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      alert('Message sent!');
      form.reset();
    });

  