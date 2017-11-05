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

  public deRegister(creep: Creep): void{
    console.log("Deregistering: ", creep.name);

    if(this.gamestack.remove(creep)  && this.builder.destroy(creep)){
      console.log("Successfully destroyed creep");
    }
    //TODO deregister.
  }

  public run(): void{
    this.gamestack.run();
    this.builder.constructCreeps();

  }
}

export const gameManager = new GameManager();
