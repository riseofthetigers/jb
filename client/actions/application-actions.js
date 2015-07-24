import Actions from '../constants/app-constants'
import AppDispatcher from '../dispatchers/app-dispatcher'
import axios from 'axios'
import assign from 'react/lib/Object.assign'

const ApplicationActions = {
  // New style action
  updateApplication(application) {
    return { // Just reuse that action, haha
      actionType: Actions.UPDATE_APPLICATION,
      application
    };
  },

  sendApplication(candidate, application, listingId) {
    return axios.post("/api/applications", {
      candidate, application, listingId
    }).then(() => undefined)
  },
}


module.exports = ApplicationActions;
