var express = require('express');
var app = express();

app.use(express.static(__dirname));

app.listen(3000, function () {
   console.log('Starting server on port 3000');
});