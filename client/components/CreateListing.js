var React  = require('react');
var ListingActions = require('../actions/listing-actions');
var ListingStore = require('../stores/listing-store');
var Navigation = require('react-router').Navigation;

var CreateListing = React.createClass({

  componentDidMount: function() {
     ListingStore.addListingChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    ListingStore.removeListingChangeListener(this._onChange);
  },

  _onChange: function() {
  },


  render: function () {
    return (
      <h2>CreateListing</h2>
    );
  }
});

module.exports = CreateListing;
