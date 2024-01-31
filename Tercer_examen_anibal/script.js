let intentos = 0;
let primeraCarta = null;

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function cargarImagenes() {
    let tematica = document.getElementById("tema");
    let seleccionado = tematica.options[tematica.selectedIndex].value;
    let carpeta = "IMAGENES/" + seleccionado;

    let imagenes = [];
    let numeros = Array.from({ length: 8 }, (_, index) => index + 1);
    let repetidos = [...numeros, ...numeros];

    const shufflednumeros = shuffle(repetidos);

    for (let i = 0; i < 16; i++) {
        let aleatorias = shufflednumeros[i];
        let nombre_imagen = seleccionado + aleatorias + ".png";
        imagenes.push(nombre_imagen);
    }

    const shuffledImages = shuffle(imagenes);

    const filas = 4;
    const columnas = 4;

    const gameContainer = document.getElementById("game-container");
    gameContainer.innerHTML = '';

    const table = document.createElement("table");

    for (let i = 0; i < filas; i++) {
        const row = document.createElement("tr");

        for (let j = 0; j < columnas; j++) {
            const index = i * columnas + j;
            const nombre_imagen = shuffledImages[index];

            const card = document.createElement("td");
            card.classList.add("card");
            card.dataset.index = index;
            card.dataset.nombre = nombre_imagen;

            const img = document.createElement("img");
            img.src = `${carpeta}/${nombre_imagen}`;
            img.alt = "Imagen";

            card.appendChild(img);

            card.addEventListener("click", handleCardClick);
            row.appendChild(card);
        }

        table.appendChild(row);
    }

    gameContainer.appendChild(table);
}

document.getElementById("tema").addEventListener("change", cargarImagenes);

cargarImagenes();

function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}

function handleCardClick(event) {
    console.log('Funcion llamada');
    const card = event.currentTarget;
    const img = card.querySelector('img');

    if (img.style.visibility !== 'visible' && primeraCarta !== card) {
        img.style.visibility = 'visible';
        

        if (primeraCarta === null) {
            primeraCarta = card;
            console.log('Foto pulsada:', img.src);
        } else {
            if (primeraCarta.querySelector('img').dataset.nombre === img.dataset.nombre) {
                primeraCarta = null;
                console.log('Foto pulsada:', img.src);
            } else {
                setTimeout(() => {
                    primeraCarta.querySelector('img').style.visibility = 'hidden';
                    img.style.visibility = 'hidden';
                    primeraCarta = null;
                }, 1000);
            }
        }
    }
}





