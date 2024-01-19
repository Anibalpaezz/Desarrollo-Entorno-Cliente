function numeroArray() {
    let array = new Array(3);
    let terminado = false;

    while (array.length < 3) {
        for (let index = 0; index < array.length; index++) {
            let introducir = Math.round(Math.random()*5);
            if (array.indexOf(introducir) === -1) {
                array.push(introducir);
            }
        }
    }

    console.log(array);
}

window.addEventListener('load', numeroArray);