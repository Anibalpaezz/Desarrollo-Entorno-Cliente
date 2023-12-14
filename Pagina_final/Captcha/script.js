document.addEventListener('DOMContentLoaded', function () {
    const loadedImageUrls  = [];
    const imageUrls  = [
        'prueba/1.jpg',
        'prueba/2.jpg',
        'prueba/3.jpg',
        'prueba/4.jpg',
        'prueba/5.jpg',
        'prueba/6.jpg',
        'prueba/7.jpg',
        'prueba/8.jpg',
        'prueba/9.jpg',
        'prueba/10.jpg',
        'prueba/11.jpg',
        'prueba/12.jpeg',
    ];

    // Crear un elemento de tabla
    const table = document.createElement('table');

    // Bucle para crear filas y celdas
    for (let i = 0; i < 3; i++) {
        const row = table.insertRow();

        for (let j = 0; j < 3; j++) {
            const cell = row.insertCell();
            const img = document.createElement('img');
            img.style.width = "200px";
            const imageUrl = imageUrls[Math.floor(Math.random() * 9) + 1]; // Calcular el índice basado en la fila y la columna
            img.src = imageUrl;
            loadedImageUrls.push(imageUrl); // Agregar la URL al nuevo array
            cell.appendChild(img);
        }
    }

    // Agregar la tabla al cuerpo del documento
    document.body.appendChild(table);

    // Puedes usar el array loadedImageUrls para hacer lo que necesites con las URLs de las imágenes cargadas
    console.log(loadedImageUrls);
});







/* document.body.onload = mostrar_fotos;

function mostrar_fotos() {
    for (let index = 0; index < 3; index++) {
        let elegir_foto = Math.floor(Math.random() * 7) + 1;
        let elegida = document.createElement('img');
        elegida.style.width ="200px";
        elegida.src = 'prueba/' + elegir_foto + '.jpg';
        document.getElementById('body').appendChild(elegida);
    }
    for (let index = 0; index < 3; index++) {
        let elegir_foto = Math.floor(Math.random() * 7) + 1;
        let elegida = document.createElement('img');
        elegida.style.width ="200px";
        elegida.src = 'prueba/' + elegir_foto + '.jpg';
        document.getElementById('body').appendChild(elegida);
    }
    for (let index = 0; index < 3; index++) {
        let elegir_foto = Math.floor(Math.random() * 7) + 1;
        let elegida = document.createElement('img');
        elegida.style.width ="200px";
        elegida.src = 'prueba/' + elegir_foto + '.jpg';
        document.getElementById('body').appendChild(elegida);
    }
} */