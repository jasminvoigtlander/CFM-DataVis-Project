console.log('server start');
var express = require('express');
var app = express();
var server = app.listen(3000 , listening);

function listening() {
  console.log('listening');
}

app.use(express.static('CFM-DataVis-Project'));
