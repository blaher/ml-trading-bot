var env = process.env.NODE_ENV || 'development';
var config = require('../config/config.json')[env];
const models = require('../models')

const express = require('express');
const router = express.Router();

function load_init(models) {
  const sql_sell = 'UPDATE IndexPrices SET trade = \'sell\' WHERE futureClose IS NOT NULL AND trade IS NULL AND close > futureClose;';
  models.sequelize.query(sql_sell, {});

  const sql_buy = 'UPDATE IndexPrices SET trade = \'buy\' WHERE futureClose IS NOT NULL AND trade IS NULL AND close <= futureClose;';
  models.sequelize.query(sql_buy, {});

  const sql_future_close = 'UPDATE IndexPrices AS o JOIN IndexPrices AS f ON f.id = o.id+2 SET o.futureClose = f.close WHERE o.futureClose IS NULL;';
  models.sequelize.query(sql_future_close, {});

  const sql_future_high = 'UPDATE IndexPrices AS o JOIN IndexPrices AS f ON f.id = o.id+2 SET o.futureHigh = f.high WHERE o.futureHigh IS NULL;';
  models.sequelize.query(sql_future_high, {});

  const sql_future_high_close_delta = 'UPDATE IndexPrices SET futureHighCloseDelta = cast(futureHigh AS SIGNED) - cast(close AS SIGNED) WHERE futureHighCloseDelta IS NULL;';
  models.sequelize.query(sql_future_high_close_delta, {});
}

router.get('/', function(req, res) {
  load_init(models);

  res.sendStatus(200);
});

router.post('/', function(req, res) {
  load_init(models);

  res.sendStatus(200);
});

module.exports = router;
