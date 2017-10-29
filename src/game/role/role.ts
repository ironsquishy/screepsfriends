
export namespace R {
  export interface MoveOptions {
    visualizePathStyle: {
      stroke: string
    }
    [propName: string]: any;
  }

  export interface FindOptions{
   filter : Object | Function | string;
  }

  export interface CreepRun {
    run(creep: Creep): void;
  }
}





