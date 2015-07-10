var AppDispatcher = require('../dispatchers/app-dispatcher');
var AppActions = require('../actions/app-actions');
var AppConstants = require('../constants/app-constants');
var assign = require('react/lib/Object.assign');
var EventEmitter = require('events').EventEmitter;
var $ = require('jquery');
var _ = require('lodash');


var CHANGE_EVENT = 'change_listing';

// loaded listings
var _listings = [];

// current listing
var _currentListing = null;

var _cacheListing = [];


var _getAllListings = function (cb) {
    $.get('/api/listings', function(data) {
        _listings = data;
        cb();
    });
};

var _getListingById = function (id, cb) {

    var listing = _.find(_listings, {'id': id} );
    if (!listing){
        listing = _.find(_cacheListing, {'id': id} );
    }
    if(listing){
        _currentListing = listing;
        cb();
        return;
    }
    $.get('/api/listings/' + id, function(data) {
        _currentListing = data;
        _cacheListing.push(data);
        cb();
    });

};

var ListingStore = assign(EventEmitter.prototype, {
    emitListingChange: function(){
        this.emit(CHANGE_EVENT);
    },

    addListingChangeListener: function(callback){
        this.on(CHANGE_EVENT, callback);
   },

    removeListingChangeListener: function(callback){
          this.removeListener(CHANGE_EVENT, callback);
      },

    getListings: function (load) {
         if(load){
             self = this;
            _getAllListings(function () {
                self.emitListingChange();
            });
         } else {
            return _listings;
         }
    },

    getListingById: function (id, load) {
         if(load){
             self = this;
            _getListingById(id, function () {
                self.emitListingChange();
            });
         } else {
            return _currentListing;
         }
    },

    dispatcherIndex: AppDispatcher.register(function(payload){
        var action = payload.action;
        switch(action.actionType){
        }
        return true;
     })
});

module.exports = ListingStore;
