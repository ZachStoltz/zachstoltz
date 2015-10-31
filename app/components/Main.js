let React = require('react');
let ReactDOM = require('react-dom');
let Nav = require('./layout/Nav');
let About = require('./About')

let Main = React.createClass({
  render:function(){
    return(
      <div>
        <Nav />
        <About />
      </div>
    );
  }
});

ReactDOM.render(<Main />, document.body);
