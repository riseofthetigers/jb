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

const Dashboard = require('./components/Dashboard');
const JobsListing = require('./components/JobsListing');
const ListingDetail = require('./components/ListingDetail')
const CandidateView = require('./components/CandidateView')
const CandidateProfileEdit = require('./components/CandidateProfileEdit')

const ContactUs = require('./components/ContactUs');
const About = require('./components/About');

const AuthStore = require('./stores/auth-store')


const NeedLogin = React.createClass({
  mixins: [Navigation, State],

  loadState() {
    return {
      isLoggedIn: AuthStore.isAuthenticated(),
      currentRoute: this.getPathname() // Or .getPath, not sure yet
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
    AuthStore.on('change', this.update)
    this.componentWillUpdate(this.props, this.state)
  },

  render: function() {
    return <RouteHandler />
  }
})

var routes = (
  <Route path="/" handler={App}>
    <DefaultRoute handler={Landing} />
    <Route name="landing" path="/" handler={Landing} />
    <Route name="createlisting" path='/createlisting' handler={CreateListing}/>
    <Route name="home" path='/home' handler={Home}/>
    <Route name="login" path='/login' handler={Login}/>
    <Route name="search" path='/search' handler={Search} />
    <Route name="search_page" path="/search/:page" handler={Search} />
    <Route name="signup" path='/signup' handler={Signup}/>
    <Route name='jobslisting' path='/jobs' handler={JobsListing}/>

    <Route name="contactus" path="/contactus" handler={ContactUs} />
    <Route name="about" path="/about" handler={About} />

    <Route name="needslogin" path="/" handler={NeedLogin}>
      <Route name='dashboard' path='/dashboard' handler={Dashboard}/>
      <Route name="listing_details" path="/listing/detail/:id" handler={ListingDetail} />
      <Route name="profile_view" path="/profile/view" handler={CandidateView} />
      <Route name="profile_edit" path="/profile/edit" handler={CandidateProfileEdit} />
    </Route>
  </Route>

);

module.exports = routes;
