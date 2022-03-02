const d = document;

const menu = d.getElementById("hamburger"),
  nav = d.getElementById("navMobile"),
  btnExit = d.getElementById("exit"),
  navModal = d.getElementsByClassName("nav-mobile")[0];

menu.addEventListener("click", () => {
  nav.classList.toggle("active");
});

btnExit.addEventListener("click", () => {
  nav.classList.toggle("active");
});

navModal.addEventListener("click", (e) => {
  nav.classList.toggle("active");
});
