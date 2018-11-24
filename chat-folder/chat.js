//chat.js functions as the frontend

//different socket.io than the backend
var socket = io.connect("http://localhost:8080");

//implementing variables from chat.html
var message = document.getElementById("message");
username = document.getElementById("username"),
button = document.getElementById("send"),
output = document.getElementById("output"),
feedback = document.getElementById("feedback");

//function to emit events
button.addEventListener("click", function(){
  socket.emit("chat", {
    message: message.value,
    username: username.value
  });
});

message.addEventListener("keypress", function(){
  socket.emit("typing", username.value);
});

//listens for events
socket.on("chat", function(data){
  output.innerHTML += "<p><strong>" + data.username + ":</strong>" + data.message + "</p>"
});

//listens for typing from other users
socket.on("typing", function(data){
  feedback.innerHTML = "<p><em>" + data + " is typing a message...</em></p>";
});
