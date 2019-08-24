document.getElementById("btcInput").addEventListener("input", function(e) {
  var btc = e.target.value;
  if (btc) {
    document.getElementById("satoshiOutput").innerHTML = "ok";
    document.getElementById("microbitOutput").innerHTML = (btc/0.000001).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    document.getElementById("millibitOutput").innerHTML = (btc/0.001).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    document.getElementById("centibitOutput").innerHTML = (btc/0.01).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    document.getElementById("BTCOutput").innerHTML = (btc).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
});

document.getElementById("selectBTC").addEventListener("click", function(e) {
  document.getElementById("dropdownMenuButton").innerHTML = "BTC";
  console.log("BTC selected");
});

document.getElementById("selectMBTC").addEventListener("click", function(e) {
  document.getElementById("dropdownMenuButton").innerHTML = "mBTC";
  console.log("mBTC selected");
});

document.getElementById("selectSatoshis").addEventListener("click", function(e) {
  document.getElementById("dropdownMenuButton").innerHTML = "Satoshis";
  console.log("sats selected");
});