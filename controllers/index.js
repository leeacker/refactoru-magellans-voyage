var locations = require('../models/locations.js');

var indexController = {
	index: function(req, res) {
		res.render('index');
	},
	canaryislands: function(req, res){
		res.render('canaryislands');
	},
	capeverde: function(req, res){
		res.render('capeverde');
	},
	straitofmagellan: function(req, res){
		res.render('straitofmagellan');
	},
	guam: function(req, res){
		res.render('guam');
	},
	phillipines: function(req, res){
		res.render('phillipines');
	},
	next: function (req, res) {
		var thislocation = req.query.location.toLowerCase();
		
		res.send(
			locations.filter(function(loc) {
				return loc.location === thislocation;
			})[0]
			);

	},
	unknown: function(req, res){
		res.send('Magellan did not travel to ' + req.params.stop + ', you idiot! <a href="/"> Go Back!</a>');
	}
};



module.exports = indexController;