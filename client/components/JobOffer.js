var React = require('react');
var ReactBootstrap = require('react-bootstrap');
var Button = ReactBootstrap.Button;
var Modal = ReactBootstrap.Modal;
var AppActions = require('../actions/app-actions');
var AppStore = require('../stores/app-store');
var Navigation = require('react-router').Navigation;


// Our custom component is managing whether the Modal is visible
const JobOffer = React.createClass({
  mixins: [Navigation],

  getInitialState: function() {
    return {
    };
  },

  componentDidMount: function() {
    AppStore.addChangeListener(this._onChange);
  },


    _onChange : function(){

    },


  render: function () {
      return (
        <a href="#">
            <img style={{width: 50+'px', height: 50+'px'}} src="images/job1.jpg" alt="" className="img-circle" />
            <div className="title">
                <h5>Cashier</h5>
                <p>Chevron</p>
            </div>
            <div className="data">
                <div ><i>Posted 1 Day Ago</i></div>
                <div className="city"><i className="fa fa-map-marker"></i>Boston</div>
                <div className="type full-time"><i className="fa fa-clock-o"></i>Full Time</div>
                <div className="sallary"><i className="fa fa-dollar"></i>45,000</div>
            </div>
        </a>

      );
    },

});


module.exports = JobOffer;
