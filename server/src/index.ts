import {createServer} from "http";
import {Server, Socket} from "socket.io";
import {ClientEvent, ServerEvent} from "./events";
import {createApplication} from "./app";

const httpServer = createServer();

const serverOptions = {
  cors: {
    origin: "http://localhost:3000",
  },
};

createApplication(httpServer, serverOptions);

httpServer.listen(8080);
