//backend.js functions as the backend

//express package installed to the dependencies and implemented in the file
var express = require("express");
//socket.io package installed to the dependencies and implemented in the file
var socket = require("socket.io");
// Invoke express function
var app = express();
//Create server and store it in a variable
var server = app.listen(8080, function(){
  console.log("Now listening to requests on port 8080")
});

// Static files
app.use(express.static("public"));

//Invoke socket function, and pass through the server that we created
var io = socket(server);
//Listening for a "connection" event, and the call back function then passes through the individual socket

io.on("connection", function(socket){
//socket.id provides a unique socket id for every user
  console.log("Connected successfully!", "User ID is: " + socket.id)

//Call back function
  socket.on("chat", function(data){
//"sockets" refer too all client sockets
    io.sockets.emit("chat", data);
  });
  socket.on("typing", function(data){
//Broadcasts the message to everyone except the person typing
    socket.broadcast.emit("typing", data)
  });
});
