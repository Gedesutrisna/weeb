const swiperConfigs = [
    { selector: '.swiper-container-category', slides1028: 3 },
    { selector: '.swiper-container-video', slides1028: 2 },
    { selector: '.swiper-container-no-auto', slides1028: 3 },
    { selector: '.swiper-container', slides1028: 3 },
    { selector: '.swiper-container-4', slides1028: 4 },
];

swiperConfigs.forEach(({ selector, slides1028 }) => {
    new Swiper(selector, {
        loop: true,
        autoplay: { delay: 3500, disableOnInteraction: false },
        speed: 1000,
        pagination: { el: '.swiper-pagination', clickable: true },
        navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
        effect: 'slide',
        breakpoints: {
            220: { slidesPerView: 1.1, spaceBetween: 10 },
            768: { slidesPerView: 2, spaceBetween: 10 },
            1028: { slidesPerView: slides1028, spaceBetween: 16 }
        }
    });
});

// Navbar scroll behavior
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (navbar) navbar.classList.toggle('scroll', window.scrollY > 10);
});

// Hamburger menu toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
const btn = document.querySelector('#btn');

if (hamburger && navLinks && btn) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        btn.classList.toggle('show');
        hamburger.classList.toggle('active');
    });
}

// Counter animation
document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll('.counter');

    if (counters.length > 0) {
        const animateCounter = counter => {
            let count = 0, target = +counter.dataset.target, step = target / 100;
            const update = () => {
                count += step;
                counter.innerText = (count < target) ? Math.ceil(count) + '+' : target + '+';
                if (count < target) requestAnimationFrame(update);
            };
            update();
        };

        const checkCounters = () => {
            counters.forEach(counter => {
                if (counter.getBoundingClientRect().top < window.innerHeight * 0.98 && !counter.classList.contains('animated')) {
                    counter.classList.add('animated');
                    animateCounter(counter);
                }
            });
        };

        window.addEventListener("scroll", checkCounters);
        checkCounters();
    }
});

// Dark mode toggle
document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;
    const toggleButtons = document.querySelectorAll(".toggle-dark-mode");

    if (toggleButtons.length > 0) {
        const updateIcon = isDark => toggleButtons.forEach(btn => {
            btn.querySelector("i").classList.toggle("fa-moon", !isDark);
            btn.querySelector("i").classList.toggle("fa-sun", isDark);
        });

        if (localStorage.getItem("darkMode") === "enabled") {
            body.classList.add("dark-mode");
            updateIcon(true);
        }

        toggleButtons.forEach(button => {
            button.addEventListener("click", () => {
                const isDark = body.classList.toggle("dark-mode");
                localStorage.setItem("darkMode", isDark ? "enabled" : "disabled");
                updateIcon(isDark);
            });
        });
    }
});

// AOS animation trigger
document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".aos");

    if (elements.length > 0) {
        const checkElements = () => elements.forEach(el => {
            if (el.getBoundingClientRect().top < window.innerHeight * 0.98) {
                setTimeout(() => el.classList.add("aos-show"), el.dataset.delay || 0);
            } else {
                el.classList.remove("aos-show");
            }
        });

        window.addEventListener("scroll", checkElements);
        checkElements();
    }
});

// Search functionality
document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.querySelector(".form-input.search");
    const searchButton = document.querySelector(".btn-a.search");
    const cards = document.querySelectorAll(".card");
    const noResults = document.getElementById("no-results");

    if (searchInput && searchButton && cards.length > 0 && noResults) {
        const filterArticles = () => {
            const query = searchInput.value.toLowerCase().trim();
            let hasResults = false;

            cards.forEach(card => {
                const matches = [".card-title", ".card-text"].some(sel => card.querySelector(sel).textContent.toLowerCase().includes(query));
                card.style.display = matches ? "block" : "none";
                if (matches) hasResults = true;
            });

            noResults.classList.toggle("block", !hasResults);
        };

        searchButton.addEventListener("click", filterArticles);
        searchInput.addEventListener("keyup", event => {
            if (event.key === "Enter") filterArticles();
        });
    }
});

// Comments & Like
document.addEventListener("DOMContentLoaded", function () {
    const replyButtons = document.querySelectorAll(".reply-btn");
    const likeButtons = document.querySelectorAll(".like-btn");

    if (replyButtons.length > 0) {
        replyButtons.forEach(button => {
            button.addEventListener("click", function () {
                const replySection = this.closest(".card").querySelector(".reply");
                if (replySection) replySection.classList.toggle("show");
            });
        });
    }

    if (likeButtons.length > 0) {
        likeButtons.forEach(button => {
            button.addEventListener("click", function () {
                const icon = this.querySelector("i");
                const count = this.querySelector(".like-count");
                let likes = parseInt(this.getAttribute("data-likes"));

                if (icon) {
                    if (icon.classList.contains("fa-regular")) {
                        icon.classList.remove("fa-regular");
                        icon.classList.add("fa-solid");
                        icon.classList.add("fa-heart");
                        likes += 1;
                    } else {
                        icon.classList.remove("fa-solid");
                        icon.classList.add("fa-regular");
                        likes -= 1;
                    }

                    count.textContent = likes;
                    this.setAttribute("data-likes", likes);
                }
            });
        });
    }
});
