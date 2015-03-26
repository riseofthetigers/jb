/**
 * replies controller
 */

var _ = require('lodash')

var models = require('../models');
var Reply = models.Reply;

// Expose the replices controller.
module.exports = {

  // POST /api/replies
  create: function(req, res) {
    var data = _.pick(req.body, 'user_id', 'topic_id', 'raw')
    // Maybe should process the raw data.
    data.cooked = data.raw;
    Reply
      .build(data)
      .save()
      .complete(function (err, reply) {
        if (!err && reply) {
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

  // GET /api/repiles?topic_id=&last_reply_id=
  get: function(req, res) {
    var data = _.pick(req.query, 'topic_id', 'last_reply_id');
    Reply
      .findAll({
        where: {
          topic_id: data.id,
          user_deleted: false,
          id: {
            gt: data.last_reply_id
          }
        },
        order: [ ['created_at', 'DESC'] ]
      })
      .complete(function (err, replies) {
        if (!err && replies) {
          res.json(replies);
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
