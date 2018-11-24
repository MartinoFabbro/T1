var submit = document.getElementById("submit");
var registration = document.getElementById("redirect");

// this is the users array, if there is no array on the local storage a new empty array is created, if there is an array in the loca storage a new array with those elements is created

if (localStorage.getItem("array")) {
    users = JSON.parse(localStorage.getItem("array"))
} else {
    users = []
}

// a new class is created, each user has a name, username and a hashed password
class User {
constructor(name,username,password) {
        this.name = name;
        this.username = username;
        this.password = hashPassword(password);
    }
};
// this function allows to automacally push a new user into the local storage
function newUser(name,username,password) {
    var temp = new User(name,username,password);
    users.push(temp)
;}


function redirect() {
    window.location = "login.html";
    return
}

function hashPassword(password) {
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

function getInfo() {

    function resetFields() {
        document.getElementById("username").value = "";
        document.getElementById("password").value = "";
        document.getElementById("password1").value = "";
    }

    function resetsPass() {
        document.getElementById("password").value = "";
        document.getElementById("password1").value = "";
    }

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var password1 = document.getElementById("password1").value;
    var name = document.getElementById("name").value;
   
    var retrievedUser = JSON.parse(localStorage.getItem("array"));

    var chooseAnother = false;

    var isBanned = false;

    if (localStorage.getItem("banned")) {
        banned = JSON.parse(localStorage.getItem("banned"))
    } else {
        banned = []
    }
// if another user with the same username already registerd the chooseanother var turns true, then you are asked to provide a different username
if (retrievedUser) {
for (var x=0; x < retrievedUser.length; x++) {
    if (retrievedUser[x].username === username) {
        var chooseAnother = true
    }
} 
}

if (banned) {
 for (var y=0; y < banned.length; y++ ) {
    if (banned[y].username === username) {
        var isBanned = true
    }
}
}

// giant if-else statement, maybe I should have used a switch statement but somehow I couldnt make it work, also there are a few boolean variables and maybe if-else works better

  if (!password || !username || !password1 || !name) {
     alert("idiot");
     return;
 } else if (isBanned) {
    document.getElementById("registrationResult").textContent =("this username ID has been banned, choose another ID");
    resetFields()
    return;
 } else if (chooseAnother) {
    document.getElementById("registrationResult").textContent =("Username already taken, choose another one");
    resetFields()
    return;
 } else if ((password.length < 6) || (username.length <6)) {
     if (password.length < 6) {
    document.getElementById("registrationResult").textContent = ("min 6 characters for the password dork");
    resetsPass()
     } else {
    document.getElementById("registrationResult").textContent = ("min 6 characters for username dork");
    document.getElementById("username").value = "";     
 } return;
 } else if ((username.indexOf(" ") !== -1) || (password.indexOf(" ") !== -1)) {
    document.getElementById("registrationResult").textContent = ("No spaces :(");
    resetFields()
    return;
 } else if (username === password) {
    document.getElementById("registrationResult").textContent = ("username and password can not be the same");
    resetFields()
    return;
    // two regexs that check if numbers or upper case letters are present in the password
 } else if (password.search(/\d/)== -1) {
    document.getElementById("registrationResult").textContent = ("password needs to contain atleast a number");
    resetsPass()
    return;
 } else if (password.search(/\w*[A-Z]/)== -1) {
     alert("password needs to contain atleast an UPPERCASE letter")
     resetsPass()
     return;
 } else if (name === username) {
    document.getElementById("registrationResult").textContent = ("name and username can not be equal");
    document.getElementById("username").value = "";
    return;
 } else if (password === password1) {
    newUser(name,username,password);
    localStorage.setItem("array",JSON.stringify(users));
    alert("Registration Successful. "+ name +" You will now be redirected");
    localStorage.setItem("currentUser",JSON.stringify(username));
    window.location = "login.html";
} else {
        document.getElementById("registrationResult").textContent = "the passwords dont match, try again";
        resetsPass()
        return;

};
};



submit.onclick= getInfo;
registration.onclick = redirect;
