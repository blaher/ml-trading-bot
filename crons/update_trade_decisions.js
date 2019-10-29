var env = process.env.NODE_ENV || 'development';
var config = require('../config/config.json')[env];
const models = require('../models')

function load_init(models) {
  const sql = 'UPDATE IndexPrices SET trade = \'sell\' WHERE futurePrice IS NOT NULL AND trade IS NULL AND close > futurePrice;';
  models.sequelize.query(sql, {});

  const sql = 'UPDATE IndexPrices SET trade = \'buy\' WHERE futurePrice IS NOT NULL AND trade IS NULL AND close <= futurePrice;';
  models.sequelize.query(sql, {});
}

router.get('/', function(req, res) {
  load_init(models);

  res.sendStatus(200);
});

router.post('/', function(req, res) {
  load_init(models);

  res.sendStatus(200);
});
