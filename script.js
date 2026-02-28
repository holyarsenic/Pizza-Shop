function navAnimation() {

  gsap.registerPlugin(ScrollTrigger);

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

  ScrollTrigger.matchMedia({
    "(max-width: 600px)": () => {

      gsap.from(".about-us h2", {
        y: 60,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".about-us h2",
          start: "top 92%"
        }
      });

      gsap.utils.toArray(".about-us .container")
        .forEach((container, i) => {

          const text = container.querySelector(".text");
          const image = container.querySelector(".cover1");

          gsap.from(text, {
            x: i % 2 === 0 ? -60 : 60,
            opacity: 0,
            duration: 1,
            scrollTrigger: {
              trigger: container,
              start: "top 90%"
            }
          });

          gsap.from(image, {
            x: i % 2 === 0 ? 60 : -60,
            opacity: 0,
            scale: 0.95,
            duration: 1,
            scrollTrigger: {
              trigger: container,
              start: "top 90%"
            }
          });

        });
    },

    "(min-width: 769px)": () => {

      gsap.from(".about-us h2", {
        y: 80,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".about-us h2",
          start: "top 80%"
        }
      });

      gsap.utils.toArray(".about-us .container")
        .forEach((container, i) => {

          const text = container.querySelector(".text");
          const image = container.querySelector(".cover1");

          gsap.from(text, {
            x: i % 2 === 0 ? -100 : 100,
            opacity: 0,
            duration: 1,
            scrollTrigger: {
              trigger: container,
              start: "top 75%"
            }
          });

          gsap.from(image, {
            x: i % 2 === 0 ? 100 : -100,
            opacity: 0,
            scale: 0.9,
            duration: 1,
            scrollTrigger: {
              trigger: container,
              start: "top 75%"
            }
          });

        });
    }

  });

  ScrollTrigger.refresh();

}

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


