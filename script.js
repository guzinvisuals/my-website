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

// Fade-in Sections on Scroll
const

    let currentIndex = 0;
const carousel = document.querySelector('.carousel');
const slides = document.querySelectorAll('.carousel img');
const totalSlides = slides.length;

document.getElementById('next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateCarousel();
});

document.getElementById('prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateCarousel();
});

function updateCarousel() {
    const offset = -currentIndex * 100;
    carousel.style.transform = `translateX(${offset}%)`;
}

// Auto slide every 3 seconds
setInterval(() => {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateCarousel();
}, 3000);

// slide from Ninja

var nsOptions = {
    sliderId: "ninja-slider",
    transitionType: "slide",
    autoAdvance: true,
    rewind: true,
    delay: "default", //or integer value such as: 3500
    transitionSpeed: "default", //eg. 500, 1200, or "default"
    aspectRatio: "9:6",
    initSliderByCallingInitFunc: false,
    shuffle: false,
    startSlideIndex: 0, //0-based
    navigateByTap: true,
    keyboardNav: true,
    before: null,
    (...rarely used options)
    license: "(your license key)"
};
var nslider = new NinjaSlider(nsOptions);
