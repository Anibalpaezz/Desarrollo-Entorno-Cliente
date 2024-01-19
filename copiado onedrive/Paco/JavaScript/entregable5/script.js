function aleatorio() {
    let cuenta = new Array(11).fill(0);

    for (let index = 0; index < 1000; index++) {
        let aleatorio = Math.round(Math.random() * 10);
        cuenta[aleatorio]++;
    }

    // Print the counts
    for (let i = 0; i < cuenta.length; i++) {
        console.log(`Numero ${i} aparece ${cuenta[i]} veces.`);
    }
}

aleatorio();
