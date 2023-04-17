import * as express from "express";
import { inject } from "inversify";
import {
  httpGet,
  BaseHttpController,
  interfaces,
  controller,
} from "inversify-express-utils";

import TYPES from "../types";

import { RoomServiceInterface } from "../services/interfaces/room.service.interface";

@controller("/room")
export class RoomController
  extends BaseHttpController
  implements interfaces.Controller
{
  private _roomService: RoomServiceInterface;

  constructor(
    @inject(TYPES.RoomServiceInterface) roomService: RoomServiceInterface
  ) {
    super();

    this._roomService = roomService;
  }

  @httpGet("/")
  public index(): interfaces.IHttpActionResult {
    const resultado: string = this._roomService.indexTest();

    return this.ok(resultado);
  }
}
