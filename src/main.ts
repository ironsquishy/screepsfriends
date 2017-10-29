
Memory.harvesters = Memory.harvesters || [];
Memory.builders = Memory.builders || [];
Memory.upgraders = Memory.upgraders || [];
Memory.explorers = Memory.explorers || [];


import {gameManager} from "./game/game.manager";

export const loop = () => {
  gameManager.run();
};
