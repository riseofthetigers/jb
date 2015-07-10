var React = require('react');
var ReactBootstrap = require('react-bootstrap');
var Button = ReactBootstrap.Button;
var Modal = ReactBootstrap.Modal;
var AppActions = require('../actions/app-actions');
var AppStore = require('../stores/app-store');
var Navigation = require('react-router').Navigation;
var _ = require('lodash');


// Our custom component is managing whether the Modal is visible
const ListingDetail = React.createClass({
  mixins: [Navigation],

  getInitialState: function() {
    console.log(this.props.data);
    return {
        listing: this.props.data
    };
  },

  componentDidMount: function() {
    AppStore.addChangeListener(this._onChange.bind(this));
  },


  _onChange : function(){

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
