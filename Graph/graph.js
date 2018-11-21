var submit = document.getElementById("submit");
document.getElementById("ceoStyle").style.display="none"

// because twitter widgets can not be modified trough JS, the (dumb) idea behind this is 
// loading each company's twitter timeline (on the html file) and then, as the page load, hiding it by calling this function
window.onload = hideTwitter

function hideTwitter(){
document.querySelector(".twitter-timeline").style.display="none"
document.querySelector("#jesus").style.display="none"
document.querySelector("#atlanticamer").style.display="none"
}

// a class that store each company information, it should have included the Twitter accout as well but twitter doesnt allow dynamic widgets vOv.
class Companies {
    constructor(symbol,name,ceo,) {
        this.symbol = symbol;
        this.name = name;
        this.ceo = ceo;
    }
}

var companyArray = []
// when a company gets created this function push the object into the companyArray array

function newCompany (symbol,name,ceo) {
    var temp = new Companies(symbol,name,ceo)
    companyArray.push(temp)
}
// creating 3 companies
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

// main function that gets called when the submit button is pressed
function getInfo() {
document.getElementById("ceoStyle").style.display="block"

var retrieve = document.getElementById("companyList").value;

// it loops trough the objects in the array, when an object's name is equal to the searched company the loop retrieve all the other infos as well
for (var x=0; x<companyArray.length; x++) {
    if(companyArray[x].name === retrieve) {
        console.log(companyArray[x].name)
        var fetch = companyArray[x].symbol;
        var ceo = companyArray[x].ceo;
        setTimeout(function(){ 
        document.getElementById("ceo").innerHTML= ceo;},1500);

        // this is the tradingView widget, modifing the "symbol" string allow us to search each NASDAQ company
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

// this variable return true if the searched company's name is present in the array, if it is not an alert pops up
var isPresent = companyArray.some(function(element){ 
    return element.name === retrieve});

if (isPresent === false) {
    alert("the company does not exist")
    location.reload()
 }

 // https://www.youtube.com/watch?v=pgl37R7hILE  :)
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

// redirect to the registration page and remove the logged username from the local storage
function logOff() {
    window.location = "../LogIn_Exercise/index.html"
};

submit.onclick = getInfo;
logoff.onclick = logOff;

