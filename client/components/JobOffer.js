var React = require('react');
var ReactBootstrap = require('react-bootstrap');
var Button = ReactBootstrap.Button;
var Modal = ReactBootstrap.Modal;
var AppActions = require('../actions/app-actions');
var Navigation = require('react-router').Navigation;

var ListingDetail = require('./ListingDetail')

// Our custom component is managing whether the Modal is visible
const JobOffer = React.createClass({
  mixins: [Navigation],

  getInitialState: function() {
    return {
        listing: this.props.data
    };
  },

  handleClick: function () {
    this.transitionTo('/listing/detail/' + this.state.listing.id );
  },

  render: function () {
      var data = this.state.listing;
      var employmentType;
      switch(data.employment_type) {
        case 'F':
            employmentType = 'Full Time';
            break;
        case 'P':
            employmentType = 'Part Time';
            break;
        case 'H':
            employmentType = 'Hourly';
            break;
        default:
            employmentType = 'Unknown';
      }
      return (
          <a onClick={this.handleClick}>
              <img style={{width: 50+'px', height: 50+'px'}} src="/images/job1.jpg" alt="" className="img-circle" />
              <div className="title">
                  <h5>{data.job_title}</h5>
                  <p>{data.Business.business_name}</p>
              </div>
              <div className="data">
                  <div >Posted 1 Day Ago</div>
                  <div className="city"><i className="fa fa-map-marker"></i>{data.Business.business_city}</div>
                  <div className="type full-time"><i className="fa fa-clock-o"></i>{employmentType}</div>
                  <div className="sallary"><i className="fa fa-dollar"></i>{data.job_compensation}</div>
              </div>
          </a>
      );
    },

});


module.exports = JobOffer;
