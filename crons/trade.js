var env = process.env.NODE_ENV || 'development';
var config = require('../config/config.json')[env];
const models = require('../models')

const express = require('express');
const router = express.Router();

const moment = require('moment');
const Alpaca = require('@alpacahq/alpaca-trade-api');
const alpaca = new Alpaca(config.alpaca);
const sequelize = require('sequelize');
const child_process = require('child_process');

function get_minute() {
  return moment().format('YYYY-MM-DD HH:mm:00');
}

function get_minute_moment(minute) {
  return moment(minute, 'YYYY-MM-DD HH:mm:ss');
}

function get_min_minute() {
  return moment('09:30:00', 'HH:mm:ss');
}

function get_max_minute() {
  return moment('16:00:00', 'HH:mm:ss');
}

function get_lower_minute() {
  return get_min_minute();
}

function get_upper_minute() {
  return get_max_minute().subtract(1, 'minutes');
}

function wait_for_order(order_id, qty, callback) {
  console.log('Waiting...');
  alpaca.getOrder(order_id).then(function(order) {
    if (order.filled_at && qty == order.filled_qty) {
      callback(order);
    } else {
      wait_for_order(order_id, qty, callback);
    }
  });
}

function load_init(models) {
  console.log('-------');
  const current_minute = get_minute();
  console.timeEnd('alpaca-1');
  console.time('alpaca-1');
  console.log('Current Minute: '+current_minute);

  alpaca.getClock().then(function(clock) {
    console.timeLog('alpaca-1');
    if (clock.is_open) {
      models.Indexes.findAll({
        include: [models.Indicators, models.Stocks]
      }).then(function(indexes) {
        indexes.forEach(function(index) {
          console.log('Data: '+index.symbol);

          var select = 'ip.minute';
          select += ', ip.open, ip.high, ip.low, ip.close';
          var columns = ['open', 'high', 'low', 'close'];

          index.Indicators.forEach(function(indicator) {
            if (!indicator.values) {
              indicator.values = 1;
            }

            var i = 1;
            while (i <= indicator.values) {
              select += ', (SELECT iiv.value'+i+' FROM IndexIndicatorValues AS iiv WHERE iiv.indicatorId = '+indicator.id+' AND iiv.indexId = ip.indexId AND iiv.minute = ip.minute) AS indicator_'+indicator.symbol+'_value'+i;

              columns.push('indicator_'+indicator.symbol+'_value'+i);

              i++;
            }
          });

          index.Stocks.forEach(function(stock) {
            if (stock.symbol !== 'GL') {
              select += ', (SELECT sp.close FROM StockPrices AS sp WHERE sp.stockId = '+stock.id+' AND sp.minute = ip.minute) AS stock_'+stock.symbol+'_close';

              columns.push('stock_'+stock.symbol+'_close');
            }
          });

          var sql = 'SELECT '+select+' FROM IndexPrices AS ip WHERE ip.indexId = ? ORDER BY ip.minute DESC LIMIT 1;';

          models.sequelize.query(sql, {
            replacements: [index.id],
            type: sequelize.QueryTypes.SELECT
          }).then(function(rows) {
            var row = rows[0];
            console.log('Data Minute: '+moment(row.minute).format('YYYY-MM-DD HH:mm:00'));

            columns.forEach(function(column) {
              row[column] = row[column]/config.factor;
            });

            try {
              console.timeEnd('prediction');
              console.time('prediction');
              var spawn = child_process.spawn;

              py = spawn('python3', ['scripts/guess.py']);
              dataString = '';

              py.stdout.on('data', function(data) {
                dataString += data.toString();
              });

              py.stdout.on('error', function(error) {
                console.log(error);
              });

              py.stdout.on('end', function() {
                console.timeLog('prediction');

                const datas = dataString.split(/\r?\n/);
                guess = parseInt(datas[0]);
                weight = parseFloat(datas[1]);
                neural = parseFloat(datas[2]);

                console.log('Guess: '+guess);
                console.log('Weight: '+weight);
                console.log('Neural Prediction: '+neural);

                if (isNaN(guess)) {
                  guess = 0;
                }

                console.timeEnd('alpaca-2')
                console.time('alpaca-2');
                alpaca.getAccount().then(function(account) {
                  amount = account.buying_power*0.9;
                  console.log('Amount: '+amount);

                  alpaca.getBars('minute', index.symbol, {
                    limit: 1
                  }).then(function(latest_bars) {
                    current_stock_price = latest_bars[index.symbol][0].c;
                    //console.log('Stock Price: '+current_stock_price);

                    console.timeLog('alpaca-2');
                    if (get_upper_minute().isSameOrBefore(get_minute_moment(current_minute))) {
                      alpaca.cancelAllOrders().then(function() {
                        alpaca.getPosition(index.symbol).then(function(position) {
                          console.timeLog('alpaca-2');
                          console.log('Selling all: '+position.qty);

                          alpaca.createOrder({
                            symbol: index.symbol,
                            qty: position.qty,
                            side: 'sell',
                            type: 'market',
                            time_in_force: 'day'
                          });
                        }, function() {
                          console.log('No stocks to sell');
                        });
                      });
                    } else if (guess) {
                      var qty = Math.floor(amount/current_stock_price);

                      if (qty > 0) {
                        console.log('Buying: '+qty);

                        alpaca.createOrder({
                          symbol: index.symbol,
                          qty: qty,
                          side: 'buy',
                          type: 'market',
                          time_in_force: 'day'
                        }).then(function(order) {
                          //TODO: Get better increase
                          const increase = ((0.02*100)*(weight*100))/10000;
                          console.log('Increase: '+increase);

                          wait_for_order(order.id, qty, function(filled_order) {
                            const limit_price = ((parseFloat(filled_order.filled_avg_price)*100)+(increase*100))/100;
                            console.log('Filled Price: '+filled_order.filled_avg_price);
                            console.log('Limit Price: '+limit_price);

                            alpaca.createOrder({
                              symbol: index.symbol,
                              qty: qty,
                              side: 'sell',
                              type: 'limit',
                              time_in_force: 'day',
                              limit_price: limit_price
                            });
                          });
                        });
                      } else {
                        console.log('Not enough moneys')
                      }
                    } else {
                      alpaca.cancelAllOrders().then(function() {
                        alpaca.getPosition(index.symbol).then(function(position) {
                          console.log('Selling: '+position.qty);

                          alpaca.createOrder({
                            symbol: index.symbol,
                            qty: position.qty,
                            side: 'sell',
                            type: 'market',
                            time_in_force: 'day'
                          });
                        }, function() {
                          console.log('No stocks to sell');
                        });
                      });
                    }
                  });
                });
              });

              py.stdin.write(JSON.stringify(row));
              py.stdin.end();
            } catch(error) {
              console.log(error);
            }
          }).catch(function(err) {
            console.log(err);
          });
        });
      });
    } else {
      console.log('Markets are closed');
    }
  });
}

router.get('/', function(req, res) {
  setTimeout(load_init.bind(null, models), 5000);

  res.sendStatus(200);
});

router.post('/', function(req, res) {
  setTimeout(load_init.bind(null, models), 5000);

  res.sendStatus(200);
});

module.exports = router;
