import { Game } from "../src/Game.js";
import { getBalls } from "../src/setupBalls.js";
import { getBumpers } from "../src/setupBumpers.js";
import { getPockets } from "../src/setupPockets.js";

export const game = new Game({
  balls: getBalls(),
  pockets: getPockets(),
  bumpers: getBumpers(),
});
