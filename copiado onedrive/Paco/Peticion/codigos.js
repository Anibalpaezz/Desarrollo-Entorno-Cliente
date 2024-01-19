function hugo() {
    if(window.XMLHttpRequest) {
        nombre = new XMLHttpRequest();
      }
      else if(window.ActiveXObject) {
        nombre = new ActiveXObject("Microsoft.XMLHTTP");
      }
    nombre.open('POST','ordenes.php',true);
    nombre.onload = function(){
        if(nombre.status===200) {
            let datos = JSON.parse(nombre.responseText);
            //mostrar datos 
        }
    }    
}