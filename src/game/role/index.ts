
import _Builder from "./role.builder";
import _Harvester from "./role.harvester";
import _Upgrader from  "./role.upgrader";
import _Explorer from "./role.explorer";

export namespace Worker {
  export const Builder = _Builder;
  export const Harvester = _Harvester;
  export const Upgrader = _Upgrader;
  export const Explorer = _Explorer;

  export type Explorer = _Explorer;
  export type Builder = _Builder;
  export type Harvester = _Harvester;
  export type Upgrader = _Upgrader;
}

export namespace Attcker{

}


