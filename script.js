let header = document.querySelector("header");
let nav = document.querySelector("nav");

nav.addEventListener("mouseover", function () {
  header.style.height = "260px";
});

nav.addEventListener("mouseout", function () {
  header.style.height = "50px";
});

document.querySelector(".button1").addEventListener("click", function () {
  document.querySelector(".mainContainer").style.transform = "translate(0vw)";
});
document.querySelector(".button2").addEventListener("click", function () {
  document.querySelector(".mainContainer").style.transform =
    "translate(-100vw)";
});
document.querySelector(".button3").addEventListener("click", function () {
  document.querySelector(".mainContainer").style.transform =
    "translate(-200vw)";
});
