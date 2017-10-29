
import {R} from "./role";

export default class Builder implements R.CreepRun {

    private moveOpt : any;

    constructor(){
      this.moveOpt = {
        visualizePathStyle : {
          stroke: ""
        }
      };
    }

    public run(creep: Creep): void{
        //Move to harvest.
        if(creep.memory.building &&  creep.carry.energy == 0){
          creep.memory.building = false;
          creep.say("Harvest");
        }


        //Build
        if(!creep.memory.building && creep.carry.energy == creep.carryCapacity){
          creep.memory.building = true;
          creep.say("Build");
        }

        //Move to Build
        if(creep.memory.building){
          let targets: ConstructionSite[] = creep.room.find<ConstructionSite>(FIND_CONSTRUCTION_SITES);
          if(targets.length){
            if(creep.build(targets[0]) ==  ERR_NOT_IN_RANGE){
              this.moveOpt.visualizePathStyle.stroke = "#ffffff";
              creep.moveTo(targets[0], this.moveOpt);
            }
          }
        } else {
          let sources: Source[] = creep.room.find<Source>(FIND_SOURCES);
          if(creep.harvest(sources[0]) == ERR_NOT_IN_RANGE){
            this.moveOpt.visualizePathStyle.stroke = "#FFaa00";
            creep.moveTo(sources[0], this.moveOpt);
          }
        }
      }
    }

