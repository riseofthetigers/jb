var React = require('react');
var ReactBootstrap = require('react-bootstrap');
var Button = ReactBootstrap.Button;
var Modal = ReactBootstrap.Modal;
var AppActions = require('../actions/app-actions');
var Navigation = require('react-router').Navigation;

const CandidateViewExperience = React.createClass({

    getInitialState: function() {
        return  {
            from: '',
            to: '',
            title: '',
            description: ''
        }
    },

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
                    <h4>{this.state.from} - {this.state.to}</h4>
                    <h5>{this.state.title}</h5>
                    <p>{this.state.description}</p>
                </div>
            </div>
        );
    }

});

const CandidateView = React.createClass({
  mixins: [Navigation],

  getInitialState: function() {
    return {
        name: '',
        phone_number: '',
        address: '',
        skills: '',
        candidate_picture: '',
        description: '',
        headline: '',
        education: [],
        experience: [],
        title: '',
        birthday: '',
        email: '',
        social: [],
        authorized: '',
        criminal: '',
        criminal_descripton: ''

    };
  },

  handleClick: function () {
  },

  render: function () {
      var skills = [];
      if(this.state.skills){
          skills = this.state.skills.split("\n");
      }
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 text-center">
                        <h1>{this.state.name}</h1>
                        <h4>{this.state.headline}</h4>
                    </div>
                </div>
            </div>


            <section id="jobs">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-8">
                            <article>
                                <img src={this.state.candidate_picture} alt="" className="pull-left" />
                                <p>{this.state.description}</p>
                                <h3>Skills</h3>
                                <ul>
                                    {
                                        _.map(skills, function(skill){
                                            return <li>{skill}</li>
                                        })
                                    }
                                </ul>
                                <h3>Work Experience</h3>
                                {
                                    _.map(this.state.experience, function(w){
                                        return <CandidateViewExperience data={w} type="work"/>
                                    })
                                }
                                <h3>Education</h3>
                                {
                                    _.map(this.state.education, function(e){
                                        return <CandidateViewExperience data={e} type="education"/>
                                    })
                                }
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
                                    <li><i className="fa fa-user"></i>{this.state.name}</li>
                                    <li><i className="fa fa-briefcase"></i>{this.state.title}</li>
                                    <li><i className="fa fa-birthday-cake"></i>{this.state.birthday}</li>
                                    <li><i className="fa fa-map-marker"></i>{this.state.address}</li>
                                    <li><i className="fa fa-phone"></i>{this.state.phone_number}</li>
                                    <li><i className="fa fa-envelope"></i><a href={'mailto:'+this.state.email}>Send an email</a></li>
                                </ul>
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
