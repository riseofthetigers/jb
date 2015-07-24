const AppDispatcher = require('../dispatchers/app-dispatcher');
const Actions = require('../constants/app-constants');

const assign = require('react/lib/Object.assign');
const EventEmitter = require('events').EventEmitter;

const experienceDefault = {
  employer: '',
  start_end: '',
  job_title: '',
  responsabilities: ''
}

const defaults = {
  education: {
    school: '',
    start_end: '',
    qualifications: '',
    notes: ''
  },
  experience: {
    employer: '',
    start_end: '',
    job_title: '',
    responsabilities: ''
  }
}

let _profile = {
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

const CandidateStore = assign({}, EventEmitter.prototype, {
    emitChange: function(){
      this.emit('change');
    },
    addChangeListener: function(callback){
      this.on('change', callback);
    },
    removeChangeListener: function(callback){
      this.removeListener('change', callback);
    },

    getProfile() { return this.get() },
    get() { return _profile; },

    dispatcherIndex: AppDispatcher.register(function(payload){
        var action = payload.action;
        switch(action.actionType) {
          case Actions.PROFILE_ADD_FIELD:
              _profile[action.field].push(defaults[action.field])
              CandidateStore.emitChange()
              break;
          case Actions.GET_PROFILE:
          case Actions.GET_CURRENT_PROFILE:
              _profile = action.profile;
              if(_profile.education.length === 0) _profile.education.push(defaults.education)
              if(_profile.experience.length === 0) _profile.experience.push(defaults.experience)
              CandidateStore.emitChange();
              break;
          // Removed save profile, it doesn't alter the store
        }
        return true;
     })
});

module.exports = CandidateStore;
