console.log('Setting up...');
//TODO: Add logstash or something for log monitoring

var port = process.env.PORT || 8084;

var express = require('express');
var app = express();

//TODO: Autoload these
var crons_collect = require('./crons/collect');
var crons_data_neural = require('./crons/data_neural');
var crons_data_tree = require('./crons/data_tree');
var crons_get_test_data = require('./crons/get_test_data');
var crons_test = require('./crons/test');
var crons_trade = require('./crons/trade');
var crons_update = require('./crons/update');

app.use('/crons/collect', crons_collect);
app.use('/crons/data_neural', crons_data_neural);
app.use('/crons/data_tree', crons_data_tree);
app.use('/crons/get_test_data', crons_get_test_data);
app.use('/crons/test', crons_test);
app.use('/crons/trade', crons_trade);
app.use('/crons/update', crons_update);

app.listen(port, function() {
  console.log('Set up on port '+port+'!');
});
