const shots = document.querySelectorAll(".portfolio-shot img");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightbox-image");

shots.forEach((image) => {
  image.parentElement.addEventListener("click", () => {
    lightboxImage.src = image.currentSrc || image.src;
    lightboxImage.alt = image.alt;
    lightbox.showModal();
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && lightbox.open) {
    lightbox.close();
  }
});

const revealables = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.14 }
);

revealables.forEach((item) => observer.observe(item));
