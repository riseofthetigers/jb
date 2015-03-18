var path = require("path");

module.exports = function (sequelize) {
    var User = sequelize.import(
        path.resolve(__dirname, "../models/user_model")
    );

    return {
        create: function (req, res) {
            if (req.body.username && req.body.password != null) {
                var newUser = {
                    username: req.body.username,
                    password: req.body.password
                }
            
            User.create(newUser).success(function () {
                res.send(200);
                res.json(req.dataValues);
            });} else {
                res.send(406);
            }
        },

        get: function (req, res) {
            User.findAll().success(function (users) {
                res.send(users);                
            });
        },

        update: function (req, res) {
            User.find({ where: {username: req.params.id} }).then(function(oldUser){   
                oldUser.updateAttributes({
                    username: req.body.username,
                    password: req.body.password
                }).then(function(){
                    res.send(200);
                    res.json(req.dataValues);
                });
            });            
        },

        destroy: function (req, res) {
            User.find({ where: {username: req.params.id} }).then(function(oldUser){   
                oldUser.destroy().then(function(){
                    res.send(200);
                    res.json(req.dataValues);
                });
            });     
        }
        
    };
};

