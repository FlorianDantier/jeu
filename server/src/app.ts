import {Server as HttpServer} from "http";
import {Server, ServerOptions, Socket} from "socket.io";
import {ClientEvent, ServerEvent} from "./events";
import handlingEvents from "./game-management/game.handlers";
import {Game} from "./rules/Game";

const g1 = new Game(1);

export function createApplication(
  httpServer: HttpServer,
  serverOptions: Partial<ServerOptions>
): Server<ClientEvent, ServerEvent> {
  const io = new Server<ClientEvent, ServerEvent>(httpServer, serverOptions);
  const {gamePlay, gameBook, gameDraw} = handlingEvents;

  io.on("connection", (socket: Socket<ClientEvent, ServerEvent>) => {
    console.log("Hello world, you are connected on the socket ! Congratulations !!!");
    socket.on("game:play", gamePlay(g1));
  });

  return io;
}
