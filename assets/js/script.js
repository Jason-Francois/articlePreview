const button = document.querySelector(".social");
const menu = document.querySelector(".menu");
button.addEventListener("click", function() {
  this.classList.toggle("on");
  menu.classList.toggle("show")
});
