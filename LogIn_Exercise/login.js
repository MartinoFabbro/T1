var attempt = 3;
var retrievedUsername= localStorage.getItem('username');
var retrievedPassword= localStorage.getItem('password');

var submit = document.getElementById("submit");

function getInfo() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
// Check logins if the user has more than 1 attempt left
    if (attempt > 0) {
        var logged_in = false;
            if (retrievedUsername === username && retrievedPassword === password) {
                logged_in = true;
            } 
        
            //if any of them match you get redirected to index2
        if (logged_in) {
            console.log(username + " is logged in");
            alert("Login Successfully. You will now be redirected");
            window.location = "index2.html";
            return;
        } else {
            // else you get a message showed
            attempt--;
            console.log("incorrect username or password");
            alert("Wrong username or password. You have " + attempt + " attempts left. ");
            document.getElementById("loginResult").textContent = "Incorrect username or password. You have " + attempt + " attempts left.";

        }
        
    } else {
        document.getElementById("username").disabled = true;
        document.getElementById("password").disabled = true;
        document.getElementById("submit").disabled = true;
        document.getElementById("loginResult").textContent ="wait for it...";
        setTimeout(function() {alert("You are banned");},2000);

        return;
    }
}

submit.onclick = getInfo