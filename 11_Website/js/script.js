const swiperConfigs = [
    { selector: '.swiper-container-category', slides1028: 3 },
    { selector: '.swiper-container-video', slides1028: 2 },
    { selector: '.swiper-container-no-auto', slides1028: 3 },
    { selector: '.swiper-container', slides1028: 3 },
    { selector: '.swiper-container-4', slides1028: 4 },
    { selector: '.swiper-container-2', slides1028: 2 },
];

swiperConfigs.forEach(({ selector, slides1028 }) => {
    new Swiper(selector, {
        loop: true,
        // autoplay: { delay: 3500, disableOnInteraction: false },
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

document.addEventListener("DOMContentLoaded", function() {
    const dropdown = document.querySelector(".dropdown .dropbtn");
    const dropdownContent = document.querySelector(".dropdown-content");
    
    dropdown.addEventListener("click", function(event) {
        event.preventDefault();
        dropdownContent.classList.toggle("show");
    });
    
    window.addEventListener("click", function(event) {
        if (!dropdown.contains(event.target)) {
            dropdownContent.classList.remove("show");
        }
    });
});

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

document.addEventListener("DOMContentLoaded", function () {
    const loginButton = document.getElementById("loginButton");
    const logoutButtons = document.querySelectorAll(".logout");

    function showAlertOnLoad() {
        const alertMessage = localStorage.getItem("alertMessage");
        const alertType = localStorage.getItem("alertType") || "success";
        if (alertMessage) {
            showAlert(alertMessage, alertType);
            localStorage.removeItem("alertMessage");
            localStorage.removeItem("alertType");
        }
    }

    function showAlert(message, type = "success") {
        let alertBox = document.getElementById("custom-alert");
        if (!alertBox) {
            alertBox = document.createElement("div");
            alertBox.id = "custom-alert";
            document.body.appendChild(alertBox);
        }

        alertBox.innerHTML = `
        <span>${message}</span>
            <button class="close-btn">&times;</button>
            `;
        alertBox.className = `alert ${type}`;
        alertBox.classList.remove("hidden");
        
        // Tutup saat tombol close diklik
        alertBox.querySelector(".close-btn").addEventListener("click", () => {
            alertBox.classList.add("hidden");
        });

        // Hilang otomatis setelah 2.4 detik
        setTimeout(() => {
            alertBox.classList.add("hidden");
        }, 2400);
    }
    
    if (loginButton) {
        loginButton.addEventListener("click", function (event) {
            event.preventDefault();

            const emailInput = document.querySelector("input[type='email']");
            const passwordInput = document.querySelector("input[type='password']");
            
            if (emailInput.value.trim() !== "" && passwordInput.value.trim() !== "") {
                localStorage.setItem("isLogin", "true");
                localStorage.setItem("alertMessage", "Login Berhasil!");
                localStorage.setItem("alertType", "success");
                window.location.href = "index.html";
            } else {
                showAlert("Harap masukkan email dan password!", "error");
            }
        });
    }

    if (logoutButtons.length > 0) {
        logoutButtons.forEach((btn) => {
            btn.addEventListener("click", function () {
                localStorage.setItem("isLogin", "false");
                localStorage.setItem("alertMessage", "Logout Berhasil!");
                localStorage.setItem("alertType", "success");
                window.location.href = "index.html";
            });
        });
    }

    showAlertOnLoad();

    const userLinks = document.querySelectorAll("#user");
    if (userLinks.length > 0) {
        let isLogin = localStorage.getItem("isLogin") === "true";
        userLinks.forEach(userLink => {
            userLink.setAttribute("href", isLogin ? "profile.html" : "login.html");
        });
    }
});


// Perbaikan dalam Upload Image
const uploadBox = document.querySelector('.box-upload-image-custom');
const imageUpload = document.getElementById('image-upload');
const profileImage = document.getElementById('profile-image');

if (uploadBox && imageUpload) {
    uploadBox.addEventListener('click', function() {
        imageUpload.click();
    });

    imageUpload.addEventListener('change', function(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                if (profileImage) {
                    profileImage.src = e.target.result;
                }
            };
            reader.readAsDataURL(file);
        }
    });
} else {
    console.warn("Elemen upload gambar tidak ditemukan.");
}


document.addEventListener("DOMContentLoaded", function () {
    const hamburgerSidebar = document.getElementById("hamburger-sidebar");
    const mobileSidebar = document.getElementById("mobile-sidebar");
    const sidebarOverlay = document.getElementById("sidebar-overlay");

    if (hamburgerSidebar && mobileSidebar && sidebarOverlay) {
        hamburgerSidebar.addEventListener("click", function () {
            mobileSidebar.classList.toggle("active");
            hamburgerSidebar.classList.toggle("active");
            sidebarOverlay.style.display = mobileSidebar.classList.contains("active") ? "block" : "none"; // Toggle overlay
        });
        
        // Close sidebar when clicking outside (on the overlay)
        sidebarOverlay.addEventListener("click", function () {
            mobileSidebar.classList.remove("active");
            hamburgerSidebar.classList.remove("active");
            sidebarOverlay.style.display = "none";
        });
    }
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

//search load-more
document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.querySelector(".form-input.search");
    const searchButton = document.querySelector(".btn-a.search");
    const cards = document.querySelectorAll(".card");
    const noResults = document.getElementById("no-results");
    const loadMoreButton = document.getElementById("load-more");

    const filterArticles = () => {
        const query = searchInput.value.toLowerCase().trim();
        let hasResults = false;

        cards.forEach(card => {
            const matches = [".card-title", ".card-text"].some(sel => 
                card.querySelector(sel).textContent.toLowerCase().includes(query)
            );

            if (matches) {
                card.style.display = "block";
                card.classList.remove("hidden-article"); // Hapus class hidden jika cocok
                hasResults = true;
            } else {
                card.style.display = "none";
            }
        });

        noResults.style.display = hasResults ? "none" : "block";

        // Sembunyikan tombol "Lebih Banyak Artikel" jika ada hasil pencarian
        loadMoreButton.style.display = hasResults ? "none" : "none";
    };

    searchButton.addEventListener("click", filterArticles);
    searchInput.addEventListener("keyup", event => {
        if (event.key === "Enter") filterArticles();
    });

    loadMoreButton.addEventListener("click", () => {
        document.querySelectorAll(".hidden-article").forEach(article => {
            article.classList.remove("hidden-article");
            article.style.display = "block"; // Pastikan artikel muncul
        });
        loadMoreButton.style.display = "none";
    });
});
