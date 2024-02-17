const buttons = document.querySelectorAll("[data-carousel-button]");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const offset = button.dataset.carouselButton === "next" ? 1 : -1;
        const slides = button
            .closest("[data-carousel]")
            .querySelector("[data-slides]");

        const activeSlide = slides.querySelector("[data-active]");
        let newIndex = [...slides.children].indexOf(activeSlide) + offset;
        if (newIndex < 0) newIndex = slides.children.length - 1;
        if (newIndex >= slides.children.length) newIndex = 0;

        slides.children[newIndex].dataset.active = true;
        delete activeSlide.dataset.active;
    });
});

const slides = document.querySelectorAll(".slide");

slides.forEach((slide) => {
    slide.addEventListener("click", () => {
        if (slide.classList.contains("zoomed")) {
            slide.classList.remove("zoomed");
        } else {
            slide.classList.add("zoomed");
        }
    });
});

let picture = document.querySelector("#pic"), picture1 = document.querySelector("#pic1"), picture2 = document.querySelector("#pic2"), picture3 = document.querySelector("#pic3"), picture4 = document.querySelector("#pic4"), picture5 = document.querySelector("#pic5"), picture6 = document.querySelector("#pic6"); lista = [picture1, picture2, picture3, picture4, picture5, picture6]; let seleccion = 1; function cambioImagen(e, c) { picture.src = e, lista[seleccion - 1].classList.remove("img-active"), lista[c - 1].classList.add("img-active"), seleccion = c } picture1.classList.add("img-active");
