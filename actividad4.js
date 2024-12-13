let contador = 0;

function incrementarContador() {
    contador = parseInt(contador) + 1; 
    document.getElementById("contador").textContent = "Clics: " + contador; 
}