var env = process.env.NODE_ENV || 'development';
var config = require('../config/config.json')[env];
const models = require('../models')

const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
  res.sendStatus(200);
});

module.exports = router;
