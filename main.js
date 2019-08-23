document.getElementById("btcInput").addEventListener("input", function(e) {
  var btc = e.target.value;
  document.getElementById("satoshiOutput").innerHTML = (btc/0.00000001).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  document.getElementById("microbitOutput").innerHTML = (btc/0.000001).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  document.getElementById("millibitOutput").innerHTML = (btc/0.001).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  document.getElementById("centibitOutput").innerHTML = (btc/0.01).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
});