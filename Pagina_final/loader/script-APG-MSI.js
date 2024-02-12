function startLoading() {
    toggleOverlay(true);
    setTimeout(function () {
        toggleOverlay(false);
    }, 2000);
}

function toggleOverlay(show) {
    var overlay = document.getElementById('hola');
    var svg = document.getElementById('svg');

    if (show) {
        svg.style.visibility = 'visible'; // Hacer visible
        svg.style.height = '325px';
        svg.style.width = '325px';
        svg.style.stroke = '#ffc107';
        svg.style.fillOpacity = '0';
        svg.style.strokeWidth = '1.5px';
        svg.style.strokeDasharray = '4500';
        svg.style.animation = 'draw 28s ease';
    } else {
        svg.style.visibility = 'hidden'; // Ocultar
    }
}

let carrito = document.getElementById('añadiralcarrito');
carrito.addEventListener('click', startLoading);