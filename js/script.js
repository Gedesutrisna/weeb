var swiper = new Swiper('.swiper-container', {
    slidesPerView: 6, // Default number of slides for large screens
    spaceBetween: 0, // Space between slides
    loop: true, // Infinite loop for continuous carousel
    autoplay: {
        delay: 3500, // Delay between slides (3.5 seconds)
        disableOnInteraction: false, // Keep autoplay even after interaction
    },
    speed: 1000, // Smooth transition speed (1 second for transition)
    pagination: {
        el: '.swiper-pagination',
        clickable: true, // Allow pagination to be clickable
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    effect: 'slide', // Default smooth sliding effect (or 'fade')
    
    // Responsive breakpoints
    breakpoints: {
        // When the viewport is ≥ 320px (mobile)
        320: {
            slidesPerView: 3, // Show 4 slides on mobile
        },
        // When the viewport is ≥ 768px (tablet)
        768: {
            slidesPerView: 6, // Show 6 slides on tablet and larger screens
        }
    }
});
var swiper = new Swiper('.tag-container', {
    slidesPerView: 6, // Default slides for large screens
    spaceBetween: 20, // Adjust space between slides
    loop: true, // Enable loop mode
    autoplay: {
        delay: 3500, // Delay between auto slides
        disableOnInteraction: false, // Keep autoplay after user interaction
    },
    speed: 1000, // Transition speed
    pagination: {
        el: '.swiper-pagination',
        clickable: true, // Enable pagination clicks
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    effect: 'slide', // Smooth slide effect
    breakpoints: {
        320: {
            slidesPerView: 3, // On mobile, show 3 slides
            spaceBetween: 5, // Reduce space between slides on small screens
        },
        768: {
            slidesPerView: 6, // On tablet and larger screens, show 6 slides
        }
    }
});

var swiper = new Swiper('.path-container', {
    slidesPerView: 2, // Default number of slides for large screens
    spaceBetween: 0, // Space between slides
    loop: true, // Infinite loop for continuous carousel
    autoplay: {
        delay: 3500, // Delay between slides (3.5 seconds)
        disableOnInteraction: false, // Keep autoplay even after interaction
    },
    speed: 1000, // Smooth transition speed (1 second for transition)
    pagination: {
        el: '.swiper-pagination',
        clickable: true, // Allow pagination to be clickable
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    effect: 'slide', // Default smooth sliding effect (or 'fade')
    
    // Responsive breakpoints
    breakpoints: {
        // When the viewport is ≥ 320px (mobile)
        320: {
            slidesPerView: 1, // Show 4 slides on mobile
        },
        // When the viewport is ≥ 768px (tablet)
        768: {
            slidesPerView: 2, // Show 6 slides on tablet and larger screens
        }
    }
});
var swiper = new Swiper('.review-container', {
    slidesPerView: 3.5, // Menampilkan 3,5 slide pada layar besar (default)
    spaceBetween: 20, // Spasi antar slide
    loop: true, // Infinite loop for continuous carousel
    autoplay: {
        delay: 3500, // Delay antara slide (3.5 detik)
        disableOnInteraction: false, // Tetap autoplay meskipun ada interaksi
    },
    speed: 1000, // Smooth transition speed (1 detik untuk transisi)
    pagination: {
        el: '.swiper-pagination',
        clickable: true, // Pagination dapat diklik
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    effect: 'slide', // Efek slide halus default
    breakpoints: {
        // Ketika viewport ≥ 320px (mobile)
        320: {
            slidesPerView: 1, // Tampilkan 1 slide di hp
        },
        // Ketika viewport ≥ 768px (tablet)
        768: {
            slidesPerView: 3, // Tampilkan 3 slide di tablet
        },
        // Ketika viewport ≥ 1024px (laptop)
        1024: {
            slidesPerView: 3.5, // Tampilkan 3,5 slide di laptop
        }
    }
});
var swiper = new Swiper('.course-container', {
    slidesPerView: 4, // Menampilkan 3,5 slide pada layar besar (default)
    spaceBetween: 20, // Spasi antar slide
    loop: true, // Infinite loop for continuous carousel
    autoplay: {
        delay: 3500, // Delay antara slide (3.5 detik)
        disableOnInteraction: false, // Tetap autoplay meskipun ada interaksi
    },
    speed: 1000, // Smooth transition speed (1 detik untuk transisi)
    pagination: {
        el: '.swiper-pagination',
        clickable: true, // Pagination dapat diklik
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    effect: 'slide', // Efek slide halus default
    breakpoints: {
        // Ketika viewport ≥ 320px (mobile)
        320: {
            slidesPerView: 1, // Tampilkan 1 slide di hp
        },
        // Ketika viewport ≥ 768px (tablet)
        768: {
            slidesPerView: 2, // Tampilkan 3 slide di tablet
        },
        // Ketika viewport ≥ 1024px (laptop)
        1024: {
            slidesPerView: 4, // Tampilkan 3,5 slide di laptop
        }
    }
});


window.addEventListener('load', function() {
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
});

const toggleDarkModeButtons = document.querySelectorAll('.toggle-dark-mode');
const darkModeIcons = document.querySelectorAll('.icon-dark-mode');

// Fungsi untuk mengaktifkan atau menonaktifkan dark mode
function toggleDarkMode() {
    // Toggle class 'dark-mode' pada body untuk mengaktifkan mode gelap
    document.body.classList.toggle('dark-mode');

    // Cek apakah dark mode aktif
    const isDarkMode = document.body.classList.contains('dark-mode');

    // Update ikon dan simpan status ke localStorage
    toggleDarkModeButtons.forEach((button, index) => {
        const darkModeIcon = darkModeIcons[index];
        if (darkModeIcon) {
            if (isDarkMode) {
                darkModeIcon.classList.replace('bx-moon', 'bx-sun');
            } else {
                darkModeIcon.classList.replace('bx-sun', 'bx-moon');
            }
        }
    });

    // Simpan status dark mode ke localStorage
    localStorage.setItem('dark-mode', isDarkMode ? 'enabled' : 'disabled');
}

// Event listener untuk semua tombol dark mode
toggleDarkModeButtons.forEach(button => {
    button.addEventListener('click', toggleDarkMode);
});

// Cek status dark mode saat halaman pertama kali dimuat
window.addEventListener('DOMContentLoaded', () => {
    const darkModeStatus = localStorage.getItem('dark-mode');
    
    if (darkModeStatus === 'enabled') {
        // Aktifkan dark mode jika sebelumnya disimpan sebagai 'enabled'
        document.body.classList.add('dark-mode');
    } else {
        // Nonaktifkan dark mode jika sebelumnya tidak disimpan sebagai 'enabled'
        document.body.classList.remove('dark-mode');
    }

    // Sesuaikan ikon berdasarkan status mode saat ini
    const isDarkMode = document.body.classList.contains('dark-mode');
    toggleDarkModeButtons.forEach((button, index) => {
        const darkModeIcon = darkModeIcons[index];
        if (darkModeIcon) {
            if (isDarkMode) {
                darkModeIcon.classList.replace('bx-moon', 'bx-sun');
            } else {
                darkModeIcon.classList.replace('bx-sun', 'bx-moon');
            }
        }
    });
});



document.querySelectorAll('.faq').forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('active');

        // Tutup FAQ lain yang sedang terbuka
        document.querySelectorAll('.faq').forEach(faq => {
            if (faq !== item) {
                faq.classList.remove('active');
            }
        });
    });
});

document.querySelectorAll('.modul').forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('active');
    });
});


AOS.init({
});


