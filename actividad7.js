var randomNumber = Math.floor(Math.random() * 10) + 1;

var buttonsDiv = document.getElementById('buttons');
var resultDiv = document.getElementById('result');
var correctImage = document.getElementById('correct');
var incorrectImage = document.getElementById('incorrect');

var button1 = document.createElement('button');
button1.innerHTML = 1;
button1.onclick = function() { checkGuess(1); };
buttonsDiv.appendChild(button1);

var button2 = document.createElement('button');
button2.innerHTML = 2;
button2.onclick = function() { checkGuess(2); };
buttonsDiv.appendChild(button2);

var button3 = document.createElement('button');
button3.innerHTML = 3;
button3.onclick = function() { checkGuess(3); };
buttonsDiv.appendChild(button3);

var button4 = document.createElement('button');
button4.innerHTML = 4;
button4.onclick = function() { checkGuess(4); };
buttonsDiv.appendChild(button4);

var button5 = document.createElement('button');
button5.innerHTML = 5;
button5.onclick = function() { checkGuess(5); };
buttonsDiv.appendChild(button5);

var button6 = document.createElement('button');
button6.innerHTML = 6;
button6.onclick = function() { checkGuess(6); };
buttonsDiv.appendChild(button6);

var button7 = document.createElement('button');
button7.innerHTML = 7;
button7.onclick = function() { checkGuess(7); };
buttonsDiv.appendChild(button7);

var button8 = document.createElement('button');
button8.innerHTML = 8;
button8.onclick = function() { checkGuess(8); };
buttonsDiv.appendChild(button8);

var button9 = document.createElement('button');
button9.innerHTML = 9;
button9.onclick = function() { checkGuess(9); };
buttonsDiv.appendChild(button9);

var button10 = document.createElement('button');
button10.innerHTML = 10;
button10.onclick = function() { checkGuess(10); };
buttonsDiv.appendChild(button10);

function checkGuess(guess) {
    correctImage.style.display = 'none';
    incorrectImage.style.display = 'none';

    if (guess === randomNumber) {
        resultDiv.innerHTML = "¡Victoria!";
        correctImage.style.display = 'block';
    } else {
        resultDiv.innerHTML = "Incorrecto. Intenta de nuevo.";
        incorrectImage.style.display = 'block';
    }
}