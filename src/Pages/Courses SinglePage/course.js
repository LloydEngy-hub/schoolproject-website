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

//Single course elements
const icon_container = document.querySelector(".icon_container");
const course_feature_container = document.querySelector(
  ".course_feature_details_container"
);

// dynamically update icon data
const iconData = async () => {
  const resp = await fetch("../../../LocalApi.json");
  const { courseInfo } = await resp.json();

  const displayIconData = courseInfo
    .map(({ icon, name, title }) => {
      return `
      <div class="course_info_details">
                  <!-- =============================================== -->
                  <!-- icon profile -->
                  <div class="icon_profile">
                    ${icon}
                  </div>

                  <!-- =============================================== -->
                  <!-- details -->
                  <div class="details">
                    <!-- =============================================== -->
                    <!-- course info title-->
                    <h2 class="info_title">${title}</h2>

                    <!-- =============================================== -->
                    <!-- name -->
                    <p class="name">${name}</p>
                  </div>
                </div>
    
    
    
    `;
    })
    .join("");
  icon_container.innerHTML = displayIconData;
};

// dynamically update course feature
const featureData = async () => {
  const resp = await fetch("../../../LocalApi.json");
  const { courseFeature } = await resp.json();

  const displayFeatureData = courseFeature
    .map(({ icon, title, detail }) => {
      return `
     <div class="feature_details">
                <!-- =============================================== -->
                <!-- feature name -->
                <div class="feature_name">
                  <!-- =============================================== -->
                  <!-- icon -->
                  ${icon}

                  <!-- =============================================== -->
                  <!-- titleName -->
                  <h3 class="titleName">${title}</h3>
                </div>

                <!-- =============================================== -->
                <!-- number -->
                <div class="number">${detail}</div>
              </div>
    
    
    
    
    `;
    })
    .join("");
  course_feature_container.innerHTML = displayFeatureData;
};

window.addEventListener("DOMContentLoaded", () => {
  iconData();
  featureData();

  // ==============================================================
  // set single page to be exactly like course click on course page
  const profile = document.querySelector(".course_profile");
  const title = document.querySelector(".course_title");
  const text = document.querySelector(".main");

  const clickImg = localStorage.getItem("courseImg");
  const clickText = localStorage.getItem("courseText");
  const clickTitle = localStorage.getItem("courseTitle");

  setTimeout(() => {
    localStorage.setItem("isClick", JSON.stringify(false));
  }, 2000);

  profile.src = clickImg;
  text.textContent = clickText;
  title.textContent = clickTitle;
});
