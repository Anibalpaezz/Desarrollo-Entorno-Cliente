document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
    e.stopPropagation();
});
document.addEventListener('copy', function (e) {
    e.preventDefault();
    e.stopPropagation();
});
document.addEventListener('cut', function (e) {
    e.preventDefault();
    e.stopPropagation();
});

function toogle() {
    var blur = document.getElementById('blur');
    blur.classList.toggle('active');
}

function cambiarSiguienteBotonVerde() {
    // Obtén el siguiente botón con la clase fa-regular fa-circle
    const regularButton = document.querySelector('.fa-regular.fa-circle');

    // Si hay un botón, cámbiale la clase y el color
    if (regularButton) {
        regularButton.className = 'fa-solid fa-circle-xmark';
        regularButton.style.color = 'green';
    }
}

function numerosRandom() {
    console.log("numerosRandom function called");
    const buttonContainer = document.getElementById("button-container");
    const buttons = Array.from(buttonContainer.children);

    buttons.forEach((button) => {
        button.addEventListener("click", function () {
            const value = button.id;
            console.log(value);
            
            // Llama a la función para cambiar el siguiente botón a verde
            cambiarSiguienteBotonVerde();
        });
    });

    for (let i = buttons.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [buttons[i], buttons[j]] = [buttons[j], buttons[i]];
    }

    buttonContainer.innerHTML = '';

    buttons.forEach((button) => {
        buttonContainer.appendChild(button);
    });
}

function pinRandom() {
    console.log("pinRandom function called");
    const buttonContainer = document.getElementById("pin-btn");
    const buttons = Array.from(buttonContainer.children);

    buttons.forEach((button) => {
        button.addEventListener("click", function () {
            const value = button.textContent.trim();
        });
    });

    for (let i = buttons.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [buttons[i], buttons[j]] = [buttons[j], buttons[i]];
    }

    buttonContainer.innerHTML = '';

    buttons.forEach((button) => {
        buttonContainer.appendChild(button);
    });
}

window.addEventListener("load", numerosRandom);
window.addEventListener("load", pinRandom);
