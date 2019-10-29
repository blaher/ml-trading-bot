var port = process.env.PORT || 8084;

var express = require('express');
var app = express();

var crons_data_neural = require('./crons/data_neural');
var crons_data_tree = require('./crons/data_tree');
var crons_collect = require('./crons/collect');

app.use('/crons/data_neural', crons_data_neural);
app.use('/crons/data_tree', crons_data_tree);
app.use('/crons/collect', crons_collect);

app.listen(port, function() {
  console.log('Set up on port '+port+'!');
});
