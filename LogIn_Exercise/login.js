var attempt = 3;
var retrievedUsername= localStorage.getItem("username");
var retrievedPassword= localStorage.getItem("password");

var submit = document.getElementById("submit");


function getInfo() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    function hashedPass(password) {
        var a = 1, c = 0, h, o;
        if (password) {
          a = 0;
          /*jshint plusplus:false bitwise:false*/
          for (h = password.length - 1; h >= 0; h--) {
            o = password.charCodeAt(h);
            a = (a<<6&268435455) + o + (o<<14);
            c = a & 266338304;
            a = c!==0?a^c>>21:a;
          }
        }else {
          // If the password is not valid, we'll throw and error we're able to catch
          throw new Error("The password supplied is not valid");
        }
        return String(a);
    };
// Check logins if the user has more than 1 attempt left
    if (attempt > 0) {
        var logged_in = false;
            if (retrievedUsername === username && hashedPass(password) === retrievedPassword) {
                logged_in = true;
            } 
        
            //if any of them match you get redirected to index2
        if (logged_in) {
            console.log(username + " is logged in");
            alert("Login Successfully. You will now be redirected");
            window.location = "mainPage.html";
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