var port = process.env.PORT || 8084;

var express = require('express');
var app = express();

var crons_data = require('./crons/data');
var crons_collect = require('./crons/collect');

app.use('/crons/data', crons_data);
app.use('/crons/collect', crons_collect);

app.listen(port, function() {
  console.log('Set up on port '+port+'!');
});
