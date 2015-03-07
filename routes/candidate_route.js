module.exports = function (sequelize) {
	var model = require("../models/candidate_model")(sequelize);
	var Candidate = model.Candidate;
	return {
		create: function (req, res) {
			if (req.body.username && req.body.password != null) {
				var newCandidate = {
					username: req.body.username,
					password: req.body.password
				}

			Candidate.create(newCandidate).success(function () {
				res.send(200);
				res.json(req.dataValues);
			});} else {
				res.send(406);
			}
		},

		get: function (req, res) {
			Candidate.findAll().success(function (candidates) {
				res.send(candidates);
			});
		},

		update: function (req, res) {
            Candidate.find({ where: {username: req.params.id} }).then(function(oldCandidate){   
                oldCandidate.updateAttributes({
                    username: req.body.username,
                    password: req.body.password
                }).then(function(){
                    res.send(200);
                    res.json(req.dataValues);
                });
            });            
        }
		
	};
};