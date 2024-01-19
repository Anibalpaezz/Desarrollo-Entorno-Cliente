let picture = document.querySelector('#pic');

let picture1 = document.querySelector('#pic1');
let picture2 = document.querySelector('#pic2');
let picture3 = document.querySelector('#pic3');
let picture4 = document.querySelector('#pic4');
let picture5 = document.querySelector('#pic5');
let picture6 = document.querySelector('#pic6');

let contenedor = document.querySelector('#picture');

let cuadrado = document.querySelector('#cuadrado');

let zoom = document.querySelector('#zoom');

let seleccion = 1;

let w1 = contenedor.offsetWidth;
let h1 = contenedor.offsetHeight;

let ratio = 3;

let x, y, xx, yy;

let w2 = cuadrado.offsetWidth;
let h2 = cuadrado.offsetHeight;

lista = [picture1, picture2, picture3, picture4, picture5, picture6];

picture1.classList.add('img-active');

function cambioImagen(imgSrc, n) {
    picture.src = imgSrc;

    zoom.style.backgroundImage = "url(" + imgSrc + ")";

    lista[seleccion-1].classList.remove('img-active');
    lista[n-1].classList.add('img-active');
    seleccion = n;
}

zoom.style.backgroundSize = w1 * ratio + 'px' +  h1 * ratio + 'px';

zoom.style.width = w2 * ratio + 'px';
zoom.style.height = h2 * ratio + 'px';

w2 = w2/2;
h2 = h2/2;

function move(event) {
    x = event.offsetX;
    y = event.offsetY;

    xx = x - h2;
    yy = y - h2;

    if (x < w2) {
        x = w2;

        xx = 0;
    }
    if (x > w1 - w2) {
        x = w1 -w2;
        xx = x - w2;
    }
    if (y < h2) {
        y = h2;

        yy = 0;
    }
    if (y > h1 - h2) {
        y = h1 - h2;
    }

    xx = x * ratio;
    yy = y * ratio;

    cuadrado.style.left = x + 'px';
    cuadrado.style.top = y + 'px';

    zoom.style.backgroundPosition = '-' + xx + 'px ' + '-' + yy + 'px';
}

contenedor.addEventListener('mousemove', function(){
    move(event);
    opacidad();
});

function opacidad() {
    cuadrado.classList.add('cuadrado-active');
    zoom.classList.add('cuadrado-active');
}

function noopacidad() {
    zoom.classList.remove('cuadrado-active');
}

contenedor.addEventListener('mouseout', function() {
    noopacidad();
})