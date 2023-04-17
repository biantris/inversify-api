import "reflect-metadata";
import { injectable } from "inversify";

import { RoomServiceInterface } from "./interfaces/room.service.interface";

@injectable()
export class RoomService implements RoomServiceInterface {
  constructor() {}

  indexTest(): string {
    return "OK!";
  }
}
