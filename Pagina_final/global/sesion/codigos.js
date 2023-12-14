function toogle() {
    var blur = document.getElementById('blur');
    blur.classList.toggle('active');
}

document.addEventListener('contextmenu',function(e){e.preventDefault();e.stopPropagation();});
document.addEventListener('copy',function(e){e.preventDefault();e.stopPropagation();});
document.addEventListener('cut',function(e){e.preventDefault();e.stopPropagation();});

function numerosRandom() {
    const buttonContainer = document.getElementById("button-container");
    const buttons = Array.from(buttonContainer.children);

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
    const buttonContainer = document.getElementById("pin-btn");
    const buttons = Array.from(buttonContainer.children);

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
