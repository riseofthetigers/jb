var AppDispatcher = require('../dispatchers/app-dispatcher');
var AppActions = require('../actions/app-actions');
var ListingConstants = require('../constants/listing-constants');
var assign = require('react/lib/Object.assign');
var EventEmitter = require('events').EventEmitter;
var axios = require('axios');
var _ = require('lodash');


var CHANGE_EVENT = 'change_listing';

// loaded listings
var _listings = [];

// current listing
var _currentListing = null;

var _cacheListing = [];


var _getAllListings = function (cb) {
    axios.get('/api/listings').then(function(data) {
        _listings = data;
        cb();
    });
};

var _getListingById = function (id, cb) {

    if(id === 'temp'){
        _currentListing = _getInitialListing();
        cb();
        return;
    }

    var listing = _.find(_listings, {'id': id} );
    if (!listing){
        listing = _.find(_cacheListing, {'id': id} );
    }
    if(listing){
        _currentListing = listing;
        cb();
        return;
    }
    axios.get('/api/listings/' + id).then(function(data) {
        _currentListing = data;
        _cacheListing.push(data);
        cb();
    });

};

var _createListing = function (user, data) {
    if(user && user.type === 'E'){
        axios.post('/api/listings', data).then(function(res) {
            console.log('---- SAVED ---', res);
            localStorage.removeItem('tempListing');

        });
    } else {
        localStorage.setItem('tempListing',JSON.stringify(data));
    }

}

var _getInitialListing = function() {
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

var ListingStore = assign({}, EventEmitter.prototype, {
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

    getInitialListing: function() {
        return _getInitialListing();
    },

    dispatcherIndex: AppDispatcher.register(function(payload){
        var action = payload.action;
        switch(action.actionType){
          case ListingConstants.LISTING_CREATE:
              _createListing(payload.action.user, payload.action.data);
              break;
          case ListingConstants.GET_LISTING:
              _getListingById(payload.action.id);
              break;
          case ListingConstants.GET_ALL_LISTINGS:
              _getAllListings();
              break;
        }
        return true;
     })
});

module.exports = ListingStore;
