var attempt = 3;
var retrievedUser = JSON.parse(localStorage.getItem("array"))

if (localStorage.getItem("banned")) {
    banned = JSON.parse(localStorage.getItem("banned"))
} else {
    banned = []
}

class Banned {
    constructor(username) {
            this.username = username;
        }
    };
    
function newBan(username) {
    var temp = new Banned (username);
        banned.push(temp)
    ;}

//------------Test----------------
var test = 0
if (test === 1) {
console.log(localStorage.getItem("array"))
console.log(retrievedUser)
console.log(retrievedUser.length)
for (var x=0; x<retrievedUser.length; x++) {
    console.log(retrievedUser[x].username);
    console.log(retrievedUser[x].password)
 }
}
//------------Test-End--------------

var submit = document.getElementById("submit");
var back = document.getElementById("register");

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
    }



// // Check logins if the user has more than 1 attempt left
if (!username || !password) {
    alert("dork");
    return;
}
 
for (i=0; i<banned.length; i++) {
    if (banned[i].username === username) {
        alert("this user is banned");
        return;
    }
}
    
if (attempt > 0) {
  var logged_in = false;
  for (var i=0; i<retrievedUser.length; i++) {
            if (retrievedUser[i].username === username && retrievedUser[i].password === hashedPass(password)) {
                logged_in = true;
                break;
            }
        };
        
            //if any of them match you get redirected to index2
        if (logged_in) { 
           // console.log(username + " is logged in");
            alert("Hi, "+ username +" You will now be redirected");
            window.location = "../Graph/mainPage.html"
            localStorage.setItem("loggedIn",JSON.stringify(username))
        } else {
            // else you get a message showed
            attempt--;
            console.log("incorrect username or password");
            document.getElementById("loginResult").textContent = "Incorrect username or password. You have " + attempt + " attempts left.";
        }
        
    } else {
        newBan(username);
        localStorage.setItem("banned",JSON.stringify(banned));
        document.getElementById("username").disabled = true;
        document.getElementById("password").disabled = true;
        document.getElementById("submit").disabled = true;
        document.getElementById("loginResult").textContent ="Can't you read?";
        setTimeout(function() {alert("You are banned");},2000);
        return;
    }
};


function goBack () {
    window.location = "./index.html"
}


submit.onclick = getInfo
back.onclick = goBack
