// Datos que deseas enviar al servidor
var datos = {
    clave1: "valor1",
    clave2: "valor2",
};

// Configuración de la solicitud HTTP
var configuracion = {
    method: "POST", // Método de la solicitud
    headers: {
        "Content-Type": "application/json", // Tipo de contenido que estás enviando
    },
    body: JSON.stringify(datos), // Convierte los datos a formato JSON
};

// Realiza la solicitud HTTP al script PHP en el servidor
fetch("tuscript.php", configuracion)
    .then((response) => response.json())
    .then((data) => {
        console.log("Respuesta del servidor:", data);
    })
    .catch((error) => {
        console.error("Error al enviar la solicitud:", error);
    });
