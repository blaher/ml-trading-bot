console.log('Setting up...');

const config = require('../config.json');
//const Alpaca = require('@alpacahq/alpaca-trade-api');

var express = require('express');
var router = express.Router();
var unirest = require("unirest");

//const alpaca = new Alpaca(config.alpaca);

router.get('/', function(req, res) {
  var rest = unirest("GET", "https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/get-detail");

  rest.query({
  	"region": "US",
  	"lang": "en",
  	"symbol": req.query.stock
  });

  rest.headers({
  	"x-rapidapi-host": config.rapid_host,
  	"x-rapidapi-key": config.rapid_key
  });


  rest.end(function (rest_res) {
  	console.log(rest_res.body);
  });
});

module.exports = router;
