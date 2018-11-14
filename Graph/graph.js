var submit = document.getElementById("submit");

class Companies {
    constructor(symbol,name,ceo) {
        this.symbol = symbol;
        this.name = name;
        this.ceo = ceo;
    }
}

var companyArray = []

function newCompany (symbol,name,ceo) {
    var temp = new Companies(symbol,name,ceo)
    companyArray.push(temp)
}

newCompany("AABA", "Altaba Inc", "Thomas J. McInerney");
newCompany("AAL", "American Airlines Gp", "Doug Parker");
newCompany("AAME", "Atlantic Amer Cp", "Hilton H. Howell, Jr")

function getInfo() {

var retrieve = document.getElementById("companyList").value;

for (var i=0;i<companyArray.length;i++) {
    if(companyArray[i].name === retrieve) {
        var fetch = companyArray[i].symbol;
        var ceo = companyArray[i].ceo;
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
    } else {
        location.reload();
        alert("nope")
        return;
    }
}

//-------Test-----------------
var test = 0
if (test===1) {
console.log(companyArray)
for (var i=0; i<companyArray; i++) {
    console.log([i].Companies.name)
}
console.log(fetch)
}
//-----Test-End----------------


};




function logOff() {
    localStorage.removeItem("loggedIn")
    window.location = "../LogIn_Exercise/index.html"
};

submit.onclick = getInfo;
logoff.onclick = logOff;



