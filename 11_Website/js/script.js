// Initialize Swipers for various containers
var swipers = [
    new Swiper('.swiper-container-category', {
        loop: true,
        autoplay: {
            delay: 3500,
            disableOnInteraction: false,
        },
        speed: 1000,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        effect: 'slide',
        breakpoints: {
            220: {
                slidesPerView: 1.1,
                spaceBetween: 10,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            1028: {
                slidesPerView: 3,
                spaceBetween: 16,
            }
        }
    }),
    new Swiper('.swiper-container', {
        loop: true,
        autoplay: {
            delay: 3500,
            disableOnInteraction: false,
        },
        speed: 1000,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        effect: 'slide',
        breakpoints: {
            220: {
                slidesPerView: 1.1,
                spaceBetween: 10,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            1028: {
                slidesPerView: 3,
                spaceBetween: 16,
            }
        }
    }),
];
// Navbar scroll behavior
window.addEventListener('scroll', function () {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 10) {
        navbar.classList.add('scroll');
    } else {
        navbar.classList.remove('scroll');
    }
});

// Hamburger menu toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
const registerBtn = document.querySelector('#btn');

hamburger.addEventListener('click', function () {
    navLinks.classList.toggle('active');
    registerBtn.classList.toggle('show');
    hamburger.classList.toggle('active'); 
});

// FAQ toggle functionality
document.querySelectorAll('.faq').forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('active');

        // Tutup FAQ lainnya
        document.querySelectorAll('.faq').forEach(faq => {
            if (faq !== item) {
                faq.classList.remove('active');
            }
        });
    });
});

// Function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Counter function to animate from 0 to target value
function animateCounter(counter) {
    const target = +counter.getAttribute('data-target');
    let count = 0;
    const increment = target / 100; // Adjust this value to control speed

    const updateCounter = () => {
        count += increment;
        if (count < target) {
            counter.innerText = Math.ceil(count) + '+'; // Update text with +
            requestAnimationFrame(updateCounter);
        } else {
            counter.innerText = target + '+'; // Ensure final target shows +
        }
    };
    updateCounter();
}

// Event listener for scrolling
window.addEventListener('scroll', () => {
    const counters = document.querySelectorAll('.counter');
    counters.forEach(counter => {
        if (isInViewport(counter) && !counter.classList.contains('animated')) {
            counter.classList.add('animated'); // To prevent re-triggering
            animateCounter(counter);
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.querySelector(".toggle-dark-mode");
    const body = document.body;

    // Cek apakah ada preferensi dark mode di Local Storage
    if (localStorage.getItem("darkMode") === "enabled") {
        body.classList.add("dark-mode");
    }

    // Event listener untuk tombol toggle dark mode
    toggleButton.addEventListener("click", function () {
        body.classList.toggle("dark-mode");

        // Simpan status dark mode di Local Storage
        if (body.classList.contains("dark-mode")) {
            localStorage.setItem("darkMode", "enabled");
        } else {
            localStorage.setItem("darkMode", "disabled");
        }
    });
});