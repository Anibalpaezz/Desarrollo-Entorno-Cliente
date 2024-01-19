const tabla = document.getElementById("tabladibujada");

var c = 0; //creamos la columna
var f = 0; //creamos la fila

function coloreado(e) {
	var cuadrado = e.target;
	cuadrado.setAttribute("style","background-color:red");
	for (var i=0;i<10;i++){
		for (var j=0;j<10;j++){
			if(tabladibujada.rows[i].cells[j] == e.target){
				c = j;
				f = i;
			}
		}
	}

	if (f==0){
		if (c==0){
		tabladibujada.rows[f+1].cells[c].setAttribute("style","background-color:green");
		tabladibujada.rows[f].cells[c+1].setAttribute("style","background-color:green");
		tabladibujada.rows[f+1].cells[c+1].setAttribute("style","background-color:green");
		} 
	}
	if (f==0){
		if (c==9){
		tabladibujada.rows[f].cells[c-1].setAttribute("style","background-color:green");
		tabladibujada.rows[f+1].cells[c].setAttribute("style","background-color:green");
		tabladibujada.rows[f+1].cells[c-1].setAttribute("style","background-color:green");
		} 
	}
	if (f==9){
		if (c==0){
		tabladibujada.rows[f-1].cells[c].setAttribute("style","background-color:green");
		tabladibujada.rows[f-1].cells[c+1].setAttribute("style","background-color:green");
		tabladibujada.rows[f].cells[c+1].setAttribute("style","background-color:green");
		} 
	}
	if (f==9){
		if (c==9){
		tabladibujada.rows[f].cells[c-1].setAttribute("style","background-color:green");
		tabladibujada.rows[f-1].cells[c-1].setAttribute("style","background-color:green");
		tabladibujada.rows[f-1].cells[c].setAttribute("style","background-color:green");
		} 
	}
	if (f==0 && c!=0 && c!=9){
		tabladibujada.rows[f].cells[c+1].setAttribute("style","background-color:green");
		tabladibujada.rows[f].cells[c-1].setAttribute("style","background-color:green");
		tabladibujada.rows[f+1].cells[c-1].setAttribute("style","background-color:green");
		tabladibujada.rows[f+1].cells[c+1].setAttribute("style","background-color:green");
		tabladibujada.rows[f+1].cells[c].setAttribute("style","background-color:green");
	}
	if (f==9 && c!=0 && c!=9){
		tabladibujada.rows[f].cells[c+1].setAttribute("style","background-color:green");
		tabladibujada.rows[f-1].cells[c+1].setAttribute("style","background-color:green");
		tabladibujada.rows[f-1].cells[c].setAttribute("style","background-color:green");
		tabladibujada.rows[f-1].cells[c-1].setAttribute("style","background-color:green");
		tabladibujada.rows[f].cells[c-1].setAttribute("style","background-color:green");
	}
	if (c==0 && f!=0 && f!=9){
		tabladibujada.rows[f].cells[c+1].setAttribute("style","background-color:green");
		tabladibujada.rows[f+1].cells[c+1].setAttribute("style","background-color:green");
		tabladibujada.rows[f+1].cells[c].setAttribute("style","background-color:green");
		tabladibujada.rows[f-1].cells[c+1].setAttribute("style","background-color:green");
		tabladibujada.rows[f-1].cells[c].setAttribute("style","background-color:green");
	}
	if (c==9 && f!=0 || f!=9){
		tabladibujada.rows[f-1].cells[c-1].setAttribute("style","background-color:green");
		tabladibujada.rows[f-1].cells[c].setAttribute("style","background-color:green");
		tabladibujada.rows[f+1].cells[c].setAttribute("style","background-color:green");
		tabladibujada.rows[f+1].cells[c-1].setAttribute("style","background-color:green");
		tabladibujada.rows[f].cells[c-1].setAttribute("style","background-color:green");
	}
	
	
	
}

tabladibujada.addEventListener("click",coloreado);
