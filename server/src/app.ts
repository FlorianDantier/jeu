import {Server as HttpServer} from "http";
import {Server, ServerOptions, Socket} from "socket.io";
import {ClientEvent, ServerEvent} from "./events";

export function createApplication(
  httpServer: HttpServer,
  serverOptions: Partial<ServerOptions>
): Server<ClientEvent, ServerEvent> {
  const io = new Server<ClientEvent, ServerEvent>(httpServer, serverOptions);

  io.on("connection", (socket: Socket<ClientEvent, ServerEvent>) => {
    console.log("Hello world, you are connected on the socket ! Congratulations !!!");
  });

  return io;
}
