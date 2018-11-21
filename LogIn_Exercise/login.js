// this is the number of attempts available for the user
var attempt = 3;
var retrievedUser = JSON.parse(localStorage.getItem("array"))

// this is the banned array, if there is no array on the local storage a new empty array is created, if there is an array in the loca storage a new array with those elements is created
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
    // this pull the currentUser from the local storage, I need this later to check if the username submitted is different from the previous one
    var currentUser = JSON.parse(localStorage.getItem("currentUser"))

// hendrik's hash function
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




// // Check logins if the user has more than 0 attempt left

if (attempt > 0) {

    if (!username || !password) {
        alert("dork");
        return;
    }
 // loop trough the loop array and check if the username is already banned   
    for (i=0; i<banned.length; i++) {
        if (banned[i].username === username) {
            alert("this user is banned");
            return;
        }
    }
    
  var logged_in = false;

  for (var i=0; i<retrievedUser.length; i++) {
      // check if the username is registered, and if the inserted password matchs with it
            if (retrievedUser[i].username === username && retrievedUser[i].password === hashedPass(password)) {
                logged_in = true;
                break;
            }
        };
    
   
// ok... I'm not sure about this, it first check if the inserted username is equal to the one in the local storage or if the username 
// and password match, if this is the case it checks if the username is actually correct redirecting to a new page, however, if the 
// username is indeed equal to the previous username (which has been uploaded into the local storage) but the data is wrong
// then a warning is issued and the counter is reduced
    if (username === currentUser || logged_in) {
    //if any of them match you get redirected to index2
        if (logged_in) { 
           // console.log(username + " is logged in");
            alert("Hi, "+ username +" You will now be redirected");
            window.location = "../Graph/mainPage.html"
            // else you get a message showed
         } else { attempt--;
            console.log("incorrect username or password");
            document.getElementById("loginResult").textContent = "Incorrect username or password. You have " + attempt + " attempts left.";
        }
// however if the username changes from the previous one BUT the username/password are wrong, the user is resetted to 2 attempts (since one has already been used)
    } else  if (username !== currentUser){
        document.getElementById("loginResult").textContent = "New user detected, but wrong username/password inserted, You have 2 attempts left.";
        localStorage.setItem("currentUser",JSON.stringify(username));
        attempt = 2;
    } 
// if, with the same username, the user input a wrong password three times in a row the username gets banned and added to a localstorage(ed) array
    } else {
        newBan(username);
        localStorage.removeItem("currentUser",JSON.stringify(username));
        localStorage.setItem("banned",JSON.stringify(banned));
        document.getElementById("username").disabled = true;
        document.getElementById("password").disabled = true;
        document.getElementById("submit").disabled = true;
        document.getElementById("loginResult").textContent ="Can't you read?";
        setTimeout(function() {alert("You are banned");},2000);
        return;
    }
} 
    


function goBack () {
    window.location = "./index.html"
}


submit.onclick = getInfo
back.onclick = goBack





