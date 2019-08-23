document.getElementById("btcInput").addEventListener("input", function(e) {
  var btc = e.target.value;
  document.getElementById("satoshiOutput").innerHTML = (btc*100000000).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  document.getElementById("microbitOutput").innerHTML = (btc*1000000).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  document.getElementById("millibitOutput").innerHTML = (btc*1000).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  document.getElementById("centibitOutput").innerHTML = (btc*100).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
});