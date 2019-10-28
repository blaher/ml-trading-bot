var env = process.env.NODE_ENV || 'development';
var config = require('../config/config.json')[env];
const models = require('../models')

const express = require('express');
const router = express.Router();

const sequelize = require('sequelize');
const moment = require('moment');
const fs = require('fs');

router.get('/', function(req, res) {
  console.log('Starting Data...');

  models.Indexes.findAll({include: [models.Stocks, models.Indicators]}).then(function(indexes) {
    indexes.forEach(function(index) {
      console.log('Data: '+index.symbol);

      //var select = 'ip.minute, ip.futurePrice, ip.open, ip.high, ip.low, ip.close';
      //var header = 'minute, futurePrice, open, high, low, close';
      //var columns = ['minute', 'futurePrice', 'open', 'low', 'close'];
      var select = 'ip.minute, ip.futurePrice';
      var header = 'minute, futurePrice';
      var columns = ['minute', 'futurePrice'];

      index.Stocks.forEach(function(stock) {
        if (stock.symbol !== 'GL') {
          //select += ', (SELECT sp.open FROM StockPrices AS sp WHERE sp.stockId = '+stock.id+' AND sp.minute = ip.minute) AS stock_'+stock.symbol+'_open';
          //select += ', (SELECT sp.high FROM StockPrices AS sp WHERE sp.stockId = '+stock.id+' AND sp.minute = ip.minute) AS stock_'+stock.symbol+'_high';
          //select += ', (SELECT sp.low FROM StockPrices AS sp WHERE sp.stockId = '+stock.id+' AND sp.minute = ip.minute) AS stock_'+stock.symbol+'_low';
          select += ', (SELECT sp.close FROM StockPrices AS sp WHERE sp.stockId = '+stock.id+' AND sp.minute = ip.minute) AS stock_'+stock.symbol+'_close';
          //select += ', (SELECT sp.volume FROM StockPrices AS sp WHERE sp.stockId = '+stock.id+' AND sp.minute = ip.minute) AS stock_'+stock.symbol+'_volume';

          //header += ', stock_'+stock.symbol+'_open, stock_'+stock.symbol+'_high, stock_'+stock.symbol+'_low, stock_'+stock.symbol+'_close, stock_'+stock.symbol+'_volume';
          header += ', stock_'+stock.symbol+'_close'

          //columns.push('stock_'+stock.symbol+'_open');
          //columns.push('stock_'+stock.symbol+'_high');
          //columns.push('stock_'+stock.symbol+'_low');
          columns.push('stock_'+stock.symbol+'_close');
          //columns.push('stock_'+stock.symbol+'_volume');
        }
      });
      /*index.Indicators.forEach(function(indicator) {
        var i = 1;
        while (i <= indicator.values) {
          select += ', (SELECT iiv.value'+i+' FROM IndexIndicatorValues AS iiv WHERE iiv.indicatorId = '+indicator.id+' AND iiv.indexId = ip.indexId AND iiv.minute = ip.minute) AS indicator_'+indicator.symbol+'_value'+i;

          header += ', indicator_'+indicator.symbol+'_value'+i;

          columns.push('indicator_'+indicator.symbol+'_value'+i);

          i++;
        }
      });*/

      var sql = 'SELECT '+select+' FROM IndexPrices AS ip WHERE ip.indexId = ? AND ip.futurePrice IS NOT NULL ORDER BY ip.minute;';

      models.sequelize.query(sql, {
        replacements: [index.id],
        type: sequelize.QueryTypes.SELECT
      }).then(function(rows) {
        var content = header;

        rows.forEach(function(row) {
          content += "\n";

          var first = true;
          columns.forEach(function(column) {
            if (first) {
              first = false;
            } else {
              content += ', ';
            }

            if (column === 'minute') {
              content += moment(row[column]).format('YYYY-MM-DD HH:mm:00');
            } else {
              //TODO: Put factor in to config
              content += row[column]/10000;
            }
          });
        });

        fs.writeFile('data/'+index.symbol+'.csv', content, function(err) {
          if (err) {
            console.log(err);
          }
        });
      }).catch(function(err) {
        console.log(err);
      });
    });
  });

  console.log('Finished Data');

  res.sendStatus(200);
});

module.exports = router;
