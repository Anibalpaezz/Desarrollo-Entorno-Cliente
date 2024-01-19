document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("modal-wrapper");
    const center = document.querySelector(".center");
    const images = center.querySelectorAll("img");
    const prevButton = document.getElementById("prev-button");
    const nextButton = document.getElementById("next-button");
    let currentIndex = 0;

    // Mostrar imagen actual
    function showImage() {
        images.forEach((image, index) => {
            if (index === currentIndex) {
                image.style.display = "block";
            } else {
                image.style.display = "none";
            }
        });
    }

    // Imagen anterior
    function showPrevImage() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage();
    }

    // Imagen siguiente
    function showNextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        showImage();
    }

    // Botones
    prevButton.addEventListener("click", showPrevImage);
    nextButton.addEventListener("click", showNextImage);

    // Show the first image initially
    showImage();
});
