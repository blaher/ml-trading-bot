var env = process.env.NODE_ENV || 'development';
var config = require('../config/config.json')[env];
const models = require('../models')

const express = require('express');
const router = express.Router();

const sequelize = require('sequelize');
const moment = require('moment');
const fs = require('fs');

router.get('/', function(req, res) {
  console.log('Starting Tree Data...');

  models.Indexes.findAll({include: [models.Indicators]}).then(function(indexes) {
    indexes.forEach(function(index) {
      console.log('Data: '+index.symbol);

      var select = 'ip.minute, ip.futurePrice, ip.open, ip.high, ip.low, ip.close';
      var header = 'minute, futurePrice, open, high, low, close';
      var columns = ['minute', 'futurePrice', 'open', 'high', 'low', 'close'];

      index.Indicators.forEach(function(indicator) {
        var i = 1;
        while (i <= indicator.values) {
          select += ', (SELECT iiv.value'+i+' FROM IndexIndicatorValues AS iiv WHERE iiv.indicatorId = '+indicator.id+' AND iiv.indexId = ip.indexId AND iiv.minute = ip.minute) AS indicator_'+indicator.symbol+'_value'+i;

          header += ', indicator_'+indicator.symbol+'_value'+i;

          columns.push('indicator_'+indicator.symbol+'_value'+i);

          i++;
        }
      });

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
              content += row[column]/config.factor;
            }
          });
        });

        fs.writeFile('data/'+index.symbol+'_tree.csv', content, function(err) {
          if (err) {
            console.log(err);
          }
        });
      }).catch(function(err) {
        console.log(err);
      });
    });
  });

  console.log('Finished Tree Data');

  res.sendStatus(200);
});

module.exports = router;
