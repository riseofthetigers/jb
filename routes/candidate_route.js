var path = require("path");

module.exports = function (sequelize) {
    var Candidate = sequelize.import(
        path.resolve(__dirname, "../models/candidate_model")
    );

	return {
		create: function (req, res) {
            console.log(req.body);
			var createCandidate = {
                name: req.body.name,
                phone_number: req.body.phone_number,
                address: req.body.address,
                state: req.body.state,
                skills: req.body.skills,
                candidate_picture: req.body.candidate_picture
            }

            Candidate.create(createCandidate).success(function (err) {
                res.send(200);
                res.json(req.dataValues);
            });         
		},

		get: function (req, res) {
			Candidate.findAll().success(function (candidates) {
				res.send(candidates);
			});
		},

		update: function (req, res) {
            Candidate.find({ where: {name: req.params.id} }).then(function(oldCandidate){   
                oldCandidate.updateAttributes({
                name: req.body.name,
                phone_number: req.body.phone_number,
                address: req.body.address,
                state: req.body.state,
                skills: req.body.skills,
                candidate_picture: req.body.candidate_picture
                }).then(function(){
                    res.send(200);
                    res.json(req.dataValues);
                });
            });            
        },

        destroy: function (req, res) {
        	Candidate.find({ where: {name: req.params.id} }).then(function(oldCandidate){   
                oldCandidate.destroy().then(function(){
                    res.send(200);
                    res.json(req.dataValues);
                });
            });     
        }
		
	};
};