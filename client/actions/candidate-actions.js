var CandidateConstants = require('../constants/candidate-constants');
var AppDispatcher = require('../dispatchers/app-dispatcher');
var axios = require('axios');


var CandidateActions = {
    getProfile: function(id) {
      axios.get('/api/candidates/'+id).then(function(result) {
        AppDispatcher.handleCandidateAction({
            actionType: CandidateConstants.GET_PROFILE,
            id: id,
            profile: result.data
        });
      });
    },

    getCurrentProfile: function() {
      axios.get('/api/candidates/current').then(function(result) {
        AppDispatcher.handleCandidateAction({
            actionType: CandidateConstants.GET_CURRENT_PROFILE,
            profile: result.data
        });
      });

    },

    addSocial: function() {
        AppDispatcher.handleCandidateAction({
            actionType: CandidateConstants.ADD_SOCIAL
        });
    },

    addExperience: function() {
        AppDispatcher.handleCandidateAction({
            actionType: CandidateConstants.ADD_EXPERIENCE
        });
    },

    addEducation: function() {
        AppDispatcher.handleCandidateAction({
            actionType: CandidateConstants.ADD_EDUCATION
        });
    },

    saveProfile: function (profile) {
      // Send post to API
      axios.post('/api/candidate/'+profile.id, profile).then(function(result) {
        AppDispatcher.handleCandidateAction({
            actionType: CandidateConstants.SAVED_PROFILE,
        })
      })
    }

}


module.exports = CandidateActions;
