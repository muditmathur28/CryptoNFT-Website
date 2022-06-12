var ltc = document.getElementById("litecoin");
var dot = document.getElementById("polkadot");
var sol = document.getElementById("solana");



var settings = {
    "async": true,
    "scrossDomain": true,

    "url": "https://api.coingecko.com/api/v3/simple/price?ids=litecoin%2Csolana%2Cpolkadot&vs_currencies=usd",
    "method": "GET",
    "headers": {}
}
$.ajax(settings).done(function (response) {

    ltc.innerHTML = response.litecoin.usd;
    dot.innerHTML = response.polkadot.usd;
    sol.innerHTML = response.solana.usd;
});