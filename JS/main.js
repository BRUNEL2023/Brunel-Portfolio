const text = `Étudiant ingénieur en dernière année de mon cycle, orienté Data et IA, je développe des compétences en Data Engineering, Analytics Engineering, Data Analyst et Machine Learning, avec une forte sensibilité au développement logiciel, au DevOps et aux systèmes IT. Je recherche un stage de fin d’études de 6 mois à partir de mars 2026.`;

const typingElement = document.getElementById("typing-text");

let index = 0;

function typeText() {
  if (index < text.length) {
    typingElement.textContent += text.charAt(index);
    index++;
    setTimeout(typeText, 30);
  }
}

typeText();
// Animation au scroll
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  reveals.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (sectionTop < windowHeight - 100) {
      section.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();


// ===== Menu actif au scroll =====
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a");

function activateMenuLink() {
  let scrollY = window.pageYOffset;

  sections.forEach(section => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 120;
    const sectionId = section.getAttribute("id");

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${sectionId}`) {
          link.classList.add("active");
        }
      });
    }
  });
}

window.addEventListener("scroll", activateMenuLink);



document.addEventListener("click", e => {
  const open = e.target.closest("[data-modal]");
  const close = e.target.closest("[data-close]");

  if (open) {
    const modal = document.getElementById(open.dataset.modal);

    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");

    document.getElementById("modal-title").textContent = open.dataset.title || "";
    document.getElementById("modal-badge").textContent = open.dataset.badge || "";
    document.getElementById("modal-desc").textContent = open.dataset.desc || "";
    document.getElementById("modal-stack").textContent = open.dataset.stack || "";
    document.getElementById("modal-role").textContent = open.dataset.role || "";
    document.getElementById("modal-result").textContent = open.dataset.result || "";

    const git = document.getElementById("modal-github");
    const demo = document.getElementById("modal-demo");

    git.style.display = open.dataset.github ? "inline-flex" : "none";
    demo.style.display = open.dataset.demo ? "inline-flex" : "none";

    if (open.dataset.github) git.href = open.dataset.github;
    if (open.dataset.demo) demo.href = open.dataset.demo;

    document.body.style.overflow = "hidden";
  }

  if (close) {
    const modal = document.getElementById(close.dataset.close);
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }
});

document.addEventListener("keydown", e => {
  if (e.key === "Escape") {
    const modal = document.querySelector(".modal.is-open");
    if (modal) {
      modal.classList.remove("is-open");
      modal.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";
    }
  }
});



document.addEventListener("click", e => {
  const openBtn = e.target.closest("[data-modal]");
  const closeBtn = e.target.closest("[data-close]");

  /* ===== OUVERTURE MODAL ===== */
  if (openBtn) {
    const modal = document.getElementById(openBtn.dataset.modal);
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");

    // Texte
    document.getElementById("modal-title").textContent = openBtn.dataset.title || "";
    document.getElementById("modal-badge").textContent = openBtn.dataset.badge || "";
    document.getElementById("modal-desc").textContent = openBtn.dataset.desc || "";
    document.getElementById("modal-stack").textContent = openBtn.dataset.stack || "";
    document.getElementById("modal-role").textContent = openBtn.dataset.role || "";
    document.getElementById("modal-result").textContent = openBtn.dataset.result || "";

    // Liens
    const git = document.getElementById("modal-github");
    const demo = document.getElementById("modal-demo");

    git.style.display = openBtn.dataset.github ? "inline-flex" : "none";
    demo.style.display = openBtn.dataset.demo ? "inline-flex" : "none";

    if (openBtn.dataset.github) git.href = openBtn.dataset.github;
    if (openBtn.dataset.demo) demo.href = openBtn.dataset.demo;

    /* ===== VIDEO ===== */
    const videoContainer = document.getElementById("modal-video-container");
    const video = document.getElementById("modal-video");
    const source = document.getElementById("modal-video-source");

    if (openBtn.dataset.video) {
      source.src = openBtn.dataset.video;
      video.load();
      videoContainer.style.display = "block";
    } else {
      video.pause();
      source.src = "";
      videoContainer.style.display = "none";
    }

    document.body.style.overflow = "hidden";
  }

  /* ===== FERMETURE ===== */
  if (closeBtn) {
    const modal = document.getElementById(closeBtn.dataset.close);
    const video = document.getElementById("modal-video");

    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");

    video.pause();
    video.currentTime = 0;

    document.body.style.overflow = "";
  }
});

/* ESC */
document.addEventListener("keydown", e => {
  if (e.key === "Escape") {
    const modal = document.querySelector(".modal.is-open");
    const video = document.getElementById("modal-video");

    if (modal) {
      modal.classList.remove("is-open");
      modal.setAttribute("aria-hidden", "true");
      video.pause();
      video.currentTime = 0;
      document.body.style.overflow = "";
    }
  }
});
