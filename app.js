const express = require('express');
const http = require('http');
const { Server } = require('socket.io'); 
const dotenv = require('dotenv');

const app = express();
const server = http.createServer(app);
dotenv.config();

const io = new Server(server);

let PORT = process.env.PORT || 5000;

const userRouter=require('./routes/user_router');



app.use('/users',userRouter);



app.get('/', (req, res) => {
  res.send("Hello");
});

io.on('connection', (socket) => { 
  console.log('a user connected');

  socket.emit('connected');
io.emit('chat message','test');

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });


  socket.on('chat message', (msg) => {
    console.log('message: ' + msg);
    io.emit('chat message', msg);
  });
});

server.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
 