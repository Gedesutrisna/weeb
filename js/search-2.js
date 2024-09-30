const courses = [
    {
        title: "Mastering Laravel for Web Development",
        category: "Web Developer",
        image: "assets/course-laravel.png",
        instructor: "Sandhika Galih",
        hours: "25 Hours",
        students: "1,200 Students",
        rating: 5,
        modules: "12 Modules",
        progress: 19 
    },
    {
        title: "React.js Fundamentals and Advanced Concepts",
        category: "Web Developer",
        image: "assets/course-react.png",
        instructor: "Sarah Lee",
        hours: "20 Hours",
        students: "900 Students",
        rating: 4.5,
        modules: "10 Modules",
        progress: 6 
    },
    {
        title: "Python for Data Science and Machine Learning",
        category: "Data Science",
        image: "assets/course-phyton.png",
        instructor: "John Doe",
        hours: "40 Hours",
        students: "1,500 Students",
        rating: 5,
        modules: "18 Modules",
        progress: 40 
    },
    {
        title: "UI/UX Design for Web and Mobile Apps",
        category: "Graphic Design",
        image: "assets/course-uiux.png",
        instructor: "Mike Johnson",
        hours: "30 Hours",
        students: "1,100 Students",
        rating: 5,
        modules: "14 Modules",
        progress: 100 
    },
    {
        title: "Mastering Vue.js for Modern Web Development",
        category: "Web Developer",
        image: "assets/course-vue.png",
        instructor: "Jane Smith",
        hours: "25 Hours",
        students: "850 Students",
        rating: 4.5,
        modules: "12 Modules",
        progress: 0 
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

        filteredCourses.forEach(course => {
            const courseIndex = index + 1; 

            courseResults.innerHTML += `
                <div class="col-3 col-md-6 col-sm-12">
                    <div class="card course">
                        <div class="">
                            <img class="img-course" src="${course.image}" alt="${course.title}">
                        </div>
                        <div class="cardp">
                            <a href="course.html">
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
                            </a>
                            <div class="">
                                <div class="progress-bar">
                                    <div class="bar" style="width: ${course.progress}%"></div> <!-- Progress bar dinamis -->
                                </div>
                                <div class="d-flex between center">
                                    <h5>${course.progress}%</h5> <!-- Persentase progress dinamis -->
                                    <div class="rating" id="rating-system">
                                        <i class='bx bx-star star' data-value="1"></i>
                                        <i class='bx bx-star star' data-value="2"></i>
                                        <i class='bx bx-star star' data-value="3"></i>
                                        <i class='bx bx-star star' data-value="4"></i>
                                        <i class='bx bx-star star' data-value="5"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        });
        const remainingSlots = filteredCourses.length % 4;
        
        if (remainingSlots === 2) {
            courseResults.innerHTML += `
                <div class="col-3 col-md-4 col-sm-12 mb"></div>
                <div class="col-3 col-md-4 col-sm-12 mb"></div>
            `;
        } else if (remainingSlots === 3) {
            courseResults.innerHTML += `
                <div class="col-3 col-md-4 col-sm-12 mb"></div>
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
