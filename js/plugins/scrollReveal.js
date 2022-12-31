ScrollReveal({
  reset: true,
  distance: "60px",
  duration: 1200,
  delay: 100,
  origin: "top",
});

// RTX 4090 //

const rtxImg = document.querySelector(".about-content-image");

ScrollReveal().reveal(rtxImg, {
  delay: 360,
  origin: "right",
  distance: "220px",
  reset: false,
});
