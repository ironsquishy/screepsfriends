import GameStack from "./game.stack";
import GameBuilder from "./game.builder";

class GameManager {
  private instance: GameManager = null;
  private gamestack: GameStack = null;
  private builder: GameBuilder = null;
  constructor(){
    if(this.instance == null){
      this.gamestack = new GameStack();
      this.builder = new GameBuilder();
      this.instance = this;
    }

    return this.instance;
  }

  public register(creep: Creep): void{
    if(creep.memory.role == "harvester"){
      this.gamestack.addHarvester(creep.name);
    }

    if(creep.memory.role == "builder"){
      this.gamestack.addBuilder(creep.name);
    }

    if(creep.memory.role == "upgrader"){
      this.gamestack.addUpgrader(creep.name);
    }
  }

  public deRegister(creep: Creep): void{
    console.log("Deregistering: ", creep.name);

    if(this.gamestack.remove(creep)  && this.builder.destroy(creep)){
      console.log("Successfully destroyed creep");
    }
    //TODO deregister.
  }

  public run(): void{
    console.log("Running game from game manager");

  }
}

export const gameManager = new GameManager();
