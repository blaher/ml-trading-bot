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

function load_init(models) {
  console.log('-------');
  console.log('Current Minute: '+get_minute());
  //TODO: Sell all stocks at end of day
  alpaca.getClock().then(function(clock) {
    if (clock.is_open) {
      models.Indexes.findAll({
        include: [models.Indicators, models.Stocks]
      }).then(function(indexes) {
        indexes.forEach(function(index) {
          console.log('Data: '+index.symbol);

          var select = 'ip.minute';
          select += ', ip.open, ip.high, ip.low, ip.close';
          var columns = ['minute', 'open', 'high', 'low', 'close'];

          index.Indicators.forEach(function(indicator) {
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
            console.log('Data Minute: '+moment(rows[0].minute).format('YYYY-MM-DD HH:mm:00'));

            try {
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
                guess = parseInt(dataString);
                console.log('Guess: '+guess);

                alpaca.getAccount().then(function(account) {
                  amount = account.buying_power*0.9;
                  console.log('Amount: '+amount);

                  alpaca.getBars('minute', index.symbol, {
                    limit: 1
                  }).then(function(latest_bars) {
                    current_stock_price = latest_bars[index.symbol][0].c;
                    //console.log('Stock Price: '+current_stock_price);

                    if (guess) {
                      var qty = Math.floor(amount/current_stock_price)-1;

                      if (qty > 0) {
                        console.log('Buying: '+qty);

                        alpaca.createOrder({
                          symbol: index.symbol,
                          qty: qty,
                          side: 'buy',
                          type: 'market',
                          time_in_force: 'day'
                        });
                      } else {
                        console.log('Not enough moneys')
                      }
                    } else {
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
                    }
                  });
                });
              });

              py.stdin.write(JSON.stringify(rows[0]));
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
