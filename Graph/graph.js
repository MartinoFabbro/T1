var submit = document.getElementById("submit");

function getInfo() {

var fetch = document.getElementById("companyList").value;

if (arrayCompanies.includes(fetch)) {
    var index = arrayCompanies.indexOf(fetch);
    fetch = arraySymbol[index]};

  

setTimeout(function(){ 
 if (arrayCeo[index]) {
   

    var ceo = arrayCeo[index];
    document.getElementById("ceo").innerHTML= ceo;

 } else { 
    document.getElementById("ceo").innerHTML= "2 lazy 4 dis";
}}, 2000);

new TradingView.widget(
    {
    "width": 980,
    "height": 610,
    "symbol": "NASDAQ:"+fetch,
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
};




function logOff() {
    window.location = "../LogIn_Exercise/index.html"
};

submit.onclick = getInfo;
logoff.onclick = logOff;



