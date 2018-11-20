var submit = document.getElementById("submit");
document.getElementById("ceoStyle").style.display="none"
window.onload = hideTwitter

function hideTwitter(){
document.querySelector(".twitter-timeline").style.display="none"
document.querySelector("#jesus").style.display="none"
document.querySelector("#atlanticamer").style.display="none"

}


class Companies {
    constructor(symbol,name,ceo,) {
        this.symbol = symbol;
        this.name = name;
        this.ceo = ceo;
    }
}

var companyArray = []
//
function newCompany (symbol,name,ceo) {
    var temp = new Companies(symbol,name,ceo)
    companyArray.push(temp)
}
//
newCompany("AABA", "Altaba Inc", "Thomas J. McInerney", "jesus");
newCompany("AAL", "American Airlines Gp", "Doug Parker", "AmericanAir");
newCompany("AAME", "Atlantic Amer Cp", "Hilton H. Howell, Jr", "jesus")

//-------Test-----------------
var test = 0
if (test===1) {
console.log(companyArray.length)
console.log(companyArray)

console.log(companyArray[0].name)
console.log(companyArray[0].symbol)

console.log(companyArray[1].name)
console.log(companyArray[1].symbol)

console.log(companyArray[2].name)
console.log(companyArray[2].symbol)

for (var i=0; i<companyArray; i++) {
    console.log(companyArray[i].symbol)
    break;
}
}
//-----Test-End--------
//
function getInfo() {
document.getElementById("ceoStyle").style.display="block"


var retrieve = document.getElementById("companyList").value;

for (var x=0; x<companyArray.length; x++) {
    if(companyArray[x].name === retrieve) {
        console.log(companyArray[x].name)
        var fetch = companyArray[x].symbol;
        var ceo = companyArray[x].ceo;
        setTimeout(function(){ 
        document.getElementById("ceo").innerHTML= ceo;},1500);

        new TradingView.widget(
            {
            "width": 980,
            "height": 610,
            "symbol": "NASDAQ:"+ fetch,
            "interval": "60",
            "timezone": "Europe/Copenaghen",
            "theme": "Light",
            "style": "1",
            "locale": "en",
            "toolbar_bg": "#f1f3f6",
            "enable_publishing": false,
            "allow_symbol_change": true,
            "container_id": "tradingview_29b33"
          }
            ); 
            break;
} 
};

var isPresent = companyArray.some(function(element){ 
    return element.name === retrieve});

if (isPresent === false) {
    alert("the company does not exist")
    location.reload()
 }

if (companyArray[x].name === "Altaba Inc") {
    document.querySelector(".twitter-timeline").style.display="block"
} else if (companyArray[x].name === "American Airlines Gp") {
    document.querySelector(".twitter-timeline").style.display="none"
    document.querySelector("#jesus").style.display="block"
} else if (companyArray[x].name === "Atlantic Amer Cp") {
    document.querySelector(".twitter-timeline").style.display="none"
    document.querySelector("#jesus").style.display="none"
    document.querySelector("#atlanticamer").style.display="block"
}
};


function logOff() {
    localStorage.removeItem("loggedIn")
    window.location = "../LogIn_Exercise/index.html"
};

submit.onclick = getInfo;
logoff.onclick = logOff;

