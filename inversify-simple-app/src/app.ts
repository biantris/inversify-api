import { Container } from "inversify";

import TYPES from "./types";

import { RoomInterface } from "./interfaces/room.interface";
import { UserInterface } from "./interfaces/user.interface";

import { Room } from "./room";
import { User } from "./user";

const container = new Container();

export class App {
  constructor() {
    this.configDependencies();
    this.reserveRoomTeste();
  }

  configDependencies(): void {
    container.bind<RoomInterface>(TYPES.RoomInterface).to(Room);
    container.bind<UserInterface>(TYPES.UserInterface).to(User);
  }

  reserveRoomTeste(): void {
    const user = container.get<UserInterface>(TYPES.UserInterface);

    const roomReserved = user.reserveRoom();

    console.log(roomReserved);
  }
}

export default new App();
