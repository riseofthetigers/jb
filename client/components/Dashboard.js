var React  = require('react');
var DashboardEmployer = require('./DashboardEmployer');
var DashboardCandidate = require('./DashboardCandidate');
var AuthStore = require('../stores/auth-store');
var Navigation = require('react-router').Navigation;



var Dashboard = React.createClass({
  mixins: [Navigation],

  componentDidMount() {
    var user = AuthStore.getSignedInUser();
    if(!user){
        this.transitionTo('/login?next=/dashboard');
        return;
    }

  },

  render: function () {

    var type = "E";
    var dashboard;
    var user = AuthStore.getSignedInUser();

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
