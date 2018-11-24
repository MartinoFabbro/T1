//backend.js functions as the entrypoint and backend for the chat room

//express package installed to the dependencies and implemented in the file
var express = require("express");
//socket.io package installed to the dependencies and implemented in the file
var socket = require("socket.io");
//invoke express function
var app = express();
//create server by storing it in a variable
var server = app.listen(8080, function(){
  console.log("Now listening to requests on port 8080")
});

//looks for the necessary files in the "public" folder
app.use(express.static("public"));

//invoke socket function, and pass through the server that we created
var io = socket(server);
//listening for a "connection" event, and the call back function then passes through the individual socket

io.on("connection", function(socket){
//socket.id provides a unique socket id for every user
  console.log("Connected successfully!", "User ID is: " + socket.id)

//call back function
  socket.on("chat", function(data){
//"sockets" refers to all client sockets
    io.sockets.emit("chat", data);
  });
  socket.on("typing", function(data){
//broadcasts the message to everyone except the person typing
    socket.broadcast.emit("typing", data)
  });
});

