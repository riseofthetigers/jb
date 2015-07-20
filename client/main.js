const React = require('react')
const Router = require('react-router');
const routes = require('./routes.js');

/*
Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.body);
});
*/

Router.run(routes, Router.HistoryLocation, function (Handler) {
  React.render(<Handler/>, document.getElementById('jobletics'));
});
