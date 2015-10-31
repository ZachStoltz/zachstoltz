let React = require('react');
let ReactDOM = require('react-dom');

module.exports = React.createClass({
  render: function(){
    return(
      <img src={this.props.src} className="responsive-img circle" />
    );
  }
});
