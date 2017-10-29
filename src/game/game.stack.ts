import {Worker} from  "./role";

export default class GameStack{

  private instance: GameStack = null;

  private harvester: Worker.Harvester;
  private builder: Worker.Builder;
  private upgrader: Worker.Upgrader;
  private explorer: Worker.Explorer;

  constructor(){
    if(this.instance == null){
      this.harvester = new Worker.Harvester();
      this.builder = new Worker.Builder();
      this.upgrader = new Worker.Upgrader();
      this.explorer = new Worker.Explorer();

      this.instance = this;
    }
    return this.instance;
  }

  public run() : void {
    for(let name of Memory.harvesters){
        this.harvester.run(Game.creeps[name]);
    }

    for(let name of Memory.builders){
      this.builder.run(Game.creeps[name]);
    }

    for(let name of Memory.upgraders){
      this.upgrader.run(Game.creeps[name]);
    }

    for(let name of Memory.explorers){
      this.explorer.run(Game.creeps[name]);
    }
  }

  public addHarvester(name: string): void {
    Memory.harvesters.push(name);
    console.log("Harvester count: ", Memory.harvester.length);
  }

  public addBuilder(name: string): void {
    Memory.builders.push(name);
    console.log("Builder count: ", Memory.builders.length);
  }

  public addUpgrader(name: string): void {
    Memory.upgraders.push(name);
    console.log("Upgrader count: ", Memory.ugraders.length);
  }

  public addExplorer(name: string): void {
    Memory.explorer.push(name);
    console.log("Explorer count: ", Memory.explorer.length);
  }

  public remove(creep: Creep): boolean {
    if(creep.memory.role == "harvester"){

    }

    if(creep.memory.role == "builder"){

    }

    if(creep.memory.role == "upgrader"){

    }

    if(creep.memory.role == "explorer"){

    }

    if(!creep.memory.role){
      console.log("Creep name: " + creep.name + " could not be destroyed!!");
      return false;
    }

    return true;
  }
}
