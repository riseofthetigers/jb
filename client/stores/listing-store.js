const Dispatcher = require('../dispatchers/app-dispatcher');
const Actions = require('../constants/app-constants');
const assign = require('react/lib/Object.assign');
const {EventEmitter} = require('events');

let _listings = [];  // Plural
let _currentlisting = null; // Singular
let _filter = {};

const ListingStore = assign({}, EventEmitter.prototype, {
    addListingChangeListener(fn) { this.on('change', fn) },
    removeListingChangeListener(fn) { this.removeListener('change', fn) },
    getInitialListing() {
      let tempData = localStorage.getItem('tempListing');
      return tempData ? JSON.parse(tempData) : null
    },

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
