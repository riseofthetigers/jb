var React = require('react');
var ReactBootstrap = require('react-bootstrap');
var Button = ReactBootstrap.Button;
var Modal = ReactBootstrap.Modal;
var AppActions = require('../actions/app-actions');
var AppStore = require('../stores/app-store');
var Navigation = require('react-router').Navigation;
var _ = require('lodash');

var JobOffer = require('./JobOffer');
var Pagination = require('./Pagination');


// Our custom component is managing whether the Modal is visible
const JobsListing = React.createClass({
  mixins: [Navigation],

  getInitialState: function() {
    return {
        listings: []
    };
  },

  componentDidMount: function() {
    AppStore.addListingChangeListener(this._onChange);
    AppStore.getListings(true);
  },


  _onChange : function(){
    this.setState({listings:AppStore.getListings()});
  },


  render: function () {
      return (
        <div className="container">
            <div className="row">
                <div className="col-sm-8">
                    <div className="jobs">
                        {
                         this.state.listings.map( function (listing) {
                             return <JobOffer key={listing.id} data={listing} />
                        })}
                    </div>
                    <Pagination current-page={1} entries-per-page={1} data={this.state.listings} />
                </div>
                <div className="col-sm-4" id="sidebar">

                </div>
            </div>
        </div>
      );
    }

});


module.exports = JobsListing;
