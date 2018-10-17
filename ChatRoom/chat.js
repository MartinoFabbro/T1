//chat.js functions as the frontend!
//Makes a connection
//Different socket.io than the backend!
var socket = io.connect("http://localhost:8080");

//Implementing variables from index.html
var message = document.getElementById("message");
handle = document.getElementById("handle"),
button = document.getElementById("send"),
output = document.getElementById("output"),
feedback = document.getElementById("feedback");

//Function to emit events
button.addEventListener("click", function(){
  socket.emit("chat", {
    message: message.value,
    handle: handle.value
  });
});

message.addEventListener("keypress", function(){
  socket.emit("typing", handle.value);
});

//Listens for events
socket.on("chat", function(data){
  output.innerHTML += "<p><strong>" + data.handle + ":</strong>" + data.message + "</p>"
});

//Listens for typing from other users
socket.on("typing", function(data){
  feedback.innerHTML = "<p><em>" + data + "is typing a message...</em></p>";
});
