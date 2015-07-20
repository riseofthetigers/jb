var AppDispatcher = require('../dispatchers/app-dispatcher');
var Actions = require('../constants/app-constants');

var assign = require('react/lib/Object.assign');
var EventEmitter = require('events').EventEmitter;

var _profile = {
  name: '',
  phone_number: '',
  address: '',
  skills: '',
  candidate_picture: '',
  description: '',
  headline: '',
  education: [],
  experience: [],
  title: '',
  birthday: '',
  email: '',
  social: [],
  authorized: '',
  criminal: '',
  criminal_descripton: ''
};

function _addSocial() {
    _profile.social.push({
        network: '',
        url: 'http://'
    });
}

function _addEducation() {
    _profile.education.push({
        school: '',
        qualifications: '',
        start_end: '',
        notes: ''
    });
}

function _addExperience() {
    _profile.experience.push({
        employer: '',
        job_title: '',
        responsabilities: '',
        state_end: ''
    });
}


var CandidateStore = assign({}, EventEmitter.prototype, {
    emitChange: function(){
      this.emit('change');
    },

    addChangeListener: function(callback){
      this.on('change', callback);
    },

    removeChangeListener: function(callback){
      this.removeListener('change', callback);
    },

    getProfile: function() {
      return _profile;
    },

    dispatcherIndex: AppDispatcher.register(function(payload){
        var action = payload.action;
        switch(action.actionType) {
          case Actions.GET_PROFILE:
              _profile = action.profile;
              CandidateStore.emitChange();
              break;
          case Actions.GET_CURRENT_PROFILE:
              _profile = action.profile;
              CandidateStore.emitChange();
              break;
          case Actions.ADD_SOCIAL:
              _addSocial();
              CandidateStore.emitChange();
              break;
          case Actions.ADD_EDUCATION:
              _addEducation();
              CandidateStore.emitChange();
              break;
          case Actions.ADD_EXPERIENCE:
              _addExperience();
              CandidateStore.emitChange();
              break;
          // Removed save profile, it doesn't alter the store
        }
        return true;
     })
});

module.exports = CandidateStore;
