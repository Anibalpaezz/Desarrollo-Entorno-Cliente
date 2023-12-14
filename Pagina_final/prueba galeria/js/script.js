let picture = document.querySelector('#pic');

let picture1 = document.querySelector('#pic1');
let picture2 = document.querySelector('#pic2');
let picture3 = document.querySelector('#pic3');
let picture4 = document.querySelector('#pic4');
let picture5 = document.querySelector('#pic5');
let picture6 = document.querySelector('#pic6');

lista = [picture1, picture2, picture3, picture4, picture5, picture6];

let seleccion = 1;
picture1.classList.add('img-active');

function cambioImagen(imgSrc, n) {
    picture.src = imgSrc;

    lista[seleccion-1].classList.remove('img-active');
    lista[n-1].classList.add('img-active');
    seleccion = n;
}