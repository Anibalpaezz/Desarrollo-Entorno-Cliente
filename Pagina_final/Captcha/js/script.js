const imagenes = [
    '../Images/captcha/1.jpg',
    '../Images/captcha/2.jpg',
    '../Images/captcha/3.jpg',
    '../Images/captcha/4.jpg',
    '../Images/captcha/5.jpg',
    '../Images/captcha/6.jpg',
    '../Images/captcha/7.jpg',
    '../Images/captcha/8.jpg',
    '../Images/captcha/9.jpg'
];

let respuestasCorrectas = [];
let tema = '';

function mezclarArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function generarCaptcha() {
    mezclarArray(imagenes);

    const contenedorImagenes = document.getElementById('contenedor-imagenes');
    contenedorImagenes.innerHTML = '';

    imagenes.forEach(imagen => {
        const elementoImagen = document.createElement('img');
        elementoImagen.src = imagen;
        elementoImagen.onclick = () => seleccionarImagen(imagen);
        contenedorImagenes.appendChild(elementoImagen);
    });

    asignarTema();
    console.log(respuestasCorrectas);
}

function seleccionarImagen(imagenSeleccionada) {
    const elementoImagen = document.querySelector(`[src="${imagenSeleccionada}"]`);
    elementoImagen.classList.toggle('seleccionada');
}

function asignarTema() {
    const tituloCaptcha = document.getElementById('titulo-captcha');
    const temas = ['bicis', 'trap', 'semaforos'];
    tema = temas[Math.floor(Math.random() * temas.length)];

    switch (tema) {
        case 'bicis':
            respuestasCorrectas = ['4.jpg', '6.jpg', '8.jpg'];
            tituloCaptcha.innerText = 'Selecciona las bicicletas correctas:';
            break;
        case 'trap':
            respuestasCorrectas = ['1.jpg', '2.jpg', '3.jpg'];
            tituloCaptcha.innerText = 'Selecciona las imágenes de trap correctas:';
            break;
        case 'semaforos':
            respuestasCorrectas = ['5.jpg', '7.jpg', '9.jpg'];
            tituloCaptcha.innerText = 'Selecciona los semáforos correctos:';
            break;
        default:
            break;
    }
}

function verificarRespuesta() {
    const imagenesSeleccionadas = document.querySelectorAll('.seleccionada');
    const seleccionadasCorrectas = Array.from(imagenesSeleccionadas).every(
        imagen => respuestasCorrectas.includes(imagen.src.substring(imagen.src.lastIndexOf('/') + 1))
    );

    if (seleccionadasCorrectas && imagenesSeleccionadas.length <= 3 && imagenesSeleccionadas.length > 0) {
        window.location.href = '../../Sesion/sesion.html';
    } else {
        alert('Captcha incorrecto. Intenta de nuevo seleccionando las imágenes correctas.');
        generarCaptcha();
    }
}
generarCaptcha();