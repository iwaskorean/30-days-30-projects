const container = document.querySelector('.container');
const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71'];
const squaresCount = 400;

for (let i = 0; i < squaresCount; i++) {
  const square = document.createElement('div');
  square.classList.add('square');

  square.addEventListener('mouseover', () => {
    setColor(square);
  });

  square.addEventListener('mouseout', () => {
    removeColor(square);
  });

  container.appendChild(square);
}

function setColor(el) {
  const color = colors[Math.floor(Math.random() * colors.length)];
  el.style.background = color;
  el.style.boxShadow = ` 0 0 15px ${color}`;
}

function removeColor(el) {
  el.style.background = '#1d1d1d';
  el.style.boxShadow = `0 0 2px #000`;
}
