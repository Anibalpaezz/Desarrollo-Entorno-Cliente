let contenedor = document.getElementById('contenedor');

window.onload = creartabla;

function creartabla() {
    let array_img = [];
    while (array_img.length < 6) {
        let aleatorio = Math.floor(Math.random() * 6 + 1);
        if (array_img.indexOf(aleatorio) === -1) {
            let auxfoto = document.createElement('img');
            let ruta = "./" + aleatorio + ".jpeg";
            auxfoto.setAttribute("src", ruta);
            auxfoto.setAttribute("width", "150px");
            auxfoto.setAttribute("height", "150px");
            contenedor.appendChild(auxfoto);
            array_img.push(aleatorio);
        }
    }
}

contenedor.addEventListener('click', pintar);

function pintar(event) {
    let imagen = event.target;
    if (imagen.style.border === "3px solid red") {
        imagen.style.border = "";
    } else {
        imagen.style.border = "3px solid red";
    }
}

let numeros_correctos = [1, 2, 3, 4];

let enviarBtn = document.getElementById('enviar');
let mensaje = document.getElementById('mensaje');

enviarBtn.addEventListener('click', validar);

function validar() {
    let array_imagenes = contenedor.querySelectorAll('*');
    for (let ind = 0; ind < array_imagenes.length; ind++) {
        let auxfotocom = array_imagenes[ind];
        let numero = auxfotocom.getAttribute('src');
        numero = numero.substring(numero.length - 5, numero.length - 4);
        
        if (auxfotocom.style.border === "3px solid red"){
            if (numeros_correctos.indexOf(parseInt(numero)) === -1) {
                mensaje.innerText = 'error';
                console.log(numero);    
                return;
            }
        }
    }
    mensaje.innerText = 'Todos los números son correctos';
}