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
  console.log(window.scrollY);
});
