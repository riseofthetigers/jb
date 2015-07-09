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
        listings: [],
        loaded: false

    };
  },

  getDefaultProps: function() {
    return ({
        currentPage: 1,
        entriesPerPage: 2
    });
  },

  componentDidMount: function() {
    AppStore.addListingChangeListener(this._onChange);
    AppStore.getListings(true);
  },

  componentWillUnmount: function() {
    AppStore.removeListingChangeListener(this._onChange);
  },

  changePageCallback: function(index) {
    this.transitionTo('/search/'+ index);
  },


  _onChange : function(){
    this.setState({listings:AppStore.getListings(), loaded: true});
  },


  render: function () {
      var self = this;
      var NoListings = <div/>;
      if(this.state.loaded && this.state.listings.length == 0){
          NoListings = <h1>There is no listings in the database</h1>;
      }
      return (
        <div className="container">
            <div className="row">
                <div className="col-sm-8">
                    <div className="jobs">
                        { NoListings }
                        {
                         this.state.listings.map( function (listing, index) {
                             if(   index>=self.props.entriesPerPage*(self.props.currentPage-1)
                                && index < self.props.entriesPerPage*self.props.currentPage){
                                return <JobOffer key={listing.id} data={listing} />
                             }
                        })}
                    </div>
                    <Pagination currentPage={this.props.currentPage} entriesPerPage={2} entries={this.state.listings.length} changePage={this.changePageCallback}/>
                </div>
                <div className="col-sm-4" id="sidebar">

                </div>
            </div>
        </div>
      );
    }

});


module.exports = JobsListing;
