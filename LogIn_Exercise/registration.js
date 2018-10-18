var submit = document.getElementById("submit");
var registration = document.getElementById("redirect");
var User = function(name,username,password) {
        this.name = name;
        this.username = username;
        this.password = hashPassword(password);
    };

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

var users = [];

function getInfo() {
    
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var password1 = document.getElementById("password1").value;
    var name = document.getElementById("name").value;
    // var name = name.replace(/ /g,'')



    if (!password || !username || !password1 || !name) {
     alert("idiot");
     return;
 }else if ((password.length < 6) || (username.length <6)) {
    alert("min 6 characters for user and pass dork");
    return
 } else if ((username.indexOf(" ") !== -1) || (password.indexOf(" ") !== -1)) {
     alert("No spaces :(");
     return
 } else if (username === password) {
     alert("username and password can not be the same");
     return
 } else if (password.search(/\d/)== -1) {
     alert("password needs to contain atleast a number");
     return
 } else if (password.search(/\w*[A-Z]/)== -1) {
     alert("password needs to contain atleast an UPPERCASE letter")
     return
 } else if (password === password1) {
    users.push(new User(name,username,password));
    localStorage.setItem("array",JSON.stringify(users));
    localStorage.setItem("name",name);
    alert("Registration Succesfull. " + name +" You will now be redirected");
    window.location = "login.html";
} else {
        document.getElementById("registrationResult").textContent = "the passwords dont match, try again";
        return

};
};


submit.onclick = getInfo;
registration.onclick = redirect;


