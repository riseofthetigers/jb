var React = require('react');
var ReactBootstrap = require('react-bootstrap');
var Button = ReactBootstrap.Button;
var Modal = ReactBootstrap.Modal;
var AppActions = require('../actions/app-actions');
var ListingStore = require('../stores/listing-store');
var Navigation = require('react-router').Navigation;
var _ = require('lodash');


// Our custom component is managing whether the Modal is visible
const ListingDetail = React.createClass({
  mixins: [Navigation],

  getInitialState: function() {
    return {
        listing: {
                     Business: {}
                 }
    };
  },

  componentDidMount: function() {
    ListingStore.addListingChangeListener(this._onChange.bind(this));
    ListingStore.getListingById(this.props.params.id, true);
  },

  componentWillUnmount: function() {
    ListingStore.removeListingChangeListener(this._onChange);
  },

  _onChange : function(){
    console.log(ListingStore.getListingById(this.props.params.id));
    this.setState({listing:ListingStore.getListingById(this.props.params.id), loaded: true});
  },


  handleClick: function () {
    this.transitionTo('/listing/apply/' + this.state.listing.id );
  },


  render: function () {
        var data = this.state.listing;
        var employmentType = 'test';
        return (
                <div>
                    <img style={{width: 200+'px', height: 200+'px'}} src="/images/job1.jpg" alt="" className="img-circle" />
                    <div className="title">
                        <h5>{data.job_title}</h5>
                        <p>{data.Business.business_name}</p>
                    </div>
                </div>
         );
      },

});


module.exports = ListingDetail;
