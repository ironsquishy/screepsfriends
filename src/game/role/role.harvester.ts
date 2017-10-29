import {R} from "./role";


  export default class Harvester implements R.CreepRun {
    private moveOpt: R.MoveOptions;
    private findOpt: any = {};

    constructor(){
      this.moveOpt = {
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
      if(creep.carry.energy < creep.carryCapacity){
        let sources = creep.room.find<Source>(FIND_SOURCES);

        if(creep.harvest(sources[0]) == ERR_NOT_IN_RANGE){
          creep.moveTo(sources[0], this.moveOpt);
        }

      } else {
        let targets: Structure[] = creep.room.find<Structure>(FIND_STRUCTURES, this.findOpt);

        if(targets.length > 0 ){
          if (creep.transfer(targets[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE){

            creep.moveTo(targets[0], this.moveOpt);
          }
        }
      }
    }
  }


