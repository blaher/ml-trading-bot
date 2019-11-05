console.log('Setting up...');
//TODO: Add logstash or something for log monitoring

var port = process.env.PORT || 8084;

var express = require('express');
var app = express();

//TODO: Autoload these
var crons_collect = require('./crons/collect');
var crons_data_neural_difference = require('./crons/data_neural_difference');
var crons_data_neural_indicator = require('./crons/data_neural_indicator');
var crons_data_tree_direction = require('./crons/data_tree_direction');
var crons_get_test_data = require('./crons/get_test_data');
var crons_test = require('./crons/test');
var crons_trade = require('./crons/trade');
var crons_update = require('./crons/update');

app.use('/crons/collect', crons_collect);
app.use('/crons/data_neural_difference', crons_data_neural_difference);
app.use('/crons/data_neural_indicator', crons_data_neural_indicator);
app.use('/crons/data_tree_direction', crons_data_tree_direction);
app.use('/crons/get_test_data', crons_get_test_data);
app.use('/crons/test', crons_test);
app.use('/crons/trade', crons_trade);
app.use('/crons/update', crons_update);

app.listen(port, function() {
  console.log('Set up on port '+port+'!');
});
