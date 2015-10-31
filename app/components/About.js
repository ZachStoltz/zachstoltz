let React = require('react');
let CircleImg = require('./CircleImg');
let InfoBox = require('./InfoBox');

module.exports = React.createClass({
  render: function(){
    return (
      <div>
        <InfoBox />
      </div>
    );
  }
});

// <CircleImg src="public/img/us.jpg"/>
