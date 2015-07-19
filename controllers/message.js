/**
 * messages controller
 */

var _ = require('lodash')

var models = require('../models');
var Message = models.Message;

// Expose the message controller.
module.exports = {

  // POST /api/message
  create: function(req, res) {
    var data = _.pick(req.body, 'user_id', 'from', 'to', 'subject', 'body');
    Message
      .build(data)
      .save()
      .complete(function (err, message) {
        if (!err && message) {
          res.json(message);
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

  // GET /api/messages/:id
  get: function(req, res) {
    var id = req.params.id;
    Message
      .find({
        where: {
          id: id
        },
        // include: [models.Reply]
      }).then(function (message) {
        res.json(message);
      }).complete(function (err, message) {
        if (!err && message) {
          res.json(message);
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

  reply: function(req, res) {
    
  },

  destroy: function(req, res) {
  }

};
