var express = require('express');
var indexController = require('./controllers/index.js');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));

app.get('/', indexController.index);

app.get('/seville', indexController.index);
app.get('/canaryislands', indexController.canaryislands);
app.get('/capeverde', indexController.capeverde);
app.get('/straitofmagellan', indexController.straitofmagellan);
app.get('/guam', indexController.guam);
app.get('/phillipines', indexController.phillipines);
app.get('/next', indexController.next);
app.get('/:stop', indexController.unknown);





var server = app.listen(8339, function() {
	console.log('Express server listening on port ' + server.address().port);
});
