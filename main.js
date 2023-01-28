"user strict";
console.log("hello world");

const nav = document.querySelectorAll(".nav-lists");

nav.forEach((bar) => {
  bar.addEventListener("click", () => {
    console.log("click");
    bar.classList.toggle("active");
  });
});
