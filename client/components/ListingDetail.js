const React = require('react')
const Dispatcher = require('../dispatchers/app-dispatcher')
const ListingActions = require('../actions/listing-actions')
const ListingStore = require('../stores/listing-store')
const {Link} = require('react-router')


const ListingDetail = React.createClass({
  loadState() {
    return {
      listing: ListingStore.getCurrentListing()
    }
  },

  getInitialState() { return this.loadState() },
  _onChange() { this.setState(this.loadState()) },

  componentDidMount() {
    ListingStore.on('change', this._onChange);
    Dispatcher.callAction(ListingActions.getListingById, this.props.params.id);
  },

  componentWillUnmount() {
    ListingStore.removeListener('change', this._onChange);
  },

  render: function () {
    const data = this.state.listing
    const employmentType = ListingStore.employmentType(data.job_type)

    const job_requirements = (!data.job_requirements) ? [] : data.job_requirements.split("\n")
    const jobs_benefits = (!data.job_benefits) ? [] : data.job_benefits.split("\n")

    const selfUrl = window.location.href // Add to state/update?!

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 text-center">
                        <h1>{data.job_title}</h1>
                        <h4>
                            <span><i className="fa fa-map-marker"></i>{data.Business.business_city}</span>
                            <span><i style={{color: '#6ecf26'}} className="fa fa-clock-o"></i>{employmentType}</span>
                            <span><i className="fa fa-dollar"></i>{data.job_compensation}</span>
                        </h4>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-sm-8">
                        <article>
                            <h2>Job Details</h2>
                            <p>{data.job_description}</p>
                            <h3>Requirements</h3>
                            <ul>{job_requirements.map((line,i) => <li key={i}>{line}</li>)}</ul>
                            {/* TODO: Benefits is now not in the database even?
                            <h3>Benefits</h3>
                            <ul>{jobs_benefits.map((line,i) => <li key={i}>{line}</li>)}</ul>
                            */}
                            <p><Link to='apply' params={{id: data.id}} className="btn btn-primary btn-lg">
                              Apply Here
                            </Link></p>
                        </article>
                    </div>
                    <div className="col-sm-4" id="sidebar">
                        <div className="sidebar-widget" id="company">
                            <h2>About this company</h2>
                            <p><img src={data.Business.business_logo} style={{maxWidth: 150, maxHeight: 150}}
                                    alt={data.Business.business_description} className="img-responsive" /></p>
                            <p>{data.Business.business_description}</p>
                            { /* TODO: Make the business page
                              <p><a href="company.html" className="btn btn-primary">Read more</a></p> */ }
                        </div>
                        <div className="sidebar-widget" id="share">
                            <h3 style={{marginTop: 0}}>Share this job</h3>
                            <ul>
                                <li><a href={`https://www.facebook.com/sharer/sharer.php?u=${selfUrl}`}><i className="fa fa-facebook"></i></a></li>
                                <li><a href={`https://twitter.com/home?status=${selfUrl}`}><i className="fa fa-twitter"></i></a></li>
                                <li><a href={`https://plus.google.com/share?url=${selfUrl}`}><i className="fa fa-google-plus"></i></a></li>
                                <li><a href={`https://www.linkedin.com/shareArticle?mini=true&url=${selfUrl}`}><i className="fa fa-linkedin"></i></a></li>
                            </ul>
                        </div>
                        {/* Hide these for now
                        <div className="sidebar-widget" id="company-jobs">
                            <h2>More jobs from this company</h2>
                            <ul>
                                <li><a href="#">Shift Lead</a></li>
                                <li><a href="#">Cashier</a></li>
                                <li><a href="#">Manager</a></li>
                            </ul>
                        </div>
                        */}
                    </div>
                </div>
            </div>
        </div>
     );
  },

});


module.exports = ListingDetail;
