const Dispatcher = require('../dispatchers/app-dispatcher');
const Actions = require('../constants/app-constants');
const assign = require('react/lib/Object.assign');
const {EventEmitter} = require('events');
const axios = require('axios');

let _listings = [];  // Plural
let _currentlisting = {
  id: 0,
  Business: {
    business_logo: 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==',
    business_name: '',
    business_city: ''
  },
  job_title: '',
  job_description: '',
  job_type: '',
  job_compensation: ''
}; // Singular
let _filter = {};

const employmentTypes = {
  F: 'Full Time',
  P: 'Part Time',
  H: 'Hourly',
}

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

    employmentType(type) {
      return employmentTypes[type] || 'Unknown'
    },

    dispatcherIndex: Dispatcher.register(function(payload){
        const action = payload.action;
        switch(action.actionType){
          case Actions.LISTING_CREATE:
              const {user, data} = action
              if(user && user.type === 'E'){
                axios.post('/api/listings', data).then(function(res) {
                    localStorage.removeItem('tempListing');
                 });
              } else {
                localStorage.setItem('tempListing',JSON.stringify(data));
              }
              break;
          case Actions.GET_LISTING:
              _currentlisting = action.listing
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
