const container = document.querySelector('.dots__container');

let circles = [];
let rows = 15;
let cols = 15;

for (let i = 0; i < cols; i++) {
  circles[i] = [];
  for (let j = 0; j < rows; j++) {
    const circle = document.createElement('div');
    circle.classList.add('circle');
    container.appendChild(circle);
    circles[i].push(circle);
  }
}

circles.forEach((cols, i) => {
  cols.forEach((circle, j) => {
    circle.addEventListener('click', () => {
      wave(i, j);
    });
  });
});

function wave(i, j) {
  if (circles[i] && circles[i][j]) {
    if (!circles[i][j].classList.contains('grow')) {
      circles[i][j].classList.add('grow');
      setTimeout(() => {
        wave(i - 1, j);
        wave(i + 1, j);
        wave(i, j + 1);
        wave(i, j - 1);
      }, 150);

      setTimeout(() => {
        circles[i][j].classList.remove('grow');
      }, 350);
    }
  }
}
