let React = require('react');
let ReactDOM = require('react-dom');

var Main = React.createClass({
  render:function(){
    return(
      <div>
        Testing
      </div>
    );
  }
});

ReactDOM.render(<Main />, document.body);
