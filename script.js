gsap.registerPlugin(ScrollTrigger);
function navAnimation() {

  const tl = gsap.timeline({
    defaults: {
      duration: 0.8,
      ease: "power3.out"
    }
  });

  tl.from(".nav .logo", {
    y: -40,
    opacity: 0,
    scale: 0.8
  })

    .from(".nav .tabs .tab", {
      y: -30,
      opacity: 0,
      stagger: 0.15
    }, "-=0.4")

    .from(".nav button", {
      y: -30,
      opacity: 0,
      scale: 0.7
    }, "-=0.5")

    .from(".hero-section .section-content h3", {
      x: -80,
      opacity: 0,
      filter: "blur(4px)"
    }, "-=0.2")

    .from(".hero-section .section-content p", {
      x: -60,
      opacity: 0,
      filter: "blur(3px)"
    }, "-=0.5")

    .from(".hero-section .section-content button", {
      y: 30,
      opacity: 0,
      scale: 0.85
    }, "-=0.5")

    .from(".hero-section .section-content .cover", {
      y: 80,
      opacity: 0,
      scale: 0.9
    }, "-=0.6");


  gsap.from(".container1 .text", {
    x: -100,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".container1",
      start: "top 75%",
      end: "top 30%",
      scrub: 1
    }
  });
  gsap.from(".container1 .cover1", {
    x: 100,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out",

    scrollTrigger: {
      trigger: ".container1",
      start: "top 75%",
      end: "top 30%",
      scrub: true
    }
  });

  gsap.from(".container2 .text", {
    x: 100,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".container2",
      start: "top 75%",
      end: "top 30%",
      scrub: 1
    }
  });
  gsap.from(".container2 .cover1", {
    x: -100,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out",

    scrollTrigger: {
      trigger: ".container2",
      start: "top 75%",
      end: "top 30%",
      scrub: true
    }
  });

}

function cursor() {
  const cursorCircle = document.querySelector(".cursor");

  window.addEventListener("mousemove", (dets) => {
    cursorCircle.style.display = `flex`;
    cursorCircle.style.transform =
      `translate(${dets.clientX}px, ${dets.clientY}px)`;
  });

  document.addEventListener("mouseleave", () => {
    gsap.to(cursorCircle, {
      opacity: 0,
      duration: 0.2
    });
  });

  document.addEventListener("mouseenter", () => {
    gsap.to(cursorCircle, {
      opacity: 1,
      duration: 0.2
    });
  });
}

cursor();
navAnimation();



const menuButton = document.querySelector(".resposive-nab");
const menuBar = document.querySelector(".menu-bar");
const menuTab = document.querySelector(".resp-tabs .resp-tab");

menuButton.addEventListener("click", (e) => {
  e.stopPropagation();
  menuBar.classList.toggle("active");
});

document.addEventListener("click", () => {
  menuBar.classList.remove("active");
});

const signIn = document.querySelector(".sign-in .login");
const loginPage = document.querySelector(".login-page");
const signInBox = document.querySelector(".signin-page");

signIn.addEventListener("click", (e) => {
  e.stopPropagation();
  loginPage.classList.toggle("show");
});

loginPage.addEventListener("click", () => {
  loginPage.classList.remove("show");
});

signInBox.addEventListener("click", (e) => {
  e.stopPropagation();
});


