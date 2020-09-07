const button = document.querySelector(".social");
const menu = document.querySelector(".menuBox");
button.addEventListener("click", function() {
  this.classList.toggle("on");
  menu.classList.toggle("show")
});
