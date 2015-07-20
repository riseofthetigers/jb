const {Dispatcher} = require ('flux')
const assign = require('react/lib/Object.assign')
const Promise = require('bluebird')

var AppDispatcher = assign(new Dispatcher() , {
    handleAuthAction(action) {
        this.dispatchAction(action, 'AUTH_ACTION')
    },
    handleListingAction(action) {
        this.dispatchAction(action, 'LISTING_ACTION')
    },
    handleCandidateAction(action) {
        this.dispatchAction(action, 'CANDIDATE_ACTION')
    },

    // To remove this 'source' thing but don't break all listeners yet
    dispatchAction(action, source='ACTION') {
        // Don't use source (only for legacy code)
        this.dispatch({
            source: source,
            action: action
        })
    },

    // For new kind of actionCreators who return the action(s) instead of dispatching it
    callAction(fn) {
        Promise.cast(fn()).then(actions => {
          if(!Array.isArray(actions)) actions = [actions]
          actions.forEach(action => this.dispatchActions(action))
        }).catch(err => {
          console.log("Error in action creator:", err)
          // Dispatch error action?
        })
    }

});

module.exports = AppDispatcher;
