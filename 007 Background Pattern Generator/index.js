const container = document.querySelector('.container');
const radiusEl = document.querySelectorAll('.radius input');
const itemsEl = document.querySelector('.items input');
const colorsEl = document.querySelector('.colors');
const setting = document.querySelector('.setting');

const colorsObj = {
  redish: ['#f9d5bb', '#f66767', '#d35656', '#3c3d47'],
  purplish: ['#262486', '#CA2996', '#92208E', '#4C1981'],
  greenish: ['#42b883', '#347474', '#35495e', '#ff7e67'],
  brownish: ['#46211a', '#693d3d', '#ba5536', '#a43820'],
  blueish: ['#00487C', '#4BB3FD', '#0496FF', '#027BCE'],
};

let colors = [...colorsObj.redish];
let items = 15;
let radiusArr = ['100%', '0%', '0%', '0%'];

itemsEl.addEventListener('change', (e) => {
  items = +e.target.value;
  createTiles();
});

radiusEl.forEach((checkbox, i) => {
  checkbox.addEventListener('change', (e) => {
    radiusArr[i] = e.target.checked ? '100%' : '0%';
    createTiles();
  });
});

colorsEl.addEventListener('change', (e) => {
  colors = colorsObj[e.target.value];
  setting.style.backgroundColor = colors[1];
  createTiles();
});

const createTiles = () => {
  container.innerHTML = ``;

  const boxEl = document.createElement('div');
  boxEl.classList.add('box');
  const width = window.innerWidth;
  const height = window.innerHeight;
  const rows = items;
  const cols = items;
  const widthSize = width / rows;
  const heightSize = height / cols;
  const radius = radiusArr.reduce((acc, el) => (acc += `${el} `), '');

  for (let i = 0; i < rows; i++) {
    for (let i = 0; i < cols; i++) {
      const tileEl = document.createElement('div');
      boxEl.appendChild(tileEl);
      const size = Math.floor(Math.max(widthSize, heightSize));
      tileEl.classList.add('tile');
      tileEl.style.width = `${size}px`;
      tileEl.style.height = `${size}px`;
      tileEl.style.background =
        colors[Math.floor(Math.random() * colors.length)];
      tileEl.style.borderRadius = radius;
      tileEl.style.transform = `rotate(${
        Math.floor(Math.random() * 4) * 90
      }deg)`;
    }
    container.append(boxEl);
  }
};

createTiles();
