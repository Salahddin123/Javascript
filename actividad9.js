function generateImages() {
    var count = document.getElementById('imageCount').value;
    var container = document.getElementById('imageContainer');
    container.innerHTML = '';

    if (count <= 0) {
        alert("Por favor, introduce un número válido de imágenes.");
        return;
    }

    for (var i = 0; i < count; i++) {
        var img = document.createElement('img');
        var placeholderImage = document.getElementById('placeholderImage');
        img.src = placeholderImage.src;
        img.alt = placeholderImage.alt;
        container.appendChild(img);
    }
}

document.getElementById('generateBtn').onclick = generateImages;