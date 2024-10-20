const lenis = new Lenis({
  lerp: 0.05,
});
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

var hamburger = document.querySelector(".hamburger");
var navbar = document.querySelector(".nav-left");
var nav = document.querySelector(".nav");

hamburger.addEventListener("click", () => {
  navbar.classList.toggle("active");
});

function stickyNav() {
  var lastScroll = 0;
  window.addEventListener("scroll", (e) => {
    let currentScroll = window.scrollY;
    if (lastScroll < 100) {
      nav.classList.remove("hide");
      nav.style.background = "transparent";
    } else if (lastScroll > 100) {
      nav.style.background = "var(--bg-color)";
    }
    if (lastScroll > currentScroll && nav.classList.contains("hide")) {
      nav.classList.remove("hide");
    }

    if (currentScroll > lastScroll && !nav.classList.contains("hide")) {
      nav.classList.add("hide");
    }
    lastScroll = currentScroll;
  });
}

stickyNav();
