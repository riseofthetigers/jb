const CandidateConstants = require('../constants/candidate-constants');
const AppDispatcher = require('../dispatchers/app-dispatcher');
const axios = require('axios');

const safeParse = str => {
  try        { return JSON.parse(str) }
  catch(err) { return [] }
}

const CandidateActions = {
    // New style action
    getUserProfile(id) {
      return axios.get(`/api/users/${id}/candidate`).then((result) => {
        let candidate = result.data.candidate
        candidate.experience = safeParse(candidate.experience)
        candidate.education = safeParse(candidate.education)

        return { // Just reuse that action, haha
            actionType: CandidateConstants.GET_CURRENT_PROFILE,
            profile: candidate
        };
      });
    },

    addProfileField(field) {
      return {
        actionType: CandidateConstants.PROFILE_ADD_FIELD,
        field: field
      }
    },

    updateProfile(candidate) {
      return { // Just reuse that action, haha
          actionType: CandidateConstants.GET_CURRENT_PROFILE,
          profile: candidate
      };
    },

    // Old style actions
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

    saveProfile: function (profile) {
      // Send post to API
      axios.post('/api/candidates', profile).then(function(result) {
        AppDispatcher.handleCandidateAction({
            actionType: CandidateConstants.SAVED_PROFILE,
        })
      })
    }

}


module.exports = CandidateActions;
