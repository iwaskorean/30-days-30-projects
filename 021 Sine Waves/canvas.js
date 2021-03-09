const gui = new dat.GUI();

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

canvas.width = innerWidth;
canvas.height = innerHeight;

const wave = {
  y: canvas.height / 2,
  length: 0.01,
  attitude: 100,
  frequency: 0.01,
};

const strokeColor = {
  h: 200,
  s: 50,
  l: 50,
};

const backgroundColor = {
  r: 0,
  g: 0,
  b: 0,
  a: 0.01,
};

const waveFolder = gui.addFolder('wave');
waveFolder.add(wave, 'y', 0, canvas.height);
waveFolder.add(wave, 'length', -0.01, 0.01);
waveFolder.add(wave, 'attitude', -300, 300);
waveFolder.add(wave, 'frequency', -0.01, 1);
waveFolder.open();

const strokeFolder = gui.addFolder('stroke');
strokeFolder.add(strokeColor, 'h', 0, 255);
strokeFolder.add(strokeColor, 's', 0, 100);
strokeFolder.add(strokeColor, 'l', 0, 100);
strokeFolder.open();

const backgroundFolder = gui.addFolder('background');
backgroundFolder.add(backgroundColor, 'r', 0, 255);
backgroundFolder.add(backgroundColor, 'g', 0, 255);
backgroundFolder.add(backgroundColor, 'b', 0, 255);
backgroundFolder.add(backgroundColor, 'a', 0, 1);
backgroundFolder.open();

let increment = wave.frequency;
function animate() {
  requestAnimationFrame(animate);
  // ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = `rgba(${backgroundColor.r},${backgroundColor.g},${backgroundColor.b},${backgroundColor.a})`;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.beginPath();
  ctx.moveTo(0, canvas.height / 2);
  for (let i = 0; i < canvas.width; i++) {
    ctx.lineTo(
      i,
      wave.y +
        Math.sin(i * wave.length + increment) *
          wave.attitude *
          Math.sin(increment)
    );
  }

  ctx.strokeStyle = `hsl(${Math.abs(strokeColor.h * Math.sin(increment))},${
    strokeColor.s
  }%,${strokeColor.l}%)`;
  ctx.stroke();
  increment += wave.frequency;
}

animate();
