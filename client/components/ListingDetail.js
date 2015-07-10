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
        var employmentType = '';
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
          var jobs_requirements = [];
          if(data.requirements){
              jobs_requirements = data.requirements.split("\n");
          }
          var jobs_benefits = [];
          if(data.job_benefits){
              jobs_benefits = data.job_benefits.split("\n");
          }

        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 text-center">
                            <h1>{data.job_title}</h1>
                            <h4>
                                <span><i className="fa fa-map-marker"></i>{data.Business.business_city}</span>
                                <span><i className="fa fa-clock-o"></i>{employmentType}</span>
                                <span><i className="fa fa-dollar"></i>{data.job_compensation}</span>
                            </h4>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-sm-8">
                        <h3></h3>
                        <img style={{"width": 700+'px', "height": 300+'px'}} src={data.photo_url} />
                        <h3></h3>

                            <article>
                                <h2>Job Details</h2>
                                <p>{data.job_description}</p>
                                <h3>Requirements</h3>
                                <ul>
                                    {
                                        _.map(jobs_requirements, function(line) {
                                            return <li>{line}</li>;
                                        })
                                    }
                                </ul>
                                <h3>Benefits</h3>
                                <ul>
                                    {
                                        _.map(jobs_benefits, function(line) {
                                            return <li>{line}</li>;
                                        })
                                    }
                                </ul>
                                <p>
                                    <a href="#" className="btn btn-primary btn-lg">Apply Here</a>
                                </p>
                            </article>
                        </div>
                        <div className="col-sm-4" id="sidebar">
                            <div className="sidebar-widget" id="share">
                                <h3>Share this job</h3>
                                <ul>
                                    <li><a href="https://www.facebook.com/sharer/sharer.php?u=http://www.coffeecreamthemes.com/themes/jobseek/site/job-details.html"><i className="fa fa-facebook"></i></a></li>
                                    <li><a href="https://twitter.com/home?status=http://www.coffeecreamthemes.com/themes/jobseek/site/job-details.html"><i className="fa fa-twitter"></i></a></li>
                                    <li><a href="https://plus.google.com/share?url=http://www.coffeecreamthemes.com/themes/jobseek/site/job-details.html"><i className="fa fa-google-plus"></i></a></li>
                                    <li><a href="https://www.linkedin.com/shareArticle?mini=true&amp;url=http://www.coffeecreamthemes.com/themes/jobseek/site/job-details.html&amp;title=Jobseek%20-%20Job%20Board%20Responsive%20HTML%20Template&amp;summary=&amp;source="><i className="fa fa-linkedin"></i></a></li>
                                </ul>
                            </div>
                            <hr />
                            <div className="sidebar-widget" id="company">
                                <h2>About this company</h2>
                                <p><img src={data.Business.business_picture} alt="" className="img-responsive" /></p>
                                <p>{data.Business.business_description}</p>
                                <p><a href="company.html" className="btn btn-primary">Read more</a></p>
                            </div>
                            <hr />
                            <div className="sidebar-widget" id="company-jobs">
                                <h2>More jobs from this company</h2>
                                <ul>
                                    <li><a href="#">Shift Lead</a></li>
                                    <li><a href="#">Cashier</a></li>
                                    <li><a href="#">Manager</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         );
      },

});


module.exports = ListingDetail;
