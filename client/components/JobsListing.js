var React = require('react');
var ReactBootstrap = require('react-bootstrap');
var Button = ReactBootstrap.Button;
var Modal = ReactBootstrap.Modal;
var AppActions = require('../actions/app-actions');
var AppStore = require('../stores/app-store');
var Navigation = require('react-router').Navigation;

var JobOffer = require('./JobOffer');
var Pagination = require('./Pagination');


// Our custom component is managing whether the Modal is visible
const JobsListing = React.createClass({
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
        <div className="container">
            <div className="row">
                <div className="col-sm-8">
                    <div className="jobs">
                         <JobOffer />
                    </div>
                    <Pagination />
                </div>
                <div className="col-sm-4" id="sidebar">

                </div>
            </div>
        </div>
      );
    }

});


module.exports = JobsListing;
