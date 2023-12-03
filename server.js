const app = require("express")();
const httpServer = require('http').createServer(app)
const { Server } = require("socket.io")

const io = new Server(httpServer, {cors: {origin: "*"}})

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on("sendmessage", (payload) => {
        io.emit("sendmessage", payload)
        socket.broadcast.emit("sendmessage", payload)
    })
});

httpServer.listen(9000, () => {
    console.log("app is runnig");
})