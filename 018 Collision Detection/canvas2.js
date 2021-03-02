const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

canvas.width = innerWidth;
canvas.height = innerHeight;

const mouse = {
  x: 10,
  y: 10,
};

addEventListener('mousemove', (event) => {
  mouse.x = event.clientX;
  mouse.y = event.clientY;
});

class Particle {
  constructor(x, y, radius, color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, Math.PI * 2, false);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
  }

  update() {
    this.draw();
  }
}

function getDistance(x1, y1, x2, y2) {
  let xDistance = x2 - x1;
  let yDistance = y2 - y1;

  return Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));
}

let particle1, particle2;
function init() {
  particle1 = new Particle(300, 300, 100, 'black');
  particle2 = new Particle(null, null, 20, 'red');
}

function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  particle1.update();
  particle2.update();
  particle2.x = mouse.x;
  particle2.y = mouse.y;

  if (
    getDistance(particle1.x, particle1.y, particle2.x, particle2.y) <
    particle1.radius + particle2.radius
  ) {
    particle1.color = 'red';
  } else {
    particle1.color = 'black';
  }
}

init();
animate();
