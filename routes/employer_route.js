var path = require("path");

module.exports = function (sequelize) {
    var Employer = sequelize.import(
        path.resolve(__dirname, "../models/employer_model")
    );

    return {
        create: function (req, res) {
            var createEmployer = {
                name: req.body.name,
                phone_number: req.body.phone_number,
                address: req.body.address,
                state: req.body.state,
                employer_description: req.body.employer_description,
                employer_picture: req.body.employer_picture
            }

            Employer.create(createEmployer).success(function () {
                res.send(200);
                res.json(req.dataValues);
            });         
        },

        get: function (req, res) {
            Employer.findAll().success(function (employers) {
                res.send(employers);                
            });
        },

        update: function (req, res) {
            Employer.find({ where: {name: req.params.id} }).then(function(oldEmployer){   
                oldEmployer.updateAttributes({
                    name: req.body.name,
                    phone_number: req.body.phone_number,
                    address: req.body.address,
                    business_state: req.body.business_state,
                    skills: req.body.skills,
                    candidate_picture: req.body.candidate_picture
                }).then(function(){
                    res.send(200);
                    res.json(req.dataValues);
                });
            });            
        },

        destroy: function (req, res) {
            Employer.find({ where: {name: req.params.id} }).then(function(oldEmployer){   
                oldEmployer.destroy().then(function(){
                    res.send(200);
                    res.json(req.dataValues);
                });
            });     
        }
        
    };
};