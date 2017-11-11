import {R} from "./role";


  export default class Harvester implements R.CreepRun {
    private moveOpt: R.MoveOptions;
    private findOpt: any = {};

    constructor(){
      this.moveOpt = {
        reusePath: 50,
        visualizePathStyle: {
          stroke: "#ffaa00"
        }
      };

      this.findOpt.filter = (structure: any) => {
       return (structure.structureType ==  STRUCTURE_EXTENSION ||
               structure.structureType == STRUCTURE_SPAWN ||
               structure.structureType == STRUCTURE_TOWER) && structure.energy < structure.energyCapacity;
       }
    }
    public run(creep: Creep): void {
      let stageName = this.isIdleStage(creep);
      let targets: Structure[] = creep.room.find<Structure>(FIND_STRUCTURES, this.findOpt);
      if(creep.carry.energy < creep.carryCapacity){
        let sources = creep.room.find<Source>(FIND_SOURCES);

        if(creep.harvest(sources[0]) == ERR_NOT_IN_RANGE){
          creep.moveTo(sources[0], this.moveOpt);
        }
        return;
      }

      //Transfer or move to next structure...
      if(targets.length > 0 && creep.transfer(targets[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE){
        if(typeof stageName === "string" ){
          Game.flags[stageName].memory.occupied = false;
        }

        creep.moveTo(targets[0], this.moveOpt);
        return;
      }

      if(!targets.length && !stageName){
        //Move to next stage flag...
        creep.moveTo(this.findOpenStage(), this.moveOpt);
        return;
      }

      //Ensure flag is occupied...
      if(typeof stageName === "string"){
        Game.flags[stageName].memory.occupied = true;
        return;
      }

    }

    public isIdleStage(crp: Creep):boolean | string{
      let flags = _.filter(Game.flags, (flg) => flg.memory.role == "stage");

      for(let flag of flags){
        if(crp.pos.x == flag.pos.x && crp.pos.y == flag.pos.y){
          return flag.name;
        }
      }
     return false;
    }

    public findOpenStage(): Flag{
      let openFlags = _.filter(Game.flags, flag => flag.memory.role == "stage" && flag.memory.occupied != true);
      return openFlags[0];
    }
  }


