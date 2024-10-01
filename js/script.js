// Initialize Swipers for various containers
var swipers = [
    new Swiper('.swiper-container', {
        slidesPerView: 6,
        spaceBetween: 0,
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
                slidesPerView: 3,
            },
            768: {
                slidesPerView: 6,
            }
        }
    }),

    new Swiper('.tag-container', {
        slidesPerView: 6,
        spaceBetween: 20,
        loop: true,
        autoplay: {
            delay: 1500,
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
                slidesPerView: 2,
                spaceBetween: 10,
            },
            768: {
                slidesPerView: 4,
            },
            1024: {
                slidesPerView: 5,
            },
        }
    }),

    new Swiper('.path-container', {
        slidesPerView: 2,
        spaceBetween: 0,
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
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
        }
    }),

    new Swiper('.review-container', {
        slidesPerView: 3.5,
        spaceBetween: 20,
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
                slidesPerView: 1.2,
            },
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            },
            1100: {
                slidesPerView: 3.5,
            }
        }
    }),

    new Swiper('.course-container', {
        slidesPerView: 4,
        spaceBetween: 20,
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
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 2,
            },
            1100: {
                slidesPerView: 4,
            }
        }
    }),

    new Swiper('.event-container', {
        slidesPerView: 4,
        spaceBetween: 20,
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
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 2,
            },
            1100: {
                slidesPerView: 4,
            }
        }
    }),
];

// Hide loader on page load
window.addEventListener('load', function () {
    document.getElementById('loader').style.display = 'none';
});

// Navbar scroll behavior
window.addEventListener('scroll', function () {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
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

// Dark mode toggle functionality
const toggleDarkModeButtons = document.querySelectorAll('.toggle-dark-mode');
const darkModeIcons = document.querySelectorAll('.icon-dark-mode');

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');

    // Update icons and localStorage
    toggleDarkModeButtons.forEach((button, index) => {
        const darkModeIcon = darkModeIcons[index];
        if (darkModeIcon) {
            darkModeIcon.classList.replace(isDarkMode ? 'bx-moon' : 'bx-sun', isDarkMode ? 'bx-sun' : 'bx-moon');
        }
    });

    localStorage.setItem('dark-mode', isDarkMode ? 'enabled' : 'disabled');
}

// Event listener for all dark mode toggle buttons
toggleDarkModeButtons.forEach(button => {
    button.addEventListener('click', toggleDarkMode);
});

// Check dark mode status on page load
window.addEventListener('DOMContentLoaded', () => {
    const darkModeStatus = localStorage.getItem('dark-mode');
    
    if (darkModeStatus === 'enabled') {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }

    const isDarkMode = document.body.classList.contains('dark-mode');
    toggleDarkModeButtons.forEach((button, index) => {
        const darkModeIcon = darkModeIcons[index];
        if (darkModeIcon) {
            darkModeIcon.classList.replace(isDarkMode ? 'bx-moon' : 'bx-sun', isDarkMode ? 'bx-sun' : 'bx-moon');
        }
    });
});

// FAQ toggle functionality
document.querySelectorAll('.faq').forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('active');
        
        // Close other FAQs
        document.querySelectorAll('.faq').forEach(faq => {
            if (faq !== item) {
                faq.classList.remove('active');
            }
        });
    });
});

// Module toggle functionality
document.querySelectorAll('.modul').forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('active');
    });
});

// Initialize AOS (Animate On Scroll)
AOS.init();





