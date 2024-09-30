    const courses = [
        {
            title: "Mastering Laravel for Web Development",
            category: "Laravel",
            image: "assets/course-laravel.webp",
            instructor: "Sandhika Galih",
            instructorImage: "assets/profile-galih.webp",
            hours: "25 Hours",
            students: "1,200 Students",
            rating: 5,
            modules: "12 Modules",
        },
        {
            title: "React.js Fundamentals and Advanced Concepts",
            category: "React.js",
            image: "assets/course-react.webp",
            instructor: "Sarah Lee",
            instructorImage: "assets/profile-sarah.webp",
            hours: "20 Hours",
            students: "900 Students",
            rating: 4.5,
            modules: "10 Modules",
        },
        {
            title: "Python for Data Science and Machine Learning",
            category: "Python",
            image: "assets/course-phyton.webp",
            instructor: "John Doe",
            instructorImage: "assets/profile-jhon.webp",
            hours: "40 Hours",
            students: "1,500 Students",
            rating: 5,
            modules: "18 Modules",
        },
        {
            title: "UI/UX Design for Web and Mobile Apps",
            category: "UI/UX Design",
            image: "assets/course-uiux.webp",
            instructor: "Mike Johnson",
            instructorImage: "assets/profile-mike.webp",
            hours: "30 Hours",
            students: "1,100 Students",
            rating: 5,
            modules: "14 Modules",
        },
        {
            title: "Mastering Vue.js for Modern Web Development",
            category: "Vue.js",
            image: "assets/course-vue.webp",
            instructor: "Sophia Wilson",
            instructorImage: "assets/profile-sophia.webp",
            hours: "25 Hours",
            students: "850 Students",
            rating: 4.5,
            modules: "12 Modules",
        },
        {
            title: "Docker Essentials for DevOps and Developers",
            category: "Docker",
            image: "assets/course-doker.webp",
            instructor: "Jenny Kim",
            instructorImage: "assets/profile-jenny.webp",
            hours: "18 Hours",
            students: "950 Students",
            rating: 5,
            modules: "8 Modules",
        },
        {
            title: "Mastering CSS for Modern Web Development",
            category: "CSS",
            image: "assets/course-css.webp",
            instructor: "Alice Doe",
            instructorImage: "assets/profile-alice.webp",
            hours: "20 Hours",
            students: "1,500 Students",
            rating: 5,
            modules: "10 Modules",
        },
        {
            title: "HTML: From Beginner to Expert",
            category: "HTML",
            image: "assets/course-html.webp",
            instructor: "Bob Harris",
            instructorImage: "assets/profile-bob.webp",
            hours: "25 Hours",
            students: "1,300 Students",
            rating: 4.5,
            modules: "12 Modules",
        }
    ];

    function searchCourses() {
        const searchQuery = document.getElementById("search-input").value.toLowerCase();
        const courseResults = document.getElementById("course-results");
        const searchResultsSection = document.getElementById("search-results-section");

        const disSections = document.querySelectorAll(".dis-section");

        courseResults.innerHTML = ""; 

        const filteredCourses = courses.filter(course =>
            course.title.toLowerCase().includes(searchQuery) || course.category.toLowerCase().includes(searchQuery)
        );

        if (filteredCourses.length > 0) {
            searchResultsSection.classList.remove('hidden');
            disSections.forEach(section => section.classList.add('hidden'));
        
            filteredCourses.forEach((course, index) => {
                const courseIndex = index + 1; 
        
                courseResults.innerHTML += `
                    <div class="col-3 col-md-6 col-sm-12 mb">
                        <div class="card course">
                            <img class="img-course" src="${course.image}" alt="${course.title}">
                            <div class="cardp">
                                <div class="tag-slide">
                                    <p class="tag">${course.category}</p>
                                </div>
                                <h4 class="text-clamp">${course.title}</h4>
                                <div class="d-flex mb">
                                    <div class="rating">
                                        ${generateStars(course.rating)}
                                    </div>
                                    <p class="student"><i class='bx bxs-group'></i> ${course.students}</p>
                                </div>
                                <div class="d-flex mb">
                                    <p class="hour"><i class='bx bx-time-five'></i> ${course.hours}</p>
                                    <p class="modul"><i class='bx bx-book'></i> ${course.modules}</p>
                                </div>
                                <div class="d-flex center">
                                    <div class="">
                                        <img class="profile" src="${course.instructorImage}" alt="${course.instructor}">
                                    </div>
                                    <h5>${course.instructor}</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
            });
        
            const remainingSlots = filteredCourses.length % 4;
        
            if (remainingSlots === 2) {
                courseResults.innerHTML += `
                    <div class="col-3 col-md-6 col-sm-12 mb"></div>
                    <div class="col-3 col-md-6 col-sm-12 mb"></div>
                `;
            } else if (remainingSlots === 3) {
                courseResults.innerHTML += `
                    <div class="col-3 col-md-6 col-sm-12 mb"></div>
                `;
            }
        } else {
            searchResultsSection.classList.remove('hidden');
            disSections.forEach(section => section.classList.add('hidden'));
            courseResults.innerHTML = `<p>No courses found</p>`;
        }
        
        function generateStars(rating) {
            let stars = "";
            for (let i = 0; i < 5; i++) {
                stars += i < Math.floor(rating) ? "<i class='bx bxs-star'></i>" : (i < rating ? "<i class='bx bxs-star-half'></i>" : "<i class='bx bx-star'></i>");
            }
            return stars;
        }
        
    }