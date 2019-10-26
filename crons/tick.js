console.log('Setting up...');

var env = process.env.NODE_ENV || 'development';
var config = require('../config/config.json')[env];
const models = require('../models')

const express = require('express');
const router = express.Router();
const moment = require('moment');
const unirest = require("unirest");

function get_minute() {
  //return "2019-10-25 15:59:00";
  //return "2019-10-25 16:00:00";
  return moment().format('YYYY-MM-DD, hh:mm:00');
}

function get_previous_minute(minute) {
  return moment(minute, 'YY-MM-DD hh:mm:ss')
    .subtract(1, 'minutes')
    .format('YYYY-MM-DD, hh:mm:00');
}

function get_converted_data(data) {
  return {
    open: data['1. open']*10000,
    high: data['2. high']*10000,
    low: data['3. low']*10000,
    close: data['4. close']*10000,
    volume: data['5. volume'],
  };
}

function get_previous_data(converted_data) {
  return {futurePrice: converted_data['close']};
}

function record_stock(table, object, minute, update_previous=false) {
  const previous_minute = get_previous_minute(minute);
  const id = object.id;
  const symbol = object.symbol;
  console.log('Recording for '+symbol+' at '+minute);

  const rest = unirest("GET", config.alpha_host+"/query");

  rest.query({
    "function": "TIME_SERIES_INTRADAY",
    "symbol": symbol,
    "interval": "1min",
    "datatype": "json",
    "outputsize": "compact",
    "apikey": config.alpha_key
  });

  rest.end(function (rest_res) {
    const label = 'Time Series (1min)';
    if (rest_res.body && rest_res.body[label] && rest_res.body[label][minute]) {
      const data = rest_res.body[label][minute];
      var converted_data = get_converted_data(data);
      const previous_data = get_previous_data(converted_data);

      if (table === 'IndexPrices') {
        converted_data.indexId = id;
      } else {
        converted_data.stockId = id;
      }
      converted_data.minute = minute;

      models[table].create(converted_data).catch(function() {
        console.log('Entry already exists');
      });

      if (update_previous) {
        models[table].update(previous_data, {
          where: {indexId: 1, minute: previous_minute}
        });
      }
    } else {
      console.log(symbol+' not found');
    }
  });
}

router.get('/', function(req, res) {
  const minute = get_minute();

  models.Indexes.findAll().then(function(indexes) {
    indexes.forEach(function(index) {
      record_stock('IndexPrices', index, minute, true);
    });
  });

  models.Stocks.findAll({order: [['id', 'ASC']]}).then(function(stocks) {
    stocks.forEach(function(stock) {
      record_stock('StockPrices', stock, minute);
    });
  });
});

module.exports = router;
