var React  = require('react');
var MyListings = require('./MyListings');
var DashboardEmployer = React.createClass({
  render: function () {
    return (
        <div>
            <h2>Dashboard EMPLOYER</h2>
            <MyListings />
        </div>

    );
  }
});

module.exports = DashboardEmployer;
