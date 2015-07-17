var CandidateConstants = require('../constants/candidate-constants');
var AppDispatcher = require('../dispatchers/app-dispatcher');
var $ = require('jquery');


var CandidateActions = {
    getProfile: function(id) {
      $.get('/api/candidates/'+id, function(data) {
        AppDispatcher.handleCandidateAction({
            actionType: CandidateConstants.GET_PROFILE,
            id: id,
            profile: data
        });
      });
    },

    getCurrentProfile: function() {
      $.get('/api/candidates/current', function(data) {
        AppDispatcher.handleCandidateAction({
            actionType: CandidateConstants.GET_CURRENT_PROFILE,
            profile: data
        });
      });

    },

    saveProfile: function (profile) {
      // Send post to API
      AppDispatcher.handleCandidateAction({
          actionType: CandidateConstants.SAVE_PROFILE,
      });
    }

}


module.exports = CandidateActions;
