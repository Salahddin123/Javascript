let square = document.querySelector('.square');
let opacity = 1;

document.getElementById('increaseOpacity').addEventListener('click', () => {
  opacity += 0.1;
  if (opacity > 1) {
    opacity = 1;
  }
  square.style.opacity = opacity;
});

document.getElementById('decreaseOpacity').addEventListener('click', () => {
  opacity -= 0.1;
  if (opacity < 0) {
    opacity = 0;
  }
  square.style.opacity = opacity;
});