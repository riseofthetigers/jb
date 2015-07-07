var AppDispatcher = require('../dispatchers/app-dispatcher');
var AppActions = require('../actions/app-actions');
var AppConstants = require('../constants/app-constants');
var assign = require('react/lib/Object.assign');
var EventEmitter = require('events').EventEmitter;
var $ = require('jquery');


var CHANGE_EVENT = 'change_listing';

// loaded listings
var _listings = [];

// current listing
var _currentListing = null;


var _getAllListings = function (cb) {
    $.get('/api/listings', function(data) {
        _listings = data;
        cb();
    });
};

var _getListingById = function (id, cb) {
    $.get('/api/listings/' + id, function(data) {
        _currentListing = data;
        cb();
    });

};

var ListingStore =  {
    emitListingtChange: function(){
        this.emit(CHANGE_EVENT);
    },

    addListingChangeListener: function(callback){
        this.on(CHANGE_EVENT, callback);
   },

    removeListingChangeListener: function(callback){
          this.removeListener(CHANGE_EVENT, callback);
      },

    getListings: function () {
        _getListings(function () {
            this.emitListingChange();
        });
    },

    getListingById: function (id) {
        _getListingById(id, function () {
            this.emitListingChange();
        });
    },

    dispatcherIndex: AppDispatcher.register(function(payload){
        var action = payload.action;
        switch(action.actionType){
        }
        ListingStore.emitListingChange();

        return true;
     })
};

module.exports = ListingStore;
