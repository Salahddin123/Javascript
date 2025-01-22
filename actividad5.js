document.getElementById('alertBtn').onclick = function() {
    var userInput = document.getElementById('userInput').value;
    alert(userInput ? userInput : "Hola Mundo");
};

document.getElementById('userInput').addEventListener('focus', function() {
    console.log("El campo de texto tiene el foco.");
});

document.getElementById('userInput').addEventListener('blur', function() {
    console.log("El campo de texto ha perdido el foco.");
});

function showImage2() {
    document.getElementById('image2').style.display = 'block';
}

function hideImage2() {
    document.getElementById('image2').style.display = 'none';
}

function toggleImage2() {
    var img2 = document.getElementById('image2');
    img2.style.display = (img2.style.display === 'none' || img2.style.display === '') ? 'block' : 'none';
}