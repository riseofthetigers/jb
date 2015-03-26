
var Navbar = React.createClass({
  render: function () {
    return (
      <div className="navbar navbar-default navbar-static-top">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">Brand</a>
          </div>
          <div className="collapse navbar-collapse">
            <ul className="nav navbar-nav">
              <li className="active"><a href="#">Home</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li><a href="#about">About</a></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Navbar;
