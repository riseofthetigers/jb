const Dispatcher = require('../dispatchers/app-dispatcher');
const Actions = require('../constants/app-constants');
const assign = require('react/lib/Object.assign');
const {EventEmitter} = require('events');

var _listings = [];  // Plural
var _currentlisting = null; // Singular
var _filter = {};

const ListingStore = assign({}, EventEmitter.prototype, {
    getListings() {
      return _listings
    },
    getCurrentListing() {
      return _currentlisting
    },
    getFilter() {
      return _filter
    },

    dispatcherIndex: Dispatcher.register(function(payload){
        const action = payload.action;
        switch(action.actionType){
          case Actions.LISTING_CREATE:
              const {user, data} = action
              if(user && user.type === 'E'){
                //should save to database
              } else {
                localStorage.setItem('tempListing',JSON.stringify(data));
              }
              break;
          case Actions.GET_LISTING:
              _listing = action.listing
              ListingStore.emit('change')
              break;
          case Actions.GET_ALL_LISTINGS:
              _listings = action.listings
              _filter = action.filter
              ListingStore.emit('change')
              break;
        }
        return true;
     })
});

module.exports = ListingStore;
