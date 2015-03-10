module.exports = function (sequelize) {
    var model = require("../models/employer_model")(sequelize);
    var Employer = model.Employer;
    return {
        create: function (req, res) {
            if (req.body.username && req.body.password != null) {
                var newEmployer = {
                    username: req.body.username,
                    password: req.body.password
                }
            
            Employer.create(newEmployer).success(function () {
                res.send(200);
                res.json(req.dataValues);
            });} else {
                res.send(406);
            }
        },

        get: function (req, res) {
            Employer.findAll().success(function (employers) {
                res.send(employers);                
            });
        },

        update: function (req, res) {
            Employer.find({ where: {username: req.params.id} }).then(function(oldEmployer){   
                oldEmployer.updateAttributes({
                    username: req.body.username,
                    password: req.body.password
                }).then(function(){
                    res.send(200);
                    res.json(req.dataValues);
                });
            });            
        },

        destroy: function (req, res) {
            Employer.find({ where: {username: req.params.id} }).then(function(oldEmployer){   
                oldEmployer.destroy().then(function(){
                    res.send(200);
                    res.json(req.dataValues);
                });
            });     
        }
        
    };
};
