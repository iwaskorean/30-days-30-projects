// utils
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

//
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const gravity = 1;
const frictionX = 0.5;
const frictionY = 0.85;
const colors = ['#0367A6', '#034873', '#D9BA5F', '#D98825', '#D92525'];

addEventListener('resize', () => {
  canvas.width = innerWidth;
  canvas.height = innerHeight;

  init();
});

addEventListener('click', () => {
  init();
});

class Ball {
  constructor(x, y, dx, dy, radius, color) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.color = color;
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
  }

  update() {
    if (this.y + this.dy + this.radius > canvas.height) {
      this.dy = -this.dy * frictionY;
    } else {
      this.dy += gravity;
    }

    if (
      this.x - this.radius + this.dx <= 0 ||
      this.x + this.radius + this.dx > canvas.width
    ) {
      this.dx = -this.dx * frictionX;
    }

    this.x += this.dx;
    this.y += this.dy;
    this.draw();
  }
}

let ballArray = [];

function init() {
  ballArray = [];
  for (let i = 0; i < 200; i++) {
    const radius = getRandomInt(5, 20);
    const x = getRandomInt(0, canvas.width - radius * 2);
    const y = getRandomInt(radius, canvas.height - radius * 2);
    const dx = getRandomInt(-2, 2);
    const dy = getRandomInt(-2, 2);
    const color = colors[getRandomInt(0, colors.length - 1)];
    ballArray.push(new Ball(x, y, dx, dy, radius, color));
  }
}

function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, innerWidth, innerHeight);

  for (let i = 0; i < ballArray.length; i++) {
    ballArray[i].update();
  }
}

init();
animate();
