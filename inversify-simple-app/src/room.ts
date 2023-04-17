import "reflect-metadata";
import { injectable } from "inversify";

import { RoomInterface } from "./interfaces/room.interface";

@injectable()
export class Room implements RoomInterface {
  reserve(manager: string): string {
    return `Sala reservada por ${manager}`;
  }
}
