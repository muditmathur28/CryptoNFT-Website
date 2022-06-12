var doge = document.getElementById("dogecoin");
var trx = document.getElementById("tron");
var gala = document.getElementById("gala");

var settings = {
    "async": true,
    "scrossDomain": true,

    "url": "https://api.coingecko.com/api/v3/simple/price?ids=dogecoin%2Ctron%2Cgala&vs_currencies=usd",
    "method": "GET",
    "headers": {}
}
$.ajax(settings).done(function (response) {

    doge.innerHTML = response.dogecoin.usd;
    trx.innerHTML = response.tron.usd;
    gala.innerHTML = response.gala.usd;
});