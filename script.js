document.addEventListener('DOMContentLoaded', () => {
    const navItems = document.querySelectorAll('.nav-item');
    const path = window.location.pathname;

    console.log('Path:', path); // Log the current page path

    navItems.forEach(item => {
        const href = item.getAttribute('href');
        console.log('Href:', href); // Log the href attribute of each nav item

        const normalizedHref = href === '/' ? '/' : href.split('/').pop();
        const normalizedPath = path === '/' ? '/' : path.split('/').pop();

        if (normalizedHref === normalizedPath) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.getElementById('carousel');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    const testimonials = document.querySelectorAll('.testimonial');
    let currentIndex = 0;

    function updateCarousel() {
        const testimonialWidth = testimonials[0].offsetWidth;
        carousel.style.transform = `translateX(-${testimonialWidth * currentIndex}px)`;
    }

    prevButton.addEventListener('click', function () {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    });

    nextButton.addEventListener('click', function () {
        if (currentIndex < testimonials.length - 1) {
            currentIndex++;
            updateCarousel();
        }
    });

    // Initialize the carousel on page load
    updateCarousel();

    // Adjust carousel on window resize
    window.addEventListener('resize', updateCarousel);
});



