var indexController = {
	index: function(req, res) {
		res.render('index');
	},
	seville: function(req, res) {
		res.render('seville');
	},
	canary: function(req, res){
		res.render('canary');
	},
	capeverde: function(req, res){
		res.render('capeverde');
	},
	straits: function(req, res){
		res.render('straitsofmagellan');
	},
	guam: function(req, res){
		res.render('guam');
	},
	phil: function(req, res){
		res.render('philipines');
	},
	magellen: function(req, res) {
		res.render('noMagellen')
	}
};

module.exports = indexController;