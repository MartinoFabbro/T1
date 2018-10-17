var submit = document.getElementById("submit");

function getInfo() {

var fetch = document.getElementById("companyList").value;

if (arrayCompanies.includes(fetch)) {
    var index = arrayCompanies.indexOf(fetch);
    fetch = arraySymbol[index] };


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
submit.onclick = getInfo;
