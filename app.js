var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var path = process.cwd();

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path + '/public/html/index.html');
  
});


module.exports = app;

app.set('port', process.env.PORT || 3006);

var server = app.listen(app.get('port'), function() {
    console.log('Express server listening on port ' + server.address().port);
});






















