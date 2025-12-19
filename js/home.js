document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".hero-slide");
  const dots = document.querySelectorAll(".dot");
  let current = 0; //CurrentSlideIndex

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === index);
      dots[i].classList.toggle("active", i === index);
    });
    const content = slides[index].querySelector(".hero-content");
    gsap.fromTo(content, {autoAlpha: 0, y: 50}, {duration: 1.2, autoAlpha: 1, y: 0, ease: "power3.out"});
  }
  function nextSlide() {
    current = (current + 1) % slides.length;
    showSlide(current);
  }
  dots.forEach((dot, i) =>
    dot.addEventListener("click", () => {
      current = i;
      showSlide(current);
    })
  );
  setInterval(nextSlide, 6000);
  showSlide(current);
});

gsap.registerPlugin(ScrollTrigger);

/*
gsap.from(".practice-card", {
  opacity: 0,
  y: 50,
  ease: "power2.out",
  stagger: 1,
  scrollTrigger: {
    trigger: ".practice-grid",
    start: "top 80%",
    end: "top center",
    scrub: true,
  },
});*/
