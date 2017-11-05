
import {R} from "./role";

  export default class Upgrader implements R.CreepRun{

    private moveOpt: any;

    constructor(){
      this.moveOpt = {
        visualizePathStyle: {
          stroke: ""
        }
      };
    }

    public run(creep: Creep): void{
      //Harvest
      if(creep.memory.upgrading && creep.carry.energy == 0){
        creep.memory.upgrading = false;
        creep.say("Harvest");
      }

      //Upgrade
      if(!creep.memory.upgrading && creep.carry.energy == creep.carryCapacity){
        creep.memory.upgrading = true;
        creep.say("Upgrade");
      }

      //Move to logic..
      if(creep.memory.upgrading){
        if(creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE){
          this.moveOpt.visualizePathStyle.stroke = "#ffffff";
          creep.moveTo(creep.room.controller, this.moveOpt);
        }
      } else {

        let sources = creep.room.find<Source>(FIND_SOURCES);

        if (creep.harvest(sources[0]) == ERR_NOT_IN_RANGE){
          this.moveOpt.visualizePathStyle.stroke = "#ffaa00";
          creep.moveTo(sources[0], this.moveOpt);
        }
      }
    }
  }


