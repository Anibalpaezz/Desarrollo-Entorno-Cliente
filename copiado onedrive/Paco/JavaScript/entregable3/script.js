function ordenar() {
    let array1 = document.getElementById('array1').value;
    let array2 = document.getElementById('array2').value;

    for (let i = 0; i < array1.length; i++) {
        for (let j = 0; j < array1.length; j++) {
            if (array1[j] > array1[j+1]) {
                let aux = array1[j];
                array1[j] = array1[j+1];
                array1[j+1] = aux;
            }
        }
    }

    for (let i = 0; i < array2.length; i++) {
        for (let j = 0; j < array2.length; j++) {
            if (array2[j] > array2[j+1]) {
                let aux = array2[j];
                array2[j] = array2[j+1];
                array2[j+1] = aux;
            }
        }
    }

    console.log(array1);
    console.log(array2);
}

