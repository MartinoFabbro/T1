var submit = document.getElementById("submit");
var registration = document.getElementById("redirect");

// var users = [];

if (localStorage.getItem("array")) {
    users = JSON.parse(localStorage.getItem("array"))
} else {
    users = []
}

class User {
constructor(name,username,password) {
        this.name = name;
        this.username = username;
        this.password = hashPassword(password);
    }
};

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
    
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var password1 = document.getElementById("password1").value;
    var name = document.getElementById("name").value;
    var retrievedUser = JSON.parse(localStorage.getItem("array"))
    var chooseAnother = false

if (retrievedUser) {
for (var x=0; x < retrievedUser.length; x++) {
    if (retrievedUser[x].username === username) {
        var chooseAnother = true
    }
}
}

  if (!password || !username || !password1 || !name) {
     alert("idiot");
     return;
 }else if (chooseAnother) {
    document.getElementById("registrationResult").textContent =("Username already taken, choose another one");
     return;
 }else if ((password.length < 6) || (username.length <6)) {
    document.getElementById("registrationResult").textContent = ("min 6 characters for user and pass dork");
    return
 } else if ((username.indexOf(" ") !== -1) || (password.indexOf(" ") !== -1)) {
    document.getElementById("registrationResult").textContent = ("No spaces :(");
     return
 } else if (username === password) {
    document.getElementById("registrationResult").textContent = ("username and password can not be the same");
     return
 } else if (password.search(/\d/)== -1) {
    document.getElementById("registrationResult").textContent = ("password needs to contain atleast a number");
     return
 } else if (password.search(/\w*[A-Z]/)== -1) {
     alert("password needs to contain atleast an UPPERCASE letter")
     return
 } else if (password === password1) {
    newUser(name,username,password);
    localStorage.setItem("array",JSON.stringify(users));
    alert("Registration Succesfull. "+ name +" You will now be redirected");
    window.location = "login.html";
} else {
        document.getElementById("registrationResult").textContent = "the passwords dont match, try again";
        return

};
};



submit.onclick= getInfo;
registration.onclick = redirect;
