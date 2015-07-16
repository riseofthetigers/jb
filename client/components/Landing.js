var React  = require('react');

var Landing = React.createClass({
  render: function () {
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
      							<h3>There’s no better place to start</h3>
      							<p><a href="jobs.html" className="btn btn-lg btn-default">Find a job</a></p>
      						</div>
      					</div>
      				</div>
      			
      				<div className="sl-slide" data-orientation="vertical" data-slice1-rotation="10" data-slice2-rotation="-15" data-slice1-scale="1.5" data-slice2-scale="1.5">
      					<div className="sl-slide-inner">
      						<div className="bg-img bg-img-2"></div>
      						<div className="tint"></div>
      						<div className="slide-content">
      							<h2>Need an employee?</h2>
      							<h3>We've got perfect candidates</h3>
      							<p><a href="candidates.html" className="btn btn-lg btn-default">Post a job</a></p>
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
      							<p><a href="jobs.html" className="btn btn-lg btn-default">Find a job</a></p>
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
      							<p><a href="candidates.html" className="btn btn-lg btn-default">Find a cadidate</a></p>
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


      		<section id="jobs">
      			<div className="container">
      				<div className="row">
      					<div className="col-sm-8">
      						<h2>Recent Jobs</h2>

      						<div className="jobs">
      							
      							<a href="#">
      								<div className="featured"></div>
      								<img src="images/job1.jpg" alt="" className="img-circle" />
      								<div className="title">
      									<h5>Web Designer</h5>
      									<p>Amazon Inc.</p>
      								</div>
      								<div className="data">
      									<span className="city"><i className="fa fa-map-marker"></i>New York City</span>
      									<span className="type full-time"><i className="fa fa-clock-o"></i>Full Time</span>
      									<span className="sallary"><i className="fa fa-dollar"></i>45,000</span>
      								</div>
      							</a>
      							
      							<a href="#">
      								<div className="featured"></div>
      								<img src="images/job2.jpg" alt="" className="img-circle" />
      								<div className="title">
      									<h5>Senior Web Developer</h5>
      									<p>Dropbox Inc.</p>
      								</div>
      								<div className="data">
      									<span className="city"><i className="fa fa-map-marker"></i>Los Angeles</span>
      									<span className="type part-time"><i className="fa fa-clock-o"></i>Part Time</span>
      									<span className="sallary"><i className="fa fa-dollar"></i>85,000</span>
      								</div>
      							</a>
      							
      							<a href="#">
      								<img src="images/job3.jpg" alt="" className="img-circle" />
      								<div className="title">
      									<h5>Project Manager</h5>
      									<p>Apple Inc.</p>
      								</div>
      								<div className="data">
      									<span className="city"><i className="fa fa-map-marker"></i>San Francisco</span>
      									<span className="type freelance"><i className="fa fa-clock-o"></i>Freelance</span>
      									<span className="sallary"><i className="fa fa-dollar"></i>60,000</span>
      								</div>
      							</a>
      							
      							<a href="#">
      								<img src="images/job4.jpg" alt="" className="img-circle" />
      								<div className="title">
      									<h5>Key Account Manager</h5>
      									<p>Dell Inc.</p>
      								</div>
      								<div className="data">
      									<span className="city"><i className="fa fa-map-marker"></i>Boston</span>
      									<span className="type full-time"><i className="fa fa-clock-o"></i>Full Time</span>
      									<span className="sallary"><i className="fa fa-dollar"></i>55,000</span>
      								</div>
      							</a>
      							
      							<a href="#">
      								<img src="images/job5.jpg" alt="" className="img-circle" />
      								<div className="title">
      									<h5>Front End Developer</h5>
      									<p>Ebay Inc.</p>
      								</div>
      								<div className="data">
      									<span className="city"><i className="fa fa-map-marker"></i>Chicago</span>
      									<span className="type part-time"><i className="fa fa-clock-o"></i>Part Time</span>
      									<span className="sallary"><i className="fa fa-dollar"></i>75,000</span>
      								</div>
      							</a>
      							
      							<a href="#" className="hidden-job">
      								<img src="images/job1.jpg" alt="" className="img-circle" />
      								<div className="title">
      									<h5>Web Designer</h5>
      									<p>Amazon Inc.</p>
      								</div>
      								<div className="data">
      									<span className="city"><i className="fa fa-map-marker"></i>New York City</span>
      									<span className="type full-time"><i className="fa fa-clock-o"></i>Full Time</span>
      									<span className="sallary"><i className="fa fa-dollar"></i>45,000</span>
      								</div>
      							</a>
      							
      							<a href="#" className="hidden-job">
      								<img src="images/job2.jpg" alt="" className="img-circle" />
      								<div className="title">
      									<h5>Senior Web Developer</h5>
      									<p>Dropbox Inc.</p>
      								</div>
      								<div className="data">
      									<span className="city"><i className="fa fa-map-marker"></i>Los Angeles</span>
      									<span className="type part-time"><i className="fa fa-clock-o"></i>Part Time</span>
      									<span className="sallary"><i className="fa fa-dollar"></i>85,000</span>
      								</div>
      							</a>
      							
      							<a href="#" className="hidden-job">
      								<img src="images/job3.jpg" alt="" className="img-circle" />
      								<div className="title">
      									<h5>Project Manager</h5>
      									<p>Apple Inc.</p>
      								</div>
      								<div className="data">
      									<span className="city"><i className="fa fa-map-marker"></i>San Francisco</span>
      									<span className="type freelance"><i className="fa fa-clock-o"></i>Freelance</span>
      									<span className="sallary"><i className="fa fa-dollar"></i>60,000</span>
      								</div>
      							</a>
      							
      							<a href="#" className="hidden-job">
      								<img src="images/job4.jpg" alt="" className="img-circle" />
      								<div className="title">
      									<h5>Key Account Manager</h5>
      									<p>Dell Inc.</p>
      								</div>
      								<div className="data">
      									<span className="city"><i className="fa fa-map-marker"></i>Boston</span>
      									<span className="type full-time"><i className="fa fa-clock-o"></i>Full Time</span>
      									<span className="sallary"><i className="fa fa-dollar"></i>55,000</span>
      								</div>
      							</a>
      							
      							<a href="#" className="hidden-job">
      								<img src="images/job5.jpg" alt="" className="img-circle" />
      								<div className="title">
      									<h5>Front End Developer</h5>
      									<p>Ebay Inc.</p>
      								</div>
      								<div className="data">
      									<span className="city"><i className="fa fa-map-marker"></i>Chicago</span>
      									<span className="type part-time"><i className="fa fa-clock-o"></i>Part Time</span>
      									<span className="sallary"><i className="fa fa-dollar"></i>75,000</span>
      								</div>
      							</a>

      						</div>

      						<a className="btn btn-primary" id="more-jobs">
      							<span className="more">Show More Jobs <i className="fa fa-arrow-down"></i></span>
      							<span className="less">Show Less Jobs <i className="fa fa-arrow-up"></i></span>
      						</a>

      					</div>
      					<div className="col-sm-4">
      						<h2>Featured Jobs</h2>
      						<a href="#">
      							<img src="http://placehold.it/400x265.jpg" alt="Featured Job" className="img-responsive" />
      							<div className="featured-job">
      								<img src="images/job1.jpg" alt="" className="img-circle" />
      								<div className="title">
      									<h5>Web Designer</h5>
      									<p>Amazon</p>
      								</div>
      								<div className="data">
      									<span className="city"><i className="fa fa-map-marker"></i>New York City</span>
      									<span className="type full-time"><i className="fa fa-clock-o"></i>Full Time</span>
      									<span className="sallary"><i className="fa fa-dollar"></i>45,000</span>
      								</div>
      								<div className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tristique euismod lorem, a consequat orci consequat a. Donec ullamcorper tincidunt nunc, ut aliquam est pellentesque porta. In neque erat, malesuada sit amet orci ac, laoreet laoreet mauris.</div>
      							</div>
      						</a>
      					</div>
      				</div>
      			</div>
      		</section>

      		<section id="companies" className="color1">
      			<div className="container">
      				<div className="row">
      					<div className="col-sm-12">
      						<h2>Featured Companies</h2>
      						<ul id="featured-companies" className="row">
      							<li className="col-sm-4 col-md-3">
      								<a href="company.html">
      									<img src="http://placehold.it/220x100.jpg" alt="" />
      									<span className="badge">12</span>
      								</a>
      							</li>
      							<li className="col-sm-4 col-md-3">
      								<a href="company.html">
      									<img src="http://placehold.it/220x100.jpg" alt="" />
      									<span className="badge">4</span>
      								</a>
      							</li>
      							<li className="col-sm-4 col-md-3">
      								<a href="company.html">
      									<img src="http://placehold.it/220x100.jpg" alt="" />
      									<span className="badge">8</span>
      								</a>
      							</li>
      							<li className="col-sm-4 col-md-3">
      								<a href="company.html">
      									<img src="http://placehold.it/220x100.jpg" alt="" />
      									<span className="badge">9</span>
      								</a>
      							</li>
      							<li className="col-sm-4 col-md-3">
      								<a href="company.html">
      									<img src="http://placehold.it/220x100.jpg" alt="" />
      									<span className="badge">13</span>
      								</a>
      							</li>
      							<li className="col-sm-4 col-md-3">
      								<a href="company.html">
      									<img src="http://placehold.it/220x100.jpg" alt="" />
      									<span className="badge">6</span>
      								</a>
      							</li>
      							<li className="col-sm-4 col-md-3">
      								<a href="company.html">
      									<img src="http://placehold.it/220x100.jpg" alt="" />
      									<span className="badge">7</span>
      								</a>
      							</li>
      							<li className="col-sm-4 col-md-3">
      								<a href="company.html">
      									<img src="http://placehold.it/220x100.jpg" alt="" />
      									<span className="badge">15</span>
      								</a>
      							</li>
      							<li className="col-sm-4 col-md-3">
      								<a href="company.html">
      									<img src="http://placehold.it/220x100.jpg" alt="" />
      									<span className="badge">6</span>
      								</a>
      							</li>
      							<li className="col-sm-4 col-md-3">
      								<a href="company.html">
      									<img src="http://placehold.it/220x100.jpg" alt="" />
      									<span className="badge">11</span>
      								</a>
      							</li>
      							<li className="col-sm-4 col-md-3">
      								<a href="company.html">
      									<img src="http://placehold.it/220x100.jpg" alt="" />
      									<span className="badge">14</span>
      								</a>
      							</li>
      							<li className="col-sm-4 col-md-3">
      								<a href="company.html">
      									<img src="http://placehold.it/220x100.jpg" alt="" />
      									<span className="badge">3</span>
      								</a>
      							</li>
      						</ul>
      					</div>
      				</div>
      			</div>
      		</section>

      		<section id="stats" className="parallax text-center">
      			<div className="tint"></div>
      			<div className="container">
      				<div className="row">
      					<div className="col-sm-12">
      						<h1>Jobseek Stats</h1>
      						<h4>How many people we’ve helped</h4>
      					</div>
      				</div>
      				<div className="row" id="counter">
      					
      					<div className="counter">
      						<div className="number">4,329</div>
      						<div className="description">Members</div>
      					</div>
      				
      					<div className="counter">
      						<div className="number">894</div>
      						<div className="description">Jobs</div>
      					</div>
      				
      					<div className="counter">
      						<div className="number">1,482</div>
      						<div className="description">Resumes</div>
      					</div>
      				
      					<div className="counter">
      						<div className="number">83</div>
      						<div className="description">Companies</div>
      					</div>

      				</div>
      				<div className="row">
      					<div className="col-sm-12">
      						<p><a className="link-register btn btn-primary">Join Us</a></p>
      					</div>
      				</div>
      			</div>
      		</section>

      		<section id="how">
      			<div className="container">
      				<div className="row">
      					<div className="col-sm-12">
      						<h2>How does it work</h2>
      					</div>
      				</div>
      				<div className="row">
      					<div className="col-sm-6">
      						<p>Curabitur et lorem a massa tempus aliquam. Aenean aliquam volutpat gravida. Pellentesque in neque nec tortor sagittis tempor quis in lectus. Vestibulum vehicula aliquet elit ut porta. Sed ipsum felis, interdum blandit purus sed, volutpat ultricies sem. Maecenas feugiat, lectus vitae luctus feugiat, nulla nisl dignissim velit, nec malesuada ligula orci et metus. In vulputate laoreet luctus.</p>
      						<p>Sed hendrerit ligula tortor, eget iaculis velit vestibulum a. Phasellus convallis nisl pretium nisi porttitor, eu scelerisque mauris consectetur. Fusce pretium, dui placerat laoreet consectetur, nibh diam accumsan enim, sed fringilla turpis quam quis ex. Mauris a rhoncus tortor, a cursus urna. Sed et condimentum quam. Nunc dictum erat ut ante aliquam porttitor. Donec diam eros, bibendum et scelerisque egestas, aliquet ut nulla.</p>
      						<p><a href="about.html" className="btn btn-primary">Learn More</a></p>
      					</div>
      					<div className="col-sm-6">
      						<div className="video-wrapper">
      							<iframe src="https://player.vimeo.com/video/121698707" allowfullscreen></iframe>
      						</div>
      					</div>
      				</div>
      			</div>
      		</section>

      		<section id="app" className="color2">
      			<div className="container">
      				<div className="row">
      					<div className="col-sm-5">
      						<div id="phone"></div>
      					</div>
      					<div className="col-sm-offset-1 col-sm-6">
      						<p>&nbsp;</p>
      						<h2>Get Jobseek app</h2>
      						<p>Curabitur et lorem a massa tempus aliquam. Aenean aliquam volutpat gravida. Pellentesque in neque nec tortor sagittis tempor quis in lectus. Vestibulum vehicula aliquet elit ut porta. Sed ipsum felis, interdum blandit purus sed, volutpat ultricies sem. Maecenas feugiat, lectus vitae luctus feugiat, nulla nisl dignissim velit, nec malesuada ligula orci et metus. In vulputate laoreet luctus.</p>
      						<p>
      							<a href="#" className="btn btn-default"><i className="fa fa-apple"></i> IOS</a>
      							<a href="#" className="btn btn-default"><i className="fa fa-android"></i> Android</a>
      						</p>
      						<p>&nbsp;</p>
      					</div>
      				</div>
      			</div>
      		</section>

      		<section id="pricing" className="text-center">
      			<div className="container">
      				<div className="row">
      					<div className="col-sm-12">
      						<h1>Plans &amp; Pricing</h1>
      						<h4>Choose a package that fits your needs</h4>
      					</div>
      				</div>
      				<div className="row pricing">
      					<div className="col-sm-3">
      						<ul>
      							<li className="title">Free</li>
      							<li className="price">$0</li>
      							<li>1 job posting</li>
      							<li>No featured jobs</li>
      							<li>Displayed for 5 days</li>
      							<li><a href="post-a-job.html" className="btn btn-primary">Choose</a></li>
      						</ul>
      					</div>
      					<div className="col-sm-3">
      						<ul className="popular">
      							<li className="title">Startup</li>
      							<li className="price">$19</li>
      							<li>1 job posting</li>
      							<li>No featured jobs</li>
      							<li>Displayed for 30 days</li>
      							<li><a href="post-a-job.html" className="btn btn-primary">Choose</a></li>
      						</ul>
      					</div>
      					<div className="col-sm-3">
      						<ul>
      							<li className="title">Company</li>
      							<li className="price">$29</li>
      							<li>3 job postings</li>
      							<li>No featured jobs</li>
      							<li>Displayed for 60 days</li>
      							<li><a href="post-a-job.html" className="btn btn-primary">Choose</a></li>
      						</ul>
      					</div>
      					<div className="col-sm-3">
      						<ul>
      							<li className="title">Enterprise</li>
      							<li className="price">$39</li>
      							<li>5 job postings</li>
      							<li>3 featured jobs</li>
      							<li>Displayed for 90 days</li>
      							<li><a href="post-a-job.html" className="btn btn-primary">Choose</a></li>
      						</ul>
      					</div>
      				</div>
      			</div>
      		</section>

      		<section id="testimonials" className="parallax text-center">
      			<div className="tint"></div>
      			<div className="container">
      				<div className="row">
      					<div className="col-sm-12">
      						<h1>Testimonials</h1>
      						<h4>Kind words from happy members</h4>
      						<div className="owl-carousel">

      							<div>
      								<div className="col-sm-3 col-md-2">
      									<img src="http://placehold.it/140x140.jpg" className="img-circle img-responsive" alt="testimonial" />
      								</div>
      								<div className="col-sm-9 col-md-10">
      									<blockquote>
      										<p>Thanks for the great service. Jobseek has completely surpassed our expectations.
      										Jobseek is the most valuable business resource we have ever purchased.</p>
      										<footer>
      											Anthony Walsh
      											<cite title="Brand Manager in Ebay Inc.">Brand Manager in Ebay Inc.</cite>
      										</footer>
      									</blockquote>
      								</div>
      							</div>

      							<div>
      								<div className="col-sm-3 col-md-2">
      									<img src="http://placehold.it/140x140.jpg" className="img-circle img-responsive" alt="testimonial" />
      								</div>
      								<div className="col-sm-9 col-md-10">
      									<blockquote>
      										<p>I didn't even need training. I couldn't have asked for more than this.
      										It really saves me time and effort. Jobseek is exactly what our business has been lacking.
      										I would be lost without Jobseek.</p>
      										<footer>
      											Becky Daniels
      											<cite title="HR Manager in Apple Inc.">HR Manager in Apple Inc.</cite>
      										</footer>
      									</blockquote>
      								</div>
      							</div>

      							<div>
      								<div className="col-sm-3 col-md-2">
      									<img src="http://placehold.it/140x140.jpg" className="img-circle img-responsive" alt="testimonial" />
      								</div>
      								<div className="col-sm-9 col-md-10">
      									<blockquote>
      										<p>I just can't get enough of Jobseek. I want to get a T-Shirt with Jobseek on it so I can show it off to everyone. This is simply unbelievable!</p>
      										<footer>
      											Erick Olson
      											<cite title="Key Account Manager in Twitter Inc.">Key Account Manager in Twitter Inc.</cite>
      										</footer>
      									</blockquote>
      								</div>
      							</div>

      							<div>
      								<div className="col-sm-3 col-md-2">
      									<img src="http://placehold.it/140x140.jpg" className="img-circle img-responsive" alt="testimonial" />
      								</div>
      								<div className="col-sm-9 col-md-10">
      									<blockquote>
      										<p>Jobseek is worth much more than I paid. I'm good to go. I couldn't have asked for more than this. Keep up the excellent work.</p>
      										<footer>
      											Nadine Boyd
      											<cite title="CEO in Company Name">CEO in Company Name</cite>
      										</footer>
      									</blockquote>
      								</div>
      							</div>

      						</div>
      						<p><a href="testimonials.html" className="btn btn-primary">Read All</a></p>
      					</div>
      				</div>
      			</div>
      		</section>

      		<section id="blog">
      			<div className="container">
      				<div className="row text-center">
      					<div className="col-sm-12">
      						<h1>Latest News</h1>
      						<h4>Specially crafted job posts everyday</h4>
      					</div>
      				</div>
      				<div className="row">
      					<div className="col-sm-12">
      						<div className="owl-carousel">

      							<div>
      								<img src="http://placehold.it/800x530.jpg" className="img-responsive" alt="Blog Post" />
      								<h4>Lorem ipsum dolor sit amet</h4>
      								<h5>
      									<span><i className="fa fa-calendar"></i>28.08.2015</span>
      									<span><i className="fa fa-comment"></i>8 Comments</span>
      								</h5>
      								<p>Consectetur adipiscing elit. Duis lobortis tincidunt pretium. Suspendisse ullamcorper quis neque quis viverra. Cras ut leo in lectus gravida fringilla. In hac habitasse platea dictumst. Fusce facilisis sapien dolor, non fermentum magna tempus ac. Fusce quis eros sit amet magna aliquam euismod ac eget libero. Fusce accumsan in eros vitae posuere.</p>
      								<p><a href="post.html" className="btn btn-primary">Read more</a></p>
      							</div>

      							<div>
      								<img src="http://placehold.it/800x530.jpg" className="img-responsive" alt="Blog Post" />
      								<h4>Lorem ipsum dolor sit amet</h4>
      								<h5>
      									<span><i className="fa fa-calendar"></i>28.08.2015</span>
      									<span><i className="fa fa-comment"></i>8 Comments</span>
      								</h5>
      								<p>Consectetur adipiscing elit. Duis lobortis tincidunt pretium. Suspendisse ullamcorper quis neque quis viverra. Cras ut leo in lectus gravida fringilla. In hac habitasse platea dictumst. Fusce facilisis sapien dolor, non fermentum magna tempus ac. Fusce quis eros sit amet magna aliquam euismod ac eget libero. Fusce accumsan in eros vitae posuere.</p>
      								<p><a href="post.html" className="btn btn-primary">Read more</a></p>
      							</div>

      							<div>
      								<img src="http://placehold.it/800x530.jpg" className="img-responsive" alt="Blog Post" />
      								<h4>Lorem ipsum dolor sit amet</h4>
      								<h5>
      									<span><i className="fa fa-calendar"></i>28.08.2015</span>
      									<span><i className="fa fa-comment"></i>8 Comments</span>
      								</h5>
      								<p>Consectetur adipiscing elit. Duis lobortis tincidunt pretium. Suspendisse ullamcorper quis neque quis viverra. Cras ut leo in lectus gravida fringilla. In hac habitasse platea dictumst. Fusce facilisis sapien dolor, non fermentum magna tempus ac. Fusce quis eros sit amet magna aliquam euismod ac eget libero. Fusce accumsan in eros vitae posuere.</p>
      								<p><a href="post.html" className="btn btn-primary">Read more</a></p>
      							</div>

      							<div>
      								<img src="http://placehold.it/800x530.jpg" className="img-responsive" alt="Blog Post" />
      								<h4>Lorem ipsum dolor sit amet</h4>
      								<h5>
      									<span><i className="fa fa-calendar"></i>28.08.2015</span>
      									<span><i className="fa fa-comment"></i>8 Comments</span>
      								</h5>
      								<p>Consectetur adipiscing elit. Duis lobortis tincidunt pretium. Suspendisse ullamcorper quis neque quis viverra. Cras ut leo in lectus gravida fringilla. In hac habitasse platea dictumst. Fusce facilisis sapien dolor, non fermentum magna tempus ac. Fusce quis eros sit amet magna aliquam euismod ac eget libero. Fusce accumsan in eros vitae posuere.</p>
      								<p><a href="post.html" className="btn btn-primary">Read more</a></p>
      							</div>

      							<div>
      								<img src="http://placehold.it/800x530.jpg" className="img-responsive" alt="Blog Post" />
      								<h4>Lorem ipsum dolor sit amet</h4>
      								<h5>
      									<span><i className="fa fa-calendar"></i>28.08.2015</span>
      									<span><i className="fa fa-comment"></i>8 Comments</span>
      								</h5>
      								<p>Consectetur adipiscing elit. Duis lobortis tincidunt pretium. Suspendisse ullamcorper quis neque quis viverra. Cras ut leo in lectus gravida fringilla. In hac habitasse platea dictumst. Fusce facilisis sapien dolor, non fermentum magna tempus ac. Fusce quis eros sit amet magna aliquam euismod ac eget libero. Fusce accumsan in eros vitae posuere.</p>
      								<p><a href="post.html" className="btn btn-primary">Read more</a></p>
      							</div>

      						</div>
      					</div>
      				</div>
      			</div>
      		</section>

      		<section id="contact" className="color2">
      			<div className="container">
      				<div className="row">
      					<div className="col-sm-6">
      						<h2>Drop us a line</h2>
      						<form role="form" name="contact-form" id="contact-form" action="process.php">
      							<div className="form-group" id="contact-name-group">
      								<label for="contact-name" className="sr-only">Name</label>
      								<input type="text" className="form-control" id="contact-name" placeholder="Name"/>
      							</div>
      							<div className="form-group" id="contact-email-group">
      								<label for="contact-email" className="sr-only">Email</label>
      								<input type="email" className="form-control" id="contact-email" placeholder="Email"/>
      							</div>
      							<div className="form-group" id="contact-subject-group">
      								<label for="contact-subject" className="sr-only">Subject</label>
      								<input type="text" className="form-control" id="contact-subject" placeholder="Subject"/>
      							</div>
      							<div className="form-group" id="contact-message-group">
      								<label for="contact-message" className="sr-only">Message</label>
      								<textarea className="form-control" rows="3" id="contact-message"></textarea>
      							</div>
      							<button type="submit" className="btn btn-default">Submit</button>
      						</form>
      					</div>
      				</div>
      			</div>
      		</section>

      		<section id="clients">
      			<div className="container">
      				<div className="row text-center">
      					<div className="col-sm-12">
      						<h1>Happy Clients</h1>
      						<h4>Some of the many companies we’ve helped</h4>
      						<div className="owl-carousel">
      							
      							<div>
      								<a href="company.html"><img src="http://placehold.it/133x69.gif" alt="" /></a>
      							</div>
      							
      							<div>
      								<a href="company.html"><img src="http://placehold.it/133x69.gif" alt="" /></a>
      							</div>
      							
      							<div>
      								<a href="company.html"><img src="http://placehold.it/133x69.gif" alt="" /></a>
      							</div>
      							
      							<div>
      								<a href="company.html"><img src="http://placehold.it/133x69.gif" alt="" /></a>
      							</div>
      							
      							<div>
      								<a href="company.html"><img src="http://placehold.it/133x69.gif" alt="" /></a>
      							</div>
      							
      							<div>
      								<a href="company.html"><img src="http://placehold.it/133x69.gif" alt="" /></a>
      							</div>

      						</div>
      					</div>
      				</div>
      			</div>
      		</section>
    </div>
    );
  }
});

module.exports = Landing;

