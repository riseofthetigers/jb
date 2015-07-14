var ListingConstants = require('../constants/listing-constants');
var AppDispatcher = require('../dispatchers/app-dispatcher');

var ListingActions = {

    getAllListings: function() {
        AppDispatcher.handleListingAction({
            actionType: ListingConstants.GET_ALL_LISTINGS
        });
    },

    getListing: function (id) {
        AppDispatcher.handleListingAction({
            actionType: ListingConstants.GET_LISTING,
            id: id
        });
    },

    createListing: function(user, data) {
        AppDispatcher.handleListingAction({
            actionType : ListingConstants.LISTING_CREATE,
            user       : user,
            data       : data
        });
    }

}


module.exports = ListingActions;
