import { ctx, canvas, margin } from "./canvas.js";

export function drawCloth() {
  ctx.fillStyle = "rgb(26,150,20)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

export function drawWood() {
  ctx.fillStyle = "hsl(0,0%,20%)";
  ctx.fillRect(0, 0, canvas.width, margin);
  ctx.fillRect(0, canvas.height - margin, canvas.width, margin);
  ctx.fillRect(0, 0, margin, canvas.height);
  ctx.fillRect(canvas.width - margin, 0, margin, canvas.height);
}
