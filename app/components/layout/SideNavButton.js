let React = require('react');
let reactDOM = require('react-dom');

module.exports = React.createClass({
  componentDidMount: function(){
    $(reactDOM.findDOMNode(this)).sideNav();
  },
  render: function(){
    return(
      <a href="#" data-activates="mobile-nav" className="button-collapse">
        <i className="material-icons">menu</i>
      </a>
    );
  }
});
