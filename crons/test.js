var env = process.env.NODE_ENV || 'development';
var config = require('../config/config.json')[env];
const models = require('../models')

const express = require('express');
const router = express.Router();

const moment = require('moment');
const sequelize = require('sequelize');
const child_process = require('child_process');

const max_threads = 2;

router.get('/', function(req, res) {
  //TODO: Add query parameter to back test against end date

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

      var sql = 'SELECT s.* FROM (SELECT '+select+' FROM IndexPrices AS ip WHERE ip.indexId = ? ORDER BY ip.minute DESC LIMIT 393) AS s ORDER BY s.minute ASC;';

      models.sequelize.query(sql, {
        replacements: [index.id],
        type: sequelize.QueryTypes.SELECT
      }).then(function(rows) {
        const starting_value = 30000;
        var value = starting_value;
        var index_value = value;
        var perfect_value = value;
        var missed_value = value;
        var bad_value = value;

        const trades = 390;
        var right_trades = 0;

        console.time('guesses');
        var promises = [];
        rows.forEach(function(row, i) {
          columns.forEach(function(column) {
            rows[i][column] = row[column]/config.factor;
          });

          if (i < trades) {
            console.log('Setting up promise '+ i);
            var promise = new Promise(function(resolve, reject) {
              var ending_promise = i;
              if (i-max_threads > 0) {
                ending_promise = i-max_threads;
              }

              Promise.all(promises.slice(0, ending_promise)).then(function() {
                var spawn = child_process.spawn;

                py = spawn('python3', ['scripts/guess.py']);
                var dataString = '';

                py.stdout.on('data', function(data) {
                  dataString += data.toString();
                });

                py.stdout.on('error', function(error) {
                  console.log(error);
                });

                py.stderr.on('data', function(data) {
                  //console.error(data.toString());
                });

                py.stdout.on('end', function() {
                  console.log('Output: '+dataString);
                  const datas = dataString.split(/\r?\n/);
                  guess = parseInt(datas[0]);
                  weight = parseFloat(datas[1]);
                  neural = parseFloat(datas[2]);

                  if (isNaN(guess)) {
                    guess = 0;
                  }

                  console.log('Guess '+i+' completed');
                  console.timeLog('guesses');
                  resolve([i, guess, weight, neural]);
                });

                py.stdin.write(JSON.stringify(row));
                py.stdin.end();
              });
            });

            promises.push(promise);
          }
        });

        Promise.all(promises).then(function(guesses) {
          console.timeEnd('guesses');

          var ordered_guesses = {};
          guesses.forEach(function(guess) {
            ordered_guesses[guess[0]] = guess;
          });

          console.log(ordered_guesses);

          rows.forEach(function(row, i) {
            if (i >= trades) {
              if (i === rows.length-1) {
                const trade_accuracy = (right_trades/trades)*100;
                const total_profit = ((value*100)-(starting_value*100))/100;
                const total_perfect_profit = ((perfect_value*100)-(starting_value*100))/100;
                const profit_accuracy = ((total_profit*100)/(total_perfect_profit*100))*100;

                console.log('-------');
                console.log('Finished');
                console.log('');
                console.log('Trade Accuracy: '+trade_accuracy+'%');
                console.log('Profit Accuracy: '+profit_accuracy+'%')
              }

              return;
            }

            guess = parseInt(ordered_guesses[i][1]);
            weight = parseFloat(ordered_guesses[i][2]);
            neural = parseFloat(ordered_guesses[i][3]);

            const current_stock_price = ((rows[i+1].open*config.factor)+(rows[i+1].close*config.factor))/2/config.factor;
            const future_stock_price = ((rows[i+2].open*config.factor)+(rows[i+2].close*config.factor))/2/config.factor;

            console.log('-------');
            console.log(i);
            console.log('Minute: '+moment(row.minute)
              .add(1, 'minutes')
              .format('YYYY-MM-DD HH:mm:00'));
            console.log('Guess: '+guess);
            console.log('Weight: '+weight);
            console.log('Neural Prediction: '+neural);
            console.log('Stock Price: '+current_stock_price);
            console.log('Future Stock Price: '+future_stock_price);
            console.log('');

            const index_qty = Math.floor((index_value*4)/current_stock_price);
            const index_purchase_amount = Math.ceil(index_qty*(current_stock_price*100))/100;
            const index_sell_amount = Math.floor(index_qty*(future_stock_price*100))/100;
            const index_profit = ((index_sell_amount*100)-(index_purchase_amount*100))/100;
            index_value = ((index_value*100)+(index_profit*100))/100;

            const qty = Math.floor((value*4*0.9)/current_stock_price);
            const purchase_amount = Math.ceil(qty*(current_stock_price*100))/100;
            const sell_amount = Math.floor(qty*(future_stock_price*100))/100;
            const profit = ((sell_amount*100)-(purchase_amount*100))/100;

            if (guess === 1) {
              console.log('Buying...');
              console.log('Quantity: '+qty);
              console.log('Purchase Amount: '+purchase_amount);
              console.log('Sell Amount: '+sell_amount);
              console.log('Profit: '+profit);

              if (profit >= 0) {
                perfect_value = ((perfect_value*100)+(profit*100))/100;
                right_trades += 1;
              } else {
                bad_value = ((bad_value*100)+(profit*100))/100;
              }

              value = ((value*100)+(profit*100))/100;
            } else {
              console.log('Selling...');

              if (profit >= 0) {
                perfect_value = ((perfect_value*100)+(profit*100))/100;
                missed_value = ((missed_value*100)+(profit*100))/100;
              } else {
                right_trades += 1;
              }
            }

            console.log('');
            console.log('Index Value: $'+index_value);
            console.log('Missed Value: $'+missed_value);
            console.log('Bad Value: $'+bad_value);
            console.log('Perfect Value: $'+perfect_value);
            console.log('Value: $'+value);
          });
        });
      });
    });
  });

  res.sendStatus(200);
});

module.exports = router;
