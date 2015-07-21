const React = require('react')
const {Navigation} = require('react-router')
const moment = require('moment')

const employmentTypes = {
  F: 'Full Time',
  P: 'Part Time',
  H: 'Hourly',
}

const JobOffer = React.createClass({
  mixins: [Navigation],

  handleClick() {
    this.transitionTo('/listing/detail/' + this.props.data.id);
  },

  render: function () {
      const data = this.props.data
      const fromNow = moment(data.created_at).fromNow()
      const employmentType = employmentTypes[data.employment_type] || 'Unknown'

      return (
          <div onClick={this.handleClick} className="job">
              <img style={{width: 90, height: 90}} src={data.photo_url} alt={data.job_description} className="img-circle" />
              <div className="title">
                  <h5>{data.job_title}</h5>
                  <p>{data.Business.business_name}</p>
              </div>
              <div className="data">
                  <div>{"Posted "+fromNow}</div>
                  <div className="city"><i className="fa fa-map-marker" />{data.Business.business_city}</div>
                  <div className="type full-time"><i className="fa fa-clock-o" />{employmentType}</div>
                  <div className="sallary"><i className="fa fa-dollar" />{data.job_compensation}</div>
              </div>
          </div>
      );
    },

});


module.exports = JobOffer;
