var fetch = require('node-fetch');

module.exports.myProfit = function (bt, st, am) {  
var buyPrice; 
var sellPrice; 
  
var api = 'https://min-api.cryptocompare.com/data/pricehistorical?fsym=ETH&tsyms=USD&ts='
buyTime= bt;
sellTime = st;
buyUrl = api + bt;
sellUrl = api + st;
amounts = am;


function getProfit(callback){
	fetch(buyUrl).then(res =>
	    res.json()
	  ).then(result => {
	  	buyPrice = result.ETH.USD;
	  	console.log("The buyPrice is " + buyPrice  + " USD");
	  	fetch(sellUrl).then(res =>
	    		res.json()
	    	).then(result => {
	    		sellPrice = result.ETH.USD;
	    		console.log("The sellPrice is " + sellPrice + " USD");
	    		difference = sellPrice - buyPrice;
	    		console.log("The difference is " + difference + " USD");
	    		profit = difference * am;
	    		callback(profit);
	    	}
	    	)
	  });
}

function printProfit(data){
	console.log('The Profit is ' + data+ " USD");
}
getProfit(printProfit);

};


