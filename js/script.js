// Seleccionar todas las celdas
let celdas = document.querySelectorAll("td");

// Función a ejecutar cuando el mouse entra en la celda
function entrando(e) {
    console.log("entrando");

    // Cambiar el fondo de la celda actual
    e.target.style.backgroundColor = "#FFF";
}

// Función a ejecutar cuando el mouse sale de la celda
function saliendo(e) {
    console.log("saliendo");

    // Restaurar el fondo de la celda actual
    e.target.style.backgroundColor = "";
}

// Bucle para recorrer las celdas y añadir los manejadores
celdas.forEach(item => {
    item.addEventListener("mouseenter", entrando);
    item.addEventListener("mouseleave", saliendo);
});
