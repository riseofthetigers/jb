var React = require('react/addons');
var ReactBootstrap = require('react-bootstrap');
var Button = ReactBootstrap.Button;
var Modal = ReactBootstrap.Modal;
var AppActions = require('../actions/app-actions');
var Navigation = require('react-router').Navigation;


const CandidateExperience = React.createClass({
    mixins: [React.addons.LinkedStateMixin],

    getInitialState: function() {
        return  {
            date: '',
            title: '',
            responsabilities: '',
            employer: ''
        }
    },

    getDefaultProps: function() {
        return {
        }
    },

    render: function() {
        return (
            <div>
                <div className="row experience">
                    <div className="col-sm-6">
                        <div className="form-group" id="resume-employer-group">
                            <label htmlFor="resume-employer">Employer</label>
                            <input type="text" className="form-control" valueLink={this.linkState('employer')} id="resume-employer" placeholder="Company name"/>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group" id="resume-experience-dates-group">
                            <label htmlFor="resume-experience-dates">Start/End Date</label>
                            <input type="text" className="form-control" valueLink={this.linkState('date')} id="resume-experience-dates" placeholder="e.g. April 2010 - June 2013"/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6">
                        <div className="form-group" id="resume-job-title-group">
                            <label htmlFor="resume-job-title">Job Title</label>
                            <input type="text" className="form-control" id="resume-job-title" valueLink={this.linkState('title')} placeholder="e.g. Cashier"/>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group" id="resume-responsibilities-group">
                            <label htmlFor="resume-responsibilities">Responsibilities</label>
                            <input type="text" className="form-control" valueLink={this.linkState('responsabilities')} id="resume-responsibilities" placeholder="e.g. Developing new websites"/>
                        </div>
                    </div>
                </div>
            </div>

        );
    }

});

const CandidateEducation = React.createClass({
    mixins: [React.addons.LinkedStateMixin],

    getInitialState: function() {
        return  {
            date: '',
            school: '',
            qualifications: '',
            notes: ''
        }
    },

    render: function() {
        return (
            <div>
                <div className="row education">
                    <div className="col-sm-6">
                        <div className="form-group" id="resume-school-group">
                            <label htmlFor="resume-school">School Name</label>
                            <input type="text" valueLink={this.linkState('school')} className="form-control" id="resume-school" placeholder="School name, city and country"/>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group" id="resume-education-dates-group">
                            <label htmlFor="resume-education-dates">Start/End Date</label>
                            <input type="text" className="form-control" valueLink={this.linkState('date')} id="resume-education-dates" placeholder="e.g. April 2010 - June 2013"/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6">
                        <div className="form-group" id="resume-qualifications-group">
                            <label htmlFor="resume-qualifications">Qualifications</label>
                            <input type="text" className="form-control" valueLink={this.linkState('qualifications')} id="resume-qualifications" placeholder="e.g. Master Engineer"/>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group" id="resume-notes-group">
                            <label htmlFor="resume-notes">Notes</label>
                            <input type="text" className="form-control" valueLink={this.linkState('notes')} id="resume-notes" placeholder="Any achievements"/>
                        </div>
                    </div>
                </div>
            </div>

        );
    }

});


const CandidateProfileEdit = React.createClass({
  mixins: [Navigation, React.addons.LinkedStateMixin],

  getInitialState: function() {
    return {
        description: '',
        name: '',
        headline: '',
        photo: '',
        skils: '',
        education: [],
        experience: [],
        title: '',
        birthday: '',
        phone: '',
        email: '',
        city: '',
        social: []
    };
  },

  handleClick: function () {
  },

  render: function () {
    return (
        <div className="container">
            <div className="row text-center">
                <div className="col-sm-12">
                    <h1>{this.state.name}</h1>
                        <img style={{width: '400px', height: '400px'}} src="images/person1.jpg" alt="" className="img-circle" />
                </div>
            </div>

            <form>

                <div className="row">
                    <div className="col-sm-12">
                        <h2>Profile</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6">
                        <div className="form-group" id="resume-name-group">
                            <label htmlFor="resume-name">Name</label>
                            <input type="text" className="form-control" valueLink={this.linkState('name')} id="resume-name" placeholder="e.g. John Doe"/>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group" id="resume-photo-group">
                            <label htmlFor="resume-photo">Photo</label>
                            <input type="file" id="resume-photo"/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6">
                        <div className="form-group" id="resume-title-group">
                            <label htmlFor="resume-title">Title</label>
                            <input type="text" className="form-control" valueLink={this.linkState('title')} id="resume-title" placeholder="e.g. Web Designer"/>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group" id="resume-video-group">
                            <label htmlFor="resume-video">Birthday</label>
                            <input type="text" className="form-control" valueLink={this.linkState('birthday')}  placeholder="mm/dd/yyyy"/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6">
                        <div className="form-group" id="resume-email-group">
                            <label htmlFor="resume-email">Email</label>
                            <input type="email" className="form-control" valueLink={this.linkState('email')}  placeholder="you@yourdomain.com"/>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group" id="resume-category-group">
                            <label htmlFor="resume-category">Phone</label>
                            <input type="text" valueLink={this.linkState('phone')} className="form-control" placeholder="555 555 5555"/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6">
                        <div className="form-group" id="resume-location-group">
                            <label htmlFor="resume-location">Location</label>
                            <input type="text" className="form-control" valueLink={this.linkState('city')} id="resume-location" placeholder="e.g. New York City"/>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group" id="resume-skills-group">
                            <label htmlFor="resume-skills">Skills</label>
                            <input type="text" className="form-control" id="resume-skills" valueLink={this.linkState('skills')} placeholder="e.g. Cleaning, Ordering, Customer Service"/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <div className="form-group wysiwyg" id="resume-content-group">
                            <label>Your Summary</label>

                            <div className="btn-toolbar" data-role="editor-toolbar" data-target="#resume-content">
                                <div className="btn-group">
                                    <a className="btn" data-edit="bold" title="" data-original-title="Bold (Ctrl/Cmd+B)"><i className="fa fa-bold"></i></a>
                                    <a className="btn" data-edit="italic" title="" data-original-title="Italic (Ctrl/Cmd+I)"><i className="fa fa-italic"></i></a>
                                </div>
                                <div className="btn-group">
                                    <a className="btn" data-edit="insertunorderedlist" title="" data-original-title="Bullet list"><i className="fa fa-list-ul"></i></a>
                                    <a className="btn" data-edit="insertorderedlist" title="" data-original-title="Number list"><i className="fa fa-list-ol"></i></a>
                                </div>
                                <div className="btn-group">
                                    <a className="btn" data-edit="justifyleft" title="" data-original-title="Align Left (Ctrl/Cmd+L)"><i className="fa fa-align-left"></i></a>
                                    <a className="btn" data-edit="justifycenter" title="" data-original-title="Center (Ctrl/Cmd+E)"><i className="fa fa-align-center"></i></a>
                                    <a className="btn" data-edit="justifyright" title="" data-original-title="Align Right (Ctrl/Cmd+R)"><i className="fa fa-align-right"></i></a>
                                </div>
                                <div className="btn-group">
                                    <a className="btn dropdown-toggle" data-toggle="dropdown" title="" data-original-title="Hyperlink"><i className="fa fa-link"></i></a>
                                    <div className="dropdown-menu input-append">
                                        <input className="form-control pull-left" placeholder="http://" type="text" data-edit="createLink"/>
                                        <button className="btn btn-primary" type="button">Add</button>
                                    </div>
                                    <a className="btn" data-edit="unlink" title="" data-original-title="Remove Hyperlink"><i className="fa fa-unlink"></i></a>
                                </div>
                                <input type="text" data-edit="inserttext" id="voiceBtn" style={{display: 'none'}}/>
                            </div>

                            <div className="editor" id="resume-content" contenteditable="true">Write something about yourself...</div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <hr className="dashed"/>
                    </div>
                </div>
                <div className="row social-network">
                    <div className="col-sm-6">
                        <div className="form-group" id="resume-social-network-group">
                            <label htmlFor="resume-social-network">Choose Social Network</label>
                            <select  className="form-control" id="resume-social-network" valueLink={this.linkState('social')} >
                                <option>Choose social network</option>
                                <option>Facebook</option>
                                <option>Twitter</option>
                                <option>Google+</option>
                                <option>LinkedIn</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group" id="resume-social-network-url-group">
                            <label htmlFor="resume-social-network-url">URL</label>
                            <input type="text" className="form-control" id="resume-social-network-url" placeholder="http://"/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <hr className="dashed"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <p><a id="add-social-network">+ Add Social Network</a></p>
                        <hr/>
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-12">
                        <p>&nbsp;</p>
                        <h2>Experience</h2>
                    </div>
                </div>
                <CandidateExperience/>
                <div className="row">
                    <div className="col-sm-12">
                        <hr className="dashed"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <p><a id="add-experience">+ Add Experience</a></p>
                        <hr/>
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-12">
                        <p>&nbsp;</p>
                        <h2>Education</h2>
                    </div>
                </div>
                <CandidateEducation />
                <div className="row">
                    <div className="col-sm-12">
                        <hr className="dashed"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <p><a id="add-education">+ Add Education</a></p>
                        <hr/>
                    </div>
                </div>


                <div className="row text-center">
                    <div className="col-sm-12">
                        <p>&nbsp;</p>
                        <a href="#" className="btn btn-primary btn-lg">Save <i className="fa fa-arrow-right"></i></a>
                    </div>
                </div>

            </form>

        </div>
    );
  }

});



module.exports = CandidateProfileEdit;
