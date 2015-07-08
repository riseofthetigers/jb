var React  = require('react');
var JobListing = require('./JobsListing');
var Home = React.createClass({
  render: function () {
    return (
      <JobListing />
    );
  }
});

module.exports = Home;
