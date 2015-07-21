const React = require('react')
const {Navigation} = require('react-router')
const moment = require('moment')

const employmentTypes = {
  F: 'Full Time',
  P: 'Part Time',
  H: 'Hourly',
}

const cut = function(x, str) {
  return str.length < 140 ? str : str.substr(0, 135) + "..."
}

const JobOffer = React.createClass({
  mixins: [Navigation],

  handleClick() {
    this.transitionTo('/listing/detail/' + this.props.data.id);
  },

  render: function () {
      const data = this.props.data
      const fromNow = moment(data.created_at).fromNow()
      const employmentType = employmentTypes[data.job_type] || 'Unknown'

      return (
          <div onClick={this.handleClick} className="job row">
            <div className="col-sm-3 col-md-2">
              <img style={{width: 70, height: 70}} src={data.Business.business_logo} alt={data.job_description} className="img-circle" />
              <div>{data.Business.business_name}</div>
            </div>
            <div className="col-sm-6 col-md-7">
              <div className="title">
                  <h5>{data.job_title}</h5>
                  <p>{cut(145, data.job_description)}</p>
              </div>
            </div>
            <div className="col-xs-3">
              <div className="data">
                  <div>{"Posted "+fromNow}</div>
                  <div className="city"><i className="fa fa-map-marker" />{data.Business.business_city}</div>
                  <div className="type full-time"><i className="fa fa-clock-o" />{employmentType}</div>
                  <div className="sallary"><i className="fa fa-dollar" />{data.job_compensation}</div>
              </div>
            </div>
          </div>
      );
    },

});


module.exports = JobOffer;
