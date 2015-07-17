var AppDispatcher = require('../dispatchers/app-dispatcher');
var CandidateActions = require('../actions/candidate-actions');
var CandidateConstants = require('../constants/candidate-constants');
var assign = require('react/lib/Object.assign');
var EventEmitter = require('events').EventEmitter;
var $ = require('jquery');
var _ = require('lodash');


var CHANGE_EVENT = 'change_candidate';

var _profile = {};


var CandidateStore = assign(EventEmitter.prototype, {
    emitCandidateChange: function(){
        this.emit(CHANGE_EVENT);
    },

    addCandidateChangeListener: function(callback){
        this.on(CHANGE_EVENT, callback);
   },

   removeCandidateChangeListener: function(callback){
        this.removeListener(CHANGE_EVENT, callback);
   },


   get: _getLoadedProfile,

    dispatcherIndex: AppDispatcher.register(function(payload){
        var action = payload.action;
        switch(action.actionType){
          case CandidateConstants.GET_PROFILE:
              _loadProfile(payload.action.id);
              break;
          case CandidateConstants.GET_CURRENT_PROFILE:
              _loadCurrentProfile();
              break;
          case CandidateConstants.SAVE_PROFILE:
              _saveProfile(payload.action.profile);
              break;
        }
        return true;
     })
});

module.exports = ListingStore;
