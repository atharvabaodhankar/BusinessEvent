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
Ferro.button(".nav-left ul a li");

gsap.to("#hero", {
  backgroundPosition: "100% 100%",
  scrollTrigger: {
    trigger: "#hero",
    start: "top center",
    end: "bottom center",
    scrub: 1,
  },
});
gsap.to(".hero-text-1", {
  opacity: 0,
  xPercent: 20,
  scrollTrigger: {
    trigger: ".hero",
    start: "60% 50%",
    end: "bottom 70%",
    scrub: 1,
  },
});
gsap.to(".hero-text-2", {
  opacity: 0,
  xPercent: -20,
  scrollTrigger: {
    trigger: ".hero",
    start: "60% 50%",
    end: "bottom 70%",
    scrub: 1,
  },
});


let mm = gsap.matchMedia();
mm.add("(min-width: 900px)", () => {
  gsap.from(".speakers-box-2", {
    scale: 0.7,
    opacity: 0,
    scrollTrigger: {
      trigger: "#speakers",
      start: "top 50%",
      end: "center 50%",
      scrub: 1,
    },
  });
  gsap.from(".speakers-box-1", {
    xPercent: 50,
    opacity: 0,
    scrollTrigger: {
      trigger: "#speakers",
      start: "top 50%",
      end: "center 50%",
      scrub: 1,
    },
  });
  gsap.from(".speakers-box-3", {
    xPercent: -50,
    opacity: 0,
    scrollTrigger: {
      trigger: "#speakers",
      start: "top 50%",
      end: "center 50%",
      scrub: 1,
    },
  });
});

mm.add("(max-width: 900px)", () => { 
  gsap.from(".speakers-box-1", {
    xPercent: 50,
    opacity: 0,
    scrollTrigger: {
      trigger: ".speakers-box-1",
      start: "top 50%",
      end: "center 50%",
      scrub: 1,
    },
  });
  gsap.from(".speakers-box-2", {
    xPercent: -50,
    opacity: 0,
    scrollTrigger: {
      trigger: ".speakers-box-2",
      start: "top 50%",
      end: "center 50%",
      scrub: 1,
    },
  });
  gsap.from(".speakers-box-3", {
    xPercent: 50,
    opacity: 0,
    scrollTrigger: {
      trigger: ".speakers-box-3",
      start: "top 50%",
      end: "center 50%",
      scrub: 1,
    },
  });
});

gsap.from(".s-box-animate", {
  opacity: 0,
  yPercent: 50,
  stagger: 0.2,
  scrollTrigger: {
    trigger: "#schedule",
    start: "top 50%",
    end: "center 50%",
    scrub: 3,
  },
})
gsap.from(".design .img img", {
  yPercent: 110,
  stagger: 0.2,
  scrollTrigger: {
    trigger: "#design",
    start: "top 50%",
    end: "center 50%",
    scrub: 4,
  },
})
gsap.from("#design span", {
  opacity: 0,
  yPercent: 50,
  skewX: 10,
  stagger: 0.2,
  scrollTrigger: {
    trigger: "#design",
    start: "top 70%",
    end: "center 50%",
    scrub: 4,
  },
})
var saveTl = gsap.timeline({
  scrollTrigger: {
    trigger: "#save",
    start: "top 50%",
    end: "center 50%",
    scrub: 3,
  },
  onStart: function () {
    document.querySelector("#save video").play();
  }
});

saveTl.from("#save", {
  duration: 1,
});

saveTl.from("#save video", {
  scale: 5,
  opacity: 0,
  rotation: 10,
  duration: 1,
}, "<");
saveTl.from(".save h1, .save p", {
  xPercent: -100,
  duration: 1,
  stagger: 0.1
}, "<");
