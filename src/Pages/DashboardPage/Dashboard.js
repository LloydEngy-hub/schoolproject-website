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
// main js
document
  .querySelectorAll(".sidebar-buttons a, .sidebar-menu a")
  .forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault(); // Prevent default link behavior

      // Hide all sections
      document.querySelectorAll(".content section").forEach((section) => {
        section.style.display = "none";
      });

      // Show the targeted section
      const sectionId = this.getAttribute("data-section");
      document.getElementById(sectionId).style.display = "block";
    });
  });

// Initially hide all sections except the first one
document.querySelectorAll(".content section").forEach((section, index) => {
  section.style.display = index === 0 ? "block" : "none";
});

 document.querySelectorAll(".pending-box li").forEach(function (item) {
   item.addEventListener("click", function () {
     alert("Redirecting to task details...");
     // Replace the alert with the actual navigation code
     // window.location.href = 'your-target-url';
   });
 });

 document.getElementById("send-button").addEventListener("click", function () {
   const messageInput = document.getElementById("message");
   const messageText = messageInput.value.trim();

   if (messageText) {
     const chatConversation = document.getElementById("chat-conversation");
     const newMessage = document.createElement("div");
     newMessage.classList.add("chat-message", "sender");
     newMessage.innerHTML = `<span class="message-content">${messageText}</span>`;

     chatConversation.insertBefore(
       newMessage,
       document.getElementById("chat-input")
     );
     chatConversation.scrollTop = chatConversation.scrollHeight; // Scroll to the bottom

     messageInput.value = ""; // Clear the input
   }
 });

 document.addEventListener("DOMContentLoaded", function () {
   const username = localStorage.getItem("username");
   const email = localStorage.getItem("email");

   if (username && email) {
     document.getElementById("user-name").textContent = username;
     document.getElementById("user-email").textContent = email;
   }
 });