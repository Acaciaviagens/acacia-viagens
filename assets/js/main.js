/* -----------------------------
   HERO CAROUSEL
------------------------------ */

let currentSlide = 0;
const slides = document.querySelectorAll(".hero-slide");
const dotsContainer = document.getElementById("heroDots");

/* Cria dots */
slides.forEach((_, i) => {
    const dot = document.createElement("span");
    dot.dataset.slide = i;
    dot.onclick = () => goToSlide(i);
    dotsContainer.appendChild(dot);
});

const dots = dotsContainer.querySelectorAll("span");

function goToSlide(n) {
    slides[currentSlide].classList.remove("active");
    dots[currentSlide].classList.remove("active");

    currentSlide = n;

    slides[currentSlide].classList.add("active");
    dots[currentSlide].classList.add("active");
}

function nextSlide() {
    let next = currentSlide + 1 >= slides.length ? 0 : currentSlide + 1;
    goToSlide(next);
}

goToSlide(0);
setInterval(nextSlide, 6000);

/* -----------------------------
   MOBILE MENU
------------------------------ */
const mobileToggle = document.getElementById("mobileToggle");
const mainNav = document.getElementById("mainNav");

mobileToggle.addEventListener("click", () => {
    mainNav.classList.toggle("show");
});

/* -----------------------------
   MODAL LOGIN
------------------------------ */

const accountModal = document.getElementById("accountModal");
const openAccount = document.getElementById("openAccount");
const closeAccount = document.getElementById("closeAccount");

openAccount.onclick = () => {
  accountModal.classList.remove("hidden");
};

closeAccount.onclick = () => {
  accountModal.classList.add("hidden");
};

/* -----------------------------
   LAZYLOADING DAS OFERTAS
------------------------------ */
const lazyImages = document.querySelectorAll("img[data-src]");

const lazyLoad = (entry, observer) => {
    if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        observer.unobserve(img);
    }
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => lazyLoad(e, observer));
}, { threshold: 0.25 });

lazyImages.forEach(img => observer.observe(img));
xy

