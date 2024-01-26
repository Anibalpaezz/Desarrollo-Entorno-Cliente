const barraCarga = document.getElementById('barraCarga');
let cargaActual = 0;
let direccion = 1;

function actualizarBarra() {
    cargaActual += direccion * 50;
    barraCarga.style.width = cargaActual + 'px';

    if (cargaActual === 500 || cargaActual === 0) {
        direccion *= -1;
    }
}

setInterval(actualizarBarra, 1000);