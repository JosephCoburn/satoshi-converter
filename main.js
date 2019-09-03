document.getElementById("valInput").addEventListener("input", function(e) {
  var val = e.target.value;

  document.getElementById("selectBTC").addEventListener("click", function() {
    document.getElementById("dropdownMenuButton").innerHTML = "BTC";
    if (val) {
      document.getElementById("satoshiOutput").innerHTML = (val*100000000).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      document.getElementById("milibitOutput").innerHTML = (val*1000).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      document.getElementById("BTCOutput").innerHTML = (val).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
  });
  
  document.getElementById("selectMBTC").addEventListener("click", function() {
    document.getElementById("dropdownMenuButton").innerHTML = "mBTC";
    if (val) {
      document.getElementById("satoshiOutput").innerHTML = (val*100000).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      document.getElementById("milibitOutput").innerHTML = (val).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      document.getElementById("BTCOutput").innerHTML = (val*0.001).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
  });
  
  document.getElementById("selectSatoshis").addEventListener("click", function() {
    document.getElementById("dropdownMenuButton").innerHTML = "Satoshi";
    if (val) {
      document.getElementById("satoshiOutput").innerHTML = (val).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      document.getElementById("milibitOutput").innerHTML = (val*0.00001).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      document.getElementById("BTCOutput").innerHTML = (val*0.00000001).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
  });
});

