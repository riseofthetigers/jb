/**
 * topics controller
 */

var _ = require('lodash')

var models = require('../models');
var Topic = models.Topic;

// Expose the topics controller.
module.exports = {

  // POST /api/topics
  create: function(req, res) {
    var data = _.pick(req.body, 'user_id', 'title');
    Topic
      .build(data)
      .save()
      .complete(function (err, topic) {
        if (!err && topic) {
          res.json(topic);
          res.status(200);
          return;
        }
        // res.json(err)
        res.json({
          error: 'Invalid.'
        })
        res.status(406);
      });
  },

  // GET /api/topics/:id
  get: function(req, res) {
    var id = req.params.id;
    Topic
      .find({
        where: {
          id: id
        },
        // include: [models.Reply]
      }).then(function (topic) {
        res.json(topic);
      }).complete(function (err, topic) {
        if (!err && topic) {
          res.json(topic);
          res.status(200);
          return;
        }
        // res.json(err)
        res.json({
          error: 'Invalid.'
        })
        res.status(406);
      });
  },

  update: function(req, res) {
  },

  destroy: function(req, res) {
  }

};
