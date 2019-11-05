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
