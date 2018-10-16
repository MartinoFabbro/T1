var submit = document.getElementById("submit");

function getInfo() {

var fetch = document.getElementById("whatever").value;

if(fetch === "apple") {
    fetch1="AAPL"
} else if (fetch === "tesla") {
    fetch1="TSLA"
};

new TradingView.widget(
    {
    "width": 980,
    "height": 610,
    "symbol": "NASDAQ:"+fetch1,
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



