function asignarEventos() {
	
		for(var i=0;i<100;i++){
	
			celdas=document.getElementById("cel_"+i);
			celdas.addEventListener("click",cambio_color);
			celdas
			
		}
	
}

function cambio_color(e){
	
	var id_evento=e.target.getAttribute("id");
	var celda_evento=document.getElementById(id_evento); 
	
	var adyacentes=[];
	
	
	if (celda_evento.id == "cel_0" || celda_evento.id == "cel_9" || celda_evento.id == "cel_90" || celda_evento.id == "cel_99" ){ //SI ES UNA ESQUINA
		
		var tabla=document.getElementById('tabla01');
		
		tabla.rows[0].cells[1].style.backgroundColor="green";
		tabla.rows[1].cells[0].style.backgroundColor="green";
		tabla.rows[1].cells[1].style.backgroundColor="green";
		celda_evento.style.backgroundColor="red";
		
		celda_evento.addEventListener("click",borrado_color);
	
	
	}
	
	else{
		
		var tabla=document.getElementById('tabla01');
		
		tabla.rows[0].cells[1].style.backgroundColor="green";
		tabla.rows[0].cells[2].style.backgroundColor="green";
		tabla.rows[0].cells[3].style.backgroundColor="green";
		tabla.rows[1].cells[1].style.backgroundColor="green";
		tabla.rows[1].cells[3].style.backgroundColor="green";
		tabla.rows[2].cells[1].style.backgroundColor="green";
		tabla.rows[2].cells[2].style.backgroundColor="green";
		tabla.rows[2].cells[3].style.backgroundColor="green";
		
		
		celda_evento.style.backgroundColor="red";
		celda_evento.addEventListener("click",borrado_color);
		
		
			
			//adyacentes=document.getElementById("cel_");
			
			
			
		
	
	
	}


}

function borrado_color(e){
	
	var id_evento=e.target.getAttribute("id");
	var celda_evento=document.getElementById(id_evento); 
	
	if (celda_evento.id == "cel_0" || celda_evento.id == "cel_9" || celda_evento.id == "cel_90" || celda_evento.id == "cel_99" ){
	
			tabla.rows[0].cells[1].style.backgroundColor="white";
			tabla.rows[1].cells[0].style.backgroundColor="white";
			tabla.rows[1].cells[1].style.backgroundColor="white";
	
	
	
	
	}
	
	else{
	
	var tabla=document.getElementById('tabla01');
	var id_evento=e.target.getAttribute("id");
	var celda_evento=document.getElementById(id_evento); 
	
		tabla.rows[0].cells[1].style.backgroundColor="white";
		tabla.rows[0].cells[2].style.backgroundColor="white";
		tabla.rows[0].cells[3].style.backgroundColor="white";
		tabla.rows[1].cells[1].style.backgroundColor="white";
		tabla.rows[1].cells[3].style.backgroundColor="white";
		tabla.rows[2].cells[1].style.backgroundColor="white";
		tabla.rows[2].cells[2].style.backgroundColor="white";
		tabla.rows[2].cells[3].style.backgroundColor="white";

		celda_evento.style.backgroundColor="yellow";
	
	}

}






































document.addEventListener('readystatechange', asignarEventos, false);