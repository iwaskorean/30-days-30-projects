const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

canvas.width = innerWidth;
canvas.height = innerHeight;

const mouse = {
  x: innerWidth / 2,
  y: innerHeight / 2,
};

const colors = ['#5F42ED', '#4B81E0', '#42DBED'];

addEventListener('mousemove', (event) => {
  mouse.x = event.clientX;
  mouse.y = event.clientY;
});

addEventListener('resize', () => {
  canvas.width = innerWidth;
  canvas.height = innerHeight;

  init();
});

class Particle {
  constructor(x, y, radius, color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.velocity = 0.05;
    this.radians = Math.random() * Math.PI * 2;
    this.distanceFromCenter = Math.floor(Math.random() * 50 + 30);
    this.lastMouse = { x: this.x, y: this.y };
  }

  draw(lastPoint) {
    ctx.beginPath();
    ctx.strokeStyle = this.color;
    ctx.lineWidth = this.radius;
    ctx.moveTo(lastPoint.x, lastPoint.y);
    ctx.lineTo(this.x, this.y);
    ctx.stroke();
    ctx.closePath();
  }

  update() {
    const lastPoint = { x: this.x, y: this.y };

    this.radians += this.velocity;

    // Drag effect
    this.lastMouse.x += (mouse.x - this.lastMouse.x) * 0.2;
    this.lastMouse.y += (mouse.y - this.lastMouse.y) * 0.2;

    // Circular motion
    // this.x = mouse.x + Math.cos(this.radians) * this.distanceFromCenter;
    // this.y = mouse.y + Math.sin(this.radians) * this.distanceFromCenter;
    this.x =
      this.lastMouse.x + Math.cos(this.radians) * this.distanceFromCenter;
    this.y =
      this.lastMouse.y + Math.sin(this.radians) * this.distanceFromCenter;

    this.draw(lastPoint);
  }
}

let particles;

function init() {
  particles = [];

  for (let i = 0; i < 50; i++) {
    const radius = Math.random() * 2 + 0.5;

    particles.push(
      new Particle(
        canvas.width / 2,
        canvas.height / 2,
        radius,
        colors[Math.floor(Math.random() * colors.length)]
      )
    );
  }
}

function animate() {
  requestAnimationFrame(animate);
  ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  particles.forEach((particle) => {
    particle.update();
  });
}

init();
animate();
