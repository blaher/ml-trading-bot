console.log('Setting up...');

var env = process.env.NODE_ENV || 'development';
var config = require('../config/config.json')[env];
const models = require('../models')

const express = require('express');
const router = express.Router();
const moment = require('moment');
const unirest = require("unirest");

function get_minute() {
  return moment().format('YYYY-MM-DD HH:mm:00');
}

function get_current_minute() {
  return moment();
}

function get_min_minute() {
  return moment('09:30:00', 'HH:mm:ss');
}

function get_max_minute() {
  return moment('016:00:00', 'HH:mm:ss');
}

function get_previous_minute(minute) {
  return moment(minute, 'YYYY-MM-DD HH:mm:ss')
    .subtract(1, 'minutes')
    .format('YYYY-MM-DD HH:mm:00');
}

function get_minute_to_update(minute) {
  return moment(minute, 'YYYY-MM-DD HH:mm:ss')
    .subtract(2, 'minutes')
    .format('YYYY-MM-DD HH:mm:00');
}

function get_converted_data(data) {
  return {
    open: data['1. open']*10000,
    high: data['2. high']*10000,
    low: data['3. low']*10000,
    close: data['4. close']*10000,
    volume: data['5. volume']
  };
}

function get_indicator_data(data, symbol) {
  var object = {};

  var i = 1;
  for (var data_property in data) {
    if (Object.prototype.hasOwnProperty.call(data, data_property)) {
      object['value'+i] = data[data_property]*10000;

      i++;
    }
  }

  return object;
}

function get_previous_data(converted_data) {
  return {futurePrice: converted_data['close']};
}

function record_stock(table, object, minute, update_previous=false) {
  const previous_minute = get_previous_minute(minute);
  //TODO: Backfill and update prior day if at begining of day
  const minute_to_update = get_minute_to_update(minute);
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
        console.log('Entry for '+symbol+' already exists');
      });

      if (update_previous) {
        var where = {minute: minute_to_update};
        if (table === 'IndexPrices') {
          where.indexId = id;
        } else {
          where.stockId = id;
        }

        models[table].update(previous_data, {where: where});
      }
    } else {
      console.log(symbol+' not found');
      console.log('Back filling...')

      var where = {minute: previous_minute};
      if (table === 'IndexPrices') {
        where.indexId = id;
      } else {
        where.stockId = id;
      }

      models[table].findOne({where: where}).then(function(previous_price) {
        if (!previous_price) {
          console.log('Previous price for '+symbol+' not found');
          return;
        }

        var price = {
          minute: minute,
          open: previous_price.open,
          high: previous_price.high,
          low: previous_price.low,
          close: previous_price.close,
          volume: previous_price.volume
        };

        if (table === 'IndexPrices') {
          price.indexId = id;
        } else {
          price.stockId = id;
        }

        models[table].create(price).catch(function() {
          console.log('Backfilled entry for '+symbol+' already exists');
        });

        if (update_previous) {
          const previous_data = get_previous_data(price);

          var where = {minute: minute_to_update};
          if (table === 'IndexPrices') {
            where.indexId = id;
          } else {
            where.stockId = id;
          }

          models[table].update(previous_data, {where: where});
        }
      });
    }
  });
}

function record_indicator(table, object, indicator, minute) {
  const previous_minute = get_previous_minute(minute);
  const id = object.id;
  const symbol = object.symbol;
  const indicator_id = indicator.id;
  const indicator_symbol = indicator.symbol;
  console.log('Recording for '+symbol+'\'s '+indicator_symbol+' at '+minute);
  const formatted_minute = minute.slice(0, -3);

  const rest = unirest("GET", config.alpha_host+"/query");

  rest.query({
    "function": indicator_symbol,
    "symbol": symbol,
    "interval": "1min",
    "time_period": 60,
    "series_type": "close",
    "datatype": "json",
    "apikey": config.alpha_key
  });

  rest.end(function (rest_res) {
    var label = 'Technical Analysis: '+indicator_symbol;

    //TODO: Add Indicator Label to Database and remove this
    if (indicator_symbol === 'AD') {
      label = 'Technical Analysis: Chaikin A/D';
    }

    if (rest_res.body && rest_res.body[label] && rest_res.body[label][formatted_minute]) {
      const data = rest_res.body[label][formatted_minute];
      var converted_data = get_indicator_data(data, indicator_symbol);

      if (table === 'IndexIndicatorValues') {
        converted_data.indexId = id;
      } else {
        converted_data.stockId = id;
      }
      converted_data.indicatorId = indicator_id;
      converted_data.minute = minute;

      models[table].create(converted_data).catch(function() {
        console.log('Entry for '+symbol+':'+indicator_symbol+' already exists');
      });
    } else {
      console.log(symbol+':'+indicator_symbol+' not found');
      console.log('Back filling...')

      var where = {indicatorId: indicator_id, minute: previous_minute};
      if (table === 'IndexIndicatorValues') {
        where.indexId = id;
      } else {
        where.stockId = id;
      }

      console.log(where);
      models[table].findOne({where: where}).then(function(previous_values) {
        if (!previous_values) {
          console.log('Previous values for '+symbol+':'+indicator_symbol+' not found');
          return;
        }

        var values = {
          indicatorId: indicator_id,
          minute: minute,
          value1: previous_values.value1,
          value2: previous_values.value2,
          value3: previous_values.value3
        };

        if (table === 'IndexIndicatorValues') {
          values.indexId = id;
        } else {
          values.stockId = id;
        }

        models[table].create(values).catch(function() {
          console.log('Backfilled entry for '+symbol+':'+indicator_symbol+' already exists');
        })
      });
    }
  });
}

function loop_through(minute, models) {
  setTimeout(function() {
    models.Indexes.findAll({
      include: [models.Indicators],
      order: [['id', 'ASC']]
    }).then(function(indexes) {
      indexes.forEach(function(index) {
        record_stock('IndexPrices', index, minute, true);

        index.Indicators.forEach(function(indicator) {
          record_indicator('IndexIndicatorValues', index, indicator, minute);
        });
      });
    });

    models.Stocks.findAll({order: [['id', 'ASC']]}).then(function(stocks) {
      stocks.forEach(function(stock) {
        record_stock('StockPrices', stock, minute);
      });
    });
  }, 60000);
}

function load_init(models) {
  //TODO: Check market is open with Alpaca
  var minute = get_minute();
  const current_minute = get_current_minute();
  const min_minute = get_min_minute();
  const max_minute = get_max_minute();

  if (current_minute.isSameOrBefore(max_minute) && current_minute.isSameOrAfter(min_minute)) {
    console.log('Starting Collect...');

    loop_through(minute, models);

    console.log('Finished Collect');
  } else {
    console.log('Markets not open')
  }
}

router.get('/', function(req, res) {
  load_init(models);

  res.sendStatus(200);
});

router.post('/', function(req, res) {
  load_init(models);

  res.sendStatus(200);
});

router.get('/backtrace', function(req, res) {
  var minute = req.query.start;
  var timeout = 0;

  console.log('Starting Collect Backtrace...');

  var minute_future = moment(minute, 'YYYY-MM-DD HH:mm:ss').add(2, 'hours');
  console.log('At: '+minute.format('YYYY-MM-DD HH:mm:00'))

  if (req.query.end) {
    minute_future = req.query.end;
  }

  while (moment(minute, 'YYYY-MM-DD HH:mm:ss').isBefore(minute_future)) {
    setTimeout(loop_through.bind(null, minute, models), timeout);

    timeout += 60000;

    minute = moment(minute, 'YYYY-MM-DD HH:mm:ss')
      .add(1, 'minutes')
      .format('YYYY-MM-DD HH:mm:00');
  }

  console.log('Finished Collect Backtrace');

  res.sendStatus(200);
});

module.exports = router;