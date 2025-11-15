// Sidebar Toggle with Overlay
const hamburger = document.querySelector(".hamburger");
const sidebar = document.querySelector(".sidebar");
const closeBtn = document.querySelector(".close-btn");

// Create overlay
const overlay = document.createElement("div");
overlay.classList.add("overlay");
document.body.appendChild(overlay);

// Open sidebar
hamburger.addEventListener("click", (e) => {
  e.stopPropagation();
  sidebar.classList.add("active");
  overlay.classList.add("active");
});

// Close with close button
closeBtn.addEventListener("click", () => {
  sidebar.classList.remove("active");
  overlay.classList.remove("active");
});

// Close when clicking overlay
overlay.addEventListener("click", () => {
  sidebar.classList.remove("active");
  overlay.classList.remove("active");
});

// Close when clicking a nav link inside sidebar
sidebar.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    sidebar.classList.remove("active");
    overlay.classList.remove("active");
  });
});

// Remove preloader completely after animation
window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  setTimeout(() => {
    preloader.remove();
  }, 7000); // matches CSS total timing (6s text + 1s exit)
});