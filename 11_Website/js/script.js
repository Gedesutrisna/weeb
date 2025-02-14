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
    new Swiper('.swiper-container-video', {
        // loop: true,
        // autoplay: {
        //     delay: 3500,
        //     disableOnInteraction: false,
        // },
        // speed: 1000,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        // effect: 'slide',
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
                slidesPerView: 2,
                spaceBetween: 16,
            }
        }
    }),
    new Swiper('.swiper-container-no-auto', {
        // loop: true,
        // autoplay: {
        //     delay: 3500,
        //     disableOnInteraction: false,
        // },
        // speed: 1000,
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
    new Swiper('.swiper-container-4', {
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
                slidesPerView: 3,
                spaceBetween: 10,
            },
            1028: {
                slidesPerView: 4,
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
document.addEventListener("DOMContentLoaded", function () {
    const counters = document.querySelectorAll('.counter');

    function animateCounter(counter) {
        const target = +counter.getAttribute('data-target');
        let count = 0;
        const increment = target / 100; // Atur kecepatan animasi

        const updateCounter = () => {
            count += increment;
            if (count < target) {
                counter.innerText = Math.ceil(count) + '+'; 
                requestAnimationFrame(updateCounter);
            } else {
                counter.innerText = target + '+'; // Pastikan angka final muncul
            }
        };
        updateCounter();
    }

    function checkCounters() {
        counters.forEach(counter => {
            const rect = counter.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.98 && !counter.classList.contains('animated')) {
                counter.classList.add('animated');
                animateCounter(counter);
            }
        });
    }

    window.addEventListener("scroll", checkCounters);
    checkCounters(); // Jalankan saat halaman pertama dimuat
});


document.addEventListener("DOMContentLoaded", function () {
    const toggleButtons = document.querySelectorAll(".toggle-dark-mode");
    const body = document.body;

    // Cek apakah ada preferensi dark mode di Local Storage
    if (localStorage.getItem("darkMode") === "enabled") {
        body.classList.add("dark-mode");
        // Update ikon untuk dark mode aktif
        toggleButtons.forEach(button => {
            const icon = button.querySelector("i");
            icon.classList.remove("fa-moon");
            icon.classList.add("fa-sun");
        });
    } else {
        body.classList.remove("dark-mode");
        // Update ikon untuk mode terang
        toggleButtons.forEach(button => {
            const icon = button.querySelector("i");
            icon.classList.remove("fa-sun");
            icon.classList.add("fa-moon");
        });
    }

    // Event listener untuk semua tombol toggle dark mode
    toggleButtons.forEach(button => {
        button.addEventListener("click", function () {
            body.classList.toggle("dark-mode");

            // Ganti gambar sesuai mode
            if (body.classList.contains("dark-mode")) {
                localStorage.setItem("darkMode", "enabled");
                const icon = button.querySelector("i");
                icon.classList.remove("fa-moon");
                icon.classList.add("fa-sun");
            } else {
                localStorage.setItem("darkMode", "disabled");
                const icon = button.querySelector("i");
                icon.classList.remove("fa-sun");
                icon.classList.add("fa-moon");
            }
        });
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const hiddenElements = document.querySelectorAll(".aos");

    function checkElements() {
        hiddenElements.forEach((el) => {
            const rect = el.getBoundingClientRect();
            const delay = el.dataset.delay || "0"; // Ambil delay dari atribut data, default 0 ms

            // if (rect.top < window.innerHeight * 0.85 && rect.bottom > 0) {
            if (rect.top < window.innerHeight * 0.98) {
                setTimeout(() => {
                    el.classList.add("aos-show");
                }, parseInt(delay));
            } else {
                el.classList.remove("aos-show"); // Menghapus class agar animasi bisa terjadi lagi
            }
        });
    }

    window.addEventListener("scroll", checkElements);
    checkElements(); // Panggil saat halaman dimuat agar animasi langsung aktif jika ada elemen dalam viewport
});


function loadVideo(container, videoId) {
    var iframe = document.createElement("iframe");
    // iframe.width = "530";
    // iframe.height = "305";
    iframe.src = "https://www.youtube.com/embed/" + videoId + "?autoplay=1";
    iframe.frameBorder = "0";
    iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
    iframe.allowFullscreen = true;

    // Hapus konten sebelumnya (thumbnail + tombol play) dan tambahkan iframe
    container.innerHTML = "";
    container.appendChild(iframe);
}

document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.querySelector(".form-input.search");
    const searchButton = document.querySelector(".btn-a.search");
    const cards = document.querySelectorAll(".card");
    const noResultsMessage = document.getElementById("no-results");

    function filterArticles() {
        const searchText = searchInput.value.toLowerCase().trim();
        let hasResults = false;

        cards.forEach(card => {
            const title = card.querySelector(".card-title").textContent.toLowerCase();
            const description = card.querySelector(".card-text").textContent.toLowerCase();
            
            if (title.includes(searchText) || description.includes(searchText)) {
                card.style.display = "block";
                hasResults = true;
            } else {
                card.style.display = "none";
            }
        });


        if (hasResults) {
            noResultsMessage.classList = "text center mt-4 mb none";
        } else {
            noResultsMessage.classList = "text center mt-4 mb block";
        }

    }

    searchButton.addEventListener("click", filterArticles);
    searchInput.addEventListener("keyup", function (event) {
        if (event.key === "Enter") {
            filterArticles();
        }
    });
});
