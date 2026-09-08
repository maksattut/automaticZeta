const slides = document.querySelectorAll(".slide");

let currentSlide = 0;

function showSlide(index) {
    if (index < 0) index = slides.length - 1;
    if (index >= slides.length) index = 0;

    slides[currentSlide].classList.remove("active");

    currentSlide = index;

    slides[currentSlide].classList.add("active");
}

// Клавиатура
document.addEventListener("keydown", function (event) {

    if (event.key === "ArrowRight" || event.key === " ") {
        event.preventDefault();
        showSlide(currentSlide + 1);
    }

    if (event.key === "ArrowLeft") {
        event.preventDefault();
        showSlide(currentSlide - 1);
    }

    if (event.key === "Home") {
        showSlide(0);
    }

    if (event.key === "End") {
        showSlide(slides.length - 1);
    }
});

// Клик мышью
document.addEventListener("click", function (event) {

    if (event.clientX > window.innerWidth / 2) {
        showSlide(currentSlide + 1);
    } else {
        showSlide(currentSlide - 1);
    }
});

// Свайп на телефоне
let touchStartX = 0;

document.addEventListener("touchstart", function (event) {
    touchStartX = event.touches[0].clientX;
}, { passive: true });

document.addEventListener("touchend", function (event) {

    const touchEndX = event.changedTouches[0].clientX;
    const distance = touchEndX - touchStartX;

    if (Math.abs(distance) < 50) return;

    if (distance < 0) {
        showSlide(currentSlide + 1);
    } else {
        showSlide(currentSlide - 1);
    }

}, { passive: true });
