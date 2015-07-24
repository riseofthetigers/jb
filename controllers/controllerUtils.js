var Promise = require('bluebird');

// Error for user mistakes, to distinguish from syntax errors, type errors and such
function RestError(message, status) {
  this.constructor.prototype.__proto__ = Error.prototype
  this.status = status || 400
  this.name = "RestError"
  this.message = message
}

var restError = function(message, status) {
  throw new RestError(message, status)
}

// Promise helper to send the result
var send = function(res) {
  return function(obj) {
    res.send(obj)
  }
}

// Promise helper to send the error
var cry = function(res) {
  return function(err) {
    if(err instanceof RestError) {
      res.status(err.status).send({
        message: err.message
      })
    } else {
      console.log("UNEXPECTED ERROR:")
      console.log(err.stack)
      res.status(500).send({
        message: "Server error, sorry D:"
      })
    }
  }
}

var requireLogin = function(req) {
  if(req.user !== undefined) {
    return Promise.resolve(req.user)
  } else {
    return Promise.reject(new RestError("Access denied: you need to be logged in", 401))
  }
}


module.exports = {
  send: send,
  cry: cry,
  requireLogin: requireLogin,
  RestError: RestError,
  restError: restError
}
