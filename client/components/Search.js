const React  = require('react');
const Dispatcher = require('../dispatchers/app-dispatcher')
const ListingStore = require('../stores/listing-store');
const ListingActions = require('../actions/listing-actions')
const assign = require('react/lib/Object.assign');

const JobOffer = require('./JobOffer');


const Options = React.createClass({
  getInitialState() {
    return {
      filter: this.props.options.reduce((obj, option) => {
        obj[option.value] = false
        return obj
      }, {})
    }
  },

  handleChange(e) {
    const {checked, value} = e.target
    var {filter} = this.state
    filter[value] = checked
    this.setState({filter})
    this.props.onChange(filter)
  },

  render() {
    const {options, title} = this.props
    const {filter} = this.state

    const optionsRendered = options.map(option =>
      <div className="checkbox" key={option.value}>
        <label>
          <input type="checkbox" checked={filter[option.value]} value={option.value} onChange={this.handleChange} />
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



const Search = React.createClass({
  loadState() {
    return {
      listings: ListingStore.getListings(),
      filter: ListingStore.getFilter()
    }
  },

  getInitialState() {
    return this.loadState()
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
      Dispatcher.callAction(ListingActions.getListings, filter)
    })
  },

  render() {
      const {listings} = this.state
      const Content = (listings.length === 0) ?
                      <h1>There is no listings in the database</h1> :
                      listings.map(listing => <JobOffer key={listing.id} data={listing} />)

      const availableOptions = [{
        value: 'F',
        title: 'Full Time'
      }, {
        value: 'P',
        title: 'Part Time'
      }, {
        value: 'H',
        title: 'Hourly'
      }]

      const cityOptions = [{
        title: 'New York',
        value: 'new york'
      }, {
        title: 'San Fransisco',
        value: 'san fransisco'
      }, {
        title: 'Boston',
        value: 'boston'
      }]

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
                      <Options title="Availability" options={availableOptions} onChange={this.update('employment_type')} />
                      <Options title="Location" options={cityOptions} onChange={this.update('Business.business_city')} />

                      <hr />

                      <div className="row">
                        <div className="col-xs-12">
                          <a className="btn btn-primary">Reset All Filters</a>
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
