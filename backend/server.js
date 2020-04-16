//=======================  SERVER DEFINITION  ====================================

const app = require('express')();
app.use(require('cors'));

const server = require('http').createServer(app);
const router = require('./router');
const port = 5000;
const io = require('socket.io')(server);
io.origins("http://localhost:3000,http://localhost:3000");

app.use(router);

server.listen(port, ()=>{
    console.log(`Server listening on port ${port}`)
}); 



const {addUser, removeUser, getUser, getUserInRoom} = require ('./users');
//======================= IMPORT MODELS =====================================

const Message = require('./model/message');
const EventLog = require('./model/eventLog');
const USER = require('./users');
const DB = require('./db');
const messages = [];
//========================= IO PART   ===========================================

io.on("connection", (socket) => {
    //=============================== JOIN
    socket.on('join', (data) => {
        var name = "";
        var room = data.joinRoom;
        var messages = [];
        var roomUsers =[];
        if (data.joinName==="") {
            var ran = Math.floor(Math.random()*5000);
            name = `User_${ran}`;
        } else {name = data.joinName}
        USER.users.map(usr =>{
            if (usr.room == room) roomUsers.push(usr);
        });
        addUser(socket.id, name,room);
        socket.emit('join', {joinRoom:room, joinName:name, users:roomUsers})
        socket.join(data.joinRoom);
        Message.find({ 'chat': data.joinRoom }).then((load, err) => {
            try {
                load.map(mess => {
                    socket.emit("message", {message:mess.message, uname: mess.userName, name});
                    console.log(`FROM SERVER ${mess}`)
                });
            }
            catch (err) {
                console.log(err);
            };
        });
    });

    //================================ MESSAGE
    socket.on("message",(data)=>{
        console.log("CONTENT OF DATA IN SERVER ON MESSAGE: " + JSON.stringify(data) );
        socket.broadcast.emit("message", data);
    });
    socket.on("disconnect", () => console.log("Client disconnected"));
});
