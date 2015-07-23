var React = require('react');
var Navigation = require('react-router').Navigation;
var Pagination = require('./Pagination.js');

const MyListing = React.createClass({

    getInitialState: function() {
        return  {
            business_logo: '',
            business_name: '',
            business_city: '',
            job_title: '',
            applicants: '',
            stage: '',
            last_viewed: ''
        }
    },

    getDefaultProps: function() {
        return {
        }
    },

    componentWillMount: function() {
        this.setStage(this.props.data);
    },

    render: function() {

        return (
            <a href="#">
                <img style={{width: 50+'px', height: 50+'px'}} src={this.stage.businesss_logo} alt="" className="img-circle" />
                <div className="col-md-1"></div>
                <div className="col-md-2">
                    <h5>{this.stage.business_name}</h5>
                    <p>{this.name.business_city}</p>
                </div>
                    <div className="col-md-2">{this.stage.job_title}</div>
                    <div className="col-md-2">{this.stage.applicants}</div>
                    <div className="col-md-2">{this.stage.stage}</div>
                    <div className="col-md-1">{this.stage.last_viewed}</div>
            </a>
        );
    }

});

const MyListings = React.createClass({
  mixins: [Navigation],

  getInitialState: function() {
    return {
        listings: []
    };
  },

  handleClick: function () {
  },

  render: function () {
    var listings = _.map(this.state.listings, function(listing){
        return <MyListing data={listing} />
    });
    if(!this.state.listings.length ){
        listings = <h3>No listings found</h3>
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-8">
                    <div className="row">
                        <div className="col-xs-12">
                            <h2>My Listings</h2><br/>
                            <div className="col-md-2"></div>
                            <div className="col-md-2">Business</div>
                            <div className="col-md-2">Job Title</div>
                            <div className="col-md-2">Applicants</div>
                            <div className="col-md-2">Stage</div>
                            <div className="col-md-2">Last Viewed</div><br/>
                        </div>
                    </div>
                    <div className="jobs">
                       {listings}
                    </div>
                    <Pagination />
                 </div>
            </div>
        </div>
    );
  }

});



module.exports = MyListings;
