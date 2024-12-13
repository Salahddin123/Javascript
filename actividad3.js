function Producto(num1, num2) {
    return num1 * num2;
}

function Duplicar(numero) {
    return Suma(numero, numero);
}

function Suma(num1, num2) {
    return num1 + num2;
}

document.getElementById("calcular").addEventListener("click", function() {
    let operando1 = 5;
    let operando2 = 3;
    let resultado = Producto(operando1, operando2);
    alert(`El producto de ${operando1} y ${operando2} es: ${resultado}`);
    let numero = 7;
    let resultadoDuplicar = Duplicar(numero);
    console.log(`El doble de ${numero} es: ${resultadoDuplicar}`);
});