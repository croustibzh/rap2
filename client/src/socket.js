const io = require('socket.io-client');
const ENDPOINT = "http://localhost";
const PORT = 5000;

const mySocket = io(`${ENDPOINT}:${PORT}`);


module.exports = mySocket;