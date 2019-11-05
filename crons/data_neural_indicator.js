var env = process.env.NODE_ENV || 'development';
var config = require('../config/config.json')[env];
const models = require('../models')

const express = require('express');
const router = express.Router();

const sequelize = require('sequelize');
const moment = require('moment');
const fs = require('fs');

router.get('/', function(req, res) {
  console.log('Starting Neural Data...');

  models.Indexes.findAll({include: [models.Stocks]}).then(function(indexes) {
    indexes.forEach(function(index) {
      console.log('Data: '+index.symbol);

      var select = 'ip.minute, ip.futureClose';
      var header = 'minute, futureClose';
      var columns = ['minute', 'futureClose'];

      index.Stocks.forEach(function(stock) {
        if (stock.symbol !== 'GL') {
          select += ', (SELECT sp.close FROM StockPrices AS sp WHERE sp.stockId = '+stock.id+' AND sp.minute = ip.minute) AS stock_'+stock.symbol+'_close';

          header += ', stock_'+stock.symbol+'_close'

          columns.push('stock_'+stock.symbol+'_close');
        }
      });

      var sql = 'SELECT '+select+' FROM IndexPrices AS ip WHERE ip.indexId = ? AND ip.futureClose IS NOT NULL ORDER BY ip.minute;';

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
              content += row[column]/config.factor;
            }
          });
        });

        fs.writeFile('data/'+index.symbol+'_neural_indicator.csv', content, function(err) {
          if (err) {
            console.log(err);
          }
        });
      }).catch(function(err) {
        console.log(err);
      });
    });
  });

  console.log('Finished Neural Data');

  res.sendStatus(200);
});

module.exports = router;
