var React  = require('react');
var DashboardEmployer = require('./DashboardEmployer');
var DashboardCandidate = require('./DashboardCandidate');
var AuthStore = require('../stores/auth-store');
var Navigation = require('react-router').Navigation;



var Dashboard = React.createClass({
  mixins: [Navigation],

  render: function () {
    console.log("Being rendered...")

    var type = "E";
    var dashboard;
    var user = AuthStore.getSignedInUser();

    console.log(user)

    if(user && user.type === 'E'){
        dashboard = <DashboardEmployer />;
    }
    if(user && user.type === 'C'){

        dashboard = <DashboardCandidate />;
    }

    return (
        <div>
            {dashboard}
        </div>
    );
  }
});

module.exports = Dashboard;
