var AppDispatcher = require('../dispatchers/app-dispatcher');
var AppActions = require('../actions/app-actions');
var AppConstants = require('../constants/app-constants');
var assign = require('react/lib/Object.assign');
var EventEmitter = require('events').EventEmitter;
var axios = require('axios');
var _ = require('lodash');


var CHANGE_EVENT = 'change_message';

// loaded message
var _message = [];

// current message
var _currentMessage = null;

var _cacheMessage = [];


var _getAllMessages = function (cb) {
    axios.get('/api/message').then(function(data) {
        _message = data;
        cb();
    });
};

var _getMessageById = function (id, cb) {

    if(id === 'temp'){
        _currentMessage = _getInitialMessage();
        cb();
        return;
    }

    var message = _.find(_message, {'id': id} );
    if (!message){
        message = _.find(_cacheMessage, {'id': id} );
    }
    if(message){
        _currentMessage = message;
        cb();
        return;
    }
    axios.get('/api/messages/' + id).then(function(data) {
        _currentMessage = data;
        _cacheMessage.push(data);
        cb();
    });

};

var _createmessage = function (user, data) {
    if(user && user.type === 'E'){
        //should save to database
    } else {
        localStorage.setItem('tempMessage',JSON.stringify(data));
    }

}

var _getInitialMessage = function() {
    var tempData= localStorage.getItem('tempListing');
    if( tempData) {
        try{
            tempData = JSON.parse(tempData);
        }catch(err){
            tempData= null;
        }
    }
    return tempData;
}

var MessageStore = assign({}, EventEmitter.prototype, {
    emitMessageChange: function(){
        this.emit(CHANGE_EVENT);
    },

    addMessageChangeListener: function(callback){
        this.on(CHANGE_EVENT, callback);
   },

    removeMessageChangeListener: function(callback){
          this.removeListener(CHANGE_EVENT, callback);
      },

    getMessages: function (load) {
         if(load){
             self = this;
            _getAllListings(function () {
                self.emitListingChange();
            });
         } else {
            return _message;
         }
    },

    getMessageById: function (id, load) {
         if(load){
             self = this;
            _getMessageById(id, function () {
                self.emitMessageChange();
            });
         } else {
            return _currentMessage;
         }
    },

    getInitialMessage: function() {
        return _getInitialMessage();
    },

    dispatcherIndex: AppDispatcher.register(function(payload){
        var action = payload.action;
        switch(action.actionType){
          case AppConstants.MESSAGE_CREATE:
              _createMessage(payload.action.user, payload.action.data);
              break;
          case AppConstants.GET_MESSAGE:
              _getMessageById(payload.action.id);
              break;
          case AppConstants.GET_ALL_MESSAGE:
              _getAllMessages();
              break;
        }
        return true;
     })
});

module.exports = MessageStore;
