const React  = require('react');
const Dispatcher = require('../dispatchers/app-dispatcher')
const ListingStore = require('../stores/listing-store');
const ListingActions = require('../actions/listing-actions')
const assign = require('react/lib/Object.assign');

const JobOffer = require('./JobOffer');


const Options = React.createClass({
  componentDidMount() {
    const {value, onChange, options} = this.props
    if(!value) {
      const filter = options.reduce((obj, option) => {
        obj[option.value] = false
        return obj
      }, {})
      onChange(filter)
    }
  },

  handleChange(e) {
    const {checked, value} = e.target
    var filter = this.props.value
    filter[value] = checked
    this.props.onChange(filter)
  },

  render() {
    const {options, title} = this.props
    const value = this.props.value || {}

    const optionsRendered = options.map(option =>
      <div className="checkbox" key={option.value}>
        <label>
          <input type="checkbox" checked={value[option.value]} value={option.value} onChange={this.handleChange} />
          {option.title}
        </label>
      </div>
    )

    return (
      <div className="col-xs-6">
        <h5>{title}</h5>
        {optionsRendered}
      </div>
    )
  }
})


const optionsToFilter = function(options) {
  return options.reduce((obj, option) => {
    obj[option.value] = false
    return obj
  }, {})
}

const Search = React.createClass({
  availableOptions: [
    {value: 'F', title: 'Full Time'},
    {value: 'P', title: 'Part Time'},
    {value: 'H', title: 'Hourly'}
  ],
  cityOptions: [
    {title: 'New York', value: 'new york'},
    {title: 'San Fransisco', value: 'san fransisco'},
    {title: 'Boston', value: 'boston'}
  ],

  loadState() {
    return {
      listings: ListingStore.getListings(),
    }
  },

  getInitialState() {
    return assign({
      filter: {
        'Business.business_city': optionsToFilter(this.cityOptions),
        'job_type': optionsToFilter(this.availableOptions)
      }
    }, this.loadState())
  },
  _onChange : function(){ this.setState(this.loadState()); },

  componentDidMount() {
    ListingStore.on('change', this._onChange)
    Dispatcher.callAction(ListingActions.getListings)
  },
  componentWillUnmount: function() {
    ListingStore.removeListener('change', this._onChange);
  },

  update(key) {
    return (checked => {
      var {filter} = this.state
      filter[key] = checked
      this.setState({filter})
      Dispatcher.callAction(ListingActions.getListings, filter)
    })
  },

  clearFilter() {
    const filter = {
      'Business.business_city': optionsToFilter(this.cityOptions),
      'job_type': optionsToFilter(this.availableOptions)
    }
    this.setState({filter})
    Dispatcher.callAction(ListingActions.getListings, filter)
  },

  render() {
      const {listings, filter} = this.state
      const Content = (listings.length === 0) ?
                      <h1>There is no listings in the database</h1> :
                      listings.map(listing => <JobOffer key={listing.id} data={listing} />)

      return (
        <div className="container">
            <div className="row">
                <div className="col-sm-8">
                    <div className="jobs">
                        {Content}
                    </div>
                </div>
                <div className="col-sm-4" id="sidebar">
                  <div className="sidebar-widget" id="jobsearch">
                    <h3>Filter</h3>
                    <form>
                      <Options title="Availability" options={this.availableOptions}
                               value={filter.job_type} onChange={this.update('job_type')} />
                      <Options title="Location" options={this.cityOptions}
                               value={filter['Business.business_city']} onChange={this.update('Business.business_city')} />

                      <hr />

                      <div className="row">
                        <div className="col-xs-12">
                          <a className="btn btn-primary" onClick={this.clearFilter}>Reset All Filters</a>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
            </div>
        </div>
      );
  }

});

module.exports = Search;
