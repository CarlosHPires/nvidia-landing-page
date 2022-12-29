// Hamburg

const hamburguer = document.querySelector(".hamburguer");
const headerNav = document.querySelector(".header-nav");

hamburguer.addEventListener("click", function () {
  hamburguer.classList.toggle("active");
  headerNav.classList.toggle("show");
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburguer.classList.remove("active");
    headerMenu.classList.remove("active");
  })
);
// Sticky header

window.onscroll = function () {
  stickyNav();
};

const navbar = document.querySelector(".header-bg");

const sticky = navbar.offsetTop;

function stickyNav() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}
