var express = require('express');
var bodyParser = require('body-parser');
var indexController = require('./controllers/index.js');
var trip = ['seville','canary','capeverde','straitsofmagellan','guam','philipines']
var counter = 0

var next = function(){
    var toNextCity = counter;
    return trip[toNextCity];
}

var app = express();

app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', indexController.index)
app.get('/seville', indexController.seville)
app.get('/CanaryIslands', indexController.canary)
app.get('/CapeVerde', indexController.capeverde)
app.get('/StraitsOfMagellan', indexController.straits)
app.get('/guam', indexController.guam)
app.get('/Phillipines', indexController.phil)
app.get('/noMagellen', indexController.magellen)


app.post('/submit', function(req, res) {
	counter ++
	res.render(next())
	if(counter > 5) {
		res.redirect('/')
	}

})

//*************** Bonus ******************//

app.get('/:unknownDest', function(req, res) {
	var userChoice = req.params.unknownDest
	if(userChoice !== 'seville' || 'canary' || 'capeverde' || 'straitsofmagellan' || 'guam' || 'philipines' || 'noMagellen') {
		res.redirect('/noMagellen')
	}

})


var server = app.listen(3030, function() {
	console.log('Express server listening on port ' + server.address().port);
});

