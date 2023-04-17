import "reflect-metadata";
import { inject, injectable } from "inversify";

import TYPES from "./types";

import { RoomInterface } from "./interfaces/room.interface";
import { UserInterface } from "./interfaces/user.interface";

@injectable()
export class User implements UserInterface {
  nome: string;

  private _room: RoomInterface;

  constructor(@inject(TYPES.RoomInterface) room: RoomInterface) {
    this._room = room;

    this.nome = "biazita";
  }

  public reserveRoom(): string {
    const reserveRoom = this._room.reserve(this.nome);

    return reserveRoom;
  }
}
