var Navbar = require('./Navbar.js');

var App = React.createClass({
  render: function () {
    return (
      <div className="app-wrapper">
        <Navbar />
        <div className="container">
          <div className="text-center">
            <h1>
              Bootstrap starter template
            </h1>
            <p className="lead">
              Use this document as a way to quickly start any new project.<br /> All you get is this text and a mostly barebones HTML document.
            </p>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = App;
