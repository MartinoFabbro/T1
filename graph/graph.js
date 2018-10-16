var submit = document.getElementById("submit");

function getInfo() {

var fetch = document.getElementById("selector").value;

new TradingView.widget(
    {
    "width": 980,
    "height": 610,
    "symbol": "NASDAQ:"+fetch,
    "interval": "60",
    "timezone": "Etc/UTC",
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



