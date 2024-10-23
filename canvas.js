const canvas = document.querySelector('[data-js="canvas"]');
const drawingContext = canvas.getContext("2d");

canvas.width = window.innerWidth / 4;
canvas.height = window.innerHeight / 4;

let boxWidth = canvas.width / 10;
let boxHeight = canvas.height / 10;

for (i = 0; i <= 10; i++) {
  if (i % 2 === 0) {
    drawingContext.fillStyle = "red";
  } else {
    drawingContext.fillStyle = "black";
  }
  drawingContext.fillRect(boxWidth * i, boxHeight * i, boxWidth, boxHeight);
}
