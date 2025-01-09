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

// ======================================================
// blog scroll elements
const fixed_img = document.querySelector(".fixed_img");
const firstBlog = document.querySelector(".firstBlog");
const secondBlog = document.querySelector(".secondBlog");
const thirdBlog = document.querySelector(".thirdBlog");
const fourthBlog = document.querySelector(".fourthBlog");
const fifthBlog = document.querySelector(".fifthBlog");
const landingPage = document.querySelector(".landing_page");
const fixed_img_container = document.querySelector(".fixed_img_container");
const transition_container = document.querySelector(".transition_container");

// get total page scroll height before reaching the first blog
const webFirstTotalPartHeight =
  landingPage.getBoundingClientRect().height +
  transition_container.getBoundingClientRect().height;

window.addEventListener("scroll", () => {
  // =================================================
  // nav scroll functionality
  if (window.scrollY > 40) {
    OpenFunction(nav_container, "nav_bg");
  } else {
    CloseFunction(nav_container, "nav_bg");
  }
  // ===================================================

  // =================================================
  // blog scroll functionality
  if (window.scrollY >= webFirstTotalPartHeight) {
    OpenFunction(fixed_img_container, "fixed");

    // =============================================
    // Logic for each blog elements height
    const Blog1 =
      webFirstTotalPartHeight + firstBlog.getBoundingClientRect().height;
    const Blog2 = Blog1 + secondBlog.getBoundingClientRect().height;
    const Blog3 = Blog2 + thirdBlog.getBoundingClientRect().height;
    const Blog4 = Blog3 + fourthBlog.getBoundingClientRect().height;
    const Blog5 = Blog4 + fifthBlog.getBoundingClientRect().height;
    const Blog6 = Blog5 + fifthBlog.getBoundingClientRect().height;
    // ==============================================

    if (window.scrollY >= Blog1) {
      fixed_img.src = "./src/Assets/Images/Blog1.jpeg";
    }

    if (window.scrollY >= Blog2) {
      fixed_img.src = "./src/Assets/Images/bg2.jpg";
    }

    if (window.scrollY >= Blog3) {
      fixed_img.src = "./src/Assets/Images/bg8.jpg";
    }

    if (window.scrollY >= Blog4) {
      fixed_img.src = "./src/Assets/Images/bg15.jpg";
    }

    if (window.scrollY >= Blog5) {
      fixed_img.src = "./src/Assets/Images/bg6.jpg";
    }
    if (window.scrollY >= Blog6 - 70) {
      CloseFunction(fixed_img_container, "fixed");
      OpenFunction(fixed_img_container, "absolute");
    } else {
      CloseFunction(fixed_img_container, "absolute");
    }
  } else {
    CloseFunction(fixed_img_container, "fixed");
  }
});
