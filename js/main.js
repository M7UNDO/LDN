const currentPath = window.location.pathname.split("/").pop();

const root = document.documentElement;
const primaryColour = getComputedStyle(root).getPropertyValue("--primary-colour");
const accentColour = getComputedStyle(root).getPropertyValue("--accent-colour");
const typographyColour = getComputedStyle(root).getPropertyValue("--typography-colour");
const backgroundColour = getComputedStyle(root).getPropertyValue("--background-colour");

gsap.registerPlugin(ScrollTrigger);

window.addEventListener("DOMContentLoaded", () => {
  loadNav();
});

function loadNav() {
  const navContainer = document.querySelector(".nav-container");
  navContainer.innerHTML = "";

  navHTML = `
        <div class="nav-logo">
            <a class="logo" href="index.html">LDN</a>
          </div>
          <div class="nav-menu">
            <ul class="navlinks">
              <li><a href="../index.html">Home</a></li>
              <li><a href="../services/services.html">Services</a></li>
              <li><a href="../about/about.html">About</a></li>
              <li><a href="../contact/contact.html">Contact</a></li>
            </ul>
            <div class="socials-container"><a class="sm instagram" href="" target="_blanks"><i class="fa-brands fa-instagram"></i></a></div>
          </div>
    `;

  navContainer.innerHTML = navHTML;

  const navlinks = document.querySelectorAll(".navlinks a");
  const socialIcon = document.querySelectorAll(".sm");
  const logo = document.querySelector(".logo");

  navlinks.forEach((navlink) => {
    const linkPage = navlink.getAttribute("href").split("/").pop();

    if (linkPage === currentPath) {
      navlink.classList.add("active");
    }

    navlink.addEventListener("mouseover", () => {
      gsap.to(navlink, {
        color: accentColour,
        y: -2,
        duration: 0.2,
        ease: "power2.in",
      });
    });

    navlink.addEventListener("mouseleave", () => {
      gsap.to(navlink, {
        color: "",
        y: 0,
        duration: 0.2,
        ease: "power2.out",
      });
    });
  });

  socialIcon.forEach((social) => {
    social.addEventListener("mouseover", () => {
      gsap.to(social, {
        color: accentColour,
        scale: 1.1,
        duration: 0.2,
      });
    });

    social.addEventListener("mouseleave", () => {
      gsap.to(social, {
        color: "",
        scale: 1,
        duration: 0.1,
        ease: "power1.in"
      });
    });
    /*
    social.addEventListener("click", ()=>{
      gsap.fromTo(social, {scale: 1}, {scale: 1.05, duration:0.2, yoyo: true, repeat: 1, ease: "power1.inOut"})
    })*/
  });

  logo.addEventListener("mouseover", () => {
    gsap.to(logo, {
      color: accentColour,
      scale: 1.1,
      duration: 0.1,
    });
  });

  logo.addEventListener("mouseleave", () => {
    gsap.to(logo, {
      color: "",
      scale: 1,
      duration: 0.2,
    });
  });
}
