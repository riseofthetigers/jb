var CandidateConstants = require('../constants/candidate-constants');
var AppDispatcher = require('../dispatchers/app-dispatcher');

var CandidateActions = {

    getProfile: function(id) {
        AppDispatcher.handleCandidateAction({
            actionType: CandidateConstants.GET_PROFILE,
            id: id
        });
    },

    getCurrentProfile: function() {
        AppDispatcher.handleCandidateAction({
            actionType: CandidateConstants.GET_CURRENT_PROFILE
        });
    },

    saveProfile: function (profile) {
        AppDispatcher.handleCandidateAction({
            actionType: CandidateConstants.SAVE_PROFILE,
            profile: profile
        });
    }

}


module.exports = CandidateActions;
