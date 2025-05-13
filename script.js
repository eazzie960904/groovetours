let header = document.querySelector("header");
let tourPrograms = document.querySelector("#tourPrograms");

tourPrograms.addEventListener("click", function () {
  header.style.height = "260px";
  event.stopPropagation();
});

// document.addEventListener("click", function () {
//   header.style.height = "50px";
// });

// header 클릭 시 닫히지 않도록 방지
header.addEventListener("click", function (event) {
  event.stopPropagation();
});

// 문서 클릭 시 닫기 (tourPrograms, header 외 클릭 시)
document.addEventListener("click", function () {
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
