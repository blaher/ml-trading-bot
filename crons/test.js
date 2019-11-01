var env = process.env.NODE_ENV || 'development';
var config = require('../config/config.json')[env];
const models = require('../models')

const express = require('express');
const router = express.Router();

const moment = require('moment');
const sequelize = require('sequelize');
const child_process = require('child_process');

router.get('/', function(req, res) {
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

        rows.forEach(function(row, i) {
          columns.forEach(function(column) {
            rows[i][column] = row[column]/config.factor;
          });
        });

        var wait_time = 0;
        rows.forEach(function(row, i) {
          wait_time += 2000;

          if (i >= 390) {
            return;
          }

          setTimeout(function(){
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
              const datas = dataString.split(/\r?\n/);
              guess = parseInt(datas[0]);
              weight = parseFloat(datas[1]);
              neural = parseFloat(datas[2]);

              if (isNaN(guess)) {
                guess = 0;
              }

              const current_stock_price = ((rows[i+1].open*config.factor)+(rows[i+1].close*config.factor))/2/config.factor;
              const future_stock_price = ((rows[i+2].open*config.factor)+(rows[i+2].close*config.factor))/2/config.factor;

              console.log('-------');
              console.log(i);
              console.log('Minute: '+moment(row.minute)
                .add(1, 'minutes')
                .format('YYYY-MM-DD HH:mm:00'));
              console.log('Guess: '+guess);
              console.log('Weight: '+weight);
              console.log('Stock Price: '+current_stock_price);
              console.log('Future Stock Price: '+future_stock_price);

              if (guess === 1) {
                const qty = Math.floor((value*4*0.9)/current_stock_price);
                const purchase_amount = Math.ceil(qty*(current_stock_price*100))/100;
                const sell_amount = Math.floor(qty*(future_stock_price*100))/100;
                const profit = ((sell_amount*100)-(purchase_amount*100))/100;

                console.log('Buying...');
                console.log('Quantity: '+qty);
                console.log('Purchase Amount: '+purchase_amount);
                console.log('Sell Amount: '+sell_amount);
                console.log('Profit: '+profit);

                value = ((value*100)+(profit*100))/100;
              }

              console.log('Value: $'+value);
            });

            py.stdin.write(JSON.stringify(row));
            py.stdin.end();
          }, wait_time);
        });
      });
    });
  });

  res.sendStatus(200);
});

module.exports = router;
