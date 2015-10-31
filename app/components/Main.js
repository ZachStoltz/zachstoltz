import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './layout/Nav';
import About from './About';


class Main extends React.Component{
  render(){
    return(
      <div>
        <Nav />
        <About />
      </div>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById('app'));
