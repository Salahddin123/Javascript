var inputNombre = document.querySelector("#nombre");
var botonSaludar = document.querySelector("#botonSaludar");
var parrafoSaludo = document.querySelector("#saludo");

function saludar() {
    var nombre = inputNombre.value;
    parrafoSaludo.innerText = "¡Saludos, " + nombre + "!";
}

botonSaludar.addEventListener("click", saludar);