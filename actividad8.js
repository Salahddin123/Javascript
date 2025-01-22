function saludo() {
    
    for (let i = 0; i < 100; i++) {
        console.log("Saludos " + inputNombre.value);
    }
}

function numeros5a25() {
    console.log('Números del 5 al 25:');
    
    for (let i = 5; i <= 25; i++) {
        console.log(i);
    }
}

function numeros100a0() {
    console.log('Números del 100 al 0:');
    
    for (let i = 100; i >= 0; i--) {
        console.log(i);
    }
}
function cadenaNumeros() {
    let cadena = '';
    
    for (let i = 1; i <= 10; i++) {
        cadena += i;
    }

    console.log('Cadena de números del 1 al 10: ' + cadena);
    var inputNombre = document.querySelector("#nombre");
var botonSaludar = document.querySelector("#botonSaludar");
var parrafoSaludo = document.querySelector("#saludo");
function saludar() {
    var nombre = inputNombre.value;
    parrafoSaludo.innerText = "¡Saludos, " + nombre + "!";
}

botonSaludar.addEventListener("click", saludar);
}