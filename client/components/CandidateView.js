var React = require('react');
var ReactBootstrap = require('react-bootstrap');
var Button = ReactBootstrap.Button;
var Modal = ReactBootstrap.Modal;
var AppActions = require('../actions/app-actions');
var Navigation = require('react-router').Navigation;

const CandidateViewExperience = React.createClass({

    getDefaultProps: function() {
        return {
            type: 'work'
        }
    },

    render: function() {
        var icon = 'fa fa-briefcase';
        if(this.props.type == 'education'){
            icon = 'fa fa-graduation-cap';
        }


        return (
            <div className="row work-experience">
                <div className="col-sm-2">
                    <div className="img-circle">
                        <i className={icon}></i>
                    </div>
                </div>
                <div className="col-sm-10">
                    <h4>April 2014 - Now</h4>
                    <h5>Designer</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel sapien nibh. Mauris et neque tellus. In tellus felis, ornare in urna commodo, volutpat gravida sem. Integer vitae lorem sit amet nibh ornare varius. Sed sollicitudin leo quis dui dictum.</p>
                </div>
            </div>
        );
    }

});

const CandidateView = React.createClass({
  mixins: [Navigation],

  getInitialState: function() {
    return {
    };
  },

  handleClick: function () {
  },

  render: function () {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 text-center">
                        <h1>Andy Spencer</h1>
                        <h4>'Honest Cashier with 10 years of experience'</h4>
                    </div>
                </div>
            </div>


            <section id="jobs">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-8">
                            <article>
                                <img src="images/person1.jpg" alt="" className="pull-left" />
                                <p>Maecenas mollis dictum lectus quis scelerisque. Nulla at rutrum ipsum. Praesent augue quam, facilisis vitae felis vel, convallis convallis nisi. Donec maximus accumsan purus vel tempus. Aenean pretium luctus velit id fermentum. Aenean non velit non nulla interdum venenatis. Integer in libero sagittis, consequat est quis, commodo odio. Aliquam eu vulputate neque. Nunc et massa leo. Vestibulum a pretium dolor. Proin et fermentum sapien. Cras malesuada neque ac purus fermentum, a placerat quam malesuada. Quisque sollicitudin tellus a ex eleifend mattis. In vitae ipsum in mauris vestibulum imperdiet.</p>
                                <p>Maecenas mollis dictum lectus quis scelerisque. Nulla at rutrum ipsum. Praesent augue quam, facilisis vitae felis vel, convallis convallis nisi. Donec maximus accumsan purus vel tempus. Aenean pretium luctus velit id fermentum. Aenean non velit non nulla interdum venenatis. Integer in libero sagittis, consequat est quis, commodo odio. Aliquam eu vulputate neque. Nunc et massa leo. Vestibulum a pretium dolor. Proin et fermentum sapien. Cras malesuada neque ac purus fermentum, a placerat quam malesuada. Quisque sollicitudin tellus a ex eleifend mattis. In vitae ipsum in mauris vestibulum imperdiet.</p>
                                <h3>Skills</h3>
                                <ul>
                                    <li>Aliquam rhoncus justo eget tellus scelerisque, at mollis mi aliquam.</li>
                                    <li>Quisque pretium convallis pulvinar.</li>
                                    <li>Nulla rutrum nisi mi, iaculis commodo nibh lobortis sed.</li>
                                    <li>Sed pulvinar, nunc vitae molestie dapibus, lacus dolor dignissim sapien.</li>
                                    <li>Pellentesque ipsum ex, imperdiet quis consequat sed, consectetur ut ante.</li>
                                    <li>Aliquam libero felis, mollis vitae elementum vel, bibendum eu tortor.</li>
                                    <li>Morbi rhoncus luctus interdum.</li>
                                </ul>
                                <h3>Work Experience</h3>
                                <CandidateViewExperience type="work"/>
                                <CandidateViewExperience type="work"/>
                                <CandidateViewExperience type="work"/>

                                <h3>Education</h3>
                                <CandidateViewExperience type="education"/>
                                <CandidateViewExperience type="education"/>
                                <CandidateViewExperience type="education"/>
                                <p>&nbsp;</p>
                                <p><a href="#" className="btn btn-primary btn-lg"><i className="fa fa-arrow-down"></i> Download Profile</a></p>
                            </article>
                        </div>
                        <div className="col-sm-4" id="sidebar">
                            <div className="sidebar-widget" id="share">
                                <h2>Share Profile</h2>
                                <ul>
                                    <li><a href="https://www.facebook.com/sharer/sharer.php?u=http://www.coffeecreamthemes.com/themes/jobseek/site/job-details.html"><i className="fa fa-facebook"></i></a></li>
                                    <li><a href="https://twitter.com/home?status=http://www.coffeecreamthemes.com/themes/jobseek/site/job-details.html"><i className="fa fa-twitter"></i></a></li>
                                    <li><a href="https://plus.google.com/share?url=http://www.coffeecreamthemes.com/themes/jobseek/site/job-details.html"><i className="fa fa-google-plus"></i></a></li>
                                    <li><a href="https://www.linkedin.com/shareArticle?mini=true&amp;url=http://www.coffeecreamthemes.com/themes/jobseek/site/job-details.html&amp;title=Jobseek%20-%20Job%20Board%20Responsive%20HTML%20Template&amp;summary=&amp;source="><i className="fa fa-linkedin"></i></a></li>
                                </ul>
                            </div>
                            <hr/>
                            <div className="sidebar-widget" id="widget-contact">
                                <h2>Contact</h2>
                                <ul>
                                    <li><i className="fa fa-user"></i>Andy Spencer</li>
                                    <li><i className="fa fa-briefcase"></i>Senior Web Designer</li>
                                    <li><i className="fa fa-birthday-cake"></i>28/08/1983</li>
                                    <li><i className="fa fa-map-marker"></i>New York City</li>
                                    <li><i className="fa fa-phone"></i>01.22.987.8392</li>
                                    <li><i className="fa fa-envelope"></i><a href="mailto:andy.spencer@yourdomain.com">Send an email</a></li>
                                </ul>
                            </div>
                            <hr/>
                            <div className="sidebar-widget" id="skills">
                                <h2>Key skills</h2>
                                <a className="badge">Cleaning</a>
                                <a className="badge">Customer Service</a>
                                <a className="badge">Cash handling</a>
                                <a className="badge">Produce Ordering</a>
                                <a className="badge">Sales Forcasting</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
  }

});



module.exports = CandidateView;
