const React  = require('react');
const DashboardEmployer = require('./DashboardEmployer');
const DashboardCandidate = require('./DashboardCandidate');

const Dashboard = React.createClass({
  render: function () {
    const {user} = this.props
    return (user.type === 'E') ? <DashboardEmployer /> : <DashboardCandidate />
  }
});

module.exports = Dashboard;
