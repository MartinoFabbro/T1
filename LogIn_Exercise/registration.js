var submit = document.getElementById("submit");

function getInfo() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var password1 = document.getElementById("password1").value;
 if (!password || !username || !password1) {
     alert("idiot");
     return;
 }else if (password === password1) {
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
    alert("Registration Succesfull. You will now be redirected");
    window.location = "index.html";

    return;
} else {
        document.getElementById("registrationResult").textContent = "the password dont match, try again";
        return;

};

};

submit.onclick = getInfo;



