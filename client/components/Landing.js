const React  = require('react');
const JobOffer = require('../components/JobOffer')

const Landing = React.createClass({
  render: function () {
    const single = "'";

    const jobs = [{
      id: 1,
      Business: {
        business_logo: '/images/job1.jpg',
        business_name: 'Chevron',
        business_city: 'Boston'
      },
      job_title: 'Cashier',
      job_description: "We're looking for an honest, and hard-working cashier for our swing shift M-F 2pm -10pm... ",
      job_type: 'F',
      job_compensation: '15/hr'
    }, {
      id: 2,
      Business: {
        business_logo: '/images/job2.jpg',
        business_name: '7-11 .inc',
        business_city: 'Boston'
      },
      job_title: 'Shift Lead',
      job_description: 'The shift lead will lead and mentor two other employees...',
      job_type: 'F',
      job_compensation: '40,000'
    }, {
      id: 3,
      Business: {
        business_logo: 'https://lh3.googleusercontent.com/-02vOdc80_bQ/UZVL2172aMI/AAAAAAAAd70/ZSZLkwMKas8/s451-no/600573_10151235197458057_878851817_n.jpg',
        business_name: 'Starbucks',
        business_city: 'San Fransico'
      },
      job_title: 'Barista',
      job_description: 'The barista will promote coffee consumption by educating customers; selling coffee and coffee grinding and brewing equipment, accessories, and supplies; preparing and serving a variety of coffee drinks, along with pastries and cookies',
      job_type: 'P',
      job_compensation: '11.50/hr'
    }, {
      id: 4,
      Business: {
        business_logo: '/images/job1.jpg',
        business_name: 'Chevron .inc',
        business_city: 'Boston'
      },
      job_title: 'Cashier',
      job_description: "We're looking for an honest, and hard-working cashier for our swing shift M-F 2pm -10pm... ",
      job_type: 'F',
      job_compensation: '10/hr'
    }].map(data => <JobOffer data={data} key={data.id} />)

    return (
    <div>
      <div id="slider" className="sl-slider-wrapper">

      			<div className="sl-slider">

      				<div className="sl-slide" data-orientation="horizontal" data-slice1-rotation="-25" data-slice2-rotation="-25" data-slice1-scale="2" data-slice2-scale="2">
      					<div className="sl-slide-inner">
      						<div className="bg-img bg-img-1"></div>
      						<div className="tint"></div>
      						<div className="slide-content">
      							<h2>Looking for a job?</h2>
      							<h3>There{single}s no better place to start</h3>
      							<p><a href="/search" className="btn btn-lg btn-default">Find a job</a></p>
      						</div>
      					</div>
      				</div>

      				<div className="sl-slide" data-orientation="vertical" data-slice1-rotation="10" data-slice2-rotation="-15" data-slice1-scale="1.5" data-slice2-scale="1.5">
      					<div className="sl-slide-inner">
      						<div className="bg-img bg-img-2"></div>
      						<div className="tint"></div>
      						<div className="slide-content">
      							<h2>Need an employee?</h2>
      							<h3>We{single}ve got perfect candidates</h3>
      							<p><a href="/signup" className="btn btn-lg btn-default">Post a job</a></p>
      						</div>
      					</div>
      				</div>

      				<div className="sl-slide" data-orientation="horizontal" data-slice1-rotation="3" data-slice2-rotation="3" data-slice1-scale="2" data-slice2-scale="1">
      					<div className="sl-slide-inner">
      						<div className="bg-img bg-img-3"></div>
      						<div className="tint"></div>
      						<div className="slide-content">
      							<h2>Evolving your career?</h2>
      							<h3>Find new opportunities here</h3>
      							<p><a href="/search" className="btn btn-lg btn-default">Find a job</a></p>
      						</div>
      					</div>
      				</div>

      				<div className="sl-slide" data-orientation="vertical" data-slice1-rotation="-5" data-slice2-rotation="25" data-slice1-scale="2" data-slice2-scale="1">
      					<div className="sl-slide-inner">
      						<div className="bg-img bg-img-4"></div>
      						<div className="tint"></div>
      						<div className="slide-content">
      							<h2>Extending your team?</h2>
      							<h3>Find a perfect match</h3>
      							<p><a href="/signup" className="btn btn-lg btn-default">Find a cadidate</a></p>
      						</div>
      					</div>
      				</div>

      			</div>

      			<nav id="nav-arrows" className="nav-arrows">
      				<span className="nav-arrow-prev">Previous</span>
      				<span className="nav-arrow-next">Next</span>
      			</nav>

      			<nav id="nav-dots" className="nav-dots">
      				<span className="nav-dot-current"></span>
      				<span></span>
      				<span></span>
      				<span></span>
      			</nav>

      		</div>

                  <div className="container">
                        <div className="row">
                              <div className="col-sm-12">
                                    <div className="col-sm-3"></div>
                                    <h1 className="col-sm-6" style={{padding:60+'px'}}>How it works</h1>
                                    <img style={{width: 1000+'px', height: 1300+'px', padding:20+'px'}} src="images/how_it_works.png" alt="Featured Candidate" className="img-responsive col-sm-3" />
                              </div>
                        </div>
                  </div>

      		<section id="jobs">
      			<div className="container">
      				<div className="row">
      					<div className="col-sm-8">
      						<h2>Recent Jobs</h2>

      						<div className="jobs">
                                          {jobs}
      						</div>

      						<a href="/signup" className="btn btn-primary">
                                                Sign up to Apply
      						</a>

      					</div>
                                    <div className="col-sm-1"></div>
      					<div className="col-sm-3">
      						<h2>Featured Candidate</h2>
      						<a href="#">
      							<img style={{width: 300+'px', height: 300+'px'}} src="http://blogs.cuit.columbia.edu/asj2122/files/2013/07/profile.jpg" alt="Featured Candidate" className="img-responsive" />
      							<div className="featured-job">
      								<div className="title">
      									<h4>John Doe</h4>
                                                            <h6>Skills: </h6>
      									<p>Cashier, Cleaning, Ordering, Customer Service</p>
      								</div>
      								<div className="data">
      									<span className="city"><i className="fa fa-map-marker"></i>Boston</span>
      									<span className="type full-time"><i className="fa fa-clock-o"></i><b>Looking for: </b>Full Time</span>      								</div>
      								<div className="description">I am a hard working Sales Representative that has experience with ordering product, customer service, point of sale and working as a barista.</div>
      							</div>
      						</a>
      					</div>
      				</div>
      			</div>
      		</section>

    </div>
    );
  }
});

module.exports = Landing;
