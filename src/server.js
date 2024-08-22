const http = require("http");
const socketio = require("socket.io");
const app = require("./app");

const server = http.createServer(app);
const io = socketio(server);

io.on("connection", function(socket){
    socket.on("send-location", function(data){
        io.emit("receive-location", {id: socket.id, ...data});
    });
    socket.on("disconnect", function(){
        io.emit("user-disconnected", socket.id);
    });
});

const port = process.env.PORT || 3000;

server.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
