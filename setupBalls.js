import { Ball } from "./Ball.js";
import { canvas, margin } from "./canvas.js";

export const COLORS = {
  WHITE: "rgb(210,210,211)",
  BLACK: "rgba(0,0,0)",
  YELLOW: "rgb(255,215,0)",
  ORANGE: "rgb(255, 120, 0)",
  RED: "rgb(230,10,10)",
  PURPLE: "rgb(90,0,170)",
  BLUE: "rgb(0,80,255)",
  BROWN: "rgb(150,20,0)",
  GREEN: "rgb(0,238,118)",
  MAGENTA: "rgb(255,0,255)",
  PEACHPUFF: "rgb(255,218,185)",
  LIGHTPINK: "rgb(205,140,149)",
  MEDIUMPURPLE: "rgb(171,130,255)",
  TURQUOISE: "rgb(64,224,208)",
  DARKGOLDENROD: "rgb(139,101,8)",
  MAROON: "rgb(139,28,98)",
};

export function getBalls() {
  const start = {
    x: canvas.width - margin - (1 / 4) * (canvas.width - 2 * margin),
    y: canvas.height / 2,
  };

  const step = {
    x: 33,
    y: 19,
  };

  return [
    new Ball({
      pos: {
        x: margin + (1 / 4) * (canvas.width - 2 * margin),
        y: start.y,
      },
      color: COLORS.WHITE,
    }),
    new Ball({
      pos: { x: start.x, y: start.y },
      color: COLORS.YELLOW,
    }),
    new Ball({
      pos: { x: start.x + step.x, y: start.y - step.y },
      color: COLORS.BLUE,
    }),
    new Ball({
      pos: { x: start.x + step.x, y: start.y + step.y },
      color: COLORS.RED,
    }),
    new Ball({
      pos: { x: start.x + 2 * step.x, y: start.y - 2 * step.y },
      color: COLORS.PURPLE,
    }),
    new Ball({
      pos: { x: start.x + 2 * step.x, y: start.y },
      color: COLORS.ORANGE,
    }),
    new Ball({
      pos: { x: start.x + 2 * step.x, y: start.y + 2 * step.y },
      color: COLORS.TURQUOISE,
    }),
    new Ball({
      pos: { x: start.x + 3 * step.x, y: start.y - 3 * step.y },
      color: COLORS.BROWN,
    }),
    new Ball({
      pos: { x: start.x + 3 * step.x, y: start.y - 1 * step.y },
      color: COLORS.BLACK,
    }),
    new Ball({
      pos: { x: start.x + 3 * step.x, y: start.y + 1 * step.y },
      color: COLORS.MAGENTA,
    }),
    new Ball({
      pos: { x: start.x + 3 * step.x, y: start.y + 3 * step.y },
      color: COLORS.PEACHPUFF,
    }),
    new Ball({
      pos: { x: start.x + 4 * step.x, y: start.y - 4 * step.y },
      color: COLORS.LIGHTPINK,
    }),
    new Ball({
      pos: { x: start.x + 4 * step.x, y: start.y - 2 * step.y },
      color: COLORS.MEDIUMPURPLE,
    }),
    new Ball({
      pos: { x: start.x + 4 * step.x, y: start.y },
      color: COLORS.GREEN,
    }),
    new Ball({
      pos: { x: start.x + 4 * step.x, y: start.y + 2 * step.y },
      color: COLORS.DARKGOLDENROD,
    }),
    new Ball({
      pos: { x: start.x + 4 * step.x, y: start.y + 4 * step.y },
      color: COLORS.MAROON,
    }),
  ];
}
