// Function to check if element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.bottom >= 0
    );
}

// Function to handle scroll animations
function handleScrollAnimations() {
    // Handle sections
    document.querySelectorAll('section').forEach(section => {
        if (isInViewport(section)) {
            section.classList.add('visible');
        }
    });

    // Handle fade-in elements
    document.querySelectorAll('.fade-in').forEach(element => {
        if (isInViewport(element)) {
            element.classList.add('visible');
        }
    });
}

// Add fade-in class to elements that should animate
document.addEventListener('DOMContentLoaded', () => {
    // Add fade-in class to sections
    document.querySelectorAll('section').forEach(section => {
        section.classList.add('fade-in');
    });

    // Add fade-in class to other elements that should animate
    const elementsToAnimate = [
        '.hero__caption',
        '.about-caption',
        '.experience',
        '.single-about',
        '.single-services',
        '.gallery-img',
        '.contact-info'
    ];

    elementsToAnimate.forEach(selector => {
        document.querySelectorAll(selector).forEach(element => {
            element.classList.add('fade-in');
        });
    });

    // Initial check for elements in viewport
    handleScrollAnimations();
});

// Add scroll event listener
window.addEventListener('scroll', handleScrollAnimations);

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
}); 