const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

canvas.width = innerWidth;
canvas.height = innerHeight;

const colors = [
  { r: 45, g: 74, b: 227 }, // blue
  { r: 250, g: 255, b: 89 }, // yellow
  { r: 255, g: 104, b: 248 }, // purple
  { r: 44, g: 209, b: 252 }, // skyblue
  { r: 54, g: 233, b: 84 }, // green
];

window.addEventListener('resize', () => {
  canvas.width = innerWidth;
  canvas.height = innerHeight;

  init();
});

class Particle {
  constructor(x, y, dx, dy, radius, color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.dx = dx;
    this.dy = dy;
    this.sinValue = Math.random();
  }

  draw() {
    ctx.beginPath();
    const g = ctx.createRadialGradient(
      this.x,
      this.y,
      this.radius * 0.01,
      this.x,
      this.y,
      this.radius
    );
    g.addColorStop(
      0,
      `rgba(${this.color.r}, ${this.color.g}, ${this.color.b},1)`
    );
    g.addColorStop(
      1,
      `rgba(${this.color.r}, ${this.color.g}, ${this.color.b},0)`
    );
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.fillStyle = g;
    ctx.fill();
    ctx.closePath();
  }

  update() {
    this.sinValue += 0.01;
    this.radius += Math.sin(this.sinValue);
    this.x += this.dx;
    this.y += this.dy;

    if (this.x < 0 || this.x > canvas.width) {
      this.dx = -this.dx;
    } else if (this.y < 0 || this.y > canvas.height) {
      this.dy = -this.dy;
    }

    this.draw();
  }
}

let particles;
const maxRadius = 700;
const minRadius = 400;

function init() {
  particles = [];
  let curColor = 0;
  ctx.globalCompositeOperation = 'saturation';

  for (let i = 0; i < 10; i++) {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    const radius = Math.random() * (maxRadius - minRadius) + minRadius;
    const color = colors[curColor];
    const dx = Math.random() * 5;
    const dy = Math.random() * 5;
    particles.push(new Particle(x, y, dx, dy, radius, color));
    curColor++;
    if (curColor >= colors.length) {
      curColor = 0;
    }
  }
}

function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  particles.forEach((particle) => {
    particle.update();
  });
}

init();
animate();
