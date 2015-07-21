const Actions = require('../constants/app-constants')
const AppDispatcher = require('../dispatchers/app-dispatcher')
const axios = require('axios')

const makeQuerystring = function(params) {
  return Object.keys(params)
         .map(key => encodeURI(key) + "=" + encodeURI(params[key]))
         .join("&")
}

const ListingActions = {
    // New style actions
    getListings(query={}) {
      const things = Object.keys(query).map(key => ({
        key: key,
        xs: Object.keys(query[key]).filter(i => query[key][i]).join(",")
      })).filter(o => o.xs.length !== 0).reduce((o, {key, xs}) => {
        o[key] = xs
        return o
      }, {})

      return axios.get('/api/listings?' + makeQuerystring(things)).then(response => ({
        actionType: Actions.GET_ALL_LISTINGS,
        listings: response.data,
        filter: query
      }))
    },

    getListingById(id) {
      if(id === 'preview'){
       return {
            actionType: Actions.GET_LISTING,
            listing: JSON.parse(localStorage.getItem('tempListing'))

       }
      }
      return axios.get('/api/listings/' + id).then(response => ({
        actionType: Actions.GET_LISTING,
        listing: response.data
      }))
    },


    // Old style actions
    createListing: function(user, data) {
        AppDispatcher.handleListingAction({
            actionType : Actions.LISTING_CREATE,
            user       : user,
            data       : data
        });
    }
}


module.exports = ListingActions;
