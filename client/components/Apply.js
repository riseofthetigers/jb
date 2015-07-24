import React from 'react'
import assign from 'react/lib/Object.assign'

import ListingStore from '../stores/listing-store'
import CandidateStore from '../stores/candidate-store'
import ApplicationStore from '../stores/application-store'

import Dispatcher from '../dispatchers/app-dispatcher'
import ListingActions from '../actions/listing-actions'
import CandidateActions from '../actions/candidate-actions'
import ApplicationActions from '../actions/application-actions'
import NotificationActions from '../actions/notifications-actions'

import { ApplyContainer, ApplyInput, ApplyField, ApplyRadio } from './reusableForm'
import connectToStores from '../utils/connectToStores'
import {Navigation} from 'react-router'

let JobInfo = React.createClass({
  componentDidMount() {
    Dispatcher.callAction(ListingActions.getListingById, this.props.id);
  },

  render() {
    const {user, listing} = this.props
    return (
      <div className="row text-center">
        <div className="col-sm-12">
          <h1>{listing.job_title} - {listing.Business.business_name}</h1><br />
        </div>
        <div className="col-md-4 col-md-offset-2">
          <img style={{width: 200, height: 200}} src="images/person3.jpg" /><br />
          <h4>{listing.Business.business_hiring_manager}</h4>
        </div>
        <div className="col-md-4">
          <img style={{width: 200, height: 200}} src="images/person4.jpg" />
          <h4>{user.name}</h4>
        </div>
        <div className="col-sm-12"><h3>Apply to this job</h3></div>
        {/*
        <div className="col-sm-4 col-sm-offset-4">
          <div className="progress">
            <div className="progress-bar progress-bar-success progress-bar-striped" role="progressbar" aria-valuenow={40} aria-valuemin={0} aria-valuemax={100} style={{width: '40%'}}>
              40%
            </div>
          </div>
        </div>
        */}
      </div>
    )
  }
})
JobInfo = connectToStores(JobInfo, [ListingStore], props =>({
  listing: ListingStore.getCurrentListing()
}))

const SingleFieldThing = React.createClass({
  // Think about something with <label htmlFor={xxx}> ?
  input({title, placeholder, name}) {
    const {change, props: {value}} = this
    return (
      <div className="col-sm-6" key={name}>
          <div className="form-group">
              <label>{title}</label>
              <ApplyInput value={value[name]} onChange={change(name)} placeholder={placeholder} />
          </div>
      </div>
    )
  },

  change(prop) {
    return (newValue) => {
      const {value, onChange} = this.props
      onChange(assign({}, value, { [prop]: newValue }))
    }
  },

  render() {
    return (
      <div className="row">
        {this.props.fields.map(this.input)}
      </div>
    )
  }
})

const MultipleFieldThing = React.createClass({
  addField() {
    Dispatcher.callAction(CandidateActions.addProfileField, this.props.name)
  },

  change(index) {
    return (newValue) => {
      const {value, onChange} = this.props
      let newArray = value.slice()
      newArray[index] = newValue
      onChange(newArray)
    }
  },

  render() {
    const experiences = this.props.value.map( (value, index) => {
      return <SingleFieldThing key={index} fields={this.props.fields} value={value} onChange={this.change(index)} />
    })

    return (
      <div>
        <h2>{this.props.title}</h2>
        {experiences}
        <p><a onClick={this.addField}>+ Add {this.props.title}</a></p>
      </div>
    )
  }
})

let ApplyForm = React.createClass({
  mixins: [Navigation],
  /* Still need these maybe
     - social
     - title
     - candidate_picture
     Make these readonly?
     - name (Already in the original profile)
     - birthday (Also shouldn't be different really xd)
  */

  componentDidMount() {
    Dispatcher.callAction(CandidateActions.getUserProfile, this.props.user.id)
  },

  change(prop) {
    return value => {
      if(prop === 'availability') {
        const newProfile = assign({}, this.props.application, { [prop]: value })
        Dispatcher.callAction(ApplicationActions.updateApplication, newProfile)
      } else {
        const newProfile = assign({}, this.props.profile, { [prop]: value })
        Dispatcher.callAction(CandidateActions.updateProfile, newProfile)
      }
    }
  },

  nativeChange(prop) {
    const fn = this.change(prop)
    return function(e) {
      return fn(e.target.value)
    }
  },

  // Yeah, I am frustrated by this huge form
  // but also very happy I finally got it in react all with ONE STATE
  // (And so the ability to move it to even less states)
  subFuckingMit() {
    const {profile, application, params} = this.props
    const jobId = params.id
    Dispatcher.callAction(ApplicationActions.sendApplication, profile, application, jobId)
    .then(() => { // I shouldn't add a callback directly, I think :/
      Dispatcher.callActions(NotificationActions.addNotification, "You applied to the job!")
      this.transitionTo("/dashboard")
    }).catch(err => {
      Dispatcher.callAction(NotificationActions.addNotification, err.data.message, 'danger')
    })
  },

  render: function() {
    // For the addable form groups
    const experienceFields = [
      { title: 'Employer', placeholder: "Company name", name: 'employer' },
      { title: 'Start/End Date', placeholder: "e.g. April 2010 - June 2013", name: 'start_end' },
      { title: 'Job Title', placeholder: "e.g. Cashier", name: 'job_title' },
      { title: 'Responsibilities', placeholder: "e.g. Developing new websites", name: 'responsabilities' }
    ]

    const educationFields = [
      { title: 'School Name', placeholder: "School name, city and country", name: 'school' },
      { title: 'Start/End Date', placeholder: "e.g. April 2010 - June 2013", name: 'start_end' },
      { title: 'Qualifications', placeholder: "e.g. Master Engineer", name: 'qualifications' },
      { title: 'Notes', placeholder: "Any achievements", name: 'notes' }
    ]

    const jobId = this.props.params.id
    const {email, phone_number, address, state, skills, education,
           authorized, criminal, headline, criminal_description, experience} = this.props.profile
    const {availability} = this.props.application
    const {change, nativeChange} = this

    return (
      <div className="container" style={{maxWidth: 700}}>
        <JobInfo id={jobId} user={this.props.user} />
        <div className="row">
          <div className="col-sm-12">
            <ApplyContainer title="Tagline">
              <h6>In 150 characters or less, tell us why you would be good for this job</h6>
              <h6><ApplyInput placeholder="I've been a barista for 4 yrs!" value={headline} onChange={change('headline')} /></h6>
            </ApplyContainer>

            <ApplyField title="Email" placeholder="you@yourdomain.com" value={email} onChange={change('email')} />
            <ApplyField title="Phone number" placeholder="e.g. 555 555 55555" value={phone_number} onChange={change('phone_number')} />
            <ApplyField title="Address" placeholder="e.g. 123 Hope Ave" value={address} onChange={change('address')} />
            <ApplyField title="State" placeholder="e.g. Massachusetts" value={state} onChange={change('state')} />

            <ApplyContainer title="Availability">
              <select className="form-control" value={availability} onChange={nativeChange('availability')}>
                <option value='I'>Times posted by HM for job</option>
                <option value='P'>Part Time</option>
                <option value='F'>Full Time</option>
              </select>
            </ApplyContainer>

            <ApplyField title="Skills" placeholder="What are you good at?" value={skills} onChange={change('skills')} />

            <ApplyContainer title="Are you authorized to work in US?">
              <ApplyRadio yes="I am authorized to work in US" no="I am not authorized to work in US"
                          value={authorized} onChange={change('authorized')} />
            </ApplyContainer>

            <div className="form-group" id="job-criminal-group">
              <h5 htmlFor="job-authorize">Any criminal offenses?</h5>
              <ApplyRadio yes="Yes" no="No" onChange={change('criminal')} value={criminal} />
              { criminal && (
                <div>
                  <p>Please tell us what happened and when it happened?</p>
                  <ApplyInput placeholder="Don't worry, this will not disqualify you.." value={criminal_description} onChange={change('criminal_description')} />
                </div>
              )}
            </div>

            {/* Experience Start */}
            <MultipleFieldThing title="Experience" fields={experienceFields} name="experience"
                                value={experience} onChange={change('experience')} />
            <hr />
            <MultipleFieldThing title="Education" fields={educationFields} name="education"
                                value={education} onChange={change('education')} />

            {/* Resume File Start */}
            {/* Will make resume working later... maybe
            <h5>Resume File</h5>
            <div className="form-group" id="resume-file-group">
              <label htmlFor="resume-file">Upload Your Resume</label>
              <input type="file" id="resume-file" />
              <p className="help-block">Optionally upload your resume for employers to view. Max. file size: 64 MB.</p>
            </div>
            */}
            {/* Resume File End */}

            <div className="row text-center">
              <div className="col-sm-4 col-sm-offset-6">
                <p>&nbsp;</p>
                <a onClick={this.subFuckingMit} className="btn btn-primary btn-lg">Apply <i className="fa fa-arrow-right" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

ApplyForm = connectToStores(ApplyForm, [CandidateStore, ApplicationStore], props =>({
  profile: CandidateStore.get(),
  application: ApplicationStore.get()
}))

module.exports = ApplyForm
