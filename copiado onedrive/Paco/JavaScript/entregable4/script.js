function contador_palabras() {
    let cadena = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos cumque eligendi, rerum officia delectus odio. Blanditiis commodi odio dolor impedit voluptatem corrupti, est odit soluta? Illum error dolorum esse assumenda!";

    let cont = 0;
    const BUSCAR = "a";
    let resultado = 0;
    
    /* console.log(cadena.indexOf(buscar)); */
    while (cadena.length>0 && resultado!=-1) {
        cont++;
        cadena = cadena.substring(resultado+1);
        resultado = cadena.indexOf(BUSCAR);
    }

    console.log(cont);
}