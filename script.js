// Navigation Toggle for Mobile
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('nav ul').classList.remove('active');
    });
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Auto-Sliding Carousel
let carouselInterval = setInterval(() => {
    const slide = document.querySelector('.carousel-slide');
    slide.appendChild(slide.firstElementChild);
}, 5000);
