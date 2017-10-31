
Memory.harvesters = Memory.harvesters || [];
Memory.builders = Memory.builders || [];
Memory.upgraders = Memory.upgraders || [];
Memory.explorers = Memory.explorers || [];

Memory.maxHarvCount  = 3;
Memory.maxBuildCount = 2;
Memory.maxUpgradeCount = 2;

import {gameManager} from "./game/game.manager";

export const loop = () => {
  gameManager.run();
};
