
var Dispatcher = require ('flux').Dispatcher;
var assign = require('react/lib/Object.assign');

var AppDispatcher = assign(new Dispatcher() , {
    handleAuthAction : function(action) {
        this.dispatch({
            source: 'AUTH_ACTION',
            action: action
        })
    },

    handleListingAction : function(action) {
        this.dispatch({
            source: 'LISTING_ACTION',
            action: action
        })
    }
});

module.exports = AppDispatcher;

