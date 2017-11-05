
import GameStack from "./game.stack";
export default class GameBuilder {

  private newHarvOpt: Object;
  private newUpgradeOpt: Object;
  private newBuilderOpt: Object;
  private gameStack: GameStack;

  constructor(){
    this.gameStack = new GameStack();
    this.newBuilderOpt = { memory: {role: "builder"}};
    this.newHarvOpt = {memory: {role: "harvester"}};
    this.newUpgradeOpt = {memory: {role: "upgrader"}};
  }

  public constructCreeps(): void {
    let harvCount: number = Memory.harvesters.length;
    let buildCount: number = Memory.builders.length;
    let upgradeCount: number = Memory.upgraders.length;

    if(harvCount < Memory.maxHarvCount){
      let newName = 'Harvester' + Game.time;
      Game.spawns["Spawn1"].spawnCreep([WORK, CARRY, MOVE], newName, this.newHarvOpt);
    }

    if(upgradeCount < Memory.maxUpgradeCount && harvCount == Memory.maxHarvCount){
      let newName = "Upgrader" + Game.time;
      Game.spawns["Spawn1"].spawnCreep([WORK, CARRY, MOVE], newName, this.newUpgradeOpt);
    }

    if(buildCount < Memory.maxBuildCount && upgradeCount == Memory.maxUpgradeCount && harvCount == Memory.maxHarvCount){
      let newName = "Builder" + Game.time;
      Game.spawns["Spawn1"].spawnCreep([WORK, CARRY, MOVE], newName, this.newBuilderOpt);
    }

    if(Game.spawns["Spawn1"].spawning){
      let spawningCreep = Game.creeps[Game.spawns["Spawn1"].spawning.name];
      let remainingTime = Game.spawns["Spawn1"].spawning.remainingTime;
      let visualPosX = Game.spawns["Spawn1"].pos.x + 1;
      let visualPosY = Game.spawns["Spawn1"].pos.y;

      Game.spawns["Spawn1"].room.visual.text(spawningCreep.memory.role + " Remaining: " + remainingTime, visualPosX, visualPosY, { align: "left", opacity: 0.8});

      if(remainingTime == 1){
        console.log("Registering creep: ", spawningCreep.name);
        this.gameStack.addToStack(spawningCreep);
      }

    }

  }



  public destroy(creep: Creep) : boolean{
    console.log("Destroy: ", creep.name);
    return true;
  }
}
