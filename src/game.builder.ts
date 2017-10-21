
declare var GameStack;

class GameBuilder{
  private harvesterCount: Number;
  private builderCount: Number;
  private upgraderCount: Number;

  constructor(){
    this.harvesterCount = Memory.harvesters.length;
    this.builderCount = Memory.builders.length;
    this.upgraderCount = Memory.builders.length;
  }

  public register(creep: Creep){
    
    if(creep.memory.role == 'harvester')
      GameStack.addHarvester(creep.name);

    if(creep.memory.role == 'builder')
      GameStack.addBuilder(creep.name);

    if(creep.memory.role == 'upgrader')
      GameStack.addUpgrader(creep.name);

  }


}
