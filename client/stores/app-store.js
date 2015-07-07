var AppDispatcher = require('../dispatchers/app-dispatcher');
var AppActions = require('../actions/app-actions');
var AppConstants = require('../constants/app-constants');
var assign = require('react/lib/Object.assign');
var EventEmitter = require('events').EventEmitter;

var Listings = require('./listing-store');


var CHANGE_EVENT = 'change';

var AppStore = assign(EventEmitter.prototype, Listings);

AppStore = assign(AppStore, {
    emitChange: function(){
        this.emit(CHANGE_EVENT);
    },

    addChangeListener: function(callback){
        this.on(CHANGE_EVENT, callback);
   },

    removeChangeListener: function(callback){
          this.removeListener(CHANGE_EVENT, callback);
      },

    dispatcherIndex: AppDispatcher.register(function(payload){
        var action = payload.action;
        switch(action.actionType){
        }
        AppStore.emitChange();

        return true;
     })
});

module.exports = AppStore;
