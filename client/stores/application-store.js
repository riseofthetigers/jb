import AppDispatcher from '../dispatchers/app-dispatcher'
import Actions from '../constants/app-constants'

import assign from 'react/lib/Object.assign'
import { EventEmitter } from 'events'

let _application = {
  availability: 'I'
}

const ApplicationStore = assign({}, EventEmitter.prototype, {
  emitChange: function(){ this.emit('change'); },
  addChangeListener: function(callback) { this.on('change', callback); },
  removeChangeListener: function(callback) { this.removeListener('change', callback); },

  get() { return _application; },

  dispatcherIndex: AppDispatcher.register(function(payload){
    var action = payload.action;
    switch(action.actionType) {
      case Actions.UPDATE_APPLICATION:
        _application = action.application;
        ApplicationStore.emitChange();
        break;
      case Actions.SAVE_APPLICATION:


        break;
    }
    return true;
   })
});

module.exports = ApplicationStore;
