var express = require('express');
var app = express();

var crons_tick = require('./crons/tick');

app.use('/crons/tick', crons_tick);

app.listen(8084, function() {
  console.log('Set up!');
});
