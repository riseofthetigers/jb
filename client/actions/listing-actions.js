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

	createListing: function(business_id, job_title, employment_type, job_desription, photo_url, requirements, job_compensation, job_benefits) {
		AppDispatcher.handleListingAction({
			actionType		: ListingConstants.LISTING_CREATE,
			business_id		: business_id,
			job_title		: job_title,
			employment_type	: employment_type,
			job_desription	: job_desription,
			photo_url		: photo_url,
			requirements	: requirements,
			job_compensation: job_compensation,
			job_benefits	: job_benefits 
		});
	}

}


module.exports = ListingActions;
