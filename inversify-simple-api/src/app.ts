import "reflect-metadata";
import * as bodyParser from "body-parser";
import { Container } from "inversify";
import { InversifyExpressServer } from "inversify-express-utils";

import TYPES from "./types";

import "./controllers/sala.controller";

import { RoomService } from "./services/room.service";

import { RoomServiceInterface } from "./services/interfaces/room.service.interface";

let container = new Container();

export class App {
  constructor() {
    this.configDependencies();
    this.createServer();
  }

  configDependencies(): void {
    container
      .bind<RoomServiceInterface>(TYPES.RoomServiceInterface)
      .to(RoomService);
  }

  createServer(): void {
    let server: InversifyExpressServer = new InversifyExpressServer(container);
    server.setConfig((app) => {
      // add body parser
      app.use(
        bodyParser.urlencoded({
          extended: true,
        })
      );
      app.use(bodyParser.json());
    });

    let app = server.build();
    app.listen(3000);
    console.log("Servidor iniciado na porta 3000 /o/");
  }
}

export default new App();
