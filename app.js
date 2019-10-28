var port = process.env.PORT || 8084;

var express = require('express');
var app = express();

var crons_data = require('./crons/data');
var crons_tick = require('./crons/tick');

app.use('/crons/data', crons_data);
app.use('/crons/tick', crons_tick);

app.listen(port, function() {
  console.log('Set up!');
});
