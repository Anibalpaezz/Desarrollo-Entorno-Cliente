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
    const regularButton = document.querySelector('.fa-regular.fa-circle');

    if (regularButton) {
        regularButton.className = 'fa-solid fa-circle-xmark';
        regularButton.style.color = 'green';
    }
}

const pulsados = [];

function numerosRandom() {
    console.log("numerosRandom function called");
    const buttonContainer = document.getElementById("button-container");
    const buttons = Array.from(buttonContainer.children);

    buttons.forEach((button) => {
        button.addEventListener("click", function () {
            const value = button.id;
            console.log(value);

            if (pulsados.length < 3) {
                pulsados.push(value);
                console.log("Números pulsados:", pulsados);
                
                cambiarSiguienteBotonVerde();
            } else {
                console.log("Ya se han pulsado 3 números. Limite alcanzado.");
            }

            if (pulsados.length === 3) {
                enviarSolicitudAlServidor(pulsados);
            }
        });
    });
}

function enviarSolicitudAlServidor(pulsados) {
    let inputUsuario = document.getElementById("usuarioInput");
    let valor = inputUsuario.value;

    inputUsuario.addEventListener("input", function() {
        valor = inputUsuario.value;
    });

    var datos = {
        pulsados: pulsados,
        valor: valor
    };

    var configuracion = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(datos),
    };

    fetch("php/sesion.php", configuracion)
        .then((response) => response.json())
        .then((data) => {
            console.log("Respuesta del servidor:", data);
            
            if (data.mensaje === 'Contraseña correcta') {
                window.location.href = 'Pagina_final/Perfil/perfil.php';
            }
        })
        .catch((error) => {
            console.error("Error al enviar la solicitud:", error);
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
