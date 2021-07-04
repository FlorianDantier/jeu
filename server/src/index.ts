import { createServer } from "http";
import SocketIo, { Server } from "socket.io";

const httpServer = createServer();
const io = new Server(httpServer);

io.on("connection", (socket: SocketIo.Socket) => {
	console.log("Hello world, you are connected on the socket ! Congratulations !!!");
});

httpServer.listen(8080);