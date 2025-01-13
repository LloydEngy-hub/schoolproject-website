// ===============================================
// functions
// open function
const OpenFunction = (div, classes) => {
  div.classList.add(classes);
};

// close function
const CloseFunction = (div, classes) => {
  div.classList.remove(classes);
};

const ToggleFunction = (div, classes) => {
  div.classList.toggle(classes);
};

// ===================================================
// nav elements
const nav_toggle_btn = document.querySelector(".nav_toggle");
const nav_container = document.querySelector(".nav_container");
const mobile_nav = document.querySelector(".mobile_nav");
const Mobile_nav_container = document.querySelector(".mobile_nav_container");

// Mobile nav functionality
nav_toggle_btn.addEventListener("click", (e) => {
  const currentIcon = e.target;

  // change toggle icon
  ToggleFunction(nav_toggle_btn, "toggle_nav");

  // get mobile nav container height
  const height = Mobile_nav_container.getBoundingClientRect().height;

  const navInitialHeight = mobile_nav.getBoundingClientRect().height;

  if (currentIcon.classList.contains("fa-bars")) {
    OpenFunction(nav_container, "nav_bg");
    nav_container.style.height = `calc(${height}px + 1rem)`;
  } else {
    CloseFunction(nav_container, "nav_bg");
    nav_container.style.height = `calc(${navInitialHeight}px + 1rem)`;
  }
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 40) {
    OpenFunction(nav_container, "nav_bg");
  } else {
    CloseFunction(nav_container, "nav_bg");
  }
});

// ======================================================
// course element
const course_container = document.querySelector(".course_container");

// course functionality
const Course = async () => {
  const resp = await fetch("../../../LocalApi.json");
  const { ourCourse } = await resp.json();

  const displayCourses = ourCourse
    .map(({ courseIcon, courseImg, courseName, courseText }) => {
      return ` <div class="courses">
            <!-- =============================================== -->
            <!-- courses profile container-->
            <div class="courses_profile_container">
              <!-- =============================================== -->
              <!-- courses profile -->
              <img
                src=${courseImg}
                alt="courses_profile"
                class="courses_profile"
              />

              <!-- =============================================== -->
              <!-- courses icon -->
              <div class="courses_icon">
                ${courseIcon}
              </div>
            </div>

            <!-- =============================================== -->
            <!-- courses title -->
            <h2 class="courses_title">${courseName}</h2>

            <!-- =============================================== -->
            <!-- courses detail -->
            <p class="courses_detail">
             ${courseText.substring(0, 50) + "....."}
        
        
            </p>

            <!-- =============================================== -->
            <!-- read more -->
            <a href="../Courses SinglePage/index.htm" class="read_more">
              READ MORE <i class="fa-solid fa-arrow-right"></i>
            </a>
          </div>`;
    })
    .join("");
  course_container.innerHTML = displayCourses;

  // =========================================================
  // read more element
  const ReadMore = document.querySelectorAll(".read_more");

  // read more functionality
  ReadMore.forEach((showMore, index) => {
    showMore.addEventListener("click", (e) => {
      const currentTarget = e.target;
      const parentElement = currentTarget.parentElement;

      const img = parentElement.querySelector(".courses_profile");
      const title = parentElement.querySelector(".courses_title");

      localStorage.setItem("courseImg", img.src);
      localStorage.setItem("courseTitle", title.textContent);
      localStorage.setItem("courseText", ourCourse[index].courseText);
    });
  });
};

window.addEventListener("DOMContentLoaded", () => {
  Course();
});
