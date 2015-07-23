// React
const React = require("react");
const {RouteHandler, DefaultRoute, NotFoundRoute, Route, Navigation, State}  = require("react-router");

const App = require('./components/App.js');
const CreateListing = require('./components/CreateListing.js');
const Home = require('./components/Home.js');
const Landing = require('./components/Landing.js');
const Login = require('./components/Login.js');
const Search = require('./components/Search');
const Signup = require('./components/Signup');
import Apply from './components/Apply'

const Dashboard = require('./components/Dashboard');
const JobsListing = require('./components/JobsListing');
const ListingDetail = require('./components/ListingDetail')
const CandidateView = require('./components/CandidateView')
const CandidateProfileEdit = require('./components/CandidateProfileEdit')

const ContactUs = require('./components/ContactUs');
const About = require('./components/About');

const Dispatcher = require('./dispatchers/app-dispatcher')
const AuthStore = require('./stores/auth-store')
const AuthenticationActions = require('./actions/auth-actions')

const NeedLogin = React.createClass({
  mixins: [Navigation, State],

  loadState() {
    return {
      isLoggedIn: AuthStore.isAuthenticated(),
      currentRoute: this.getPathname(), // Or .getPath, not sure yet
      user: AuthStore.getUser()
    }
  },

  getInitialState() { return this.loadState() },
  update() { this.setState(this.loadState()) },
  componentWillUpdate(nextProps, nextState) {
    if(!nextState.isLoggedIn)
      this.transitionTo('/login?next='+nextState.currentRoute)
  },
  componentWillUnmount() { AuthStore.removeListener('change', this.update) },
  componentDidMount() {
    Dispatcher.callAction(AuthenticationActions.verifyLogin)
    AuthStore.on('change', this.update)
    this.componentWillUpdate(this.props, this.state)
  },

  render: function() {
    return (this.state.user !== null) ? <RouteHandler user={this.state.user} /> : null
  }
})

var routes = (
  <Route path="/" handler={App}>
    <DefaultRoute handler={Landing} />
    <Route name="landing" path="/" handler={Landing} />
    <Route name="createlisting" path='/createlisting' handler={CreateListing}/>

    <Route name="signup" path='/signup' handler={Signup}/>
    <Route name="login" path='/login' handler={Login}/>

    <Route name="search" path='/search' handler={Search} />
    <Route name="search_page" path="/search/:page" handler={Search} />
    <Route name="listing_details" path="/job/:id" handler={ListingDetail} />

    <Route name='jobslisting' path='/jobs' handler={JobsListing}/>

    <Route name="contactus" path="/contactus" handler={ContactUs} />
    <Route name="about" path="/about" handler={About} />

    <Route name="needslogin" path="/" handler={NeedLogin}>
      <Route name='dashboard' path='/dashboard' handler={Dashboard}/>
      <Route name="profile_view" path="/profile/view" handler={CandidateView} />
      <Route name="profile_edit" path="/profile/edit" handler={CandidateProfileEdit} />
      <Route name="apply" path="/job/:id/apply" handler={Apply} />
    </Route>
  </Route>

);

module.exports = routes;
