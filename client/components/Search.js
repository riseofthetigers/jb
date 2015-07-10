var React  = require('react');
var JobsListing = require('./JobsListing');

var Search = React.createClass({
  render: function () {
    return (
      <JobsListing currentPage={this.props.params.page} />
    );
  }
});

module.exports = Search;

